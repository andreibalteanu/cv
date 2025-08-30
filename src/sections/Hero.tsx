import profileImage from "@/assets/images/profile-image.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-36 md:py-48 lg:py-56">
      <div className="container flex flex-col items-center">
        <Image
          className="rounded-full size-[150px]"
          src={profileImage}
          alt="profile image"
        />
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hello, i&apos;m Andrei!
          </h1>
          <p className="mt-4 text-center text-white/60 md: text-lg">
            Specialized in developing responsive web applications and engaging
            user interfaces using modern technologies.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
