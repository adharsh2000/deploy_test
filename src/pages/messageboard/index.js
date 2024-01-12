import React, { useState, useRef } from "react";
import Layout from "@/components/layout/layout";
import Introbanner from "@/components/introbanner";
import Pinneditems from "@/components/pinneditems";
import Topcontributors from "@/components/topcontributors";
import Unansweredtopics from "@/components/unansweredtopics";
import MessageBoardTable from "@/components/messageboardtable";
import MessageBoardGrid from "@/components/messageboardgrid";
import fetchAPI from '@/service/api/fetchAPI'
import { useEffect } from "react";
import Loader from "@/components/loader";
import { Toast } from "primereact/toast";

export default function Index() {
  const toast = useRef(null);

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
  const [UpdateLatestPosts, setUpdateLatestPosts] = useState(false);
  const [UpdatePinUnpin, setUpdatePinUnpin] = useState(false);

  const [ShowDiscussionDetail, setShowDiscussionDetail] = useState(false)

  const GetPinnedList = async () => {
    setPinnedLoading(true)
    let data = {
      "userId": parseInt(sessionStorage.getItem('UserID'))
    }
    try {
      await fetchAPI(`/messageboard/topicview/pinnedunpinnedtopic/list`, 'POST', data, 'application/json')
        .then((response) => {
          response?.rows && setPinnedList(response?.rows)
          setPinnedLoading(false)
          setPinnedUpdated(false)
          setUpdatePinUnpin(false);
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

  const [SearchValue, setSearchValue] = useState('');

  const GetLatestList = async () => {
    setTopicLoading(true)
    let data = {
      "page": currentPage,
      "limit": pageSize,
      "search": SearchValue

    }
    try {
      await fetchAPI(`/messageboard/posts/list`, 'POST', data, 'application/json',)
        .then((response) => {
          response?.rows && setTopicList(response?.rows)
          setTotalRecords(response?.count)
          setTopicLoading(false)
          setTopicUpdated(false)
          setUpdateLatestPosts(false);
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }
  console.log(UpdateLatestPosts, SearchValue, "searchResp");
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
    sessionStorage.getItem('IsAuthenticated')&&GetPinnedList()
  }, [PinnedUpdated, UpdatePinUnpin])
  useEffect(() => {
    GetLatestList()
  }, [PinnedUpdated, currentPage, pageSize, UpdateLatestPosts])
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
      <Layout pageClass="pg-message-board" pageTitle={ShowDiscussionDetail ? "Discussion detail" : "Message board"}>
        <div className="px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[80px] xl:pt-[2.604vw] pb-6 xl:pb-[1.25vw]">
          <div className="xl:max-w-[88.3025vw] mx-auto">
            <Introbanner handleShowMessageGrid={handleShowMessageGrid}
              UpdateLatestPosts={UpdateLatestPosts}
              setUpdateLatestPosts={setUpdateLatestPosts}
              SearchValue={SearchValue}
              setSearchValue={setSearchValue} />
           {IsAuthenticated &&<div className="mt-[50px] xl:mt-[2.604vw]">
              <Pinneditems
                PinnedLoading={PinnedLoading}
                PinnedList={PinnedList}
                setPinnedUpdated={setPinnedUpdated}
                setPinnedLoading={setPinnedLoading}
              />
            </div>}
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
                />
                :
                <MessageBoardTable
                  TopicLoading={TopicLoading}
                  TopicList={TopicList}
                  pagination={pagination}
                  pageSize={pageSize}
                  totalRecords={totalRecords}
                  onPageChange={onPageChange}
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
        </div>
      </Layout>
      <Toast ref={toast}></Toast>
    </>
  );
}