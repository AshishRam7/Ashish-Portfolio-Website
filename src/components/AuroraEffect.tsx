import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AuroraWave {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  opacity: number;
  color: string;
  phase: number;
  frequency: number;
  amplitude: number;
}

const AuroraEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wavesRef = useRef<AuroraWave[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

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

    // Create aurora waves
    const createWaves = () => {
      const waves: AuroraWave[] = [];
      const colors = [
        'rgba(0, 255, 136, 0.1)',
        'rgba(0, 204, 106, 0.08)',
        'rgba(57, 255, 20, 0.06)',
        'rgba(102, 255, 204, 0.05)',
        'rgba(0, 255, 170, 0.07)',
      ];

      for (let i = 0; i < 5; i++) {
        waves.push({
          id: i,
          x: 0,
          y: Math.random() * canvas.height * 0.3 + canvas.height * 0.1,
          width: canvas.width,
          height: Math.random() * 100 + 50,
          speed: Math.random() * 0.02 + 0.01,
          opacity: Math.random() * 0.3 + 0.1,
          color: colors[i % colors.length],
          phase: Math.random() * Math.PI * 2,
          frequency: Math.random() * 0.02 + 0.01,
          amplitude: Math.random() * 30 + 20,
        });
      }
      wavesRef.current = waves;
    };

    // Draw aurora wave
    const drawWave = (wave: AuroraWave, time: number) => {
      ctx.save();
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, wave.y, 0, wave.y + wave.height);
      gradient.addColorStop(0, wave.color);
      gradient.addColorStop(0.5, wave.color.replace(/[\d.]+\)$/g, '0.02)'));
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.globalAlpha = wave.opacity * (0.5 + 0.5 * Math.sin(time * 0.001));

      // Draw wavy shape
      ctx.beginPath();
      ctx.moveTo(0, wave.y);

      for (let x = 0; x <= canvas.width; x += 5) {
        const waveY = wave.y + 
          Math.sin((x * wave.frequency) + (time * wave.speed) + wave.phase) * wave.amplitude +
          Math.sin((x * wave.frequency * 2) + (time * wave.speed * 1.5) + wave.phase) * (wave.amplitude * 0.3);
        
        ctx.lineTo(x, waveY);
      }

      ctx.lineTo(canvas.width, wave.y + wave.height);
      ctx.lineTo(0, wave.y + wave.height);
      ctx.closePath();
      ctx.fill();

      // Add shimmer effect
      ctx.globalAlpha = wave.opacity * 0.3 * (0.5 + 0.5 * Math.sin(time * 0.003 + wave.phase));
      const shimmerGradient = ctx.createLinearGradient(
        time * 0.1 % canvas.width, 
        wave.y,
        (time * 0.1 % canvas.width) + 200, 
        wave.y
      );
      shimmerGradient.addColorStop(0, 'transparent');
      shimmerGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      shimmerGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = shimmerGradient;
      ctx.fillRect(0, wave.y, canvas.width, wave.height);

      ctx.restore();
    };

    // Update wave
    const updateWave = (wave: AuroraWave, time: number) => {
      // Subtle movement
      wave.y += Math.sin(time * 0.001 + wave.phase) * 0.1;
      wave.opacity = Math.max(0.05, Math.min(0.4, wave.opacity + (Math.random() - 0.5) * 0.002));
      
      // Keep waves in reasonable bounds
      if (wave.y < -wave.height) wave.y = canvas.height;
      if (wave.y > canvas.height + wave.height) wave.y = -wave.height;
    };

    // Animation loop
    const animate = () => {
      timeRef.current += 16; // Approximate 60fps
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw waves
      wavesRef.current.forEach((wave) => {
        updateWave(wave, timeRef.current);
        drawWave(wave, timeRef.current);
      });

      // Add subtle glow overlay
      ctx.globalAlpha = 0.02;
      const overlayGradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 3, 
        0,
        canvas.width / 2, 
        canvas.height / 3, 
        canvas.width / 2
      );
      overlayGradient.addColorStop(0, 'rgba(0, 255, 136, 0.1)');
      overlayGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animate);
    };

    createWaves();
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
      animate={{ opacity: 1 }}
      transition={{ duration: 4, ease: "easeOut" }}
      style={{
        background: 'transparent',
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default AuroraEffect;
