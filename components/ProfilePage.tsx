import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Edit, 
  Award, 
  Clock, 
  Heart, 
  Calendar, 
  Users, 
  TrendingUp,
  MapPin,
  Mail,
  Phone,
  Globe,
  Download,
  Share2,
  Star,
  Trophy,
  Target,
  DollarSign
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfilePageProps {
  user: any;
}

export default function ProfilePage({ user }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const profileData = {
    ...user,
    year: 'Junior',
    major: 'Computer Science',
    bio: 'Passionate about technology and community service. Love connecting with people and making a positive impact through volunteer work and academic projects.',
    location: 'University Campus',
    phone: '(555) 123-4567',
    website: 'https://alexjohnson.dev',
    joinDate: 'August 2023',
    stats: {
      totalHours: 165,
      volunteerHours: 45,
      paidHours: 120,
      eventsAttended: 18,
      achievementsEarned: 12,
      storiesPosted: 8,
      opportunitiesCompleted: 6
    }
  };

  const achievements = [
    {
      id: '1',
      name: 'First Volunteer',
      description: 'Completed your first volunteer opportunity',
      icon: Heart,
      color: 'text-red-500',
      earned: true,
      earnedDate: 'Sep 5, 2023'
    },
    {
      id: '2',
      name: 'Team Player',
      description: 'Participated in 5 group activities',
      icon: Users,
      color: 'text-blue-500',
      earned: true,
      earnedDate: 'Nov 12, 2023'
    },
    {
      id: '3',
      name: 'Dedicated Volunteer',
      description: 'Complete 25 volunteer hours',
      icon: Clock,
      color: 'text-green-500',
      earned: true,
      earnedDate: 'Jan 20, 2024'
    },
    {
      id: '4',
      name: '50 Hour Club',
      description: 'Log 50 total hours',
      icon: Trophy,
      color: 'text-yellow-500',
      earned: true,
      earnedDate: 'Mar 15, 2024'
    },
    {
      id: '5',
      name: 'Event Organizer',
      description: 'Help organize 3 campus events',
      icon: Calendar,
      color: 'text-purple-500',
      earned: true,
      earnedDate: 'May 8, 2024'
    },
    {
      id: '6',
      name: 'Community Leader',
      description: 'Lead a volunteer project',
      icon: Star,
      color: 'text-orange-500',
      earned: true,
      earnedDate: 'Jun 22, 2024'
    },
    {
      id: '7',
      name: '100 Hour Hero',
      description: 'Log 100 total hours',
      icon: Award,
      color: 'text-indigo-500',
      earned: true,
      earnedDate: 'Aug 10, 2024'
    },
    {
      id: '8',
      name: 'Mentor',
      description: 'Mentor new volunteers',
      icon: Users,
      color: 'text-teal-500',
      earned: false,
      earnedDate: null
    },
    {
      id: '9',
      name: '200 Hour Champion',
      description: 'Log 200 total hours',
      icon: Target,
      color: 'text-pink-500',
      earned: false,
      earnedDate: null
    }
  ];

  const activities = [
    {
      id: '1',
      title: 'Community Garden Volunteer',
      type: 'volunteer',
      organization: 'Campus Sustainability',
      duration: '3 months',
      hoursLogged: 15,
      status: 'active',
      startDate: 'Aug 2024',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'Research Assistant',
      type: 'paid',
      organization: 'Computer Science Dept',
      duration: '6 months',
      hoursLogged: 80,
      status: 'active',
      startDate: 'Jun 2024',
      hourlyRate: '$15/hour',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'Campus Tour Guide',
      type: 'paid',
      organization: 'Admissions Office',
      duration: '4 months',
      hoursLogged: 40,
      status: 'completed',
      startDate: 'Feb 2024',
      endDate: 'May 2024',
      hourlyRate: '$12/hour',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop'
    },
    {
      id: '4',
      title: 'Food Bank Volunteer',
      type: 'volunteer',
      organization: 'Student Affairs',
      duration: '2 months',
      hoursLogged: 20,
      status: 'completed',
      startDate: 'Jan 2024',
      endDate: 'Mar 2024',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&h=200&fit=crop'
    }
  ];

  const monthlyGoals = [
    {
      name: 'Volunteer Hours',
      current: 8,
      target: 15,
      progress: 53
    },
    {
      name: 'Events Attended',
      current: 2,
      target: 4,
      progress: 50
    },
    {
      name: 'New Connections',
      current: 5,
      target: 10,
      progress: 50
    }
  ];

  const skillsGained = [
    'Leadership', 'Communication', 'Project Management', 'Research', 
    'Data Analysis', 'Public Speaking', 'Event Planning', 'Teamwork'
  ];

  const generateReport = () => {
    alert('Generating comprehensive activity report...');
  };

  const shareProfile = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Profile link copied to clipboard!');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Profile Header */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="w-24 h-24 border-2 border-border">
              <AvatarImage src={profileData.avatar} />
              <AvatarFallback className="text-2xl bg-accent text-accent-foreground">{profileData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-1 text-card-foreground">{profileData.name}</h1>
                  <p className="text-lg text-muted-foreground mb-2">
                    {profileData.year} • {profileData.major}
                  </p>
                  <p className="text-card-foreground">{profileData.bio}</p>
                </div>
                <div className="flex space-x-2 mt-4 sm:mt-0">
                  <Button variant="outline" size="sm" onClick={shareProfile}>
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  <Button size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit Profile
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{profileData.stats.totalHours}</div>
                  <div className="text-sm text-muted-foreground">Total Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{profileData.stats.volunteerHours}</div>
                  <div className="text-sm text-muted-foreground">Volunteer Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{profileData.stats.eventsAttended}</div>
                  <div className="text-sm text-muted-foreground">Events Attended</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{profileData.stats.achievementsEarned}</div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {profileData.location}
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  {profileData.email}
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  {profileData.phone}
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-1" />
                  <a href={profileData.website} className="text-blue-600 hover:underline">
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Monthly Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  September Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {monthlyGoals.map((goal, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{goal.name}</span>
                      <span>{goal.current}/{goal.target}</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.filter(a => a.earned).slice(-3).reverse().map((achievement) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={achievement.id} className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full bg-gray-100 ${achievement.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{achievement.name}</div>
                          <div className="text-xs text-gray-500">{achievement.earnedDate}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Skills Gained */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Skills Gained
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsGained.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Active Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle>Active Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {activities.filter(activity => activity.status === 'active').map((activity) => (
                  <div key={activity.id} className="flex space-x-4 p-4 border rounded-lg">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold">{activity.title}</h4>
                        <Badge variant={activity.type === 'paid' ? 'default' : 'secondary'}>
                          {activity.type === 'paid' ? (
                            <><DollarSign className="w-3 h-3 mr-1" />Paid</>
                          ) : (
                            <><Heart className="w-3 h-3 mr-1" />Volunteer</>
                          )}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{activity.organization}</p>
                      <div className="text-xs text-gray-500">
                        {activity.hoursLogged} hours logged • Started {activity.startDate}
                      </div>
                      {activity.type === 'paid' && activity.hourlyRate && (
                        <div className="text-xs text-green-600 mt-1">{activity.hourlyRate}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Activities Tab */}
        <TabsContent value="activities" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">All Activities</h2>
            <Button onClick={generateReport}>
              <Download className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>

          <div className="grid gap-4">
            {activities.map((activity) => (
              <Card key={activity.id}>
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-1/4">
                      <ImageWithFallback
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-32 object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{activity.title}</h3>
                          <p className="text-gray-600">{activity.organization}</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={activity.status === 'active' ? 'default' : 'secondary'}
                            className="mb-2"
                          >
                            {activity.status}
                          </Badge>
                          <div>
                            <Badge variant={activity.type === 'paid' ? 'outline' : 'secondary'}>
                              {activity.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Duration</div>
                          <div className="font-medium">{activity.duration}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Hours Logged</div>
                          <div className="font-medium">{activity.hoursLogged}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Started</div>
                          <div className="font-medium">{activity.startDate}</div>
                        </div>
                        {activity.type === 'paid' && activity.hourlyRate && (
                          <div>
                            <div className="text-gray-500">Rate</div>
                            <div className="font-medium text-green-600">{activity.hourlyRate}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Achievements Showcase</h2>
            <p className="text-gray-600">
              You've earned {achievements.filter(a => a.earned).length} out of {achievements.length} achievements
            </p>
            <Progress 
              value={(achievements.filter(a => a.earned).length / achievements.length) * 100} 
              className="max-w-md mx-auto mt-4"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={achievement.id} 
                  className={`text-center ${achievement.earned ? 'border-green-200 bg-green-50' : 'opacity-60'}`}
                >
                  <CardContent className="p-6">
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      achievement.earned ? 'bg-white' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${achievement.earned ? achievement.color : 'text-gray-400'}`} />
                    </div>
                    <h3 className="font-semibold mb-2">{achievement.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                    {achievement.earned ? (
                      <Badge className="bg-green-500">
                        Earned {achievement.earnedDate}
                      </Badge>
                    ) : (
                      <Badge variant="outline">
                        Not yet earned
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Activity Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Opportunities</span>
                    <span className="font-semibold">{profileData.stats.opportunitiesCompleted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stories Posted</span>
                    <span className="font-semibold">{profileData.stats.storiesPosted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Member Since</span>
                    <span className="font-semibold">{profileData.joinDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Volunteer vs Paid</span>
                      <span>{Math.round((profileData.stats.volunteerHours / profileData.stats.totalHours) * 100)}% volunteer</span>
                    </div>
                    <Progress 
                      value={(profileData.stats.volunteerHours / profileData.stats.totalHours) * 100} 
                      className="h-2"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    Estimated community impact: <span className="font-semibold">$1,350</span> value
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">+25%</div>
                  <p className="text-sm text-gray-600">
                    Increase in monthly activity compared to last semester
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Activity Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold">June</div>
                  <div className="text-sm text-gray-600">25 hours</div>
                </div>
                <div>
                  <div className="text-lg font-semibold">July</div>
                  <div className="text-sm text-gray-600">32 hours</div>
                </div>
                <div>
                  <div className="text-lg font-semibold">August</div>
                  <div className="text-sm text-gray-600">28 hours</div>
                </div>
                <div>
                  <div className="text-lg font-semibold">September</div>
                  <div className="text-sm text-gray-600">18 hours (so far)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}