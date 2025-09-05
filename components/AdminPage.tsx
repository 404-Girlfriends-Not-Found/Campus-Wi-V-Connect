import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Plus, 
  Users, 
  Eye, 
  Edit, 
  Trash2, 
  Calendar, 
  MapPin, 
  Clock,
  Heart,
  DollarSign,
  Download,
  Filter,
  Search,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('opportunities');
  const [showNewOpportunityForm, setShowNewOpportunityForm] = useState(false);
  const [newOpportunity, setNewOpportunity] = useState({
    title: '',
    type: 'volunteer',
    description: '',
    location: '',
    timeCommitment: '',
    skills: [],
    maxParticipants: '',
    hourlyRate: ''
  });

  const postedOpportunities = [
    {
      id: '1',
      title: 'Community Garden Volunteer',
      type: 'volunteer',
      status: 'active',
      applications: 23,
      maxParticipants: 20,
      filled: 15,
      posted: '2 days ago',
      deadline: 'Sep 10, 2025',
      views: 156,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'Research Assistant',
      type: 'paid',
      status: 'active',
      applications: 45,
      maxParticipants: 3,
      filled: 2,
      posted: '1 week ago',
      deadline: 'Sep 15, 2025',
      views: 234,
      hourlyRate: '$15/hour',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'Campus Tour Guide',
      type: 'paid',
      status: 'paused',
      applications: 38,
      maxParticipants: 10,
      filled: 8,
      posted: '2 weeks ago',
      deadline: 'Ongoing',
      views: 189,
      hourlyRate: '$12/hour',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop'
    }
  ];

  const applications = [
    {
      id: '1',
      applicantName: 'Emma Rodriguez',
      applicantEmail: 'emma.r@university.edu',
      opportunityTitle: 'Community Garden Volunteer',
      appliedDate: '1 day ago',
      status: 'pending',
      experience: 'I have experience with gardening from helping my grandmother with her vegetable garden. I\'m passionate about sustainability and would love to contribute to campus environmental initiatives.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      year: 'Sophomore',
      major: 'Environmental Science'
    },
    {
      id: '2',
      applicantName: 'Michael Chen',
      applicantEmail: 'michael.c@university.edu',
      opportunityTitle: 'Research Assistant',
      appliedDate: '2 days ago',
      status: 'approved',
      experience: 'Strong background in statistics and data analysis. Completed coursework in research methods and have experience with SPSS and R programming.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      year: 'Junior',
      major: 'Psychology'
    },
    {
      id: '3',
      applicantName: 'Sarah Johnson',
      applicantEmail: 'sarah.j@university.edu',
      opportunityTitle: 'Campus Tour Guide',
      appliedDate: '3 days ago',
      status: 'rejected',
      experience: 'I love this campus and want to share my enthusiasm with prospective students. I\'m outgoing and knowledgeable about university programs and student life.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      year: 'Senior',
      major: 'Communications'
    },
    {
      id: '4',
      applicantName: 'Alex Turner',
      applicantEmail: 'alex.t@university.edu',
      opportunityTitle: 'Community Garden Volunteer',
      appliedDate: '5 days ago',
      status: 'pending',
      experience: 'New to gardening but very eager to learn! I\'m interested in sustainable living and want to gain hands-on experience with organic farming practices.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      year: 'Freshman',
      major: 'Business'
    }
  ];

  const talentRequests = [
    {
      id: '1',
      title: 'Social Media Content Creator',
      department: 'Marketing Department',
      budget: '$800/month',
      duration: '3 months',
      skillsNeeded: ['Social Media', 'Content Creation', 'Photography'],
      description: 'Looking for creative student to manage our social media presence and create engaging content.',
      applications: 12,
      status: 'open',
      posted: '3 days ago'
    },
    {
      id: '2',
      title: 'Web Development Intern',
      department: 'IT Services',
      budget: '$16/hour',
      duration: '6 months',
      skillsNeeded: ['React', 'JavaScript', 'CSS'],
      description: 'Help develop and maintain university web applications. Great learning opportunity!',
      applications: 8,
      status: 'open',
      posted: '1 week ago'
    }
  ];

  const analyticsData = {
    totalOpportunities: 15,
    totalApplications: 127,
    activeVolunteers: 85,
    paidPositions: 12,
    thisMonth: {
      newOpportunities: 4,
      newApplications: 23,
      placementRate: 78
    }
  };

  const handleCreateOpportunity = () => {
    if (newOpportunity.title && newOpportunity.description) {
      alert('Opportunity created successfully!');
      setShowNewOpportunityForm(false);
      setNewOpportunity({
        title: '',
        type: 'volunteer',
        description: '',
        location: '',
        timeCommitment: '',
        skills: [],
        maxParticipants: '',
        hourlyRate: ''
      });
    }
  };

  const handleApplicationAction = (applicationId: string, action: 'approve' | 'reject') => {
    alert(`Application ${action}ed successfully!`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'active':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'paused':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage opportunities, applications, and talent requests</p>
        </div>
        <Button onClick={() => setShowNewOpportunityForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Create Opportunity
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{analyticsData.totalOpportunities}</div>
            <div className="text-sm text-muted-foreground">Total Opportunities</div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{analyticsData.totalApplications}</div>
            <div className="text-sm text-muted-foreground">Total Applications</div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{analyticsData.activeVolunteers}</div>
            <div className="text-sm text-muted-foreground">Active Participants</div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{analyticsData.thisMonth.placementRate}%</div>
            <div className="text-sm text-muted-foreground">Placement Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* New Opportunity Form Modal */}
      {showNewOpportunityForm && (
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle>Create New Opportunity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title *</label>
                <Input
                  value={newOpportunity.title}
                  onChange={(e) => setNewOpportunity(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter opportunity title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Type *</label>
                <Select 
                  value={newOpportunity.type} 
                  onValueChange={(value) => setNewOpportunity(prev => ({ ...prev, type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                    <SelectItem value="paid">Paid Position</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description *</label>
              <Textarea
                value={newOpportunity.description}
                onChange={(e) => setNewOpportunity(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe the opportunity, requirements, and benefits"
                rows={4}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <Input
                  value={newOpportunity.location}
                  onChange={(e) => setNewOpportunity(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g., Campus Library"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time Commitment</label>
                <Input
                  value={newOpportunity.timeCommitment}
                  onChange={(e) => setNewOpportunity(prev => ({ ...prev, timeCommitment: e.target.value }))}
                  placeholder="e.g., 10 hours/week"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {newOpportunity.type === 'paid' ? 'Hourly Rate' : 'Max Participants'}
                </label>
                <Input
                  value={newOpportunity.type === 'paid' ? newOpportunity.hourlyRate : newOpportunity.maxParticipants}
                  onChange={(e) => newOpportunity.type === 'paid' 
                    ? setNewOpportunity(prev => ({ ...prev, hourlyRate: e.target.value }))
                    : setNewOpportunity(prev => ({ ...prev, maxParticipants: e.target.value }))
                  }
                  placeholder={newOpportunity.type === 'paid' ? '$15/hour' : '20'}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setShowNewOpportunityForm(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateOpportunity}>
                Create Opportunity
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="opportunities">My Opportunities</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="talent">Talent Requests</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Opportunities Tab */}
        <TabsContent value="opportunities" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Posted Opportunities</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-1" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-1" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {postedOpportunities.map((opportunity) => (
              <Card key={opportunity.id}>
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-1/4">
                      <ImageWithFallback
                        src={opportunity.image}
                        alt={opportunity.title}
                        className="w-full h-32 object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{opportunity.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={opportunity.type === 'paid' ? 'default' : 'secondary'}>
                              {opportunity.type === 'paid' ? (
                                <><DollarSign className="w-3 h-3 mr-1" />Paid</>
                              ) : (
                                <><Heart className="w-3 h-3 mr-1" />Volunteer</>
                              )}
                            </Badge>
                            <Badge className={getStatusColor(opportunity.status)}>
                              {opportunity.status}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                        <div>
                          <div className="text-muted-foreground">Applications</div>
                          <div className="font-semibold">{opportunity.applications}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Filled</div>
                          <div className="font-semibold">{opportunity.filled}/{opportunity.maxParticipants}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Views</div>
                          <div className="font-semibold">{opportunity.views}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Deadline</div>
                          <div className="font-semibold">{opportunity.deadline}</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Posted {opportunity.posted}</span>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Applications Tab */}
        <TabsContent value="applications" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recent Applications</h2>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search applications..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-1" />
                Filter
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {applications.map((application) => (
              <Card key={application.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={application.avatar} />
                      <AvatarFallback>{application.applicantName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{application.applicantName}</h3>
                          <p className="text-sm text-muted-foreground">
                            {application.year} • {application.major}
                          </p>
                          <p className="text-sm text-muted-foreground">{application.applicantEmail}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(application.status)}>
                            {application.status}
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-1">
                            {application.appliedDate}
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="text-sm font-medium mb-1">
                          Applied for: {application.opportunityTitle}
                        </div>
                        <p className="text-sm text-foreground bg-muted p-3 rounded">
                          {application.experience}
                        </p>
                      </div>

                      {application.status === 'pending' && (
                        <div className="flex space-x-2">
                          <Button 
                            size="sm"
                            onClick={() => handleApplicationAction(application.id, 'approve')}
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleApplicationAction(application.id, 'reject')}
                          >
                            <XCircle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Users className="w-4 h-4 mr-1" />
                            View Profile
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Talent Requests Tab */}
        <TabsContent value="talent" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Talent Requests</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Post Talent Request
            </Button>
          </div>

          <div className="grid gap-4">
            {talentRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{request.title}</h3>
                      <p className="text-muted-foreground">{request.department}</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      {request.status}
                    </Badge>
                  </div>

                  <p className="text-foreground mb-4">{request.description}</p>

                  <div className="grid md:grid-cols-4 gap-4 text-sm mb-4">
                    <div>
                      <div className="text-muted-foreground">Budget</div>
                      <div className="font-semibold">{request.budget}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Duration</div>
                      <div className="font-semibold">{request.duration}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Applications</div>
                      <div className="font-semibold">{request.applications}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Posted</div>
                      <div className="font-semibold">{request.posted}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {request.skillsNeeded.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Users className="w-4 h-4 mr-1" />
                        View Applications
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <h2 className="text-xl font-semibold">Analytics Overview</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>New Opportunities</span>
                  <span className="font-semibold">{analyticsData.thisMonth.newOpportunities}</span>
                </div>
                <div className="flex justify-between">
                  <span>New Applications</span>
                  <span className="font-semibold">{analyticsData.thisMonth.newApplications}</span>
                </div>
                <div className="flex justify-between">
                  <span>Placement Rate</span>
                  <span className="font-semibold">{analyticsData.thisMonth.placementRate}%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Performing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium">Most Applied: Research Assistant</div>
                  <div className="text-muted-foreground">45 applications</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Highest Fill Rate: Tour Guide</div>
                  <div className="text-muted-foreground">80% filled</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  View Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}