import deviceMockup from "@/assets/device-mockup.png";

const DeviceMockup = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforme a sua gestão financeira
          </h2>
          <p className="text-xl text-muted-foreground">
            Acesse de qualquer dispositivo e tenha o controle total do seu dinheiro
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
          <img 
            src={deviceMockup} 
            alt="GranaFlow em iPhone e MacBook mostrando gráficos financeiros" 
            className="relative z-10 w-full rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default DeviceMockup;
