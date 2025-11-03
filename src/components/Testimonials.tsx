import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Freelancer",
      text: "Finalmente consigo controlar minhas finanças sem stress. O GranaFlow é incrível!",
      rating: 5
    },
    {
      name: "Pedro Costa",
      role: "Empresário",
      text: "A integração com WhatsApp é genial. Registro tudo em segundos.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Designer",
      text: "Nunca foi tão fácil ter controle total sobre meus gastos. Recomendo muito!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          O que nossos usuários dizem
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card p-8 hover:border-primary transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
