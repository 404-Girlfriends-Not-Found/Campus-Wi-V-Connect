import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Users, 
  Heart,
  DollarSign,
  Calendar,
  Building,
  X
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OpportunitiesPageProps {
  onOpportunityClick: (id: string) => void;
}

export default function OpportunitiesPage({ onOpportunityClick }: OpportunitiesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const opportunities = [
    {
      id: '1',
      title: 'Community Garden Volunteer',
      organization: 'Campus Sustainability',
      type: 'volunteer',
      location: 'On Campus',
      timeCommitment: '4 hours/week',
      participants: 15,
      maxParticipants: 20,
      skills: ['Gardening', 'Physical Work', 'Teamwork'],
      description: 'Help maintain the campus community garden and teach sustainable practices.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop',
      posted: '2 days ago',
      urgent: false
    },
    {
      id: '2',
      title: 'Research Assistant',
      organization: 'Psychology Department',
      type: 'paid',
      location: 'Psychology Building',
      timeCommitment: '15 hours/week',
      hourlyRate: '$15/hour',
      skills: ['Research', 'Data Analysis', 'SPSS'],
      description: 'Assist with data collection and analysis for cognitive psychology research.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop',
      posted: '1 day ago',
      urgent: false
    },
    {
      id: '3',
      title: 'Tutoring Program Assistant',
      organization: 'Academic Support Center',
      type: 'volunteer',
      location: 'Library',
      timeCommitment: '6 hours/week',
      participants: 8,
      maxParticipants: 12,
      skills: ['Mathematics', 'Communication', 'Patience'],
      description: 'Provide tutoring support for students in mathematics and science courses.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop',
      posted: '3 days ago',
      urgent: true
    },
    {
      id: '4',
      title: 'Campus Tour Guide',
      organization: 'Admissions Office',
      type: 'paid',
      location: 'Campus Wide',
      timeCommitment: '10 hours/week',
      hourlyRate: '$12/hour',
      skills: ['Public Speaking', 'Campus Knowledge', 'Enthusiasm'],
      description: 'Lead prospective students and families on campus tours.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop',
      posted: '1 week ago',
      urgent: false
    },
    {
      id: '5',
      title: 'Food Bank Coordinator',
      organization: 'Student Affairs',
      type: 'volunteer',
      location: 'Student Center',
      timeCommitment: '8 hours/week',
      participants: 20,
      maxParticipants: 25,
      skills: ['Organization', 'Leadership', 'Compassion'],
      description: 'Organize food distribution and coordinate volunteer schedules.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=200&fit=crop',
      posted: '4 days ago',
      urgent: false
    },
    {
      id: '6',
      title: 'Social Media Assistant',
      organization: 'Marketing Department',
      type: 'paid',
      location: 'Remote/Hybrid',
      timeCommitment: '12 hours/week',
      hourlyRate: '$14/hour',
      skills: ['Social Media', 'Content Creation', 'Design'],
      description: 'Create engaging content for university social media channels.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
      posted: '2 days ago',
      urgent: false
    }
  ];

  const allSkills = ['Gardening', 'Research', 'Mathematics', 'Public Speaking', 'Organization', 'Social Media', 'Content Creation', 'Design', 'Leadership', 'Communication', 'Data Analysis', 'Physical Work', 'Teamwork'];
  
  const locations = ['On Campus', 'Off Campus', 'Remote/Hybrid', 'Campus Wide'];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'all' || opp.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || opp.location === selectedLocation;
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => opp.skills.includes(skill));

    return matchesSearch && matchesType && matchesLocation && matchesSkills;
  });

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('all');
    setSelectedSkills([]);
    setSelectedLocation('all');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Opportunities</h1>
        <p className="text-muted-foreground">Discover volunteer and paid opportunities that match your interests and skills.</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:w-auto"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
            {(selectedType !== 'all' || selectedSkills.length > 0 || selectedLocation !== 'all') && (
              <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                {[selectedType !== 'all' ? 1 : 0, selectedSkills.length, selectedLocation !== 'all' ? 1 : 0].reduce((a, b) => a + b, 0)}
              </Badge>
            )}
          </Button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-card-foreground">Type</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {locations.map(location => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-1">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium">Skills</label>
                    {selectedSkills.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedSkills([])}
                        className="h-auto p-0 text-xs"
                      >
                        Clear
                      </Button>
                    )}
                  </div>
                  <div className="max-h-32 overflow-y-auto space-y-2">
                    {allSkills.map(skill => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill)}
                        />
                        <label htmlFor={skill} className="text-sm cursor-pointer">
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  {filteredOpportunities.length} opportunities found
                </div>
                <Button variant="outline" size="sm" onClick={clearFilters} className="border-border text-foreground hover:bg-accent">
                  Clear All Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Active Filters */}
        {(selectedType !== 'all' || selectedSkills.length > 0 || selectedLocation !== 'all') && (
          <div className="flex flex-wrap gap-2">
            {selectedType !== 'all' && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Type: {selectedType}
                <X 
                  className="w-3 h-3 cursor-pointer" 
                  onClick={() => setSelectedType('all')}
                />
              </Badge>
            )}
            {selectedLocation !== 'all' && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Location: {selectedLocation}
                <X 
                  className="w-3 h-3 cursor-pointer" 
                  onClick={() => setSelectedLocation('all')}
                />
              </Badge>
            )}
            {selectedSkills.map(skill => (
              <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                {skill}
                <X 
                  className="w-3 h-3 cursor-pointer" 
                  onClick={() => handleSkillToggle(skill)}
                />
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Opportunities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map((opportunity) => (
          <Card 
            key={opportunity.id} 
            className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer bg-card border-border"
            onClick={() => onOpportunityClick(opportunity.id)}
          >
            <div className="relative">
              <ImageWithFallback
                src={opportunity.image}
                alt={opportunity.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {opportunity.urgent && (
                <Badge className="absolute top-2 right-2 bg-red-500">
                  Urgent
                </Badge>
              )}
              <Badge 
                className={`absolute top-2 left-2 ${
                  opportunity.type === 'paid' 
                    ? 'bg-green-500' 
                    : 'bg-blue-500'
                }`}
              >
                {opportunity.type === 'paid' ? (
                  <><DollarSign className="w-3 h-3 mr-1" />Paid</>
                ) : (
                  <><Heart className="w-3 h-3 mr-1" />Volunteer</>
                )}
              </Badge>
            </div>

            <CardContent className="p-4">
              <div className="mb-2">
                <h3 className="font-semibold text-lg mb-1 text-card-foreground">{opportunity.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Building className="w-4 h-4 mr-1" />
                  {opportunity.organization}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {opportunity.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {opportunity.timeCommitment}
                  </div>
                </div>

                {opportunity.type === 'paid' && opportunity.hourlyRate && (
                  <div className="text-sm font-medium text-green-600">
                    {opportunity.hourlyRate}
                  </div>
                )}

                {opportunity.type === 'volunteer' && opportunity.participants && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {opportunity.participants}/{opportunity.maxParticipants} participants
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {opportunity.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {opportunity.skills.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{opportunity.skills.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{opportunity.posted}</span>
                <Button size="sm">
                  {opportunity.type === 'paid' ? 'Apply' : 'Join'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredOpportunities.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <Search className="w-12 h-12 mx-auto mb-2" />
            <p>No opportunities found matching your criteria.</p>
          </div>
          <Button variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}