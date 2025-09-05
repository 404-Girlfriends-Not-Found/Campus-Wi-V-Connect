import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Bell,
  Filter,
  ChevronLeft,
  ChevronRight,
  Plus,
  Star,
  Heart,
  DollarSign
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function EventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('list');

  const events = [
    {
      id: '1',
      title: 'Community Garden Cleanup',
      description: 'Help prepare the garden for the fall planting season. We\'ll be removing weeds, adding compost, and planning new beds.',
      date: new Date(2025, 8, 15), // September 15, 2025
      time: '2:00 PM - 5:00 PM',
      location: 'Campus Community Garden',
      organizer: 'Campus Sustainability Office',
      attendees: 18,
      maxAttendees: 25,
      type: 'volunteer',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop',
      isAttending: true,
      linkedOpportunity: 'Community Garden Volunteer'
    },
    {
      id: '2',
      title: 'Career Fair Setup',
      description: 'Help set up booths and prepare materials for the annual career fair. Great networking opportunity!',
      date: new Date(2025, 8, 18), // September 18, 2025
      time: '8:00 AM - 12:00 PM',
      location: 'Student Center Main Hall',
      organizer: 'Career Services',
      attendees: 12,
      maxAttendees: 15,
      type: 'paid',
      category: 'Career',
      hourlyRate: '$12/hour',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop',
      isAttending: false,
      linkedOpportunity: 'Event Setup Assistant'
    },
    {
      id: '3',
      title: 'Blood Drive Volunteer Training',
      description: 'Training session for new blood drive volunteers. Learn registration procedures and donor support.',
      date: new Date(2025, 8, 20), // September 20, 2025
      time: '10:00 AM - 12:00 PM',
      location: 'Health Center Conference Room',
      organizer: 'Campus Health Services',
      attendees: 8,
      maxAttendees: 20,
      type: 'volunteer',
      category: 'Health',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop',
      isAttending: false,
      linkedOpportunity: 'Blood Drive Volunteer'
    },
    {
      id: '4',
      title: 'Research Symposium',
      description: 'Annual undergraduate research symposium. Present your work and learn about ongoing research projects.',
      date: new Date(2025, 8, 22), // September 22, 2025
      time: '1:00 PM - 6:00 PM',
      location: 'Science Building Auditorium',
      organizer: 'Office of Undergraduate Research',
      attendees: 150,
      maxAttendees: 200,
      type: 'academic',
      category: 'Research',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop',
      isAttending: true,
      linkedOpportunity: 'Research Assistant'
    },
    {
      id: '5',
      title: 'Food Bank Distribution',
      description: 'Monthly food distribution for campus community. Help sort and distribute food packages.',
      date: new Date(2025, 8, 25), // September 25, 2025
      time: '3:00 PM - 7:00 PM',
      location: 'Student Center Basement',
      organizer: 'Student Affairs',
      attendees: 32,
      maxAttendees: 40,
      type: 'volunteer',
      category: 'Community Service',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=200&fit=crop',
      isAttending: true,
      linkedOpportunity: 'Food Bank Volunteer'
    },
    {
      id: '6',
      title: 'Campus Sustainability Workshop',
      description: 'Learn about campus sustainability initiatives and how to get involved in environmental projects.',
      date: new Date(2025, 8, 28), // September 28, 2025
      time: '6:00 PM - 8:00 PM',
      location: 'Environmental Science Building',
      organizer: 'Environmental Science Club',
      attendees: 25,
      maxAttendees: 50,
      type: 'workshop',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop',
      isAttending: false,
      linkedOpportunity: 'Environmental Club Leader'
    }
  ];

  const [eventsList, setEventsList] = useState(events);

  const categories = ['All', 'Environment', 'Career', 'Health', 'Research', 'Community Service', 'Workshop'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = eventsList.filter(event => 
    selectedCategory === 'All' || event.category === selectedCategory
  );

  const handleAttendance = (eventId: string) => {
    setEventsList(prev => prev.map(event => 
      event.id === eventId 
        ? { 
            ...event, 
            isAttending: !event.isAttending,
            attendees: event.isAttending ? event.attendees - 1 : event.attendees + 1
          }
        : event
    ));
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'volunteer':
        return <Heart className="w-4 h-4" />;
      case 'paid':
        return <DollarSign className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'volunteer':
        return 'bg-blue-500';
      case 'paid':
        return 'bg-green-500';
      case 'workshop':
        return 'bg-purple-500';
      case 'academic':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const upcomingEvents = filteredEvents
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 3);

  const myEvents = filteredEvents.filter(event => event.isAttending);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">Events</h1>
          <p className="text-muted-foreground">Discover and join campus events linked to opportunities</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            onClick={() => setViewMode('list')}
          >
            List View
          </Button>
          <Button
            variant={viewMode === 'calendar' ? 'default' : 'outline'}
            onClick={() => setViewMode('calendar')}
          >
            Calendar
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {viewMode === 'list' ? (
            /* List View */
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">All Events</h2>
              {filteredEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 bg-card border-border">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="w-1/3 relative">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-full h-32 object-cover rounded-l-lg"
                        />
                        <Badge 
                          className={`absolute top-2 left-2 ${getEventTypeColor(event.type)}`}
                        >
                          {getEventTypeIcon(event.type)}
                          <span className="ml-1 capitalize">{event.type}</span>
                        </Badge>
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg mb-1 text-card-foreground">{event.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{event.organizer}</p>
                          </div>
                          <Badge variant="outline" className="border-border text-muted-foreground">{event.category}</Badge>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(event.date)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {event.attendees}/{event.maxAttendees} attending
                          </div>
                        </div>

                        {event.linkedOpportunity && (
                          <div className="mb-3">
                            <Badge variant="secondary" className="text-xs">
                              Linked to: {event.linkedOpportunity}
                            </Badge>
                          </div>
                        )}

                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            {event.type === 'paid' && event.hourlyRate && (
                              <span className="text-sm font-medium text-green-600">
                                {event.hourlyRate}
                              </span>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Bell className="w-4 h-4 mr-1" />
                              Remind Me
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleAttendance(event.id)}
                              variant={event.isAttending ? 'outline' : 'default'}
                            >
                              {event.isAttending ? 'Cancel' : 'Attend'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Calendar View - Simplified */
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>September 2025</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 30 }, (_, i) => {
                    const dayEvents = filteredEvents.filter(event => 
                      event.date.getDate() === i + 1 && 
                      event.date.getMonth() === 8 && 
                      event.date.getFullYear() === 2025
                    );
                    return (
                      <div key={i} className="min-h-[80px] p-1 border rounded">
                        <div className="text-sm font-medium mb-1">{i + 1}</div>
                        {dayEvents.map(event => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded mb-1 truncate ${getEventTypeColor(event.type)} text-white`}
                          >
                            {event.title}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">{event.title}</h4>
                    <Badge 
                      className={`text-xs ${getEventTypeColor(event.type)}`}
                    >
                      {event.type}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {event.date.toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full mt-2" 
                    variant={event.isAttending ? 'outline' : 'default'}
                    onClick={() => handleAttendance(event.id)}
                  >
                    {event.isAttending ? 'Attending' : 'Attend'}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* My Events */}
          <Card>
            <CardHeader>
              <CardTitle>My Events ({myEvents.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {myEvents.length > 0 ? (
                <div className="space-y-3">
                  {myEvents.slice(0, 3).map((event) => (
                    <div key={event.id} className="flex items-center space-x-3 p-2 bg-blue-50 rounded">
                      <div className={`w-3 h-3 rounded-full ${getEventTypeColor(event.type)}`} />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{event.title}</div>
                        <div className="text-xs text-gray-600">
                          {event.date.toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                  {myEvents.length > 3 && (
                    <div className="text-center">
                      <Button variant="ghost" size="sm">
                        View All ({myEvents.length})
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 text-sm text-center py-4">
                  No events scheduled yet
                </p>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Manage Reminders
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}