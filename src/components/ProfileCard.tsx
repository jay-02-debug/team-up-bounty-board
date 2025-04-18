
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Code2 } from "lucide-react";

interface ProfileCardProps {
  name: string;
  location: string;
  skills: string[];
  hackathons: string[];
  onMessage: () => void;
}

export default function ProfileCard({ name, location, skills, hackathons, onMessage }: ProfileCardProps) {
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <div className="flex items-center gap-2 text-gray-500 mt-1">
              <MapPin size={16} />
              <span>{location}</span>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code2 size={16} className="text-purple-600" />
              <span className="font-medium">Skills</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} className="text-purple-600" />
              <span className="font-medium">Interested Hackathons</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {hackathons.map((hackathon) => (
                <Badge key={hackathon} variant="outline">{hackathon}</Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-6">
        <Button onClick={onMessage} className="w-full">Message</Button>
      </CardFooter>
    </Card>
  );
}
