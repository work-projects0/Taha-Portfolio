import React, { useEffect, useRef } from "react";

const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const layerCount = 3;
    const speeds = [0.05, 0.1, 0.2];
    const baseStarCount = 50;
    let shootingStar = null;
    let animationFrameId;

    // Initialize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    // Create stars
    const createStars = () => {
      stars = [];
      const scalingFactor = Math.max(canvas.width, canvas.height) / 1000;

      for (let i = 0; i < layerCount; i++) {
        const starCount = Math.floor(baseStarCount * scalingFactor * (i + 1));
        for (let j = 0; j < starCount; j++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (i + 1) + 0.5,
            speed: speeds[i],
            opacity: Math.random(),
            baseOpacity: Math.random() * 0.5 + 0.5,
            layer: i,
          });
        }
      }
    };

    // Update stars
    const updateStars = () => {
      stars.forEach((star) => {
        star.y -= star.speed;
        star.opacity =
          star.baseOpacity + Math.sin(Date.now() * 0.001 * star.speed) * 0.3;

        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
    };

    // Draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 8,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });
    };

    // Shooting star functions
    const createShootingStar = () => {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      const angle = Math.random() * Math.PI * 2;
      const length = Math.random() * 300 + 100;
      const speed = Math.random() * 4 + 2;

      shootingStar = {
        x: startX,
        y: startY,
        length: length,
        speed: speed,
        opacity: 1,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
      };

      const nextAppearance = Math.random() * 20000 + 20000;
      setTimeout(createShootingStar, nextAppearance);
    };

    const updateShootingStar = () => {
      if (!shootingStar) return;
      shootingStar.x += shootingStar.dx;
      shootingStar.y += shootingStar.dy;
      shootingStar.opacity -= 0.01;

      if (
        shootingStar.opacity <= 0 ||
        shootingStar.x < 0 ||
        shootingStar.x > canvas.width ||
        shootingStar.y < 0 ||
        shootingStar.y > canvas.height
      ) {
        shootingStar = null;
      }
    };

    const drawShootingStar = () => {
      if (!shootingStar) return;
      const gradient = ctx.createLinearGradient(
        shootingStar.x,
        shootingStar.y,
        shootingStar.x - shootingStar.dx * shootingStar.length,
        shootingStar.y - shootingStar.dy * shootingStar.length
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(
        shootingStar.x - shootingStar.dx * shootingStar.length,
        shootingStar.y - shootingStar.dy * shootingStar.length
      );
      ctx.stroke();
      ctx.closePath();
    };

    // Animation loop
    const animate = () => {
      updateStars();
      updateShootingStar();
      drawStars();
      drawShootingStar();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    setTimeout(createShootingStar, Math.random() * 20000 + 20000);
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "70%",
        height: "90%",
        transform: "translate(-50%, -50%)", // يحط الدايرة في النص
        borderRadius: "40%", // يخليها دايرة
        zIndex: -1,
      }}
    />
  );
};

export default StarfieldBackground;
