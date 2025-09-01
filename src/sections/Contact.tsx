import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div id="contact" className="pt-16 pb-32">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Contact
        </h2>
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 mt-10 md:mt-20 rounded-3xl text-center md:text-left">
          <h2 className="font-serif text-2xl">Hit me up!</h2>
          <p>link</p>
          <p>link</p>
          <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8">
            <span className="font-semibold">LinkedIN</span>
            <ArrowUpRightIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
