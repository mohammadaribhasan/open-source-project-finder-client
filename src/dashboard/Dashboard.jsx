import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DashboardCard from "./DashboardCard";
import { FaUsers, FaDollarSign, FaChartLine, FaPercent } from "react-icons/fa";
import Chart from "chart.js/auto";

const fakeData = {
    metrics: [
        { title: "Total Users", value: "12,345", change: "+5.2%", icon: <FaUsers />, color: "bg-blue-500" },
        { title: "Revenue", value: "$98,765", change: "+3.1%", icon: <FaDollarSign />, color: "bg-green-500" },
        { title: "Active Sessions", value: "1,234", change: "-1.4%", icon: <FaChartLine />, color: "bg-yellow-500" },
        { title: "Conversion Rate", value: "4.8%", change: "+0.9%", icon: <FaPercent />, color: "bg-purple-500" },
    ],
    tableData: [
        { id: 1, user: "John Doe", email: "john@example.com", status: "Active", lastActive: "2025-09-18", revenue: "$1,234" },
        { id: 2, user: "Jane Smith", email: "jane@example.com", status: "Inactive", lastActive: "2025-09-17", revenue: "$567" },
        { id: 3, user: "Alice Johnson", email: "alice@example.com", status: "Active", lastActive: "2025-09-18", revenue: "$2,345" },
        { id: 4, user: "Bob Wilson", email: "bob@example.com", status: "Pending", lastActive: "2025-09-16", revenue: "$890" },
        { id: 5, user: "Emma Brown", email: "emma@example.com", status: "Active", lastActive: "2025-09-19", revenue: "$1,789" },
    ],
    chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Monthly Revenue",
                data: [5000, 7000, 6000, 9000, 8000, 12000],
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    },
};

const Dashboard = () => {
    useEffect(() => {
        const ctx = document.getElementById("revenueChart");
        if (ctx) {
            const chart = new Chart(ctx, {
                type: "line",
                data: fakeData.chartData,
                options: {
                    responsive: true,
                    plugins: { legend: { display: true, position: "top" } },
                },
            });
            return () => chart.destroy();
        }
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gray-100 min-h-screen p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {fakeData.metrics.map((metric, index) => (
                        <DashboardCard key={index} {...metric} />
                    ))}
                </div>

                {/* Chart Section */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Revenue Trend</h2>
                    <canvas id="revenueChart" className="w-full h-64"></canvas>
                </div>

                {/* Data Table */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Detailed User Data</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">ID</th>
                                    <th className="py-3 px-6 text-left">User</th>
                                    <th className="py-3 px-6 text-left">Email</th>
                                    <th className="py-3 px-6 text-left">Status</th>
                                    <th className="py-3 px-6 text-left">Last Active</th>
                                    <th className="py-3 px-6 text-left">Revenue</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm">
                                {fakeData.tableData.map((row) => (
                                    <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6">{row.id}</td>
                                        <td className="py-3 px-6">{row.user}</td>
                                        <td className="py-3 px-6">{row.email}</td>
                                        <td className="py-3 px-6">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs ${row.status === "Active"
                                                        ? "bg-green-100 text-green-700"
                                                        : row.status === "Inactive"
                                                            ? "bg-red-100 text-red-700"
                                                            : "bg-yellow-100 text-yellow-700"
                                                    }`}
                                            >
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-6">{row.lastActive}</td>
                                        <td className="py-3 px-6">{row.revenue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
