import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { 
  Calendar, 
  Clock, 
  Heart, 
  Award, 
  TrendingUp, 
  Users, 
  MapPin,
  ArrowRight,
  Star
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DashboardProps {
  user: any;
  onNavigate: (page: string) => void;
}

export default function Dashboard({ user, onNavigate }: DashboardProps) {
  const stats = {
    volunteerHours: 45,
    paidHours: 120,
    eventsAttended: 12,
    achievements: 8
  };

  const upcomingEvents = [
    {
      id: '1',
      title: 'Community Garden Cleanup',
      date: 'Sep 15, 2025',
      time: '2:00 PM',
      type: 'Volunteer',
      location: 'Campus Garden'
    },
    {
      id: '2',
      title: 'Career Fair Setup',
      date: 'Sep 18, 2025',
      time: '8:00 AM',
      type: 'Paid',
      location: 'Student Center'
    },
    {
      id: '3',
      title: 'Blood Drive',
      date: 'Sep 22, 2025',
      time: '10:00 AM',
      type: 'Volunteer',
      location: 'Health Center'
    }
  ];

  const matchedOpportunities = [
    {
      id: '1',
      title: 'Tutoring Program Assistant',
      organization: 'Academic Support Center',
      type: 'Volunteer',
      match: 95,
      skills: ['Communication', 'Mathematics'],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'Social Media Coordinator',
      organization: 'Student Activities',
      type: 'Paid',
      match: 88,
      skills: ['Social Media', 'Design'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'Environmental Club Leader',
      organization: 'Sustainability Office',
      type: 'Volunteer',
      match: 82,
      skills: ['Leadership', 'Environmental Science'],
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop'
    }
  ];

  const recentStories = [
    {
      id: '1',
      author: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Just completed my first week as a campus tour guide! Love showing prospective students around and sharing my university experience.',
      time: '2 hours ago',
      likes: 24
    },
    {
      id: '2',
      author: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Volunteered at the local food bank yesterday. Packed over 200 meals for families in need. Such a rewarding experience!',
      time: '1 day ago',
      likes: 42
    }
  ];

  const achievements = [
    { name: 'First Volunteer', icon: Heart, color: 'text-red-500', earned: true },
    { name: 'Team Player', icon: Users, color: 'text-blue-500', earned: true },
    { name: '50 Hour Club', icon: Clock, color: 'text-green-500', earned: false },
    { name: 'Event Organizer', icon: Calendar, color: 'text-purple-500', earned: true }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg p-6 border border-border">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-primary-foreground/90">
          You've logged {stats.volunteerHours + stats.paidHours} total hours this semester. Keep up the great work!
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all">
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-card-foreground">{stats.volunteerHours}</div>
            <div className="text-sm text-muted-foreground">Volunteer Hours</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all">
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-card-foreground">{stats.paidHours}</div>
            <div className="text-sm text-muted-foreground">Paid Hours</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all">
          <CardContent className="p-4 text-center">
            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-card-foreground">{stats.eventsAttended}</div>
            <div className="text-sm text-muted-foreground">Events Attended</div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all">
          <CardContent className="p-4 text-center">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-card-foreground">{stats.achievements}</div>
            <div className="text-sm text-muted-foreground">Achievements</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Matched Opportunities */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center text-card-foreground">
                <TrendingUp className="w-5 h-5 mr-2" />
                Matched Opportunities
              </CardTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('opportunities')}
                className="text-muted-foreground hover:text-foreground"
              >
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {matchedOpportunities.map((opportunity) => (
                <div key={opportunity.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                  <ImageWithFallback
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-16 h-16 rounded-lg object-cover border border-border"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-card-foreground">{opportunity.title}</h4>
                      <Badge variant={opportunity.type === 'Paid' ? 'default' : 'secondary'} className="bg-primary text-primary-foreground">
                        {opportunity.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{opportunity.organization}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {opportunity.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs border-border text-muted-foreground">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-green-400">
                        <Star className="w-4 h-4 mr-1" />
                        {opportunity.match}% match
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Stories */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Stories</CardTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('stories')}
              >
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentStories.map((story) => (
                <div key={story.id} className="flex space-x-3">
                  <Avatar>
                    <AvatarImage src={story.avatar} />
                    <AvatarFallback>{story.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-sm">{story.author}</span>
                      <span className="text-xs text-gray-500">{story.time}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{story.content}</p>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Heart className="w-3 h-3" />
                      <span>{story.likes} likes</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('events')}
              >
                <Calendar className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm">{event.title}</h4>
                    <Badge variant={event.type === 'Paid' ? 'default' : 'secondary'} className="text-xs">
                      {event.type}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Progress Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">This Month's Goals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Volunteer Hours</span>
                  <span>12/20</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Events Attended</span>
                  <span>2/5</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={achievement.name}
                      className={`p-3 border rounded-lg text-center ${
                        achievement.earned ? 'bg-gray-50' : 'opacity-50'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-1 ${achievement.color}`} />
                      <div className="text-xs font-medium">{achievement.name}</div>
                    </div>
                  );
                })}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-3"
                onClick={() => onNavigate('profile')}
              >
                View All
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}