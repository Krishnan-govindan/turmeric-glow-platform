import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-turmeric.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Quality Turmeric - Direct from Farm"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/90 to-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-6 px-5 py-2.5 bg-primary/10 border-2 border-primary/30 rounded-full shadow-lg backdrop-blur-sm">
            <span className="text-sm font-bold text-primary tracking-wide">✨ Premium Quality Guaranteed</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground leading-tight">
            Premium Quality Turmeric
            <span className="block text-primary mt-2">From Farm to Your Kitchen</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Sourced directly from farmers, delivering pure and authentic turmeric 
            with guaranteed quality and freshness. Perfect for wholesale and retail needs.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="text-accent" size={20} />
              <span className="font-medium">FSSAI Certified</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="text-accent" size={20} />
              <span className="font-medium">100% Pure & Organic</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="text-accent" size={20} />
              <span className="font-medium">Direct from Farmers</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Button variant="cta" size="lg" className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              Shop Now <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-7 bg-background/95 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-lg">
              Get Wholesale Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t-2 border-border/50">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-sm md:text-base text-muted-foreground font-semibold">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform">5000+</div>
              <div className="text-sm md:text-base text-muted-foreground font-semibold">Happy Customers</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm md:text-base text-muted-foreground font-semibold">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
