import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import blocks from "@/assets/blocks.svg";
import info from "@/assets/info.svg";

function TabbedInfoCard() {
  const tabs = {
    "About me": `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a sample text to demonstrate overflow behavior.`,
    "Experiences": `I have much experience working as a frontend developer. Lorem Ipsum is simply dummy text...`,
    "Recommended": `I have much experience working as a frontend developer.`,
  };

  type TabKey = keyof typeof tabs;
  const [currentTab, setCurrentTab] = useState<TabKey>("About me");

  return (
    <div className="flex h-full">
      <Card className="!m-0 !p-0 flex w-full h-full rounded-2xl border-none space-x-0 shadow-xl overflow-hidden">

        {/* Left Icons Sidebar */}
        <div className="flex flex-col justify-between items-center py-4 sm:py-6 px-1 sm:px-2 w-10 sm:w-14 min-w-0">
          {/* Top Info icon */}
          <div className="relative group">
            <img
              src={info}
              alt="Info icon"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 opacity-70 group-hover:opacity-100 transition-all duration-300"
            />
          </div>

          {/* Center Blocks icon */}
          <div className="relative group self-center mt-auto mb-auto">
            <img
              src={blocks}
              alt="Blocks icon"
              className="w-5 h-5 sm:w-6 sm:h-8 md:w-8 md:h-10 opacity-70 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col my-0 min-w-0">
          {/* Tabs Header */}
          <CardHeader className="py-3 mr-6 px-0 ">
            {/* Desktop Tabs */}
            <div className="hidden lg:flex justify-center sm:justify-between lg:gap-2 p-1 lg:p-2 rounded-2xl ml-0 mr-6 bg-[#171717]">
              {(Object.keys(tabs) as TabKey[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`flex-1 min-w-[80px] sm:min-w-[100px] lg:p-2 px-0  rounded-xl text-sm md:text-[12px] lg:text-[16px] font-medium transition-all duration-200 ${currentTab === tab
                      ? "bg-[#28292F] text-white shadow-[10px_20px_20px_rgba(0,0,0,0.9)]"
                      : "text-gray-400 hover:bg-[#2F3033] hover:text-white"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="lg:hidden flex justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="bg-[#171717] rounded-xl p-1">
                    <Button className="text-[#FFFFFF] bg-gray-800 flex items-center gap-2 rounded-xl">
                      {currentTab}
                      <ChevronDown size={16} />
                    </Button>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#2A2B31] border-none rounded-xl p-2 text-[#FFFFFF]">
                  {(Object.keys(tabs) as TabKey[]).map((tab) => (
                    <DropdownMenuItem
                      key={tab}
                      className={`cursor-pointer rounded-lg px-3 py-2 text-sm ${currentTab === tab
                          ? "bg-[#33353B] text-white"
                          : "hover:bg-[#2F3033]"
                        }`}
                      onClick={() => setCurrentTab(tab)}
                    >
                      {tab}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>

          {/* Scrollable Content */}
          <CardContent className="flex-1 overflow-hidden pl-2 pt-4 pr-4 pb-2 min-w-0">
            <div className="h-full overflow-y-auto pr-6 custom-scroll">
              <p className="text-[#B5B5B5] text-sm sm:text-base md:text-[17px] leading-relaxed font-[Plus Jakarta Sans] whitespace-pre-line">
                {tabs[currentTab]}
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>

  );
}

export default TabbedInfoCard;
