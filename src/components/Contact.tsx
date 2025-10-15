import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@nehaturmeric.com", "sales@nehaturmeric.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Spice Market Road", "Mumbai, Maharashtra 400001"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(45,90%,60%,0.05)_0%,transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 text-sm px-6 py-2.5 shadow-lg">Contact Us</Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our products or need a wholesale quote? 
            We're here to help you with all your turmeric needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 shadow-2xl animate-slide-up bg-card">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-display">Send Us a Message</CardTitle>
              <p className="text-muted-foreground mt-3 text-lg">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    className="min-h-32"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" variant="cta" size="lg" className="flex-1 shadow-lg hover:shadow-xl">
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 border-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border-2 professional-card shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-7 flex items-start gap-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-base leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Trust Badges */}
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/20 to-accent/5 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="font-display font-bold text-2xl mb-6 text-foreground">
                  Quality Certifications
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="text-base px-6 py-2.5 bg-primary text-primary-foreground shadow-md font-bold">
                    FSSAI Licensed
                  </Badge>
                  <Badge className="text-base px-6 py-2.5 bg-accent text-accent-foreground shadow-md font-bold">
                    ISO Certified
                  </Badge>
                  <Badge className="text-base px-6 py-2.5 bg-primary text-primary-foreground shadow-md font-bold">
                    Organic Certified
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
