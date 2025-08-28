import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SentimentOverview = () => {
  const pieData = [
    { name: "Positive", value: 43.8, color: "#10b981" },
    { name: "Neutral", value: 32.7, color: "#ef4444" },
    { name: "Negative", value: 18.4, color: "#f59e0b" },
  ];

  const barData = [
    { name: "Positive", value: 1200, fill: "#10b981" },
    { name: "Neutral", value: 800, fill: "#10b981" },
    { name: "Negative", value: 450, fill: "#ef4444" },
  ];

  const legendData = [
    { label: "0 Negative", color: "#10b981" },
    { label: "5 Neutral", color: "#ef4444" },
    { label: "0 Negative", color: "#f59e0b" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sentiment Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                43.8%
              </div>
              <div className="absolute bottom-4 left-4 text-lg font-bold">
                18.4%
              </div>
              <div className="absolute bottom-4 right-4 text-lg font-bold">
                32.7%
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              {legendData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-64 h-48 ml-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} barCategoryGap="20%">
                <XAxis dataKey="name" axisLine={false} tickLine={false} hide />
                <YAxis hide />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentOverview;