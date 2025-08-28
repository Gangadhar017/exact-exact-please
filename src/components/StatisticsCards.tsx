import { BarChart3, TrendingUp } from "lucide-react";

const StatisticsCards = () => {
  const stats = [
    { 
      label: "Total Com", 
      value: "245", 
      icon: <BarChart3 className="w-5 h-5 text-positive" />,
      hasIcon: true 
    },
    { 
      label: "Positive", 
      value: "1200", 
      color: "text-positive" 
    },
    { 
      label: "Neutral", 
      value: "800", 
      color: "text-foreground" 
    },
    { 
      label: "Section", 
      value: "", 
      icon: <TrendingUp className="w-5 h-5 text-positive" />,
      hasIcon: true 
    },
    { 
      label: "Negative", 
      value: "450", 
      color: "text-foreground" 
    },
  ];

  return (
    <div className="flex items-end space-x-12 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-start">
          <div className="flex items-center space-x-1 mb-1">
            {stat.hasIcon && stat.icon}
            <span className={`text-4xl font-bold ${stat.color || "text-foreground"}`}>
              {stat.value}
            </span>
          </div>
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards;