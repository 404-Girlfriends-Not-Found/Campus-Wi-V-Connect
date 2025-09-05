import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Heart, Calendar, Award, Users, ArrowRight, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onLogin: (user: any) => void;
}

export default function LandingPage({ onLogin }: LandingPageProps) {
  const handleGoogleLogin = () => {
    // Mock Google OAuth login - in real app this would integrate with Google OAuth
    const mockUser = {
      id: '1',
      name: 'Alex Johnson',
      email: 'alex.johnson@university.edu',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      role: 'student' as const
    };
    onLogin(mockUser);
  };

  const handleAdminLogin = () => {
    // Mock admin login for demo purposes
    const mockAdmin = {
      id: '2',
      name: 'Dr. Sarah Chen',
      email: 'sarah.chen@university.edu',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      role: 'admin' as const
    };
    onLogin(mockAdmin);
  };

  const features = [
    {
      icon: Heart,
      title: 'Volunteer Opportunities',
      description: 'Find meaningful ways to give back to your community while building valuable skills.',
      color: 'text-red-500'
    },
    {
      icon: Globe,
      title: 'Paid Positions',
      description: 'Discover paid opportunities that align with your career goals and interests.',
      color: 'text-green-500'
    },
    {
      icon: Calendar,
      title: 'Campus Events',
      description: 'Stay connected with upcoming events and activities on campus.',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      title: 'Track Achievements',
      description: 'Log your hours, earn recognition, and showcase your community involvement.',
      color: 'text-purple-500'
    }
  ];

  const opportunities = [
    {
      title: 'Food Bank Volunteer',
      type: 'Volunteer',
      hours: '4 hours/week',
      image: 'https://images.unsplash.com/photo-1638241906516-32462a8e35bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjB2b2x1bnRlZXJpbmd8ZW58MXx8fHwxNzU2NTYxMzk0fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      title: 'Campus Tour Guide',
      type: 'Paid',
      hours: '15 hours/week',
      image: 'https://images.unsplash.com/photo-1519664699825-ddb2c64076bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjYW1wdXMlMjBjb21tdW5pdHklMjBldmVudHN8ZW58MXx8fHwxNzU2NTYxMzk0fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      title: 'Research Assistant',
      type: 'Paid',
      hours: '20 hours/week',
      image: 'https://images.unsplash.com/photo-1628887590259-9222254ecfea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYWNoaWV2ZW1lbnRzJTIwZ3JhZHVhdGlvbnxlbnwxfHx8fDE3NTY1NjEzOTV8MA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/30">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-primary">Campus Connect</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleAdminLogin} className="text-foreground hover:text-primary">
                Admin Demo
              </Button>
              <Button onClick={handleGoogleLogin} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Sign in with Google
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Connect. Contribute.{' '}
              <span className="text-primary">Grow.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover volunteer opportunities and paid positions that match your interests, 
              build meaningful connections, and make a positive impact in your university community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGoogleLogin}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-border text-foreground hover:bg-accent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">
              Everything You Need to Make an Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Streamlined tools to help you find, apply, and track your community involvement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 bg-accent border-border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Icon className={`w-12 h-12 mx-auto ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-accent-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Opportunities
            </h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of students making a difference on and off campus.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 bg-card border-border">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={opportunity.type === 'Paid' ? 'default' : 'secondary'} className="bg-primary text-primary-foreground">
                      {opportunity.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{opportunity.hours}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{opportunity.title}</h3>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-primary-foreground/80">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-primary-foreground/80">Opportunities</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25,000+</div>
              <div className="text-primary-foreground/80">Hours Logged</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">Campus Connect</span>
            </div>
            <p className="text-muted-foreground">
              © 2025 Campus Connect. Connecting communities, one opportunity at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}