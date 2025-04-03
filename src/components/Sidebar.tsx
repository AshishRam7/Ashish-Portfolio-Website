import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  sections: {
    id: string;
    label: string;
    icon: React.ReactNode;
  }[];
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, sections, activeSection, setActiveSection }) => {
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-black/80 backdrop-blur-md border-r border-[#39ff14]/20 transition-transform duration-300 ease-in-out z-40 w-64 
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
    >
      <nav className="h-full py-8">
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full px-6 py-3 flex items-center space-x-3 transition-colors
                  ${activeSection === section.id
                    ? 'bg-[#39ff14]/10 text-[#39ff14]'
                    : 'text-gray-400 hover:bg-[#39ff14]/5 hover:text-[#39ff14]'
                  }`}
              >
                {section.icon}
                <span>{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;