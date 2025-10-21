import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Heart, Activity, Sparkles, TrendingUp, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:py-32">
        <div className="absolute inset-0 gradient-subtle opacity-50" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Your <span className="text-gradient">Human Operating System</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform biometric signals into actionable insights. Unite mind, body, and performance in one intelligent ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 shadow-elegant transition-smooth text-lg px-8"
                onClick={() => navigate('/dashboard')}
              >
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Three Pillars of Potential</h2>
            <p className="text-xl text-muted-foreground">A unified approach to human optimization</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-background border border-border hover:shadow-elegant transition-smooth animate-fade-in">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Body</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aggregate biometric data from wearables and health platforms. Transform raw signals into your daily Potential Score.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-border hover:shadow-elegant transition-smooth animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                <Brain className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Mind</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access curated mindfulness content, meditation, and breathing exercises—adapted in real-time to your physiological state.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-border hover:shadow-elegant transition-smooth animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Activity className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Performance</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI coaching that breaks down goals into daily actions, synchronized with your biometric readiness and capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Close the Feedback Loop</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Professional stress affects your sleep. Poor recovery impacts performance. Everything is connected—yet existing tools remain isolated.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">AI-Powered Insights</h3>
                    <p className="text-muted-foreground">Real-time recommendations based on your unique biometric baseline</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Predictive Analytics</h3>
                    <p className="text-muted-foreground">Anticipate challenges before they impact your wellbeing</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Privacy First</h3>
                    <p className="text-muted-foreground">Your data encrypted and under your control at all times</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl gradient-primary opacity-20 absolute inset-0 blur-3xl" />
              <div className="relative bg-card rounded-3xl p-8 shadow-elegant border border-border">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-gradient mb-2">87</div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Potential Score</p>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden mb-8">
                  <div className="h-full w-[87%] gradient-primary rounded-full" />
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between p-3 bg-background rounded-lg">
                    <span className="text-muted-foreground">Recovery</span>
                    <span className="font-semibold text-primary">Excellent</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background rounded-lg">
                    <span className="text-muted-foreground">HRV Balance</span>
                    <span className="font-semibold text-primary">+12ms</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background rounded-lg">
                    <span className="text-muted-foreground">Sleep Quality</span>
                    <span className="font-semibold text-primary">8.2/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 gradient-subtle">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Potential?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands discovering what their body has been trying to tell them.
          </p>
          <Button 
            size="lg" 
            className="gradient-primary text-white hover:opacity-90 shadow-elegant transition-smooth text-lg px-8"
            onClick={() => navigate('/dashboard')}
          >
            Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">14-day free trial • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Synapse. Your Human Operating System.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
