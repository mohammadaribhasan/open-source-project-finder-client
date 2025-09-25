import React, { useEffect } from 'react';

const Error = () => {
    useEffect(() => {
        const canvas = document.getElementById('universeCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Stars
        const stars = Array(200).fill().map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.1,
        }));

        // Code rain
        const chars = '01{}();=<>';
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(0);

        const draw = () => {
            // Semi-transparent background for trail effect
            ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            ctx.fillStyle = '#ffffff';
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
                star.y += star.speed;
                if (star.y > canvas.height) star.y = 0;
            });

            // Draw code rain
            ctx.fillStyle = '#00ff9f';
            ctx.font = `${fontSize}px monospace`;
            drops.forEach((y, i) => {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, y * fontSize);
                if (y * fontSize > canvas.height && Math.random() > 0.97) {
                    drops[i] = 0;
                }
                drops[i]++;
            });
        };

        const interval = setInterval(draw, 50);
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="error-container">
            <style>
                {`
          body {
            margin: 0;
            padding: 0;
            background: linear-gradient(180deg, #0a0a14 0%, #1c2526 100%);
            overflow: hidden;
            font-family: 'Courier New', monospace;
          }

          .error-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #e0e0e0;
          }

          .universe-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.7;
          }

          .content {
            position: relative;
            z-index: 1;
            text-align: center;
          }

          .glitch {
            font-size: 9rem;
            font-weight: bold;
            color: #ff0066;
            text-shadow: 0 0 15px rgba(255, 0, 102, 0.8), 0 0 25px rgba(255, 0, 102, 0.5);
            position: relative;
            animation: glitch 0.8s linear infinite;
          }

          .glitch::before,
          .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .glitch::before {
            color: #00ffcc;
            animation: glitch-top 1s linear infinite;
            clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          }

          .glitch::after {
            color: #4b0082;
            animation: glitch-bottom 1.2s linear infinite;
            clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          }

          @keyframes glitch {
            2%, 64% {
              transform: translate(3px, 0) skew(2deg);
            }
            4%, 60% {
              transform: translate(-3px, 0) skew(-2deg);
            }
            62% {
              transform: translate(0, 0) skew(6deg);
            }
          }

          @keyframes glitch-top {
            2%, 64% {
              transform: translate(3px, -3px);
            }
            4%, 60% {
              transform: translate(-3px, 3px);
            }
            62% {
              transform: translate(0, 0) skew(6deg);
            }
          }

          @keyframes glitch-bottom {
            2%, 64% {
              transform: translate(-3px, 0);
            }
            4%, 60% {
              transform: translate(3px, 0);
            }
            62% {
              transform: translate(0, 0) skew(-6deg);
            }
          }

          .message {
            font-size: 2rem;
            color: #b0b0b0;
            margin-top: 1rem;
            text-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
          }

          .code-snippet {
            background: rgba(20, 20, 40, 0.8);
            padding: 2rem;
            border-radius: 10px;
            margin: 2rem auto;
            max-width: 600px;
            box-shadow: 0 0 20px rgba(0, 255, 204, 0.4);
            border: 1px solid #00ffcc;
          }

          .code-snippet code {
            color: #00ffcc;
            font-size: 1.1rem;
            line-height: 1.6;
          }

          .back-link {
            color: #ff00ff;
            font-size: 1.3rem;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .back-link:hover {
            color: #00ffcc;
            text-shadow: 0 0 15px rgba(0, 255, 204, 0.7);
            transform: scale(1.1);
          }

          @media (max-width: 768px) {
            .glitch {
              font-size: 6rem;
            }
            .message {
              font-size: 1.5rem;
            }
            .code-snippet {
              padding: 1.5rem;
              max-width: 90%;
            }
          }
        `}
            </style>
            <canvas id="universeCanvas" className="universe-canvas" />
            <div className="content">
                <h1 className="glitch" data-text="404">404</h1>
                <p className="message">Code lost in the cosmic void. Page not found.</p>
                <div className="code-snippet">
                    <pre>
                        <code>
                            {`// ERROR: 404 - Signal Lost in Nebula
try {
  warpTo(page);
} catch (e) {
  console.error("Stranded in the Code Cosmos!");
}`}
                        </code>
                    </pre>
                </div>
                <a href="/" className="back-link">&lt;&lt; Warp Back to Base</a>
            </div>
        </div>
    );
};

export default Error;