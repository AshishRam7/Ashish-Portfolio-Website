// src/components/Sidebar.tsx
// No structural changes needed, but ensure icons passed from App.tsx are correct.
// The existing props and logic handle the updated sections array correctly.
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  sections: {
    id: string;
    label: string;
    icon: React.ReactNode;
  }[];
  activeSection: string;
  setActiveSection: (section: string) => void; // Receive setActiveSection
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, sections, activeSection, setActiveSection }) => {
  const scrollToSection = (sectionId: string) => {
    // setActiveSection(sectionId); // Set active immediately on click for better UX
    const element = document.getElementById(sectionId);
    if (element) {
       // Calculate offset based on potential fixed headers if necessary
       const offset = 0; // Adjust if you have a fixed header height
       const bodyRect = document.body.getBoundingClientRect().top;
       const elementRect = element.getBoundingClientRect().top;
       const elementPosition = elementRect - bodyRect;
       const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Manually update active section after starting scroll
      // This prevents lag compared to only relying on the scroll listener
       setTimeout(() => setActiveSection(sectionId), 50); // Small delay might be needed
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-black/80 backdrop-blur-md border-r border-[#39ff14]/20 transition-transform duration-300 ease-in-out z-40 w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
    >
       {/* Optional: Add a title/logo area */}
       {/* <div className="p-6 text-center">
         <span className="text-2xl font-bold neon-text">Portfolio</span>
       </div> */}
      <nav className="h-full py-8 overflow-y-auto"> {/* Added overflow-y-auto */}
        <ul className="space-y-1 px-2"> {/* Adjusted spacing and padding */}
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full px-4 py-3 flex items-center space-x-3 rounded-md transition-all duration-200
                  ${activeSection === section.id
                    ? 'bg-[#39ff14]/20 text-[#39ff14] shadow-inner shadow-[#39ff14]/10' // Enhanced active state
                    : 'text-gray-400 hover:bg-[#39ff14]/10 hover:text-[#39ff14]'
                  }`}
              >
                {React.cloneElement(section.icon as React.ReactElement, { className: 'flex-shrink-0' })} {/* Ensure icon size consistency */}
                <span className="font-medium">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;