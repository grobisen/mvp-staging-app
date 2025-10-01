import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Upload, 
  Image, 
  Monitor, 
  FolderOpen, 
  Wand2, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Upload,
      title: "Property Import",
      description: "Search and import property data from multiple real estate databases",
      link: "/property"
    },
    {
      icon: Image,
      title: "Media Library",
      description: "Upload and manage your furniture with automatic background removal",
      link: "/media"
    },
    {
      icon: Monitor,
      title: "Staging Studio",
      description: "Drag-and-drop furniture placement with perspective matching",
      link: "/studio"
    },
    {
      icon: FolderOpen,
      title: "Project Management",
      description: "Save projects with before/after comparisons and sharing capabilities",
      link: "/projects"
    }
  ];

  const benefits = [
    "AI-powered background removal",
    "Perspective-aware furniture placement",
    "Before/after comparison views", 
    "Project organization and sharing",
    "Professional staging results",
    "Mobile-responsive design"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              StageAI
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Transform empty properties into dream homes with AI-powered virtual staging
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-staging-accent hover:bg-staging-accent/90 text-staging-primary">
              <Link to="/property">
                <Upload className="h-5 w-5 mr-2" />
                Import Property Data
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/studio">
                <Monitor className="h-5 w-5 mr-2" />
                Try Staging Studio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-staging-primary">
              Complete Virtual Staging Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create professional property staging with AI assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-staging-secondary/20">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-staging-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <Button asChild variant="outline" size="sm" className="group/btn">
                      <Link to={feature.link}>
                        Try it
                        <ArrowRight className="h-3 w-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-staging-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-staging-primary">
                Why Choose StageAI?
              </h2>
              <Sparkles className="h-6 w-6 text-staging-accent" />
            </div>
            <p className="text-xl text-muted-foreground">
              Advanced AI technology meets intuitive design for professional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-staging-success flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/property">
                <Zap className="h-5 w-5 mr-2" />
                Get Started Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-staging-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Properties?
          </h2>
          <p className="text-xl opacity-90">
            Start creating professional virtual staging projects in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-staging-accent hover:bg-staging-accent/90 text-staging-primary">
              <Link to="/property">
                Start Free Project
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/media">
                Upload Media
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
