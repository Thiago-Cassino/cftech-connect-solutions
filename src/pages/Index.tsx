import { Shield, Headphones, Network, Wrench, Cloud, Lock, CheckCircle, Award, Users, Clock } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Counter } from "@/components/Counter";
import heroImage from "@/assets/hero-tech.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom duration-1000">
            CFTECH
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-4 animate-in slide-in-from-bottom duration-1000 delay-300">
            Conectando o Futuro da Sua Empresa
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-500">
            Soluções completas em infraestrutura de redes com segurança garantida e suporte 24/7
          </p>
          
          {/* Security & Support Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Shield className="w-5 h-5" />
              <span>Segurança Garantida</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Headphones className="w-5 h-5" />
              <span>Suporte 24/7</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-1000 delay-700">
            <HeroButton 
              variant="hero" 
              size="xl"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Nossos Serviços
            </HeroButton>
            <HeroButton 
              variant="hero-outline" 
              size="xl"
              asChild
            >
              <a href="https://wa.me/+5531973173158" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </HeroButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter end={500} suffix="+" />
              </div>
              <p className="text-muted-foreground">Projetos Concluídos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter end={15} suffix="+" />
              </div>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter end={50} suffix="+" />
              </div>
              <p className="text-muted-foreground">Empresas Atendidas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter end={99} suffix="%" />
              </div>
              <p className="text-muted-foreground">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a CFTECH</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A CFTECH é uma empresa especializada em soluções de tecnologia da informação, 
              com foco em infraestrutura de redes e segurança digital. Com mais de 15 anos 
              de experiência no mercado, oferecemos soluções completas e personalizadas para 
              empresas de todos os portes, garantindo conectividade segura e eficiente para 
              o seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-tech transition-all duration-300">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Excelência</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Compromisso com a qualidade e excelência em cada projeto desenvolvido.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-tech transition-all duration-300">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Equipe Especializada</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Profissionais certificados e especializados nas mais modernas tecnologias.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-tech transition-all duration-300">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Agilidade</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Soluções rápidas e eficientes, minimizando o tempo de inatividade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Diferenciais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos no mercado de infraestrutura tecnológica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Segurança Avançada",
                description: "Implementação de protocolos de segurança de última geração para proteger seus dados."
              },
              {
                icon: Headphones,
                title: "Suporte 24/7",
                description: "Equipe técnica disponível 24 horas por dia, 7 dias por semana para resolver qualquer problema."
              },
              {
                icon: CheckCircle,
                title: "Garantia de Qualidade",
                description: "Todos os nossos serviços possuem garantia e acompanhamento pós-implementação."
              },
              {
                icon: Network,
                title: "Tecnologia de Ponta",
                description: "Utilizamos as mais modernas tecnologias e equipamentos do mercado."
              },
              {
                icon: Users,
                title: "Consultoria Especializada",
                description: "Análise completa das necessidades da sua empresa antes de qualquer implementação."
              },
              {
                icon: Award,
                title: "Certificações",
                description: "Equipe com certificações internacionais das principais fabricantes de tecnologia."
              }
            ].map((differential, index) => (
              <Card key={index} className="shadow-card hover:shadow-tech transition-all duration-300 group">
                <CardHeader className="text-center">
                  <differential.icon className="w-12 h-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle>{differential.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{differential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em infraestrutura de TI para sua empresa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="bg-gradient-primary p-6 text-white">
                <Network className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl mb-2">Implementação de Redes</CardTitle>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Projetamos e implementamos infraestruturas de rede completas, desde redes locais (LAN) 
                  até redes de longa distância (WAN), garantindo conectividade eficiente e segura.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Cabeamento estruturado
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Configuração de switches e roteadores
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Redes wireless empresariais
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="bg-gradient-primary p-6 text-white">
                <Wrench className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl mb-2">Manutenção Preventiva</CardTitle>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Mantemos sua infraestrutura funcionando perfeitamente com planos de manutenção 
                  preventiva que evitam problemas antes que eles aconteçam.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Monitoramento 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Atualizações de firmware
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Relatórios de performance
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="bg-gradient-primary p-6 text-white">
                <Cloud className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl mb-2">Migração para Nuvem</CardTitle>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Auxiliamos sua empresa na transição para a computação em nuvem, garantindo 
                  segurança, escalabilidade e redução de custos operacionais.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Análise de viabilidade
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Migração de dados seguros
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Treinamento de equipes
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="bg-gradient-primary p-6 text-white">
                <Lock className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl mb-2">Segurança de Rede</CardTitle>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Implementamos soluções de segurança robustas para proteger sua rede contra 
                  ameaças digitais e garantir a integridade dos seus dados.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Firewalls avançados
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Sistemas de detecção de intrusão
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Backup automatizado
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Modernizar sua Infraestrutura?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar a tecnologia da sua empresa
          </p>
          <HeroButton variant="hero-outline" size="xl" asChild>
            <a href="https://wa.me/+5531973173158" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
            </a>
          </HeroButton>
        </div>
      </section>
    </div>
  );
};

export default Index;