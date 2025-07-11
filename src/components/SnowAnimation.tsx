import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  drift: number;
  rotation: number;
  rotationSpeed: number;
}

const SnowAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create snowflakes
    const createSnowflakes = () => {
      const snowflakes: Snowflake[] = [];
      const numSnowflakes = Math.min(80, Math.floor(window.innerWidth / 15)); // Reduced count for subtlety

      for (let i = 0; i < numSnowflakes; i++) {
        snowflakes.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1, // 1-5px
          speed: Math.random() * 2 + 0.5, // 0.5-2.5px per frame
          opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4 (more subtle)
          drift: Math.random() * 2 - 1, // -1 to 1 horizontal drift
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 2 - 1, // -1 to 1 degrees per frame
        });
      }
      snowflakesRef.current = snowflakes;
    };

    // Draw snowflake
    const drawSnowflake = (snowflake: Snowflake) => {
      ctx.save();
      ctx.globalAlpha = snowflake.opacity;
      ctx.translate(snowflake.x, snowflake.y);
      ctx.rotate((snowflake.rotation * Math.PI) / 180);

      // Create a more detailed snowflake shape
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = snowflake.size * 0.5; // Reduced glow for subtlety
      
      // Draw main circle
      ctx.beginPath();
      ctx.arc(0, 0, snowflake.size, 0, Math.PI * 2);
      ctx.fill();

      // Draw sparkle effect for larger snowflakes
      if (snowflake.size > 2.5) {
        ctx.fillStyle = '#00ff88';
        ctx.globalAlpha = snowflake.opacity * 0.5;
        
        // Draw cross pattern
        ctx.fillRect(-snowflake.size * 1.5, -0.5, snowflake.size * 3, 1);
        ctx.fillRect(-0.5, -snowflake.size * 1.5, 1, snowflake.size * 3);
        
        // Draw diagonal lines
        ctx.save();
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-snowflake.size, -0.3, snowflake.size * 2, 0.6);
        ctx.fillRect(-0.3, -snowflake.size, 0.6, snowflake.size * 2);
        ctx.restore();
      }

      ctx.restore();
    };

    // Update snowflake position
    const updateSnowflake = (snowflake: Snowflake) => {
      snowflake.y += snowflake.speed;
      snowflake.x += snowflake.drift * 0.5;
      snowflake.rotation += snowflake.rotationSpeed;

      // Add subtle wave motion
      snowflake.x += Math.sin(snowflake.y * 0.01) * 0.5;

      // Reset snowflake when it goes off screen
      if (snowflake.y > canvas.height + 10) {
        snowflake.y = -10;
        snowflake.x = Math.random() * canvas.width;
      }
      if (snowflake.x > canvas.width + 10) {
        snowflake.x = -10;
      }
      if (snowflake.x < -10) {
        snowflake.x = canvas.width + 10;
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakesRef.current.forEach((snowflake) => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    createSnowflakes();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2, ease: "easeOut" }}
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default SnowAnimation;
