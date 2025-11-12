import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";
import moneyfyLogo from "@/assets/moneyfy-logo.png";
const Header = () => {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const toggleLanguage = () => {
    setLanguage(prev => prev === "pt" ? "en" : "pt");
  };
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const content = {
    pt: {
      features: "Funcionalidades",
      howItWorks: "Como Funciona",
      plans: "Planos",
      faq: "FAQ",
      access: "Acessar conta"
    },
    en: {
      features: "Features",
      howItWorks: "How it Works",
      plans: "Plans",
      faq: "FAQ",
      access: "Access Account"
    }
  };
  const t = content[language];
  return <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}>
            <img src={moneyfyLogo} alt="Moneyfy Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold">Moneyfy</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features-section')} className="text-text-secondary hover:text-foreground transition-colors">
              {t.features}
            </button>
            <button onClick={() => scrollToSection('how-it-works-section')} className="text-text-secondary hover:text-foreground transition-colors">
              {t.howItWorks}
            </button>
            <button onClick={() => scrollToSection('plans-section')} className="text-text-secondary hover:text-foreground transition-colors">
              {t.plans}
            </button>
            <button onClick={() => scrollToSection('faq-section')} className="text-text-secondary hover:text-foreground transition-colors">
              {t.faq}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2 text-text-secondary hover:text-foreground">
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </Button>
            <Button variant="default" size="sm" className="bg-spotify-green hover:bg-spotify-green-hover text-white font-semibold">
              {t.access}
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;