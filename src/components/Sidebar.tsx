import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Sidebar = () => {
  const wordCloudWords = [
    { text: "Compliance", size: "text-4xl", color: "text-primary" },
    { text: "Penalty", size: "text-2xl", color: "text-foreground" },
    { text: "Taxation", size: "text-2xl", color: "text-foreground" },
    { text: "Simplify", size: "text-3xl", color: "text-primary" },
    { text: "Reporting", size: "text-xl", color: "text-muted-foreground" },
    { text: "Deadline", size: "text-xl", color: "text-muted-foreground" },
  ];

  return (
    <div className="w-80 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Collective Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Most stakeholders are supportive of simplifying compliance. However, many
            raised concerns about penalties. Several requested clarity in
            taxation rules.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Word Cloud</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 items-center justify-center py-8">
            {wordCloudWords.map((word, index) => (
              <span
                key={index}
                className={`${word.size} ${word.color} font-bold leading-tight`}
              >
                {word.text}
              </span>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            <Button className="w-full" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Developed by Team XYZ - SIH 2025
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;