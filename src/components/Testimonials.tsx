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
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 text-sm px-4 py-2">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of customers across India. Here's what they have to say about our products and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote size={80} className="text-primary" />
              </div>
              
              <CardContent className="p-6 relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-display font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
            <Star className="fill-primary text-primary" size={20} />
            <span className="font-semibold text-foreground">
              4.9/5 Average Rating from 500+ Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
