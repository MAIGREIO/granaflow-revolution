import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona a integração com o WhatsApp?",
      answer: "Basta adicionar nosso número e começar a enviar mensagens com seus gastos. Nossa IA processa tudo automaticamente e atualiza seu saldo em tempo real."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim! Utilizamos criptografia de ponta a ponta e armazenamos todos os dados em servidores seguros. Seus dados financeiros são protegidos com os mais altos padrões de segurança."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura Pro a qualquer momento. Não há taxas de cancelamento e você pode continuar usando a versão gratuita."
    },
    {
      question: "Como a IA entende minhas mensagens?",
      answer: "Nossa IA foi treinada especificamente para entender linguagem natural sobre finanças. Ela reconhece valores, categorias e até contextos complexos das suas transações."
    },
    {
      question: "Posso usar em vários dispositivos?",
      answer: "Sim! Como tudo funciona pelo WhatsApp, você pode acessar de qualquer dispositivo onde tenha o WhatsApp instalado."
    }
  ];

  return (
    <section id="faq-section" className="py-24 bg-card/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6 border-primary/20">
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
