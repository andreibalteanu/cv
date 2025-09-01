type HeaderProps = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Header = ({ active, setActive }: HeaderProps) => {
  return (
    <div className="fixed top-3 left-0 right-0 flex justify-center items-center z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActive(id)}
            className={`nav-item ${active === id ? "nav-item-active" : ""}`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};
