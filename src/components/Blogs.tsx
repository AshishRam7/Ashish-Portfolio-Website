// src/components/Blogs.tsx
import React, { useEffect, useRef } from 'react';
import { BookOpen } from 'lucide-react'; // Optional: Icon for the heading

const Blogs: React.FC = () => {
  const mediumWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the script isn't added multiple times on fast refreshes/re-renders
    if (mediumWidgetRef.current && !mediumWidgetRef.current.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = 'https://medium-widget.pixelpoint.io/widget.js';
      script.async = true;
      script.onload = () => {
        // Check if MediumWidget is available before calling Init
        if (window.MediumWidget) {
           window.MediumWidget.Init({
             renderTo: '#medium-widget-container',
             profile: 'YOUR_MEDIUM_PROFILE_URL_HERE', // <-- IMPORTANT: Replace with your Medium profile URL
             type: 'grid', // 'grid' or 'list'
             limit: 6, // Max number of posts
             postsPerLine: 2, // Only used for 'grid' type
             picture: 'big', // 'big' or 'small'
             fields: ['description', 'author', 'claps', 'publishAt'],
             ratio: 'landscape', // 'landscape', 'square', or 'original'
             theme: 'dark', // 'dark', 'light'
             colors: { // Optional custom colors
               // background: '#000000', // Match portfolio background
               // text: '#E5E7EB', // Match text color
               // // ... other color options if needed
             },
              // Optional: Callback after widget loads
             // onReady: () => console.log('Medium Widget Ready!')
           });
        } else {
          console.error("MediumWidget script loaded, but MediumWidget object not found.");
        }
      };
      script.onerror = () => {
        console.error("Failed to load Medium Widget script.");
        if(mediumWidgetRef.current) {
            mediumWidgetRef.current.innerHTML = "<p class='text-red-500'>Failed to load Medium blog posts. Please check the console.</p>";
        }
      };

      // Append the script to the container div
      mediumWidgetRef.current.appendChild(script);
    }

    // Basic cleanup (might not remove the widget itself, but prevents script re-adding)
    // Proper cleanup would involve finding and removing the widget elements if the library provided an API for it.
    return () => {
       // Attempt to remove the script if component unmounts (optional)
       // const existingScript = mediumWidgetRef.current?.querySelector('script[src*="medium-widget"]');
       // if (existingScript) {
       //   mediumWidgetRef.current?.removeChild(existingScript);
       // }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className="content-card rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 section-heading flex items-center gap-2">
        <BookOpen size={24} /> {/* Optional icon */}
        My Blogs
      </h2>
      <p className="text-gray-300 mb-6">
        Thoughts and insights on technology, development, and more. Find my latest articles from Medium below.
      </p>
      {/* Container for the Medium Widget */}
      <div id="medium-widget-container" ref={mediumWidgetRef}>
         {/* The script will populate this div */}
         {/* Optional: Add a loading indicator */}
         <p className="text-gray-400 italic">Loading Medium posts...</p>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Widget powered by <a href="https://github.com/pixelpointio/medium-widget" target="_blank" rel="noopener noreferrer" className="text-[#39ff14]/60 hover:text-[#39ff14]/80 underline">medium-widget</a>.
      </div>
    </section>
  );
};

// Declare MediumWidget on the window object for TypeScript
declare global {
  interface Window {
    MediumWidget?: {
      Init: (options: Record<string, unknown>) => void;
    };
  }
}

export default Blogs;