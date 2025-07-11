import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
  type: 'dot' | 'star' | 'glow';
}

const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

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

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create particles
    const createParticle = (x?: number, y?: number): Particle => {
      const colors = ['#00ff88', '#00cc6a', '#39ff14', '#00ffaa', '#66ffcc'];
      const types: ('dot' | 'star' | 'glow')[] = ['dot', 'star', 'glow'];
      
      return {
        id: Math.random(),
        x: x ?? Math.random() * canvas.width,
        y: y ?? Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
      };
    };

    // Initialize particles
    const initParticles = () => {
      const numParticles = Math.min(80, Math.floor(window.innerWidth / 20));
      particlesRef.current = [];
      for (let i = 0; i < numParticles; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    // Draw different particle types
    const drawParticle = (particle: Particle) => {
      const alpha = particle.opacity * (1 - particle.life / particle.maxLife);
      ctx.globalAlpha = alpha;

      switch (particle.type) {
        case 'dot':
          ctx.fillStyle = particle.color;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 3;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;

        case 'star':
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 2;
          
          const spikes = 5;
          const outerRadius = particle.size * 2;
          const innerRadius = particle.size;
          
          ctx.beginPath();
          for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (i * Math.PI) / spikes;
            const x = particle.x + Math.cos(angle) * radius;
            const y = particle.y + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
          break;

        case 'glow':
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 4
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
          ctx.fill();
          break;
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    // Update particle
    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life++;

      // Add subtle attraction to mouse
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150 * 0.01;
        particle.vx += (dx / distance) * force;
        particle.vy += (dy / distance) * force;
      }

      // Apply friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Boundary collision
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8;

      // Keep particles in bounds
      particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      particle.y = Math.max(0, Math.min(canvas.height, particle.y));

      return particle.life < particle.maxLife;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        const alive = updateParticle(particle);
        if (alive) {
          drawParticle(particle);
        }
        return alive;
      });

      // Add new particles occasionally
      if (Math.random() < 0.02 && particlesRef.current.length < 100) {
        particlesRef.current.push(createParticle());
      }

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
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
      transition={{ duration: 3, ease: "easeOut" }}
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default ParticleSystem;
