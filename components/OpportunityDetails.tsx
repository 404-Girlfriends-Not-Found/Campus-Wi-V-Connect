import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Textarea } from './ui/textarea';
import { Separator } from './ui/separator';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Calendar, 
  Users, 
  Heart,
  DollarSign,
  Building,
  Mail,
  Phone,
  Globe,
  Share2,
  Bookmark,
  Star
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OpportunityDetailsProps {
  opportunityId: string | null;
  onBack: () => void;
}

export default function OpportunityDetails({ opportunityId, onBack }: OpportunityDetailsProps) {
  const [applicationText, setApplicationText] = useState('');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock data - in real app this would come from API
  const opportunity = {
    id: '1',
    title: 'Community Garden Volunteer',
    organization: 'Campus Sustainability Office',
    type: 'volunteer',
    location: 'Campus Community Garden, Building A',
    timeCommitment: '4 hours/week',
    duration: '3 months',
    startDate: 'September 15, 2025',
    participants: 15,
    maxParticipants: 20,
    skills: ['Gardening', 'Physical Work', 'Teamwork', 'Environmental Awareness'],
    description: `Join our campus community garden team and help create a sustainable food source for the university community. This hands-on opportunity allows you to learn about organic gardening, sustainable agriculture practices, and food security while contributing to campus sustainability goals.

You'll work alongside fellow students, faculty, and community members to maintain garden beds, plant seasonal crops, harvest produce, and participate in educational workshops. This is a perfect opportunity for those interested in environmental science, sustainability, or simply wanting to connect with nature and the community.

No prior gardening experience required - we'll provide all the training and tools you need! This role offers flexible scheduling and the satisfaction of seeing your efforts grow (literally) throughout the semester.`,
    requirements: [
      'Ability to work outdoors in various weather conditions',
      'Willingness to learn sustainable gardening practices',
      'Basic physical fitness for gardening tasks',
      'Commitment to full 3-month duration',
      'Attend weekly team meetings'
    ],
    benefits: [
      'Learn sustainable agriculture practices',
      'Fresh produce to take home',
      'Community service hours for transcripts',
      'Networking with sustainability professionals',
      'Hands-on environmental education'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop',
    posted: '2 days ago',
    deadline: 'September 10, 2025',
    urgent: false,
    poster: {
      name: 'Dr. Sarah Green',
      title: 'Sustainability Coordinator',
      email: 's.green@university.edu',
      phone: '(555) 123-4567',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    talentRequest: {
      budget: null,
      expertise: 'Environmental Science, Agriculture, Community Organizing',
      duration: '3 months',
      workType: 'On-site'
    }
  };

  const handleApply = () => {
    if (opportunity.type === 'volunteer') {
      // For volunteer positions, show application form
      setShowApplicationForm(true);
    } else {
      // For paid positions, direct apply
      alert('Application submitted! You will receive a confirmation email shortly.');
    }
  };

  const handleSubmitApplication = () => {
    alert('Application submitted successfully! You will hear back within 3-5 business days.');
    setShowApplicationForm(false);
    setApplicationText('');
  };

  const similarOpportunities = [
    {
      id: '2',
      title: 'Environmental Club Leader',
      organization: 'Student Activities',
      type: 'volunteer',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'Sustainability Research Assistant',
      organization: 'Environmental Science Dept',
      type: 'paid',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=300&h=200&fit=crop'
    }
  ];

  if (!opportunity) {
    return (
      <div className="p-6 text-center">
        <p>Opportunity not found.</p>
        <Button onClick={onBack} className="mt-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Opportunities
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Opportunities
      </Button>

      {/* Header Image */}
      <div className="relative">
        <ImageWithFallback
          src={opportunity.image}
          alt={opportunity.title}
          className="w-full h-64 md:h-80 object-cover rounded-lg"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </Button>
          <Button variant="secondary" size="sm">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
        {opportunity.urgent && (
          <Badge className="absolute top-4 left-4 bg-red-500">
            Urgent
          </Badge>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title and Basic Info */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{opportunity.title}</h1>
                  <div className="flex items-center text-lg text-gray-600 mb-2">
                    <Building className="w-5 h-5 mr-2" />
                    {opportunity.organization}
                  </div>
                </div>
                <Badge 
                  className={`text-lg px-3 py-1 ${
                    opportunity.type === 'paid' 
                      ? 'bg-green-500' 
                      : 'bg-blue-500'
                  }`}
                >
                  {opportunity.type === 'paid' ? (
                    <><DollarSign className="w-4 h-4 mr-1" />Paid Position</>
                  ) : (
                    <><Heart className="w-4 h-4 mr-1" />Volunteer</>
                  )}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  {opportunity.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  {opportunity.timeCommitment}
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  Starts {opportunity.startDate}
                </div>
                {opportunity.type === 'volunteer' && (
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    {opportunity.participants}/{opportunity.maxParticipants} participants
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {opportunity.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>About This Opportunity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {opportunity.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Requirements and Benefits */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {opportunity.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {opportunity.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          {showApplicationForm && (
            <Card>
              <CardHeader>
                <CardTitle>Submit Your Application</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Why are you interested in this opportunity? *
                  </label>
                  <Textarea
                    placeholder="Tell us about your interest and relevant experience..."
                    value={applicationText}
                    onChange={(e) => setApplicationText(e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="flex space-x-3">
                  <Button onClick={handleSubmitApplication} disabled={!applicationText.trim()}>
                    Submit Application
                  </Button>
                  <Button variant="outline" onClick={() => setShowApplicationForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Apply/Join Button */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="text-sm text-gray-600">
                  Application Deadline: {opportunity.deadline}
                </div>
                <Button 
                  onClick={handleApply} 
                  size="lg" 
                  className="w-full"
                  disabled={showApplicationForm}
                >
                  {opportunity.type === 'paid' ? 'Apply Now' : 'Join This Opportunity'}
                </Button>
                <div className="text-xs text-gray-500">
                  Posted {opportunity.posted}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3 mb-4">
                <Avatar>
                  <AvatarImage src={opportunity.poster.avatar} />
                  <AvatarFallback>{opportunity.poster.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{opportunity.poster.name}</div>
                  <div className="text-sm text-gray-600">{opportunity.poster.title}</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  <a href={`mailto:${opportunity.poster.email}`} className="text-blue-600 hover:underline">
                    {opportunity.poster.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  <a href={`tel:${opportunity.poster.phone}`} className="text-blue-600 hover:underline">
                    {opportunity.poster.phone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Talent Request Info (for paid positions) */}
          {opportunity.type === 'paid' && opportunity.talentRequest && (
            <Card>
              <CardHeader>
                <CardTitle>Position Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm font-medium">Duration</div>
                  <div className="text-sm text-gray-600">{opportunity.talentRequest.duration}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Work Type</div>
                  <div className="text-sm text-gray-600">{opportunity.talentRequest.workType}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Preferred Expertise</div>
                  <div className="text-sm text-gray-600">{opportunity.talentRequest.expertise}</div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Similar Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle>Similar Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {similarOpportunities.map((similar) => (
                <div key={similar.id} className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <ImageWithFallback
                    src={similar.image}
                    alt={similar.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1">{similar.title}</h4>
                    <p className="text-xs text-gray-600 mb-1">{similar.organization}</p>
                    <Badge variant={similar.type === 'paid' ? 'default' : 'secondary'} className="text-xs">
                      {similar.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}