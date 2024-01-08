import React, { useState } from "react";
import Layout from "@/components/layout/layout";
import Introbanner from "@/components/introbanner";
import Pinneditems from "@/components/pinneditems";
import Topcontributors from "@/components/topcontributors";
import Unansweredtopics from "@/components/unansweredtopics";
import MessageBoardTable from "@/components/messageboardtable";
import MessageBoardGrid from "@/components/messageboardgrid";
import fetchAPI from '@/service/api/fetchAPI'
import { useEffect } from "react";
import LogoutRedirect from "@/pages/logoutRedirect";
import Loader from "@/components/loader";
import DiscussionDetails from '@/pages/website/messageboard/discussiondetails'

export default function Index() {

  const [showMessageGrid, setShowMessageGrid] = useState(1);
  const [PinnedLoading, setPinnedLoading] = useState(false);
  const [PinnedList, setPinnedList] = useState([]);
  const [PinnedUpdated, setPinnedUpdated] = useState(false);
  const [TopicLoading, setTopicLoading] = useState(false);
  const [TopicList, setTopicList] = useState([]);
  const [TopicUpdated, setTopicUpdated] = useState(false);
  const [TopContributorLoading, setTopContributorLoading] = useState(false);
  const [TopContributor, setTopContributor] = useState([]);
  const [UnansweredLoading, setUnansweredLoading] = useState(false);
  const [Unanswered, setUnanswered] = useState([]);

  const [post_id, setPost_id] = useState('')

  useEffect(() => {
    setPost_id('')
  }, [])

  const [ShowDiscussionDetail, setShowDiscussionDetail] = useState(false)

  const GetPinnedList = async () => {
    setPinnedLoading(true)
    try {
      await fetchAPI(`/messageboard/topicview/pinnedunpinnedtopic/list`, 'POST',)
        .then((response) => {
          response?.rows && setPinnedList(response?.rows)
          setPinnedLoading(false)
          setPinnedUpdated(false)
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }


  // paginator for latest topic starts
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [pagination, setPagination] = useState(0);

  const onPageChange = (event) => {
    setCurrentPage(event.page + 1);
    setPagination(event.first);
  };
  //paginator for latest topic ends

  const GetLatestList = async () => {
    setTopicLoading(true)
    let data = {
      "page": currentPage,
      "limit": pageSize,
      "search": ""

    }
    try {
      await fetchAPI(`/messageboard/posts/list`, 'POST', data, 'application/json',)
        .then((response) => {
          response?.rows && setTopicList(response?.rows)
          setTotalRecords(response?.count)
          setTopicLoading(false)
          setTopicUpdated(false)
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }
  const GetTopContributor = async () => {
    setTopContributorLoading(true)

    let data = {
      "page": 1,
      "limit": 10
    }
    try {
      await fetchAPI(`/messageboard/posts/topcontibotor`, 'POST', data, 'application/json')
        .then((response) => {
          response && setTopContributor(response)
          setTopContributorLoading(false)
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }
   // paginator for unanswered topic starts
   const [unansweredtotalRecords, setunansweredTotalRecords] = useState(0);
   const [unansweredcurrentPage, setunansweredCurrentPage] = useState(1);
   const [unansweredpageSize, setunansweredPageSize] = useState(5);
   const [unansweredpagination, setunansweredPagination] = useState(0);
 
   const unansweredonPageChange = (event) => {
     setunansweredCurrentPage(event.page + 1);
     setunansweredPagination(event.first);
   };
   //paginator for latest topic ends

  const GetUnanswered = async () => {
    setUnansweredLoading(true)
    let data = {
      "page": unansweredcurrentPage,
      "limit": unansweredpageSize
    }
    try {
      await fetchAPI(`/messageboard/posts/unansweredtopics`, 'POST', data, 'application/json')
        .then((response) => {
          response?.rows && setUnanswered(response?.rows)
          setunansweredTotalRecords(response?.count)
          setUnansweredLoading(false)
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }

  useEffect(() => {
    GetPinnedList()
  }, [PinnedUpdated])
  useEffect(() => {
    GetLatestList()
  }, [PinnedUpdated, currentPage, pageSize])
  useEffect(() => {
    GetTopContributor()
  }, [])
  useEffect(() => {
    GetUnanswered()
  }, [unansweredcurrentPage])

  const handleShowMessageGrid = (index) => {
    setShowMessageGrid(index);
  }

  const [IsAuthenticated, setIsAuthenticated] = useState('')

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem('IsAuthenticated'))
  }, [])
  return (
    <>
      {IsAuthenticated == 'true' ? <Layout pageClass="pg-message-board" pageTitle={ShowDiscussionDetail ? "Discussion detail" : "Message board"}>
        {!ShowDiscussionDetail ? <div className="px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[80px] xl:pt-[2.604vw] pb-6 xl:pb-[1.25vw]">
          <div className="xl:max-w-[88.3025vw] mx-auto">
            <Introbanner handleShowMessageGrid={handleShowMessageGrid} />
            <div className="mt-[50px] xl:mt-[2.604vw]">
              <Pinneditems
                PinnedLoading={PinnedLoading}
                PinnedList={PinnedList}
                setPinnedUpdated={setPinnedUpdated}
                setPinnedLoading={setPinnedLoading}
                setPost_id={setPost_id}
                setShowDiscussionDetail={setShowDiscussionDetail}
              />
            </div>
            <div className="mt-[50px] xl:mt-[4vw]">
              {showMessageGrid == 0 ?
                <MessageBoardGrid
                  setPinnedLoading={setPinnedLoading}
                  TopicLoading={TopicLoading}
                  TopicList={TopicList}
                  setPinnedUpdated={setPinnedUpdated}
                  pagination={pagination}
                  pageSize={pageSize}
                  totalRecords={totalRecords}
                  onPageChange={onPageChange}
                  setPost_id={setPost_id}
                  setShowDiscussionDetail={setShowDiscussionDetail}
                />
                :
                <MessageBoardTable
                  TopicLoading={TopicLoading}
                  TopicList={TopicList}
                  pagination={pagination}
                  pageSize={pageSize}
                  totalRecords={totalRecords}
                  onPageChange={onPageChange}
                  setPost_id={setPost_id}
                  setShowDiscussionDetail={setShowDiscussionDetail}
                />
              }
            </div>
            <div className="mt-[50px] xl:mt-[3.34vw]">
              <div className="grid grid-cols-12 gap-[53px] xl:gap-[2.760vw]">
                <Topcontributors
                  TopContributor={TopContributor}
                  TopContributorLoading={TopContributorLoading} />
                <Unansweredtopics
                  Unanswered={Unanswered}
                  UnansweredLoading={UnansweredLoading}
                  unansweredpagination={unansweredpagination}
                  unansweredpageSize={unansweredpageSize}
                  unansweredtotalRecords={unansweredtotalRecords}
                  unansweredonPageChange={unansweredonPageChange}
                />
              </div>
            </div>
          </div>
        </div> :
          <DiscussionDetails post_id={post_id} setShowDiscussionDetail={setShowDiscussionDetail} />
        }
      </Layout> : IsAuthenticated == '' ? <Loader /> : <LogoutRedirect />}
    </>
  );
}
