"use client";
import React, { useState, useEffect, useRef } from 'react';

const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let stars: { x: number, y: number, z: number }[] = [];
        const numStars = 800;
        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'hsl(var(--foreground))';
            ctx.beginPath();
            stars.forEach(star => {
                const x = (star.x - canvas.width / 2) * (canvas.width / star.z) + canvas.width / 2;
                const y = (star.y - canvas.height / 2) * (canvas.width / star.z) + canvas.height / 2;
                const r = Math.max(0.1, 2.5 * (1 - star.z / canvas.width));
                ctx.moveTo(x, y);
                ctx.arc(x, y, r, 0, 2 * Math.PI);
            });
            ctx.fill();
        };
        
        const update = () => {
            stars.forEach(star => {
                star.z -= 0.7;
                if (star.z <= 0) {
                    star.x = Math.random() * canvas.width;
                    star.y = Math.random() * canvas.height;
                    star.z = canvas.width;
                }
            });
        };

        const animate = () => {
            update();
            draw();
            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        animate();

        window.addEventListener('resize', resize);
        
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };

    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default Starfield;
