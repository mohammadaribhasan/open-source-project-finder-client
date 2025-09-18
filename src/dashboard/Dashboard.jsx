import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DashboardCard from "./DashboardCard";
import ProjectCard from "../components/ProjectCard";
import StatsGraph from "./StatsGraph";
import ActivityFeed from "./ActivityFeed";
import { FaStar, FaProjectDiagram, FaBookmark } from "react-icons/fa";
import axios from "axios";

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [activities, setActivities] = useState([]);
    const [stats, setStats] = useState({ labels: [], values: [] });

    useEffect(() => {
        // Example API calls
        const fetchData = async () => {
            try {
                const projRes = await axios.get("http://localhost:5000/api/projects/trending");
                setProjects(projRes.data);

                const actRes = await axios.get("http://localhost:5000/api/users/1/activities");
                setActivities(actRes.data);

                const statRes = await axios.get("http://localhost:5000/api/users/1/contributions");
                setStats({ labels: statRes.data.labels, values: statRes.data.values });
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gray-100 min-h-screen">
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DashboardCard title="Total Stars" value="1200" icon={<FaStar />} color="bg-green-500" />
                    <DashboardCard title="Projects" value="75" icon={<FaProjectDiagram />} color="bg-blue-500" />
                    <DashboardCard title="Bookmarks" value="20" icon={<FaBookmark />} color="bg-yellow-500" />
                </div>

                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <h2 className="font-semibold text-xl mb-3">Contribution Stats</h2>
                        <StatsGraph data={stats} />
                    </div>

                    <div>
                        <ActivityFeed activities={activities} />
                    </div>
                </div>

                <div className="p-6">
                    <h2 className="font-semibold text-xl mb-3">Trending Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {projects.map((proj) => (
                            <ProjectCard key={proj._id} project={proj} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
