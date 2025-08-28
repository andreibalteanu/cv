import profileImage from "@/assets/images/profile-image.jpg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <Image
          className="rounded-full"
          src={profileImage}
          alt="profile image"
        />
        <div>
          <div></div>
          <div>Balteanu Andrei</div>
        </div>
      </div>
    </div>
  );
};
