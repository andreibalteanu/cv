import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { useState } from "react";

const contactData = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/andrei-balteanu-038b47166/",
  },
  { label: "Mail", link: "mailto:balteanu_andrei98@yahoo.com" },
  { label: "Call", link: "tel:+40756537145" },
];

export const ContactSection = () => {
  const [showNumber, setShowNumber] = useState(false);
  const phoneNumber = "+40756537145";

  const handleCallClick = (e: React.MouseEvent) => {
    if (!showNumber) {
      e.preventDefault();
      setShowNumber(true);
    }
  };

  return (
    <div id="contact" className="pt-16 pb-32">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 mb-10 md:mb-20">
          Contact
        </h2>
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10  rounded-3xl text-center max-w-lg mx-auto md:text-left">
          <h2 className="font-serif text-2xl text-center mb-6">Hit me up!</h2>
          <div className="flex flex-col items-center gap-4">
            {contactData.map((item) =>
              item.label === "Call" ? (
                <a key={item.label} href={item.link} onClick={handleCallClick}>
                  <button className="contact-button">
                    <span className="font-semibold">
                      {showNumber ? phoneNumber : "Call"}
                    </span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              ) : (
                <a key={item.label} href={item.link}>
                  <button className="contact-button">
                    <span className="font-semibold">{item.label}</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
