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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 text-sm px-4 py-2">Contact Us</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or need a wholesale quote? 
            We're here to help you with all your turmeric needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 shadow-lg animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Send Us a Message</CardTitle>
              <p className="text-muted-foreground mt-2">
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
                  <Button type="submit" variant="cta" size="lg" className="flex-1">
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2"
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
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-2 text-foreground">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Trust Badges */}
            <Card className="border-2 border-accent bg-accent/10">
              <CardContent className="p-6 text-center">
                <h3 className="font-display font-bold text-xl mb-4 text-foreground">
                  Quality Certifications
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="text-sm px-4 py-2 bg-primary text-primary-foreground">
                    FSSAI Licensed
                  </Badge>
                  <Badge className="text-sm px-4 py-2 bg-accent text-accent-foreground">
                    ISO Certified
                  </Badge>
                  <Badge className="text-sm px-4 py-2 bg-primary text-primary-foreground">
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
