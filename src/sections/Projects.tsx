import gallaMaisonLandingPage from "@/assets/images/gallaMaisonLandingPage.png";
import pokeworldLandingPage from "@/assets/images/pokeworldLandingPage.png";
// import jiraBoardLandingPage from "@/assets/images/jiraBoardLandingPage.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    title: "Galla Maison",
    results: [
      { title: "Astro" },
      { title: "React" },
      { title: "Typescript" },
      { title: "Tailwind" },
    ],
    link: "https://rad-madeleine-23d7a3.netlify.app/",
    image: gallaMaisonLandingPage,
  },
  {
    title: "Pokeworld",
    results: [{ title: "React" }],
    link: "https://willowy-dodol-37adfd.netlify.app/",
    image: pokeworldLandingPage,
  },
  // {
  //   title: "Jira Board",
  //   results: [{ title: "HTML" }, { title: "CSS" }, { title: "Javascript" }],
  //   link: "https://codepen.io/andrei-balteanu/pen/BapdbOJ",
  //   image: jiraBoardLandingPage,
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Projects
        </h2>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-5 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:px-20 lg:pt-16 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-5 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex text-sm md:text-base text-white/50 ml-2"
                        key={result.title}
                      >
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span> Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
