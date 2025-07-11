import { useState, useCallback } from 'react';
import { ExternalLink, Code2, ChevronDown, ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());



  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());

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
       image: "/Chatbot.png", // Ensure path starts with '/'
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
       image: "/AIassist.png", // Ensure path starts with '/'
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

  const toggleProject = useCallback((index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  }, [expandedProject]);

  const handleImageError = useCallback((index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  }, []);

  const handleImageLoad = useCallback((index: number) => {
    setImagesLoaded(prev => new Set(prev).add(index));
  }, []);

  return (
    <section className="glass-card p-6 sm:p-8 lg:p-12 xl:p-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 section-heading">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my recent work in AI, web development, and innovative solutions
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-white/5 dark:to-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary-green/30 transition-all duration-300 hover:shadow-glow"
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Image Section - Takes 2 columns */}
              <div className={`lg:col-span-2 relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-video lg:aspect-square relative bg-gray-200 dark:bg-gray-800">
                  {imageErrors.has(index) ? (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                      <ImageIcon size={48} className="text-gray-500 dark:text-gray-500" />
                    </div>
                  ) : (
                    <>
                      {!imagesLoaded.has(index) && (
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                          <div className="w-8 h-8 border-2 border-primary-green border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-300 ${
                          imagesLoaded.has(index) ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading="eager"
                        onLoad={() => handleImageLoad(index)}
                        onError={() => handleImageError(index)}
                      />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Project number badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-green to-accent-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section - Takes 3 columns */}
              <div className={`lg:col-span-3 p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-green-light transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-green/20 border border-primary-green/30 text-primary-green-light text-xs font-medium rounded-full hover:bg-primary-green/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description[0]}
                    </p>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {expandedProject === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="space-y-3 overflow-hidden"
                        >
                          {project.description.slice(1).map((desc, i) => (
                            <div key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary-green rounded-full mt-2 flex-shrink-0"></div>
                              <span>{desc}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {project.description.length > 1 && (
                      <button
                        onClick={() => toggleProject(index)}
                        className="flex items-center gap-2 text-primary-green-light hover:text-accent-green transition-colors duration-300 text-sm font-medium group/btn"
                      >
                        <span>{expandedProject === index ? 'Show Less' : 'Read More'}</span>
                        <motion.div
                          animate={{ rotate: expandedProject === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} className="group-hover/btn:scale-110 transition-transform duration-200" />
                        </motion.div>
                      </button>
                    )}
                  </div>

                  {/* Action Buttons */}
                  {project.links && (Object.values(project.links).some(link => link)) && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex items-center gap-2 px-6 py-3 text-sm group/link"
                        >
                          <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex items-center gap-2 px-6 py-3 text-sm group/link"
                        >
                          <Code2 size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;