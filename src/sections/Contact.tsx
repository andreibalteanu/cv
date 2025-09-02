"use client";
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
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const REVEAL_TEXT: Record<string, string> = {
    Call: "+40756537145",
    Mail: "balteanu_andrei98@yahoo.com",
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    label: string
  ) => {
    if (label in REVEAL_TEXT && !revealed[label]) {
      e.preventDefault();
      setRevealed((r) => ({ ...r, [label]: true }));
    }
  };

  return (
    <div id="contact" className="pt-16 pb-32">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 mb-10 md:mb-20">
          Contact
        </h2>
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center max-w-lg mx-auto md:text-left">
          <h2 className="font-semibold text-2xl text-center mb-8">
            Hit me up!
          </h2>

          <div className="flex flex-col items-center gap-4">
            {contactData.map(({ label, link }) => {
              const show = revealed[label] && REVEAL_TEXT[label];
              return (
                <a
                  key={label}
                  href={link}
                  onClick={(e) => handleClick(e, label)}
                  rel={label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  target={label === "LinkedIn" ? "_blank" : undefined}
                >
                  <button className="contact-button" type="button">
                    <span className="font-semibold">
                      {show ? REVEAL_TEXT[label] : label}
                    </span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
