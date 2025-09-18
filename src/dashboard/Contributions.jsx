import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import StatsGraph from "./StatsGraph";

const Contributions = () => {
    const [stats, setStats] = useState({ labels: [], values: [] });

    useEffect(() => {
        // Fake contribution data (like GitHub contributions trend)
        const fakeStats = {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            values: [5, 12, 9, 20, 15, 30, 25, 40, 35, 50, 42, 60],
        };

        // simulate API delay
        setTimeout(() => {
            setStats(fakeStats);
        }, 800);
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gray-100 min-h-screen p-6">
                <h2 className="text-xl font-semibold mb-4">My Contributions</h2>
                <StatsGraph data={stats} />
            </div>
        </div>
    );
};

export default Contributions;
