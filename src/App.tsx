import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import SentimentOverview from "@/components/SentimentOverview";
import StatisticsCards from "@/components/StatisticsCards";
import CommentsTable from "@/components/CommentsTable";
import Sidebar from "@/components/Sidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="p-6">
          <div className="flex gap-6">
            <div className="flex-1">
              <div className="mb-6">
                <SentimentOverview />
              </div>
              
              <div className="mb-6">
                <StatisticsCards />
              </div>
              
              <CommentsTable />
            </div>
            
            <Sidebar />
          </div>
        </main>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
