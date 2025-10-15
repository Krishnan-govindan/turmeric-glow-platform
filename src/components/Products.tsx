import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ShoppingCart, Package } from "lucide-react";
import turmericPowder from "@/assets/turmeric-powder.jpg";
import turmericRoots from "@/assets/turmeric-roots.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Turmeric Powder",
      description: "Finely ground premium quality turmeric powder perfect for culinary and medicinal use. 100% pure and organic.",
      image: turmericPowder,
      grades: ["Culinary", "Pharmaceutical", "Organic"],
      minOrder: "10 kg",
      featured: true,
    },
    {
      id: 2,
      name: "Whole Turmeric Roots",
      description: "Fresh and dried whole turmeric roots sourced directly from our farms. Rich in curcumin with vibrant color.",
      image: turmericRoots,
      grades: ["Fresh", "Dried", "Premium"],
      minOrder: "25 kg",
      featured: true,
    },
    {
      id: 3,
      name: "Organic Turmeric Powder",
      description: "Certified organic turmeric powder with guaranteed purity. Perfect for health-conscious customers.",
      image: turmericPowder,
      grades: ["Organic Certified", "Premium"],
      minOrder: "10 kg",
      featured: false,
    },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background via-secondary/30 to-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(45,90%,60%,0.05)_0%,transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 text-sm px-6 py-2.5 shadow-lg">Our Products</Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
            Premium Turmeric Products
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our range of high-quality turmeric products, 
            each carefully processed to maintain maximum purity and potency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="overflow-hidden professional-card animate-slide-up border-2 hover:border-primary bg-card shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {product.featured && (
                  <Badge className="absolute top-4 right-4 bg-cta text-cta-foreground shadow-lg font-bold">
                    Best Seller
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-display mb-3">{product.name}</CardTitle>
                <p className="text-muted-foreground mt-2 leading-relaxed">{product.description}</p>
              </CardHeader>

              <CardContent className="pb-6">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-bold text-foreground mb-3">Available Grades:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.grades.map((grade) => (
                        <Badge key={grade} variant="outline" className="bg-primary/10 border-primary/30 font-medium">
                          {grade}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                    <Package size={18} className="text-primary" />
                    <span className="font-medium">Min. Order: {product.minOrder}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-4 border-t">
                <Button variant="cta" className="flex-1 shadow-md hover:shadow-lg">
                  <ShoppingCart size={16} className="mr-2" />
                  Order Now
                </Button>
                <Button variant="outline" className="flex-1 border-2">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="text-lg px-10 py-7 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-md hover:shadow-xl transition-all">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
