import ReactEcharts from "echarts-for-react";
export default function PerformanceComponent() {
  const CustomerCountData1 = {
    label: [
      "All Subjects",
      "Social Studies",
      "Science",
      "Mathematics",
      "Reading",
    ],
    value: [
      {
        value: "71",
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 86,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 75,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 62,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },

      {
        value: 69,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
          height: "20px",
          itemHeight: "20px",
        },
      },
    ],
  };

  const CustomerCountData2 = {
    label: [
      "All Subjects",
      "Social Studies",
      "Science",
      "Mathematics",
      "Reading",
    ],
    value: [
      {
        value: 63,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 86,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 49,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 63,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },

      {
        value: 68,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
          height: "20px",
          itemHeight: "20px",
        },
      },
    ],
  };

  const CustomerCountData3 = {
    label: [
      "All Subjects",
      "Social Studies",
      "Science",
      "Mathematics",
      "Reading",
    ],
    value: [
      {
        value: 1,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 1,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 2,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 7,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },

      {
        value: 7,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
          height: "20px",
          itemHeight: "20px",
        },
      },
    ],
  };

  const CustomerCountData4 = {
    label: [
      "All Subjects",
      "Social Studies",
      "Science",
      "Mathematics",
      "Reading",
    ],
    value: [
      {
        value: 87,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 96,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 92,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },
      {
        value: 79,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
        },
      },

      {
        value: 84,
        itemStyle: {
          color: "#BC6D46",
          borderRadius: [0, 4, 4, 0],
          height: "20px",
          itemHeight: "20px",
        },
      },
    ],
  };

  const option1 = {
    legend: {
      show: false,
      icon: "roundRect",
      bottom: "0%",
      left: "0%",
      itemWidth: 10,
      itemHeight: 10,
    },
    grid: {
      top: "20",
      right: "20",
      bottom: "10",
      left: "20",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      data: CustomerCountData1.label,
      min: 0,
      // max: maxv,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#EAEDF3",
        },
      },
      axisLabel: {
        show: false,
        color: "#53565A",
        fontSize: 9,
        interval: 0,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: [
      {
        type: "category",
        interval: 10,
        axisLine: {
          show: false,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        data: CustomerCountData1.label,
        axisLabel: {
          color: "#53565A",
          show: true,
          lineHeight: 16,
          width: 70,
          fontSize: 9.5,
          overflow: "breakAll",
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: "dashed",
            color: "rgba(219, 212, 212, 1)",
          },
        },
      },
      {
        type: "category",
        data: CustomerCountData1.value,
        axisLabel: {
          color: "#53565A",
          formatter: "{value} %",
          show: true,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "Clean",
        type: "bar",
        stack: "total",
        color: "#FF8C38",
        barWidth: "80%",
        label: {
          show: false,
          color: "#53565A",
          position: "outside",
        },
        emphasis: {
          focus: "series",
        },
        data: CustomerCountData1.value,
      },
    ],
  };

  const option2 = {
    legend: {
      show: false,
      icon: "roundRect",
      bottom: "0%",
      left: "0%",
      itemWidth: 10,
      itemHeight: 10,
    },
    grid: {
      top: "20",
      right: "20",
      bottom: "10",
      left: "20",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      data: CustomerCountData1.label,
      min: 0,
      // max: maxv,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#EAEDF3",
        },
      },
      axisLabel: {
        show: false,
        color: "#53565A",
        fontSize: 9,
        interval: 0,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: [
      {
        type: "category",
        interval: 10,
        axisLine: {
          show: false,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        data: CustomerCountData1.label,
        axisLabel: {
          color: "#53565A",
          show: true,
          lineHeight: 16,
          width: 70,
          fontSize: 9.5,
          overflow: "breakAll",
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: "dashed",
            color: "rgba(219, 212, 212, 1)",
          },
        },
      },
      {
        type: "category",
        data: CustomerCountData1.value,
        axisLabel: {
          color: "#53565A",
          formatter: "{value} %",
          show: true,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "Clean",
        type: "bar",
        stack: "total",
        color: "#FF8C38",
        barWidth: "80%",
        label: {
          show: false,
          color: "#53565A",
          position: "outside",
        },
        emphasis: {
          focus: "series",
        },
        data: CustomerCountData1.value,
      },
    ],
  };

  const option3 = {
    legend: {
      show: false,
      icon: "roundRect",
      bottom: "0%",
      left: "0%",
      itemWidth: 10,
      itemHeight: 10,
    },
    grid: {
      top: "20",
      right: "20",
      bottom: "10",
      left: "20",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      data: CustomerCountData3.label,
      min: 0,
      // max: maxv,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#EAEDF3",
        },
      },
      axisLabel: {
        show: false,
        color: "#53565A",
        fontSize: 9,
        interval: 0,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: [
      {
        type: "category",
        interval: 10,
        axisLine: {
          show: false,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        data: CustomerCountData3.label,
        axisLabel: {
          color: "#53565A",
          show: true,
          lineHeight: 16,
          width: 70,
          fontSize: 9.5,
          overflow: "breakAll",
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: "dashed",
            color: "rgba(219, 212, 212, 1)",
          },
        },
      },
      {
        type: "category",
        data: CustomerCountData3.value,
        axisLabel: {
          color: "#53565A",
          formatter: "{value} %",
          show: true,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "Clean",
        type: "bar",
        stack: "total",
        color: "#FF8C38",
        barWidth: "80%",
        label: {
          show: false,
          color: "#53565A",
          position: "outside",
        },
        emphasis: {
          focus: "series",
        },
        data: CustomerCountData3.value,
      },
    ],
  };

  const option4 = {
    legend: {
      show: false,
      icon: "roundRect",
      bottom: "0%",
      left: "0%",
      itemWidth: 10,
      itemHeight: 10,
    },
    grid: {
      top: "20",
      right: "20",
      bottom: "10",
      left: "20",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      data: CustomerCountData4.label,
      min: 0,
      // max: maxv,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#EAEDF3",
        },
      },
      axisLabel: {
        show: false,
        color: "#53565A",
        fontSize: 9,
        interval: 0,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: [
      {
        type: "category",
        interval: 10,
        axisLine: {
          show: false,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        data: CustomerCountData4.label,
        axisLabel: {
          color: "#53565A",
          show: true,
          lineHeight: 16,
          width: 70,
          fontSize: 9.5,
          overflow: "breakAll",
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: "dashed",
            color: "rgba(219, 212, 212, 1)",
          },
        },
      },
      {
        type: "category",
        data: CustomerCountData4.value,
        axisLabel: {
          color: "#53565A",
          formatter: "{value} %",
          show: true,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "Clean",
        type: "bar",
        stack: "total",
        color: "#FF8C38",
        barWidth: "80%",
        label: {
          show: false,
          color: "#53565A",
          position: "outside",
        },
        emphasis: {
          focus: "series",
        },
        data: CustomerCountData4.value,
      },
    ],
  };

  return (
    <div className="px-28 mt-8">
      <div className="flex gap-6 items-center mb-6">
        <div className="flex-1 border-t border-[#BECDE3]"></div>
        <p className="text-2xl font-semibold text-[#374151]">Performance</p>
        <div className="flex-1 border-t border-[#BECDE3]"></div>
      </div>

      <div className="grid grid-cols-4 gap-8 mb-6">
        <div className="rounded-2xl bg-white flex flex-col gap-2 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151] border-b border-[#E5E7EB]">
            STAAR Percent at Approaches{" "}
            <span className="font-light">(2022)</span>
          </h3>
          <div className=" h-[200px]">
            <ReactEcharts
              option={option1}
              style={{ height: "100%", width: "100%" }}
              opts={{ renderer: "svg" }}
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white flex flex-col gap-2 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151] border-b border-[#E5E7EB]">
            STAAR Percent at Approaches{" "}
            <span className="font-light">(2022)</span>
          </h3>
          <div className=" h-[200px]">
            {/* <Barcharthorizontal
              legend={{
                show: false,
                icon: "roundRect",
                bottom: "0%",
                left: "0%",
                itemWidth: 10,
                itemHeight: 10,
              }}
              grid={{
                top: "20",
                right: "20",
                bottom: "10",
                left: "20",
                containLabel: true,
              }}
              axisLabely={{
                show: true,
              }}
              label={{
                show: false,
                color: "#53565A",
                position: "outside",
              }}
              minv={0}
              //   maxv={80}
              //   datayaxis={datayaxis}
              data={CustomerCountData1}
            /> */}

            <ReactEcharts
              option={option1}
              style={{ height: "100%", width: "100%" }}
              opts={{ renderer: "svg" }}
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white flex flex-col gap-2 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151] border-b border-[#E5E7EB]">
            STAAR Percent at Approaches{" "}
            <span className="font-light">(2022)</span>
          </h3>
          <div className=" h-[200px]">
            {/* <Barcharthorizontal
              legend={{
                show: false,
                icon: "roundRect",
                bottom: "0%",
                left: "0%",
                itemWidth: 10,
                itemHeight: 10,
              }}
              grid={{
                top: "20",
                right: "20",
                bottom: "10",
                left: "20",
                containLabel: true,
              }}
              axisLabely={{
                show: true,
              }}
              label={{
                show: false,
                color: "#53565A",
                position: "outside",
              }}
              minv={0}
              //   maxv={80}
              //   datayaxis={datayaxis}
              data={CustomerCountData3}
            /> */}

            <ReactEcharts
              option={option3}
              style={{ height: "100%", width: "100%" }}
              opts={{ renderer: "svg" }}
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white flex flex-col gap-2 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151] border-b border-[#E5E7EB]">
            STAAR Percent at Approaches{" "}
            <span className="font-light">(2022)</span>
          </h3>
          <div className=" h-[200px]">
            {/* <Barcharthorizontal
              legend={{
                show: false,
                icon: "roundRect",
                bottom: "0%",
                left: "0%",
                itemWidth: 10,
                itemHeight: 10,
              }}
              grid={{
                top: "20",
                right: "20",
                bottom: "10",
                left: "20",
                containLabel: true,
              }}
              axisLabely={{
                show: true,
              }}
              label={{
                show: false,
                color: "#53565A",
                position: "outside",
              }}
              minv={0}
              //   maxv={80}
              //   datayaxis={datayaxis}
              data={CustomerCountData4}
            /> */}

            <ReactEcharts
              option={option4}
              style={{ height: "100%", width: "100%" }}
              opts={{ renderer: "svg" }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mb-6">
        <div className="rounded-2xl bg-white flex flex-col gap-1 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151]">
            2022 Accountability
          </h3>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Accountability Rating</p>
            <div className="border border-[#E3A008] w-6 h-6 p-2 flex items-center justify-center font-semibold text-sm text-[#E3A008] rounded-full">
              B
            </div>
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Student Achievement</p>
            <div className="border border-[#E3A008] w-6 h-6 p-2 flex items-center justify-center font-semibold text-sm text-[#E3A008] rounded-full">
              B
            </div>
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">School Progress</p>
            <div className="border border-[#31C48D] w-6 h-6 p-2 flex items-center justify-center font-semibold text-sm text-[#31C48D] rounded-full">
              B
            </div>
          </div>
          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">Closing the Gaps</p>
            <div className="border border-[#F98080] w-6 h-6 p-2 flex items-center justify-center font-semibold text-sm text-[#F98080] rounded-full">
              C
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white flex flex-col gap-1 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151]">
            2022 Accountability
          </h3>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Accountability Rating</p>
            <div className="border border-[#E3A008] w-6 h-6 p-2 flex items-center justify-center font-semibold text-sm text-[#E3A008] rounded-full">
              B
            </div>
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Student Achievement</p>
            <div className="text-sm text-[#4B586E]">Not Rated (SB 1365)</div>
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">School Progress</p>
            <div className="border border-[#31C48D] w-6 h-6 p-2 flex items-center justify-center font-semibold text-sm text-[#31C48D] rounded-full">
              B
            </div>
          </div>
          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">Closing the Gaps</p>
            <div className="border border-[#F98080] w-6 h-6 p-2 flex items-center justify-center font-semibold text-sm text-[#F98080] rounded-full">
              C
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white flex flex-col gap-1 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151]">
            2022 Accountability
          </h3>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Accountability Rating</p>
            <div className="text-sm text-[#4B586E]">Not Rated</div>
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Student Achievement</p>
            <div className="text-sm text-[#4B586E]">Not Rated</div>
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">School Progress</p>
            <div className="text-sm text-[#4B586E]">Not Rated</div>
          </div>
          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">Closing the Gaps</p>
            <div className="text-sm text-[#4B586E]">Not Rated</div>
          </div>
        </div>
        <div className="rounded-2xl bg-white flex flex-col gap-1 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151]">
            2022 Accountability
          </h3>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Accountability Rating</p>
            <div className="border border-[#E3A008] w-6 h-6 p-2 flex items-center justify-center font-semibold text-sm text-[#E3A008] rounded-full">
              A
            </div>
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Student Achievement</p>
            <div className="border border-[#E3A008] w-6 h-6 p-2 flex items-center justify-center font-semibold text-sm text-[#E3A008] rounded-full">
              A
            </div>
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">School Progress</p>
            <div className="border border-[#31C48D] w-6 h-6 p-2 flex items-center justify-center font-semibold text-sm text-[#31C48D] rounded-full">
              B
            </div>
          </div>
          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">Closing the Gaps</p>
            <div className="border border-[#F98080] w-6 h-6 p-2 flex items-center justify-center font-semibold text-sm text-[#F98080] rounded-full">
              B
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mb-6">
        <div className="rounded-2xl bg-white flex flex-col gap-1 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151]">
            Distinction Designations (2022)
          </h3>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Academic Achievement Math</p>
            <img src="/assets/website/minus-circle.svg" />
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Reading/ ELA
            </p>
            <img src="/assets/website/tick-circle.svg" />
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Science
            </p>
            <img src="/assets/website/minus-circle.svg" />
          </div>
          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Social Studies
            </p>
            <img src="/assets/website/minus-circle.svg" />
          </div>

          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">
              Comparative Closing the Gaps
            </p>
            <img src="/assets/website/tick-circle.svg" />
          </div>

          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">Popst Secondary Readness</p>
            <img src="/assets/website/tick-circle.svg" />
          </div>
        </div>
        <div className="rounded-2xl bg-white flex flex-col gap-1 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151]">
            Distinction Designations (2022)
          </h3>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Academic Achievement Math</p>
            <img src="/assets/website/minus-circle.svg" />
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Reading/ ELA
            </p>
            <img src="/assets/website/minus-circle.svg" />
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Science
            </p>
            <img src="/assets/website/minus-circle.svg" />
          </div>
          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Social Studies
            </p>
            <img src="/assets/website/minus-circle.svg" />
          </div>

          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">
              Comparative Closing the Gaps
            </p>
            <img src="/assets/website/minus-circle.svg" />
          </div>

          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">Popst Secondary Readness</p>
            <img src="/assets/website/minus-circle.svg" />
          </div>
        </div>
        <div className="rounded-2xl bg-white flex flex-col gap-1 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151]">
            Distinction Designations (2022)
          </h3>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Academic Achievement Math</p>
            <img src="/assets/website/minus-circle.svg" />
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Reading/ ELA
            </p>
            <img src="/assets/website/minus-circle.svg" />
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Science
            </p>
            <img src="/assets/website/minus-circle.svg" />
          </div>
          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Social Studies
            </p>
            <img src="/assets/website/minus-circle.svg" />
          </div>

          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">
              Comparative Closing the Gaps
            </p>
            <img src="/assets/website/minus-circle.svg" />
          </div>

          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">Popst Secondary Readness</p>
            <img src="/assets/website/minus-circle.svg" />
          </div>
        </div>

        <div className="rounded-2xl bg-white flex flex-col gap-1 border border-[#E5E7EB] px-4 py-2">
          <h3 className="text-sm font-medium text-[#374151]">
            Distinction Designations (2022)
          </h3>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">Academic Achievement Math</p>
            <img src="/assets/website/tick-circle.svg" />
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Reading/ ELA
            </p>
            <img src="/assets/website/tick-circle.svg" />
          </div>
          <div className="flex justify-between py-4 border-b border-[#E5E7EB]">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Science
            </p>
            <img src="/assets/website/tick-circle.svg" />
          </div>
          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">
              Academic Achievement Social Studies
            </p>
            <img src="/assets/website/tick-circle.svg" />
          </div>

          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">
              Comparative Closing the Gaps
            </p>
            <img src="/assets/website/minus-circle.svg" />
          </div>

          <div className="flex justify-between py-4">
            <p className="text-sm text-[#4B586E]">Popst Secondary Readness</p>
            <img src="/assets/website/tick-circle.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
