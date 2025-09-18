import React, { useEffect, useState } from "react";
import icons from "../icon";
import hero from "../assets/hero_banner.png";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % icons.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className=" h-screen flex items-center"
            style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center w-full">
                {/* Left Text */}
                <div className="text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-indigo-300 leading-tight">
                        Discover the World of <span className="text-yellow-300 text-4xl md:text-6xl">Programming...</span>
                    </h1>
                </div>

                {/* Right Carousel */}
                <div className="relative h-72 flex items-center justify-center overflow-hidden">
                    {icons.map((item, index) => {
                        const offset = index - currentIndex;
                        const isFront = offset === 0;

                        if (offset < -2 || offset > 2) return null;

                        return (
                            <div
                                key={index}
                                className="absolute transition-all duration-500"
                                style={{
                                    transform: `translateX(${offset * 100}px) scale(${isFront ? 3 : 1.2})`,
                                    zIndex: isFront ? 10 : 5,
                                    opacity: isFront ? 1 : 0.6,
                                    color: "black",
                                    filter: `drop-shadow(0 0 10px ${item.color}) drop-shadow(0 0 20px ${item.color})`,
                                    fontSize: isFront ? "4rem" : "2rem",
                                }}
                            >
                                {item.icon}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Hero;
