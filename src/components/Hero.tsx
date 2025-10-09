import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-turmeric.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Quality Turmeric"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary rounded-full">
            <span className="text-sm font-semibold text-primary">✨ Premium Quality Guaranteed</span>
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
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Shop Now <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm">
              Get Wholesale Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
