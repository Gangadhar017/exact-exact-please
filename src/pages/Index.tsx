import Navigation from "@/components/Navigation";
import SentimentOverview from "@/components/SentimentOverview";
import StatisticsCards from "@/components/StatisticsCards";
import SentimentChart from "@/components/SentimentChart";
import CommentsTable from "@/components/CommentsTable";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  return (
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
            
            <div className="mb-6">
              <SentimentChart />
            </div>
            
            <CommentsTable />
          </div>
          
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Index;
