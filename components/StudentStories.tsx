import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal,
  Camera,
  Video,
  Send,
  ExternalLink,
  LinkedinIcon
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function StudentStories() {
  const [newPost, setNewPost] = useState('');
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  const stories = [
    {
      id: '1',
      author: {
        name: 'Emma Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        year: 'Junior',
        major: 'Communications'
      },
      content: `Just completed my first week as a campus tour guide! 🎓 

I love showing prospective students around and sharing my university experience. Today I had a group of 15 students and their families, and seeing their excitement about potentially joining our community was incredible.

The best part is when they ask about student life and I get to talk about all the amazing opportunities we have here - from research programs to volunteer work like the community garden project I'm also part of.

#CampusLife #TourGuide #StudentExperience`,
      images: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop'
      ],
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      shares: 3,
      opportunity: {
        title: 'Campus Tour Guide',
        type: 'paid'
      },
      isLiked: false
    },
    {
      id: '2',
      author: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        year: 'Senior',
        major: 'Environmental Science'
      },
      content: `Volunteered at the local food bank yesterday and it was such a rewarding experience! 🥫

Our team packed over 200 meals for families in need. It's amazing how much impact we can make when we work together. The coordinator mentioned they're always looking for more volunteers, especially students who can help during weekday afternoons.

If you're looking for a meaningful way to give back to the community, I highly recommend checking out volunteer opportunities through Campus Connect. Every hour counts!`,
      images: [
        'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&h=300&fit=crop'
      ],
      video: {
        thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=300&fit=crop',
        duration: '2:15'
      },
      timestamp: '1 day ago',
      likes: 42,
      comments: 15,
      shares: 8,
      opportunity: {
        title: 'Food Bank Volunteer',
        type: 'volunteer'
      },
      isLiked: true
    },
    {
      id: '3',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        year: 'Sophomore',
        major: 'Psychology'
      },
      content: `Update on my research assistant position! 📊

Working with Dr. Martinez on the cognitive psychology study has been incredible. This week I learned how to use SPSS for statistical analysis and got to observe participant interviews. 

The experience I'm gaining here is invaluable for my future graduate school applications. Plus, the $15/hour doesn't hurt as a college student! 😅

For anyone interested in research, don't be intimidated to apply. Professors are usually very welcoming to enthusiastic students, even if you don't have prior experience.`,
      timestamp: '3 days ago',
      likes: 18,
      comments: 6,
      shares: 2,
      opportunity: {
        title: 'Research Assistant',
        type: 'paid'
      },
      isLiked: false
    },
    {
      id: '4',
      author: {
        name: 'Alex Turner',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        year: 'Junior',
        major: 'Business'
      },
      content: `Shoutout to the amazing team at the community garden! 🌱

We harvested our first batch of tomatoes and lettuce today. It's been incredible watching everything grow from seeds we planted at the beginning of the semester. The fresh produce will be donated to the campus food pantry.

This volunteer opportunity has taught me so much about sustainable agriculture and working as a team. Plus, there's something really therapeutic about getting your hands dirty and connecting with nature between classes.

Thanks to Campus Connect for helping me find this perfect match!`,
      images: [
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1592806088932-05058af0ad8d?w=500&h=300&fit=crop'
      ],
      timestamp: '1 week ago',
      likes: 35,
      comments: 12,
      shares: 5,
      opportunity: {
        title: 'Community Garden Volunteer',
        type: 'volunteer'
      },
      isLiked: true
    }
  ];

  const [storiesList, setStoriesList] = useState(stories);

  const handleLike = (storyId: string) => {
    setStoriesList(prev => prev.map(story => 
      story.id === storyId 
        ? { 
            ...story, 
            isLiked: !story.isLiked,
            likes: story.isLiked ? story.likes - 1 : story.likes + 1
          }
        : story
    ));
  };

  const handleNewPost = () => {
    if (newPost.trim()) {
      const newStory = {
        id: Date.now().toString(),
        author: {
          name: 'Alex Johnson',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          year: 'Junior',
          major: 'Computer Science'
        },
        content: newPost,
        timestamp: 'Just now',
        likes: 0,
        comments: 0,
        shares: 0,
        isLiked: false
      };
      setStoriesList(prev => [newStory, ...prev]);
      setNewPost('');
      setShowNewPostForm(false);
    }
  };

  const shareToLinkedIn = (story: any) => {
    const text = `Check out this inspiring story from ${story.author.name}: ${story.content.slice(0, 100)}...`;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Student Stories</h1>
        <p className="text-muted-foreground">Share your experiences and connect with the community</p>
      </div>

      {/* New Post Section */}
      <Card className="bg-card border-border">
        <CardContent className="p-4">
          {!showNewPostForm ? (
            <div className="flex items-center space-x-3">
              <Avatar className="border border-border">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                <AvatarFallback className="bg-accent text-accent-foreground">AJ</AvatarFallback>
              </Avatar>
              <Button 
                variant="outline" 
                className="flex-1 justify-start text-muted-foreground border-border hover:bg-accent"
                onClick={() => setShowNewPostForm(true)}
              >
                Share your volunteer or work experience...
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-3">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Alex Johnson</div>
                  <div className="text-sm text-gray-600">Junior • Computer Science</div>
                </div>
              </div>
              <Textarea
                placeholder="Share your experience, insights, or achievements..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                rows={3}
                className="resize-none"
              />
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Camera className="w-4 h-4 mr-1" />
                    Photo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="w-4 h-4 mr-1" />
                    Video
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => {
                    setShowNewPostForm(false);
                    setNewPost('');
                  }}>
                    Cancel
                  </Button>
                  <Button size="sm" onClick={handleNewPost} disabled={!newPost.trim()}>
                    <Send className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stories Feed */}
      <div className="space-y-6">
        {storiesList.map((story) => (
          <Card key={story.id} className="overflow-hidden bg-card border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="border border-border">
                    <AvatarImage src={story.author.avatar} />
                    <AvatarFallback className="bg-accent text-accent-foreground">{story.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">{story.author.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {story.author.year} • {story.author.major} • {story.timestamp}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              {story.opportunity && (
                <div className="ml-12">
                  <Badge variant={story.opportunity.type === 'paid' ? 'default' : 'secondary'} className="text-xs">
                    {story.opportunity.title}
                  </Badge>
                </div>
              )}
            </CardHeader>

            <CardContent className="pt-0">
              {/* Content */}
              <div className="mb-4">
                <p className="text-card-foreground whitespace-pre-line leading-relaxed">
                  {story.content}
                </p>
              </div>

              {/* Media */}
              {story.images && story.images.length > 0 && (
                <div className={`mb-4 grid gap-2 ${story.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {story.images.map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image}
                      alt={`Story image ${index + 1}`}
                      className={`rounded-lg object-cover w-full ${story.images.length === 1 ? 'h-80' : 'h-40'}`}
                    />
                  ))}
                </div>
              )}

              {story.video && (
                <div className="mb-4 relative">
                  <ImageWithFallback
                    src={story.video.thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-60 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {story.video.duration}
                  </div>
                </div>
              )}

              {/* Engagement Stats */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3 pb-3 border-b">
                <div className="flex items-center space-x-4">
                  <span>{story.likes} likes</span>
                  <span>{story.comments} comments</span>
                  <span>{story.shares} shares</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(story.id)}
                    className={story.isLiked ? 'text-red-500' : ''}
                  >
                    <Heart className={`w-4 h-4 mr-1 ${story.isLiked ? 'fill-current' : ''}`} />
                    Like
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Comment
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => shareToLinkedIn(story)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <LinkedinIcon className="w-4 h-4 mr-1" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <Button variant="outline">
          Load More Stories
        </Button>
      </div>
    </div>
  );
}