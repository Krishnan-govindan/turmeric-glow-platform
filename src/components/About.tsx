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
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(45,90%,60%,0.05)_0%,transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in group">
            <img
              src={farmBackground}
              alt="Our Turmeric Farm - Premium Quality Cultivation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <Badge className="mb-4 bg-primary text-primary-foreground shadow-lg px-4 py-2 font-bold">Our Story</Badge>
              <h3 className="text-4xl font-display font-bold text-white mb-3">
                Growing Excellence Since 2008
              </h3>
              <p className="text-white/95 text-lg leading-relaxed">
                From our family farms to your kitchen, delivering nature's golden treasure.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-slide-up">
            <Badge className="text-sm px-6 py-2.5 shadow-md">About Us</Badge>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground leading-tight">
              Your Trusted Partner for Authentic Indian Turmeric
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Neha's Turmeric, we're passionate about bringing you the finest quality turmeric 
              sourced directly from dedicated farmers. Our journey began with a simple mission: 
              to provide pure, authentic turmeric while supporting sustainable farming practices.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every product undergoes rigorous quality testing to ensure you receive only the best. 
              From cultivation to packaging, we maintain the highest standards of purity and 
              authenticity. Our commitment to quality has made us a trusted supplier for both 
              retail customers and wholesale businesses.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-display font-bold text-primary mb-2">100%</div>
                <div className="text-base text-muted-foreground font-semibold">Pure & Natural</div>
              </div>
              <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-display font-bold text-primary mb-2">ISO</div>
                <div className="text-base text-muted-foreground font-semibold">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 professional-card animate-slide-up bg-card shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-6 shadow-md">
                    <Icon className="text-primary" size={36} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
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
