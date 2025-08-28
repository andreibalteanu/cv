import profileImage from "@/assets/images/profile-image.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-24">
      <div className="container flex flex-col items-center">
        <Image
          className="rounded-full size-[150px]"
          src={profileImage}
          alt="profile image"
        />
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">
          Balteanu Andrei
        </h1>
        <p>
          Specialized in developing responsive web applications and engaging
          user interfaces using modern technologies.
        </p>
        <div>
          <button>
            <span>Explore My Work</span>
            <ArrowDown />
          </button>
          <button>
            <span></span>
            <span>Lets Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
