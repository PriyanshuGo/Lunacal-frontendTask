import TabbedInfoCard from "@/components/TabbedInfoCard";
import divider from "@/assets/divider.svg"
import GalleryCard from "@/components/GalleryCard";

const Home = () => {
  return (
    <div className="bg-[linear-gradient(180deg,_#373E44_0%,_#191B1F_100%)] h-screen overflow-hidden">
      <div className="flex h-full gap-4 p-10 min-w-0">
        {/* Left box */}
        <div className="flex-1 relative min-w-0">
          <div className="absolute inset-0 bg-[#616161] rounded-2xl mr-8 flex items-center justify-center text-white">
            Left box fully covers parent
          </div>
        </div>

        {/* Right box */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          {/* Top inner box */}
          <div className="h-1/2 bg-[#363C43] overflow-auto rounded-2xl shadow-[6px_6px_15px_rgba(0,0,0,0.9)] min-w-0">
            <TabbedInfoCard />
          </div>

          <div className="my-1 px-6"><img src={divider} alt="divider" className="w-full" /></div>

          {/* Bottom inner box */}
          <div className="h-1/2 bg-[#363C43] overflow-auto rounded-2xl shadow-[6px_6px_15px_rgba(0,0,0,0.9)] min-w-0">
            <GalleryCard />
          </div>

          <div className="my-1 px-6"><img src={divider} alt="divider" className="w-full" /></div>
        </div>
      </div>
    </div>
  );
};


export default Home;
