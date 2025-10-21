import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, Heart, Brain, TrendingUp, Moon, Zap, 
  ArrowUp, ArrowDown, Sparkles, Play, CheckCircle2 
} from "lucide-react";

const Dashboard = () => {
  const [potentialScore] = useState(87);
  
  // Simulated biometric data
  const metrics = {
    hrv: { value: 58, change: 12, status: "up" },
    restingHR: { value: 52, change: -3, status: "down" },
    sleep: { value: 8.2, change: 0.5, status: "up" },
    recovery: { value: 92, change: 5, status: "up" },
  };

  const todayRecommendations = [
    {
      id: 1,
      title: "Morning Visualization",
      description: "High potential score—perfect for challenging mental work",
      duration: "5 min",
      type: "meditation",
      icon: Brain,
    },
    {
      id: 2,
      title: "Deep Focus Session",
      description: "Your HRV is optimal for concentration",
      duration: "25 min",
      type: "productivity",
      icon: Zap,
    },
    {
      id: 3,
      title: "Evening Wind Down",
      description: "Prepare for quality sleep with nervous system reset",
      duration: "10 min",
      type: "recovery",
      icon: Moon,
    },
  ];

  const contentLibrary = [
    { title: "Box Breathing", duration: "5 min", category: "Breathwork" },
    { title: "Body Scan Meditation", duration: "15 min", category: "Mindfulness" },
    { title: "Yoga Nidra", duration: "20 min", category: "Recovery" },
    { title: "Focus Flow", duration: "30 min", category: "Productivity" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gradient">Synapse</h1>
          <div className="flex gap-4 items-center">
            <Button variant="ghost" size="sm">Library</Button>
            <Button variant="ghost" size="sm">Goals</Button>
            <Button variant="ghost" size="sm">Profile</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Potential Score Hero */}
        <Card className="p-8 mb-8 shadow-elegant border-2 border-primary/20 animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Today's Readiness</p>
              <div className="flex items-baseline gap-4 justify-center lg:justify-start mb-4">
                <span className="text-7xl font-bold text-gradient">{potentialScore}</span>
                <span className="text-2xl text-muted-foreground">/100</span>
              </div>
              <p className="text-lg text-foreground mb-2">Excellent capacity for growth</p>
              <p className="text-muted-foreground">
                Your recovery is strong and HRV is elevated. This is an ideal day for challenging work and focused learning.
              </p>
            </div>
            <div className="w-full lg:w-72">
              <div className="relative w-56 h-56 mx-auto">
                <svg className="transform -rotate-90 w-56 h-56">
                  <circle
                    cx="112"
                    cy="112"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="112"
                    cy="112"
                    r="100"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${potentialScore * 6.28} 628`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-primary animate-pulse-glow" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Biometric Metrics */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-6 hover:shadow-elegant transition-smooth animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold">HRV</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-primary">
                    <ArrowUp className="w-4 h-4" />
                    <span>+{metrics.hrv.change}ms</span>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{metrics.hrv.value}ms</div>
                <Progress value={75} className="h-2" />
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-smooth animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-semibold">Resting HR</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-primary">
                    <ArrowDown className="w-4 h-4" />
                    <span>{metrics.restingHR.change} bpm</span>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{metrics.restingHR.value} bpm</div>
                <Progress value={85} className="h-2" />
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-smooth animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Moon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold">Sleep Quality</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-primary">
                    <ArrowUp className="w-4 h-4" />
                    <span>+{metrics.sleep.change}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{metrics.sleep.value}/10</div>
                <Progress value={82} className="h-2" />
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-smooth animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-semibold">Recovery</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-primary">
                    <ArrowUp className="w-4 h-4" />
                    <span>+{metrics.recovery.change}%</span>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{metrics.recovery.value}%</div>
                <Progress value={92} className="h-2" />
              </Card>
            </div>

            {/* AI Recommendations */}
            <Card className="p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Today's Recommendations</h2>
              </div>
              <div className="space-y-4">
                {todayRecommendations.map((rec, index) => {
                  const Icon = rec.icon;
                  return (
                    <div
                      key={rec.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-smooth"
                    >
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{rec.title}</h3>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mr-2">{rec.duration}</div>
                      <Button size="sm" className="flex-shrink-0">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h3 className="font-semibold mb-4">Quick Start</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start gradient-primary text-white hover:opacity-90">
                  <Play className="w-4 h-4 mr-2" />
                  Start Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Daily Check-in
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Progress
                </Button>
              </div>
            </Card>

            {/* Content Library Preview */}
            <Card className="p-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h3 className="font-semibold mb-4">Library</h3>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                  <TabsTrigger value="new" className="flex-1">New</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-3">
                  {contentLibrary.map((item, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth cursor-pointer"
                    >
                      <div className="font-medium text-sm mb-1">{item.title}</div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{item.category}</span>
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="new">
                  <p className="text-sm text-muted-foreground">New content coming soon...</p>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
