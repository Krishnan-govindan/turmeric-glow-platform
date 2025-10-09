import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "#products" },
    { name: "About Us", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  const products = [
    "Turmeric Powder",
    "Whole Turmeric Roots",
    "Organic Turmeric",
    "Bulk Orders",
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary to-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Neha's Turmeric" className="h-10 w-auto" />
              <span className="font-display font-bold text-xl text-foreground">
                Neha's Turmeric
              </span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Premium quality turmeric sourced directly from farmers. 
              Your trusted partner for authentic Indian spices.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-primary group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-primary group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-primary group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-primary group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-foreground">Our Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>123 Spice Market Road, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>info@nehaturmeric.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Neha's Turmeric. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
