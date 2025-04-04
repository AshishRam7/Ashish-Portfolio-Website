import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  tech: string;
  description: string[];
  image: string; // Keep image paths relative to the public folder or import them
  links?: {
    live?: string;
    github?: string;
  };
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
     // 1. SamurAI
     {
       title: "SamurAI - Document Q&A Chat Bot using RAG",
       tech: "Python, Qdrant, Gemini, Streamlit, FastAPI",
       description: [
         "Built an AI chat application with support for documents using Retrieval Augumented Generation(RAG) using FastAPI and Streamlit to use large language models (LLMs) like Gemini to answer the queries by referencing the most relevant context from the document.",
         "Leveraged the all-MiniLM-L6-v2 embedding model from sentence-transformers for vector embeddings, and used Qdrant vector database to store the embeddings, the corresponding text chunk and its metadata such as session id, document name, etc...",
         "Implemented Session and document-specific filtering in the database to ensure data scoping and isolation while handling simultaneous user sessions in the same database instance."
       ],
       // Ensure these paths start with '/' if they are in the public folder
       image: "/samurai.png",
       links: {
         live: "https://samurai-document-qna.streamlit.app/",
         github: "https://github.com/AshishRam7/Document-Retriever-RAG-API-for-LLM-s-and-Chat-Applications"
       }
     },
     // 2. Automated AI Instagram Bot
     {
       title: "Automated AI Instagram Bot - Server",
       tech: "Python, FastAPI, Celery, Redis, Gemini, NLTK",
       description: [
         "Developed a scalable, real-time Instagram automation bot using FastAPI and Celery to intelligently manage Direct Messages and comments. Leveraged Gemini (LLM) for context-aware responses and implemented secure Instagram Webhook notification handling with signature verification for dynamic engagement.",
         "Engineered asynchronous task management with Celery and Redis, enabling background processing that schedules tasks for randomly-timed responses to mimic human interaction while avoiding rate limiting.",
         "Integrated robust operational features including secure storage of Instagram access tokens in SQLite, real-time monitoring via Server-Sent Events (SSE), health checks, and CI/CD automation with GitHub Actions."
       ],
       image: "/chatbot.png", // Ensure path starts with '/'
       links: {
         github: "https://github.com/AshishRam7/deploy-test-insta-bot"
       }
     },
     // 3. AIssistMail (Azure AI Hack)
     {
       title: "AIssistMail - Outlook AI Agent (Azure AI Hack)",
       tech: "React, Vite, Python, FastMCP, OpenAI API, Microsoft Graph API",
       description: [
         "Developed an AI assistant integrated with Microsoft Outlook using the Model Context Protocol (MCP) during the Azure AI Hackathon.",
         "Leveraged OpenAI's GPT model for natural language understanding and function calling to interact with the Microsoft Graph API via an MCP server.",
         "Enabled functionalities like sending emails, creating events, managing contacts, and retrieving mail/OneDrive items via natural language prompts.",
         "Built a React-based Chrome Extension frontend for user interaction with the AI agent.",
       ],
       image: "public/AIassist.png", // Ensure path starts with '/'
       links: {
          github: "https://github.com/AshishRam7/ashishram7-azure-ai-hack",
       },
     },
      // 4. Document Retriever RAG API
     {
       title: "Document Retriever RAG API",
       tech: "Flask, Python, Qdrant, Sentence Transformers, Redis, Scrapy, PyPDF2",
       description: [
         "Built a backend RESTful API server using Flask for a document retriever to generate relevant context for Large Language Models (LLMs) from a document corpus.",
         "Leveraged the 'nomic-embed-text' model via Sentence Transformers for creating vector embeddings of document chunks.",
         "Utilized Qdrant vector database for efficient storage and similarity search of document embeddings.",
         "Implemented Redis caching to store recently accessed embeddings, reducing inference time for repeated or similar queries.",
         "Included API rate limiting per user session and basic setup for background web scraping using Scrapy.",
       ],
       image: "/rag.png", // Ensure path starts with '/'
       links: {
         github: "https://github.com/AshishRam7/ashishram7-document-retriever-rag-api-for-llm-s-and-chat-applications",
       },
     },
     // 5. Multipurpose VR Smart Gloves
     {
       title: "Multipurpose VR-enabled Smart Gloves",
       tech: "Python, C, Socket Programming, PyAutoGUI",
       description: [
         "Built a multipurpose Smart Glove featuring smart gesture detection and controls for Virtual Reality (VR) and computer gaming.",
         "Implemented gesture detection functionalities using the PyAutoGUI library in Python.",
         "Developed a C socket server program for interfacing and broadcasting real-time hardware data to client applications.",
       ],
       // Keeping Unsplash link as it doesn't require local hosting
       image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
       links: {
         github: "https://github.com/achyutnar/SIH",
       },
     },
     // 6. AgroChain
     {
       title: "AgroChain - Blockchain Agricultural Produce Management",
       tech: "React.js, Node.js, Blockchain, IoT",
       description: [
         "Developed a web application to track and regulate the agricultural supply chain and monitor crop health using Blockchain Technology and IoT.",
         "Utilized Blockchain's decentralization, security, and immutability features to enhance data integrity, reliability, and accessibility for agricultural produce.",
       ],
       image: "/agrochain.jpg", // Ensure path starts with '/'
       links: {
         github: "https://github.com/AadiNir/SIH-project",
       },
     },
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="space-y-8" id="projects">
      <h2 className="text-3xl font-bold mb-8 section-heading">Projects</h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card rounded-xl overflow-hidden transition-all duration-300 border border-[#39ff14]/10 hover:border-[#39ff14]/30`}
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
                // --- Added lazy loading attribute ---
                loading="lazy"
                // --- Optional: Add dimensions to help prevent layout shift ---
                width="auto" // Or a specific pixel width if known and consistent
                height="256" // Corresponds to h-64
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            </div>

            {/* Content Area */}
            <div className="p-6">
               {/* Top section: Title, Tech, Toggle Button */}
               <div className="flex justify-between items-start mb-3">
                  {/* Group title and tech stack */}
                  <div>
                     <h3 className="text-xl font-semibold mb-1 text-[#39ff14]/90 hover:text-[#39ff14] transition-colors">{project.title}</h3>
                     <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
                  </div>
                  {/* Toggle button */}
                  <button
                     onClick={() => toggleProject(index)}
                     className="text-[#39ff14]/70 hover:text-[#39ff14] text-2xl font-light p-1 -mt-1 -mr-1 flex-shrink-0"
                     aria-expanded={expandedProject === index}
                     aria-label={expandedProject === index ? 'Collapse project details' : 'Expand project details'}
                   >
                     {expandedProject === index ? '−' : '+'}
                   </button>
               </div>

              {/* Links Section */}
              {project.links && (Object.values(project.links).some(link => link)) && (
                <div className="mb-4 flex flex-wrap gap-x-6 gap-y-3 border-b border-[#39ff14]/10 pb-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-[#39ff14]/80 hover:text-[#39ff14] transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-[#39ff14]/80 hover:text-[#39ff14] transition-colors text-sm"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              )}

              {/* Collapsible Description Section */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedProject === index ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                 <div className="space-y-3">
                    {project.description.map((desc, i) => (
                      <p key={i} className="text-gray-300 flex items-start">
                        <span className="mr-2 text-[#39ff14] mt-1 text-xs">•</span>
                        {desc}
                      </p>
                    ))}
                 </div>
               </div>
            </div>
           </div>
         ))}
       </div>
     </section>
  );
};

export default Projects;