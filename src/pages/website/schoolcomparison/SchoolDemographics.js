import { PieChartWebsite } from "@/components/allchart/piechartwebsite";

export default function SchoolDemographics() {
  const PersonnelbyLanguages = [
    { value: 78.2, name: "78 %" },
    { value: 11.4, name: "12 %" },
    { value: 5.5, name: "10 %" },
    { value: 2, name: "2" },
    { value: 2.4, name: "3" },
  ];




  return (
    <div className="px-28 mt-8">
      <div className="flex gap-6 items-center mb-6">
        <div className="flex-1 border-t border-[#BECDE3]"></div>
        <p className="text-2xl font-semibold text-[#374151]">
          Students Demographics (2022-23)
        </p>
        <div className="flex-1 border-t border-[#BECDE3]"></div>
      </div>
      {/* chart grid */}
      <div className="grid grid-cols-4 gap-8 mb-6">
        <div className="rounded-2xl bg-white flex flex-col gap-2 border border-[#E5E7EB] px-4 py-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="self-center py-[16px] xl:py-[0.833vw] pl-[16px] xl:pl-[0.833vw] pr-[7px]">
              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#4F6484] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Hispanic
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  78.2%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#A93439] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    White
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  11.4%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#A93439] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    African American
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  5.5%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#BC6D46] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Asian
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  2%
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#1F3F71] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Two or More Races
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  2.4%
                </div>
              </div>
            </div>
            <div className=" h-[200px]">
              <PieChartWebsite
                legend={{
                  show: false,
                }}
                label={{
                  show: false,
                }}
                radius={["40%", "90%"]}
                center={["50%", "50%"]}
                color={["#4F6484", "#A93439", "#38635B", "#BC6D46", "#1F3F71"]}
                data={PersonnelbyLanguages}
              />
            </div>
          </div>
        </div>




   <div className="rounded-2xl bg-white flex flex-col gap-2 border border-[#E5E7EB] px-4 py-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="self-center py-[16px] xl:py-[0.833vw] pl-[16px] xl:pl-[0.833vw] pr-[7px]">
              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#4F6484] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Hispanic
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  78.2%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#A93439] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    White
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  11.4%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#A93439] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    African American
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  5.5%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#BC6D46] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Asian
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  2%
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#1F3F71] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Two or More Races
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  2.4%
                </div>
              </div>
            </div>
            <div className=" h-[200px]">
              <PieChartWebsite
                legend={{
                  show: false,
                }}
                label={{
                  show: false,
                }}
                radius={["40%", "90%"]}
                center={["50%", "50%"]}
                color={["#4F6484", "#A93439", "#38635B", "#BC6D46", "#1F3F71"]}
                data={PersonnelbyLanguages}
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white flex flex-col gap-2 border border-[#E5E7EB] px-4 py-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="self-center py-[16px] xl:py-[0.833vw] pl-[16px] xl:pl-[0.833vw] pr-[7px]">
              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#4F6484] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Hispanic
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  78.2%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#A93439] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    White
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  11.4%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#A93439] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    African American
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  5.5%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#BC6D46] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Asian
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  2%
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#1F3F71] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Two or More Races
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  2.4%
                </div>
              </div>
            </div>
            <div className=" h-[200px]">
              <PieChartWebsite
                legend={{
                  show: false,
                }}
                label={{
                  show: false,
                }}
                radius={["40%", "90%"]}
                center={["50%", "50%"]}
                color={["#4F6484", "#A93439", "#38635B", "#BC6D46", "#1F3F71"]}
                data={PersonnelbyLanguages}
              />
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white flex flex-col gap-2 border border-[#E5E7EB] px-4 py-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="self-center py-[16px] xl:py-[0.833vw] pl-[16px] xl:pl-[0.833vw] pr-[7px]">
              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#4F6484] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Hispanic
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  78.2%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#A93439] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    White
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  11.4%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#A93439] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    African American
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  5.5%
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#BC6D46] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Asian
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  2%
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                <div className="flex items-center gap-1">
                  <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#1F3F71] rounded-[999px]"></div>
                  <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">
                    Two or More Races
                  </div>
                </div>
                <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">
                  2.4%
                </div>
              </div>
            </div>
            <div className=" h-[200px]">
              <PieChartWebsite
                legend={{
                  show: false,
                }}
                label={{
                  show: false,
                }}
                radius={["40%", "90%"]}
                center={["50%", "50%"]}
                color={["#4F6484", "#A93439", "#38635B", "#BC6D46", "#1F3F71"]}
                data={PersonnelbyLanguages}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
