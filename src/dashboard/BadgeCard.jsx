import React from "react";

const BadgeCard = ({ badge }) => {
    return (
        <div className="bg-yellow-300 p-4 rounded shadow hover:shadow-lg transition duration-200 flex flex-col items-center justify-center">
            <div className="text-3xl mb-2">{badge.icon || "🏆"}</div>
            <h3 className="font-semibold text-lg">{badge.name}</h3>
            <p className="text-gray-700 text-sm text-center mt-1">{badge.description}</p>
        </div>
    );
};

export default BadgeCard;
