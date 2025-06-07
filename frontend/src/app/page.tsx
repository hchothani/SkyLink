import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Bone as Drone, Shield, Activity, MapPin, Camera, Signal, Battery, Users, BarChart3, Eye, Zap, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';

  const features = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Real-Time Monitoring",
      description: "Track your entire drone fleet with live telemetry and status updates"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Advanced Mapping",
      description: "Precise GPS tracking with detailed flight path visualization"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Live Video Feeds",
      description: "Stream high-definition video from multiple drones simultaneously"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and performance metrics for your operations"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Operations",
      description: "Enterprise-grade security with encrypted communications"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Alerts",
      description: "Real-time notifications for critical events and system status"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "500+", label: "Active Drones" },
    { value: "50K+", label: "Flight Hours" },
    { value: "24/7", label: "Support" }
  ];

  export default function Home(){
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        {/* Navigation */}
        <nav className="relative z-10 border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Drone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">SkyLink</h1>
                  <p className="text-xs text-muted-foreground">MultiModal Drone Monitoring</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="hidden sm:flex">
                  <Signal className="mr-1 h-3 w-3" />
                  Live System
                </Badge>
                <Button variant="ghost" size="sm">
                  Documentation
                </Button>
                <Button variant="ghost" size="sm">
                  Support
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="w-fit">
                  <Star className="mr-1 h-3 w-3" />
                  Next-Generation Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Advanced Drone
                  <span className="text-primary block">Monitoring</span>
                  Platform
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Monitor, control, and analyze your entire drone fleet with real-time telemetry, 
                  live video feeds, and comprehensive analytics in one unified platform.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Features Preview */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Real-time tracking</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Live video streams</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Advanced analytics</span>
                </div>
              </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md shadow-2xl border-2">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Join Your Team</CardTitle>
                    <CardDescription className="text-base">
                      Enter your credentials to access the monitoring platform
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          name="username"
                          placeholder="Enter your username"
                          value={}
                          onChange={}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          placeholder="Enter your company name"
                          value={}
                          onChange={}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={}
                      >
                        {False ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                            Connecting...
                          </>
                        ) : (
                          <>
                            Join Room
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <div className="flex justify-end">
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={}
                        >
                          Admin
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Comprehensive Drone Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to monitor, control, and optimize your drone operations 
              from a single, powerful platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Drone Operations?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of operators who trust SkyLink for their mission-critical drone monitoring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Globe className="mr-2 h-5 w-5" />
                Start Monitoring
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Drone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">SkyLink</div>
                <div className="text-xs text-muted-foreground">© 2025 All rights reserved</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

