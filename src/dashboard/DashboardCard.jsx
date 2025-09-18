import React from "react";

const DashboardCard = ({ title, value, icon, color }) => {
    return (
        <div className={`flex items-center justify-between p-5 rounded shadow ${color} text-white`}>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-2xl font-bold">{value}</p>
            </div>
            <div className="text-4xl">{icon}</div>
        </div>
    );
};

export default DashboardCard;
