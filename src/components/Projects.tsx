import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  tech: string;
  description: string[];
  image: string;
  links?: {
    live?: string;
    github?: string;
  };
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "SamurAI - Document Q&A Chat Bot using RAG",
      tech: "Python, Qdrant, Gemini, Streamlit",
      description: [
        "Built an AI chat application with support for documents using Retrieval Augumented Generation(RAG) using FastAPI and Streamlit to use large language models (LLMs) like Gemini to answer the queries by referencing the most relevant context from the document.",
        "Leveraged the all-MiniLM-L6-v2 embedding model from sentence-transformers for vector embeddings, and used Qdrant vector database to store the embeddings, the corresponding text chunk and its metadata such as session id, document name, etc...",
        "Implemented Session and document-specific filtering in the database to ensure data scoping and isolation while handling simultaneous user sessions in the same database instance."
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      links: {
        live: "https://samurai-document-qna.streamlit.app/",
        github: "https://github.com/AshishRam7/Document-Retriever-RAG-API-for-LLM-s-and-Chat-Applications"
      }
    },
    {
      title: "Automated AI Instagram Bot - Server",
      tech: "Python, FastAPI, Celery, Redis, Gemini, NLTK",
      description: [
        "Developed a scalable, real-time Instagram automation bot using FastAPI and Celery to intelligently manage Direct Messages and comments. Leveraged Gemini (LLM) for context-aware responses and implemented secure Instagram Webhook notification handling with signature verification for dynamic engagement.",
        "Engineered asynchronous task management with Celery and Redis, enabling background processing that schedules tasks for randomly-timed responses to mimic human interaction while avoiding rate limiting.",
        "Integrated robust operational features including secure storage of Instagram access tokens in SQLite, real-time monitoring via Server-Sent Events (SSE), health checks, and CI/CD automation with GitHub Actions."
      ],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      links: {
        github: "https://github.com/AshishRam7/deploy-test-insta-bot"
      }
    }
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold mb-8 section-heading">Projects</h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card rounded-xl overflow-hidden transition-all duration-300 ${
              expandedProject === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <button
              className="w-full text-left"
              onClick={() => toggleProject(index)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
                  </div>
                  <span className="text-gray-400 text-2xl font-light">
                    {expandedProject === index ? '−' : '+'}
                  </span>
                </div>
                
                <div className={`mt-4 space-y-3 ${expandedProject === index ? 'block' : 'hidden'}`}>
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-gray-300">{desc}</p>
                  ))}
                  {project.links && (
                    <div className="mt-6 flex gap-4">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Github size={18} />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;