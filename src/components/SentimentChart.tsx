import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const SentimentChart = () => {
  const data = [
    { name: "Positive", value: 1200, fill: "#10b981" },
    { name: "Neutral", value: 800, fill: "#f59e0b" },
    { name: "Negative", value: 450, fill: "#ef4444" },
  ];

  return (
    <div className="w-96 h-48 mb-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentChart;