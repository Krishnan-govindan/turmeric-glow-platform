import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Restaurant Owner",
      rating: 5,
      comment: "The quality of turmeric from Neha's business is exceptional. Our customers always compliment the authentic flavor in our dishes. We've been ordering for 3 years now!",
      location: "Mumbai",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Health Store Owner",
      rating: 5,
      comment: "As someone who sells organic products, I'm very particular about quality. Their organic turmeric powder is pure and fresh. My customers trust our products because of suppliers like them.",
      location: "Bangalore",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Spice Retailer",
      rating: 5,
      comment: "Excellent wholesale service! The packaging is professional, delivery is always on time, and the product quality is consistent. Highly recommend for business buyers.",
      location: "Delhi",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 via-background to-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(45,90%,60%,0.05)_0%,transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 text-sm px-6 py-2.5 shadow-lg">Testimonials</Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by thousands of customers across India. Here's what they have to say about our products and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-2 professional-card animate-slide-up relative overflow-hidden bg-card shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={90} className="text-primary" />
              </div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={22} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t-2 border-border/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-primary font-display font-bold text-2xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 border-2 border-primary/30 rounded-full px-8 py-4 shadow-lg">
            <Star className="fill-primary text-primary" size={24} />
            <span className="font-bold text-foreground text-lg">
              4.9/5 Average Rating from 500+ Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
