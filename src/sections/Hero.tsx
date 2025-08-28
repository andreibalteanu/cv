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
        <h1>Balteanu Andrei</h1>
        <p>
          Specialized in developing responsive web applications and engaging
          user interfaces using modern technologies.
        </p>
      </div>
    </div>
  );
};
