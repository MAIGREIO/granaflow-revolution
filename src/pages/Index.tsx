import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Settings, TrendingUp, Bell, Zap, Lock, BarChart, Brain, Database, FileSpreadsheet, Check } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import WhatsAppIntegration from "@/components/WhatsAppIntegration";
import DeviceMockup from "@/components/DeviceMockup";

const Index = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative gradient-hero min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                A Revolução da Organização Financeira
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Controle seu dinheiro sem planilhas — direto no WhatsApp, com IA.
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 animate-glow-pulse"
                asChild
              >
                <a href="https://buy.stripe.com/test_cNi5kF8e90Cl2wR5IG2ZO00" target="_blank" rel="noopener noreferrer">
                  Começar no WhatsApp
                </a>
              </Button>
            </div>
            
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src={heroPhone} 
                alt="GranaFlow WhatsApp interface" 
                className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="how-it-works-section" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Converse, e a IA faz o resto.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="glass-card p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Você fala</h3>
              <p className="text-muted-foreground">"Gastei 20€ no MB Way."</p>
            </Card>

            <Card className="glass-card p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-primary animate-spin-slow" />
              </div>
              <h3 className="text-xl font-semibold mb-4">A IA entende e registra</h3>
              <p className="text-muted-foreground">Processamento automático inteligente.</p>
            </Card>

            <Card className="glass-card p-8 text-center group hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Saldo atualizado</h3>
              <p className="text-muted-foreground">Controle em tempo real.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Integração WhatsApp */}
      <WhatsAppIntegration />

      {/* Tecnologia */}
      <section id="features-section" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Tecnologia de ponta, sem complicação.
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="glass-card p-6 hover:border-primary transition-all duration-300 hover:scale-105">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">IA integrada com GPT-4</h3>
              <p className="text-sm text-muted-foreground">Inteligência artificial avançada</p>
            </Card>

            <Card className="glass-card p-6 hover:border-primary transition-all duration-300 hover:scale-105">
              <Database className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Banco de dados Supabase</h3>
              <p className="text-sm text-muted-foreground">Seguro e escalável</p>
            </Card>

            <Card className="glass-card p-6 hover:border-primary transition-all duration-300 hover:scale-105">
              <FileSpreadsheet className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Google Sheets</h3>
              <p className="text-sm text-muted-foreground">Visualização intuitiva</p>
            </Card>

            <Card className="glass-card p-6 hover:border-primary transition-all duration-300 hover:scale-105">
              <Bell className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Alertas automáticos</h3>
              <p className="text-sm text-muted-foreground">Notificações inteligentes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Por que GranaFlow */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Simplifique. Automatize. Evolua.
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform glow-cyan">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">100% automatizado</h3>
              <p className="text-muted-foreground">Sem digitação manual</p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform glow-cyan">
                <MessageSquare className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Tudo pelo WhatsApp</h3>
              <p className="text-muted-foreground">Interface familiar</p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform glow-cyan">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Segurança total</h3>
              <p className="text-muted-foreground">Dados protegidos</p>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform glow-cyan">
                <BarChart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Relatórios inteligentes</h3>
              <p className="text-muted-foreground">Insights automáticos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Device Mockup */}
      <DeviceMockup />

      {/* Planos */}
      <section id="plans-section" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Comece a organizar suas finanças
          </h2>
          
          <Tabs defaultValue="monthly" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="monthly" className="text-lg">Mensal</TabsTrigger>
              <TabsTrigger value="annual" className="text-lg">Anual</TabsTrigger>
            </TabsList>

            {/* Planos Mensais */}
            <TabsContent value="monthly" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="glass-card p-8 hover:border-primary transition-all duration-300">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Premium</h3>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-primary">5,99€</p>
                        <span className="text-muted-foreground">/mês</span>
                      </div>
                      <p className="text-sm text-primary mt-2">✨ 3 dias grátis ✨</p>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold text-sm uppercase tracking-wide">Recursos Incluídos</p>
                      <ul className="space-y-3">
                        {[
                          "Sistema web com gráficos interativos",
                          "Controle via WhatsApp (texto, áudio, imagem)",
                          "Transações ilimitadas",
                          "Categorias personalizadas",
                          "Suporte via WhatsApp",
                          "Até 3 contas bancárias",
                          "Lembretes automáticos",
                          "Exportação de dados"
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="glass" className="w-full" asChild>
                      <a href="https://buy.stripe.com/test_cNi5kF8e90Cl2wR5IG2ZO00" target="_blank" rel="noopener noreferrer">
                        Seja Premium
                      </a>
                    </Button>
                  </div>
                </Card>

                <Card className="glass-card p-8 border-primary glow-cyan hover:glow-cyan-strong transition-all duration-300 transform hover:scale-105">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Full Control</h3>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-primary">9,99€</p>
                        <span className="text-muted-foreground">/mês</span>
                      </div>
                      <p className="text-sm text-primary mt-2">✨ 3 dias grátis ✨</p>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold text-sm uppercase tracking-wide">Recursos Incluídos</p>
                      <ul className="space-y-3">
                        {[
                          "Todos os recursos Premium",
                          "Contas bancárias ilimitadas",
                          "Gestão Compartilhada (famílias, casais)",
                          "WhatsApp individual para cada membro",
                          "Alertas personalizados por membro",
                          "Visualização centralizada",
                          "1 Usuário incluso sem custo",
                          "Suporte humanizado",
                          "Suporte por ligação"
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="hero" className="w-full" asChild>
                      <a href="https://buy.stripe.com/test_3cI8wR8e90Cl0oJb302ZO01" target="_blank" rel="noopener noreferrer">
                        Assuma o controle
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Planos Anuais */}
            <TabsContent value="annual" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="glass-card p-8 hover:border-primary transition-all duration-300">
                  <div className="space-y-6">
                    <div>
                      <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        10% de desconto
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Premium</h3>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-primary">57,50€</p>
                        <span className="text-muted-foreground">/ano</span>
                      </div>
                      <p className="text-sm text-primary mt-2">✨ 3 dias grátis ✨</p>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold text-sm uppercase tracking-wide">Recursos Incluídos</p>
                      <ul className="space-y-3">
                        {[
                          "Sistema web com gráficos interativos",
                          "Controle via WhatsApp (texto, áudio, imagem)",
                          "Transações ilimitadas",
                          "Categorias personalizadas",
                          "Suporte via WhatsApp",
                          "Até 3 contas bancárias",
                          "Lembretes automáticos",
                          "Exportação de dados"
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="glass" className="w-full" asChild>
                      <a href="https://buy.stripe.com/test_fZubJ3gKF4SB4EZ6MK2ZO03" target="_blank" rel="noopener noreferrer">
                        Seja Premium
                      </a>
                    </Button>
                  </div>
                </Card>

                <Card className="glass-card p-8 border-primary glow-cyan hover:glow-cyan-strong transition-all duration-300 transform hover:scale-105">
                  <div className="space-y-6">
                    <div>
                      <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        20% de desconto
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Full Control</h3>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-primary">94,08€</p>
                        <span className="text-muted-foreground">/ano</span>
                      </div>
                      <p className="text-sm text-primary mt-2">✨ 3 dias grátis ✨</p>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold text-sm uppercase tracking-wide">Recursos Incluídos</p>
                      <ul className="space-y-3">
                        {[
                          "Todos os recursos Premium",
                          "Contas bancárias ilimitadas",
                          "Gestão Compartilhada (famílias, casais)",
                          "WhatsApp individual para cada membro",
                          "Alertas personalizados por membro",
                          "Visualização centralizada",
                          "1 Usuário incluso sem custo",
                          "Suporte humanizado",
                          "Suporte por ligação"
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="hero" className="w-full" asChild>
                      <a href="https://buy.stripe.com/test_dRm9AVgKF0Cl4EZ0om2ZO02" target="_blank" rel="noopener noreferrer">
                        Assuma o controle
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testemunhos */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Sobre */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Feito por quem acredita na automação da vida real.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            O GranaFlow nasceu para quem quer ter controle financeiro sem perder tempo com planilhas. 
            Uma criação da <span className="text-primary font-semibold">MaigreIO</span>, focada em IA e automação inteligente.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-section" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-cta opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">
            Dê o primeiro passo na revolução financeira.
          </h2>
          <Button 
            variant="default" 
            size="lg" 
            className="text-xl px-12 py-8 bg-background text-foreground hover:bg-background/90 animate-glow-pulse font-bold"
            asChild
          >
            <a href="https://buy.stripe.com/test_cNi5kF8e90Cl2wR5IG2ZO00" target="_blank" rel="noopener noreferrer">
              Começar no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
