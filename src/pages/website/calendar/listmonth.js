import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ListMonth = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <TabList>
          <div className="grid grid-cols-6">
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center
                   ${
                     activeTab == 0
                       ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                       : "text-[#9CA1AB] bg-[#F5F6F7]"
                   }`}
              >
                Jan / Feb
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center
                   ${
                     activeTab == 1
                       ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                       : "text-[#9CA1AB] bg-[#F5F6F7]"
                   }`}
              >
                Mar / Apr
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center
                   ${
                     activeTab == 2
                       ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                       : "text-[#9CA1AB] bg-[#F5F6F7]"
                   }`}
              >
                May / Jun
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center
                   ${
                     activeTab == 3
                       ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                       : "text-[#9CA1AB] bg-[#F5F6F7]"
                   }`}
              >
                Jul / Aug
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center
                   ${
                     activeTab == 4
                       ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                       : "text-[#9CA1AB] bg-[#F5F6F7]"
                   }`}
              >
                Sep / Oct
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center
                   ${
                     activeTab == 5
                       ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                       : "text-[#9CA1AB] bg-[#F5F6F7]"
                   }`}
              >
                Nov / Dec
              </div>
            </Tab>
          </div>
        </TabList>
        <div>
          <TabPanel>List (Month)</TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ListMonth;
