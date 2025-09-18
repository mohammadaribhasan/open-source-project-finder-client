import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

const StatsGraph = ({ data }) => {
    // Fake fallback data
    const defaultData = {
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
        values: [12, 19, 7, 15, 22, 30, 25, 28, 35, 40, 32, 45],
    };

    // Ensure valid structure
    const safeData =
        data && Array.isArray(data.labels) && Array.isArray(data.values)
            ? data
            : defaultData;

    const chartData = {
        labels: safeData.labels,
        datasets: [
            {
                label: "Contributions",
                data: safeData.values,
                fill: false,
                borderColor: "rgb(34,197,94)", // Tailwind green-500
                backgroundColor: "rgba(34,197,94,0.2)",
                pointBackgroundColor: "rgb(34,197,94)",
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default StatsGraph;
