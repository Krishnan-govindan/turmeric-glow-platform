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
    <section id="products" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 text-sm px-4 py-2">Our Products</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Premium Turmeric Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of high-quality turmeric products, 
            each carefully processed to maintain maximum purity and potency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                {product.featured && (
                  <Badge className="absolute top-4 right-4 bg-cta text-cta-foreground">
                    Best Seller
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-display">{product.name}</CardTitle>
                <p className="text-muted-foreground mt-2">{product.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Available Grades:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.grades.map((grade) => (
                        <Badge key={grade} variant="outline" className="bg-primary/5">
                          {grade}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Package size={16} />
                    <span>Min. Order: {product.minOrder}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button variant="cta" className="flex-1">
                  <ShoppingCart size={16} className="mr-2" />
                  Order Now
                </Button>
                <Button variant="outline" className="flex-1">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
