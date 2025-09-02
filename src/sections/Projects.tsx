import gallaMaisonLandingPage from "@/assets/images/gallaMaisonLandingPage.png";
import pokeworldLandingPage from "@/assets/images/pokeworldLandingPage.png";
import jiraBoardLandingPage from "@/assets/images/jiraBoardLandingPage.png";
import dashboardLandingPage from "@/assets/images/dashboardLandingPage.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import ReactIcon from "@/assets/icons/react.svg";
import TsIcon from "@/assets/icons/typescript.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import AstroIcon from "@/assets/icons/astro.svg";
import HtmlIcon from "@/assets/icons/html.svg";
import CssIcon from "@/assets/icons/css.svg";
import JsIcon from "@/assets/icons/javascript.svg";

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
    link: "",
    image: pokeworldLandingPage,
  },
  {
    title: "Dashboard",
    results: [{ title: "React" }],
    link: "",
    image: dashboardLandingPage,
  },
  {
    title: "Jira Board",
    results: [{ title: "HTML" }, { title: "CSS" }, { title: "Vanilla JS" }],
    link: "",
    image: jiraBoardLandingPage,
  },
];

const techIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  React: ReactIcon,
  Typescript: TsIcon,
  Tailwind: TailwindIcon,
  Astro: AstroIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  "Vanilla JS": JsIcon,
};

const techStyles: Record<string, string> = {
  Astro: "bg-[#1e1a2e] text-[#f7c8ff]",
  React: "bg-[#0B2447] text-[#61DBFB]",
  Typescript: "bg-[#1a2d4b] text-[#3178c6]",
  Tailwind: "bg-[#0f172a] text-[#38bdf8]",
  HTML: "bg-[#3b0d0c] text-[#e34c26]",
  CSS: "bg-[#0c213b] text-[#264de4]",
  "Vanilla JS": "bg-[#3b3a0c] text-[#f7df1e]",
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-24">
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
                <div className="lg:pb-16 relative z-10">
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-wrap gap-3 mt-4 md:mt-5">
                    {project.results.map((result) => {
                      const Icon = techIcons[result.title];
                      return (
                        <li key={result.title}>
                          <span
                            className={[
                              "inline-flex items-center rounded-full px-4 py-1.5 gap-2",
                              "text-sm font-medium ring-1 ring-white/10",
                              techStyles[result.title] ??
                                "bg-white/10 text-white/80",
                            ].join(" ")}
                          >
                            {Icon && <Icon className="w-4 h-4" />}
                            {result.title}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <a href={project.link} className="z-10 relative">
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
