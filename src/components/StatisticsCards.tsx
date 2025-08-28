import { BarChart3, TrendingUp } from "lucide-react";

const StatisticsCards = () => {
  const stats = [
    { 
      label: "Total Com", 
      value: "245", 
      icon: <BarChart3 className="w-5 h-5 text-primary" />,
      trend: true 
    },
    { 
      label: "Positive", 
      value: "1200", 
      color: "text-positive" 
    },
    { 
      label: "Neutral", 
      value: "800", 
      color: "text-neutral" 
    },
    { 
      label: "Section", 
      value: "800", 
      icon: <TrendingUp className="w-5 h-5 text-positive" />,
      trend: true 
    },
    { 
      label: "Negative", 
      value: "450", 
      color: "text-negative" 
    },
  ];

  return (
    <div className="flex space-x-8 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-2">
            {stat.icon && stat.icon}
            {stat.trend && (
              <span className={`text-3xl font-bold ${stat.color || "text-foreground"}`}>
                {stat.value}
              </span>
            )}
            {!stat.trend && (
              <span className={`text-3xl font-bold ${stat.color || "text-foreground"}`}>
                {stat.value}
              </span>
            )}
          </div>
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards;