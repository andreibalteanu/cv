const workExperience = [
  {
    interval: "11/2023 - Present",
    title: "Front End Developer",
    company: "Anais Digital",
    description: [
      "- Built new microfrontends for a cloud communications platform supporting collaboration features such as SIP-based phone calls, messaging, contacts, calendar, voicemail, and user settings.",
      "- Developed and maintained an event-driven microfrontend architecture comprising 15+ modules interconnected through a central data access point/SmartCloudPhone SDK.",
      "- Maintained high code quality by implementing unit tests and ensuring comprehensive test coverage.",
      "- Coordinated teams across Backend, QA, and SDK to achieve seamless frontend integration and consistent delivery.",
    ],
  },
  {
    interval: "05/2023 - 11/2023",
    title: "Front End Developer",
    company: "Skywind Group",
    description: [
      "- Partnered with a leading iGaming provider delivering slots, live dealer, sports solutions, and engagement tools; maintained and extended features while performing manual testing for clients in Romania, the UK, and Colombia (using Next.js, TypeScript, SaSS modules, Redux, and Prismic CMS).",
      "- Implemented B2B solutions, enhancing performance, resolving bugs, and ensuring cross-browser compatibility through responsive design and technologies like Vanilla JS, React, and Next.js.",
      "- Built and refined core functionalities including authentication (login/register), payment flows, data handling from game providers, and API integrations.",
      "- Delivered new UI components aligned with design specifications, ensuring accessibility, responsiveness, and adaptability with a mobile-first approach.",
    ],
  },
  {
    interval: "04/2022 - 05/2023",
    title: "Front End Developer",
    company: "Grapefruit SRL",
    description: [
      "- Contributed within an agile, cross-functional team to design and build a large-scale loyalty platform, emphasizing innovation and user-focused design.",
      "- Led frontend initiatives using React.js and TypeScript to craft intuitive interfaces integrated seamlessly with backend systems.",
      "- Enhanced performance and maintainability by refining features and implementing state management with Redux Toolkit and React Context.",
      "- Partnered with stakeholders and designers, using Figma and Adobe XD to turn wireframes into production-ready, high-quality interfaces aligned with UI/UX best practices.",
    ],
  },
  {
    interval: "08/2021 - 04/2022",
    title: "Front End Developer",
    company: "Falcon Trading",
    description: [
      "- Developed comprehensive e-commerce website featuring complete functionality including product catalog, shopping cart, and secure checkout process.",
      "- Collaborated with cross-functional teams during sprint planning and weekly meetings to refine project requirements, troubleshoot issues, and ensure timely feature delivery.",
      "- Integrated third-party APIs and built custom middleware using Node.js to handle data processing and authentication flows.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="pb-16 lg:py-24">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Work Experience
        </h2>

        <div className="relative mt-10 md:mt-20">
          <div className="absolute left-3 top-3 bottom-0 w-px bg-white/15" />

          <ul className="space-y-14">
            {workExperience.map((experience) => (
              <li key={experience.company} className="relative pl-8">
                <span className="absolute left-1.5 top-1.5 block w-3 h-3 rounded-full bg-white" />

                <p className="font-semibold text-lg md:text-xl mb-4">
                  {experience.interval}
                </p>

                <div className="ml-4 md:ml-8">
                  <p className="font-semibold text-base lg:text-lg">
                    {experience.company} - {experience.title}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {experience.description.map((idea) => (
                      <li
                        key={idea.slice(0, 20)}
                        className="text-sm md:text-base text-white/60"
                      >
                        {idea}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
