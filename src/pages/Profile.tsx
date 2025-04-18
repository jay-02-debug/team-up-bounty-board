
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
import { useState } from "react";

export default function Profile() {
  const [skills, setSkills] = useState<string[]>([]);
  const [hackathons, setHackathons] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [newHackathon, setNewHackathon] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const addHackathon = () => {
    if (newHackathon.trim() && !hackathons.includes(newHackathon.trim())) {
      setHackathons([...hackathons, newHackathon.trim()]);
      setNewHackathon("");
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create Your Profile</h1>
        
        <div className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="City, Country or Remote" />
          </div>

          <div>
            <Label>Skills</Label>
            <div className="flex gap-2 mb-2">
              <Input 
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add a skill"
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              />
              <Button type="button" onClick={addSkill} size="icon">
                <Plus size={16} />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill}
                  variant="secondary"
                  className="gap-1"
                >
                  {skill}
                  <X 
                    size={14}
                    className="cursor-pointer"
                    onClick={() => setSkills(skills.filter(s => s !== skill))}
                  />
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <Label>Interested Hackathons</Label>
            <div className="flex gap-2 mb-2">
              <Input 
                value={newHackathon}
                onChange={(e) => setNewHackathon(e.target.value)}
                placeholder="Add a hackathon"
                onKeyPress={(e) => e.key === 'Enter' && addHackathon()}
              />
              <Button type="button" onClick={addHackathon} size="icon">
                <Plus size={16} />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {hackathons.map((hackathon) => (
                <Badge 
                  key={hackathon}
                  variant="outline"
                  className="gap-1"
                >
                  {hackathon}
                  <X 
                    size={14}
                    className="cursor-pointer"
                    onClick={() => setHackathons(hackathons.filter(h => h !== hackathon))}
                  />
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea 
              id="bio"
              placeholder="Tell potential teammates about yourself..."
              className="h-32"
            />
          </div>

          <Button className="w-full">Save Profile</Button>
        </div>
      </div>
    </Layout>
  );
}
