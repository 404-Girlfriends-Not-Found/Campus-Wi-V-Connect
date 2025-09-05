"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Heart, Award, MapPin } from "lucide-react";

interface User {
  id: string;
  email: string;
  user_metadata: {
    name?: string;
    avatar_url?: string;
  };
}

export default function StudentDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    const getUser = async () => {
      const {
        data: { user: supaUser },
        error,
      } = await supabase.auth.getUser();

      if (error) console.error("Failed to fetch user:", error.message);
      else if (supaUser)
        setUser({
          id: supaUser.id,
          email: supaUser.email || "no-email@example.com",
          user_metadata: {
            name: supaUser.user_metadata?.name,
            avatar_url: supaUser.user_metadata?.avatar_url,
          },
        });

      setLoading(false);
    };

    getUser();
  }, []);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!user) return <p className="text-center mt-20">Not signed in.</p>;

  const stats = {
    volunteerHours: 45,
    paidHours: 120,
    eventsAttended: 12,
    achievements: 8,
  };
  const upcomingEvents = [
    {
      id: "1",
      title: "Community Garden Cleanup",
      date: "Sep 15, 2025",
      time: "2:00 PM",
      type: "Volunteer",
      location: "Campus Garden",
    },
    {
      id: "2",
      title: "Career Fair Setup",
      date: "Sep 18, 2025",
      time: "8:00 AM",
      type: "Paid",
      location: "Student Center",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r  rounded-lg p-6 border border-border flex items-center space-x-4">
        {user.user_metadata.avatar_url ? (
          <img
            src={user.user_metadata.avatar_url}
            alt={user.user_metadata.name || "User Avatar"}
            className="w-16 h-16 rounded-full object-cover border border-border"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white">
            {user.user_metadata.name?.charAt(0) || "U"}
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold">
            Welcome back, {user.user_metadata.name || user.email}!
          </h1>
          <p className="text-white">
            You&apos;ve logged {stats.volunteerHours + stats.paidHours} total
            hours this semester.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border text-center">
          <CardContent className="p-4">
            <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">{stats.volunteerHours}</div>
            <div className="text-sm text-muted-foreground">Volunteer Hours</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border text-center">
          <CardContent className="p-4">
            <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">{stats.paidHours}</div>
            <div className="text-sm text-muted-foreground">Paid Hours</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border text-center">
          <CardContent className="p-4">
            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">{stats.eventsAttended}</div>
            <div className="text-sm text-muted-foreground">Events Attended</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border text-center">
          <CardContent className="p-4">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">{stats.achievements}</div>
            <div className="text-sm text-muted-foreground">Achievements</div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-sm">{event.title}</h4>
                <Badge
                  variant={event.type === "Paid" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {event.type}
                </Badge>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" /> {event.date} at{" "}
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" /> {event.location}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
