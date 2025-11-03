import { Card } from "@/components/ui/card";
import { MessageCircle, Sparkles, CheckCircle } from "lucide-react";

const WhatsAppIntegration = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Adicione nosso número",
      description: "Salve o número do GranaFlow nos seus contatos"
    },
    {
      icon: Sparkles,
      title: "Envie suas transações",
      description: "Mande mensagens naturais como 'Gastei 50€ no supermercado'"
    },
    {
      icon: CheckCircle,
      title: "Pronto!",
      description: "A IA registra tudo automaticamente e atualiza seu saldo"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Integração WhatsApp
          </h2>
          <p className="text-xl text-muted-foreground">
            Configure em menos de 1 minuto e comece a organizar suas finanças
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="glass-card p-8 text-center group hover:border-primary transition-all duration-300 h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform glow-cyan">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-background font-bold flex items-center justify-center glow-cyan">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppIntegration;
