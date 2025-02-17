
import { useState } from "react";
import ProfileList from "@/components/ProfileList";
import ProfileCard from "@/components/ProfileCard";
import { Profile } from "@/types/profile";
import { profiles } from "@/data/profiles";

const Index = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4 inline-block">
            Profiles
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Profile Insights</h1>
          <p className="text-gray-600">Discover and analyze influencer profiles</p>
        </header>

        <div className="relative">
          <ProfileList profiles={profiles} onProfileSelect={setSelectedProfile} />
          {selectedProfile && (
            <ProfileCard
              profile={selectedProfile}
              onClose={() => setSelectedProfile(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
