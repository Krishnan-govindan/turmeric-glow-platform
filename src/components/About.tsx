import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Leaf, Award, Users, TrendingUp } from "lucide-react";
import farmBackground from "@/assets/farm-background.jpg";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Farm-to-Table",
      description: "Direct sourcing from our trusted network of farmers ensures freshness and quality at every step.",
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "FSSAI licensed with rigorous quality testing. ISO standards compliance for your peace of mind.",
    },
    {
      icon: Users,
      title: "Supporting Farmers",
      description: "We believe in fair trade and sustainable agriculture, supporting farming communities directly.",
    },
    {
      icon: TrendingUp,
      title: "Growing Trust",
      description: "Over 15 years of excellence with 5000+ satisfied customers across retail and wholesale.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <img
              src={farmBackground}
              alt="Our Turmeric Farm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <Badge className="mb-4 bg-primary text-primary-foreground">Our Story</Badge>
              <h3 className="text-3xl font-display font-bold text-white mb-2">
                Growing Excellence Since 2008
              </h3>
              <p className="text-white/90">
                From our family farms to your kitchen, delivering nature's golden treasure.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 animate-slide-up">
            <Badge className="text-sm px-4 py-2">About Us</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Your Trusted Partner for Authentic Indian Turmeric
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Neha's Turmeric, we're passionate about bringing you the finest quality turmeric 
              sourced directly from dedicated farmers. Our journey began with a simple mission: 
              to provide pure, authentic turmeric while supporting sustainable farming practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every product undergoes rigorous quality testing to ensure you receive only the best. 
              From cultivation to packaging, we maintain the highest standards of purity and 
              authenticity. Our commitment to quality has made us a trusted supplier for both 
              retail customers and wholesale businesses.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="text-3xl font-display font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Pure & Natural</div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="text-3xl font-display font-bold text-primary mb-1">ISO</div>
                <div className="text-sm text-muted-foreground">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
