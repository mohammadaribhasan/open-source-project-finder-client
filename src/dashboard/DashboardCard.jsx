import React from "react";

const DashboardCard = ({ title, value, icon, color }) => {
    return (
        <div
            className={`relative bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 border-l-4 ${color}
      hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
        >
            {/* Icon Circle */}
            <div
                className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl shadow-md ${color}`}
            >
                {icon}
            </div>

            {/* Text Section */}
            <div>
                <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>

            {/* Decorative Glow */}
            <div
                className={`absolute -top-2 -right-2 w-16 h-16 rounded-full blur-3xl opacity-20 ${color}`}
            />
        </div>
    );
};

export default DashboardCard;
