
import Layout from "@/components/Layout";
import SearchFilters from "@/components/SearchFilters";
import ProfileCard from "@/components/ProfileCard";
import { toast } from "@/components/ui/use-toast";

export default function Index() {
  // Sample data - in a real app this would come from an API
  const profiles = [
    {
      name: "Alex Chen",
      location: "San Francisco, CA",
      skills: ["React", "TypeScript", "Node.js"],
      hackathons: ["ETHGlobal", "Hackathon 2024"],
    },
    {
      name: "Sarah Johnson",
      location: "Remote",
      skills: ["UI/UX", "Figma", "Frontend"],
      hackathons: ["Online Hack Fest", "Design Sprint"],
    },
    {
      name: "Mike Williams",
      location: "London, UK",
      skills: ["Python", "Django", "AWS"],
      hackathons: ["Web3 Jam", "AI Hackathon"],
    },
  ];

  const handleMessage = () => {
    toast({
      title: "Message Sent!",
      description: "Your teammate has been notified.",
    });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Hackathon Teammate
          </h1>
          <p className="text-xl text-gray-600">
            Connect with developers, designers, and creators for your next hackathon
          </p>
        </div>

        <SearchFilters />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.name}
              {...profile}
              onMessage={handleMessage}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
