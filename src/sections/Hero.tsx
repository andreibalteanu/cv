import profileImage from "@/assets/images/profile-image.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

type HeroProps = {
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export const HeroSection = ({ setActive }: HeroProps) => {
  return (
    <div id="home" className="py-36 md:py-48 lg:py-56">
      <div className="container flex flex-col items-center">
        <div className="p-[3px] rounded-full bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600">
          <Image
            className="rounded-full size-[150px] border-4 border-gray-900"
            src={profileImage}
            alt="profile image"
          />
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hello, i&apos;m Andrei!
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Specialized in developing responsive web applications and engaging
            user interfaces using modern technologies.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href={"#projects"} onClick={() => setActive("projects")}>
            <button
              className="
                group inline-flex items-center gap-2
                border border-white/20 hover:border-white/40
                px-6 h-12 rounded-xl
                hover:bg-white/5
                transition-all duration-200
                hover:-translate-y-0.5 active:translate-y-0
                focus:outline-none focus:ring-2 focus:ring-white/30
              "
            >
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href={"#contact"} onClick={() => setActive("contact")}>
            <button
              className="
                group inline-flex items-center gap-2
                bg-white text-gray-900 h-12 px-6 rounded-xl font-semibold
                transition-all duration-200
                hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5
                active:translate-y-0
                focus:outline-none focus:ring-2 focus:ring-white/40
              "
            >
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
