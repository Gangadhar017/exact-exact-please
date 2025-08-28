import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Sidebar = () => {
  const wordCloudWords = [
    { text: "Compliance", size: "text-6xl", color: "text-primary", weight: "font-bold" },
    { text: "Penalty", size: "text-2xl", color: "text-primary", weight: "font-normal" },
    { text: "Taxation", size: "text-2xl", color: "text-primary", weight: "font-normal" },
    { text: "Simplify", size: "text-4xl", color: "text-primary", weight: "font-bold" },
    { text: "Reporting", size: "text-2xl", color: "text-primary", weight: "font-normal" },
    { text: "Deadline", size: "text-4xl", color: "text-primary", weight: "font-bold" },
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
          <div className="flex flex-wrap gap-3 items-center justify-center py-8 min-h-[200px]">
            {wordCloudWords.map((word, index) => (
              <span
                key={index}
                className={`${word.size} ${word.color} ${word.weight} leading-tight`}
              >
                {word.text}
              </span>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
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