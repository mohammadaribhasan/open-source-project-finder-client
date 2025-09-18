import React from "react";

const ActivityFeed = ({ activities }) => {
    return (
        <div className="bg-white shadow rounded p-4">
            <h3 className="font-semibold text-lg mb-2">Recent Activity</h3>
            <ul className="flex flex-col gap-2">
                {activities.map((act, idx) => (
                    <li key={idx} className="border-b border-gray-200 pb-2">
                        <span className="text-gray-700">{act.message}</span>
                        <span className="text-gray-400 text-xs block">{act.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityFeed;
