import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CommentsTable = () => {
  const comments = [
    {
      id: "101",
      original: "The penalty should be reduced...",
      sentiment: "Negative",
      summary: "Suggests reducing penalty amount",
      stakeholder: "Company",
    },
    {
      id: "102", 
      original: "The new compliance system is easy...",
      sentiment: "Positive",
      summary: "Appreciates compliance system",
      stakeholder: "Individual",
    },
    {
      id: "103",
      original: "Need clarity on tax reporting...",
      sentiment: "Neutral", 
      summary: "Requests clarity on taxation process",
      stakeholder: "CA/CS",
    },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "Positive": return "text-positive";
      case "Negative": return "text-negative";
      case "Neutral": return "text-neutral";
      default: return "text-foreground";
    }
  };

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Comments Table</CardTitle>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search"
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Comment ID</TableHead>
              <TableHead>Original Comment</TableHead>
              <TableHead>Predicted Sentiment</TableHead>
              <TableHead>Summary</TableHead>
              <TableHead>Stakeholder Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comments.map((comment) => (
              <TableRow key={comment.id}>
                <TableCell className="font-medium">{comment.id}</TableCell>
                <TableCell className="max-w-xs truncate">{comment.original}</TableCell>
                <TableCell className={getSentimentColor(comment.sentiment)}>
                  {comment.sentiment}
                </TableCell>
                <TableCell className="max-w-xs">{comment.summary}</TableCell>
                <TableCell>{comment.stakeholder}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CommentsTable;