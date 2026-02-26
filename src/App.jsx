import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  Settings, 
  ChevronRight, 
  Menu, 
  X, 
  Globe, 
  Users, 
  PhoneCall, 
  Mail, 
  MapPin,
  Sun,
  Moon,
  Zap,
  Activity,
  ShieldAlert,
  ArrowRight,
  Cpu,
  Database
} from 'lucide-react';

// 스크롤 시 나타나는 애니메이션 컴포넌트
const ScrollReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navLinks = [
    { name: '회사소개', href: '#about' },
    { name: '사업분야', href: '#business' },
    { name: '제품소개', href: '#products' },
    { name: '고객지원', href: '#support' },
  ];

  const businessAreas = [
    {
      title: "네트워크 보안",
      description: "SECUI 솔루션 기반 차세대 방화벽으로 하이브리드 클라우드와 온프레미스를 완벽 보호합니다.",
      icon: <Activity className="w-8 h-8" />,
      gradient: "from-blue-600 to-cyan-500",
      tag: "Network"
    },
    {
      title: "데이터 완전 삭제",
      description: "Blancco 인증 파트너로서 재사용 불가능한 수준의 완벽한 데이터 폐기 프로세스를 제공합니다.",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-indigo-600 to-blue-500",
      tag: "Data"
    },
    {
      title: "지능형 위협 대응",
      description: "Endpoint에서 발생하는 이상 징후를 AI가 실시간 분석하여 제로데이 공격에 대응합니다.",
      icon: <ShieldAlert className="w-8 h-8" />,
      gradient: "from-blue-700 to-indigo-600",
      tag: "AI Security"
    },
    {
      title: "통합 보안 관제",
      description: "숙련된 전문가의 24/7 모니터링을 통해 보안 위협에 대한 즉각적인 조치 및 보고를 수행합니다.",
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-slate-700 to-slate-500",
      tag: "MDR"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans selection:bg-blue-500/30 overflow-x-hidden ${darkMode ? 'bg-[#030712] text-slate-100' : 'bg-white text-slate-900'}`}>
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Blobs */}
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 animate-pulse transition-colors duration-700 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 animate-pulse transition-colors duration-700 ${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'}`} style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div className={`absolute inset-0 opacity-[0.03] ${darkMode ? 'invert-0' : 'invert opacity-[0.05]'} bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-repeat`}></div>
      </div>

      {/* Header */}
      <nav className={`fixed w-full z-[60] transition-all duration-500 ${scrolled ? (darkMode ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-3') : 'bg-transparent py-7'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-11 h-11 bg-gradient-to-tr from-blue-700 to-blue-500 rounded-xl flex items-center justify-center shadow-xl">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tighter leading-none ${darkMode ? 'text-white' : 'text-slate-900'}`}>GTE SECU</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-500 mt-0.5">SECURITY EXPERT</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className={`text-sm font-bold tracking-tight hover:text-blue-500 transition-all relative group ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="flex items-center gap-6 pl-8 border-l border-white/10">
              <button onClick={toggleDarkMode} className={`p-2.5 rounded-xl transition-all ${darkMode ? 'bg-slate-900 text-yellow-400 hover:bg-slate-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="relative group overflow-hidden bg-blue-600 text-white px-7 py-3 rounded-xl text-sm font-black transition-all hover:shadow-2xl hover:shadow-blue-600/30">
                <span className="relative z-10">PARTNER INQUIRY</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2">{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Cyber Pattern */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${darkMode ? 'opacity-[0.15]' : 'opacity-[0.05]'}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-500 rounded-full text-xs font-black uppercase tracking-widest mb-10">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                Certified Security Infrastructure Leader
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10 tracking-tighter">
                디지털 자산의<br />
                <span className="relative">
                   <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400">철저한 방어선</span>
                   <div className="absolute -bottom-2 left-0 w-full h-4 bg-blue-600/10 blur-xl -z-10 animate-pulse"></div>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className={`text-xl md:text-2xl mb-14 leading-relaxed max-w-xl font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                단순한 솔루션 공급을 넘어 비즈니스의 연속성을 보장하는 
                지능형 보안 에코시스템을 구축합니다.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex flex-wrap gap-6">
                <button className="group relative bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-blue-600/40 hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    사업 영역 탐색 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className={`px-10 py-5 rounded-2xl font-black text-lg border-2 transition-all hover:bg-white/5 ${darkMode ? 'border-white/10 text-white' : 'border-slate-200 text-slate-900'}`}>
                  파트너십 문의
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Interactive Graphic */}
          <ScrollReveal delay={800} className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Outer Decorative Circles */}
              <div className="absolute inset-0 border-2 border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-8 border-2 border-dashed border-indigo-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Core Shield */}
              <div className="absolute inset-[25%] bg-gradient-to-br from-blue-600 to-indigo-900 rounded-3xl shadow-[0_0_80px_-10px_rgba(37,99,235,0.5)] flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <ShieldCheck className="w-32 h-32 text-white group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Data Points */}
              <div className="absolute top-0 right-1/4 w-12 h-12 bg-slate-900 border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
                <Lock className="text-blue-500 w-6 h-6" />
              </div>
              <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-slate-900 border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                <Activity className="text-cyan-500 w-8 h-8" />
              </div>
              <div className="absolute top-1/2 -right-8 w-20 h-20 bg-slate-900 border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl animate-spin-slow">
                <Globe className="text-indigo-400 w-10 h-10" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Ticker */}
      <div className={`py-16 border-y relative z-10 backdrop-blur-sm ${darkMode ? 'border-white/5 bg-slate-950/30' : 'border-slate-200 bg-white/50'}`}>
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex items-center gap-24 animate-marquee whitespace-nowrap opacity-30 grayscale hover:grayscale-0 transition-all cursor-default">
            {["WINS", "SECUI", "Blancco", "Monitorapp", "Scops", "SB Systems", "Comtrue", "NetAnd", "SGA Solutions", "Fortinet"].map((p, i) => (
              <span key={i} className="text-3xl font-black tracking-[0.2em]">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Business Areas - High Tech Cards */}
      <section id="business" className="py-40 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <ScrollReveal>
              <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-sm mb-6">Our Capabilities</h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                통합 보안 기술의<br />새로운 표준
              </h3>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessAreas.map((area, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className={`group relative h-[450px] p-10 rounded-[3rem] border transition-all duration-700 overflow-hidden flex flex-col justify-between ${darkMode ? 'bg-slate-900/40 border-white/5 hover:border-blue-500/50 hover:bg-slate-900/60' : 'bg-white border-slate-100 hover:border-blue-300 hover:shadow-2xl'}`}>
                  {/* Card Background Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.gradient} blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity`}></div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-12">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${area.gradient} text-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                        {area.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 opacity-60">{area.tag}</span>
                    </div>
                    <h4 className="text-3xl font-black mb-6 leading-tight group-hover:text-blue-500 transition-colors">{area.title}</h4>
                    <p className={`leading-relaxed text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {area.description}
                    </p>
                  </div>

                  <div className="relative pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-blue-500">Learn More</span>
                    <div className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                      <ArrowRight size={16} className="text-blue-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="py-40 bg-gradient-to-b from-transparent to-blue-600/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <div className="space-y-12">
                {[
                  { title: "보안성 (Security)", desc: "국제 표준 및 국가 보안 가이드를 완벽히 준수하는 최고 수준의 안정성" },
                  { title: "가용성 (Availability)", desc: "중단 없는 비즈니스를 위한 최적의 이중화 아키텍처 및 24/7 기술 지원" },
                  { title: "확장성 (Scalability)", desc: "급변하는 IT 환경과 클라우드 전환에 유연하게 대응하는 미래지향적 설계" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-5xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors duration-500">0{i+1}</div>
                    <div>
                      <h5 className="text-2xl font-black mb-3">{item.title}</h5>
                      <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div className="order-1 lg:order-2">
            <ScrollReveal delay={200}>
              <h3 className="text-5xl font-black tracking-tighter mb-10">우리의 핵심 가치는<br /><span className="text-blue-500 italic underline underline-offset-8">절대적인 신뢰</span>입니다.</h3>
              <p className={`text-lg mb-10 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                지티이시큐는 고객의 비즈니스가 어떤 위협에도 흔들리지 않도록 최전방에서 방어벽을 구축합니다. 
                전문 엔지니어링 그룹의 기술력을 바탕으로 최적의 보안 파트너십을 제안합니다.
              </p>
              <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
                <div className="relative z-10 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-black mb-2">14+</div>
                    <div className="text-xs font-bold opacity-70 uppercase tracking-widest">Years of Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black mb-2">500+</div>
                    <div className="text-xs font-bold opacity-70 uppercase tracking-widest">Enterprise Clients</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-32 relative z-10 ${darkMode ? 'bg-[#010409] border-t border-white/5' : 'bg-slate-50 border-t border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <ShieldCheck className="text-white w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className={`text-2xl font-black tracking-tighter leading-none ${darkMode ? 'text-white' : 'text-slate-900'}`}>GTE SECU</span>
                  <span className="text-[10px] font-black tracking-[0.2em] text-blue-500">SECURITY INFRASTRUCTURE</span>
                </div>
              </div>
              <p className={`text-lg max-w-sm mb-12 leading-relaxed font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                (주)지티이시큐는 최고 수준의 보안 기술과 신뢰를 바탕으로 
                안전한 비즈니스 생태계를 선도하는 정보보호 전문 기업입니다.
              </p>
              <div className="flex gap-4">
                {[Globe, Users, Mail, PhoneCall].map((Icon, i) => (
                  <div key={i} className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${darkMode ? 'bg-slate-900 text-slate-500 hover:text-white hover:bg-blue-600 hover:-translate-y-1' : 'bg-white border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600'}`}>
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-16">
              <div className="space-y-8">
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500">Quick Menu</h4>
                <ul className="space-y-5 font-bold text-sm">
                  {['회사소개', '사업분야', '제품정보', '기술지원', '인재채용'].map(item => (
                    <li key={item}><a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2 group"><div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div> {item}</a></li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-2 space-y-8">
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500">Global Office</h4>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <MapPin className="text-blue-600 shrink-0" size={24} />
                    <div className="text-sm font-medium leading-relaxed">
                      <span className="block font-black text-xs uppercase opacity-40 mb-1">Headquarter</span>
                      서울특별시 영등포구 당산로41길 11, SK V1센터 E동 1605호
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="flex gap-5">
                      <PhoneCall className="text-blue-600 shrink-0" size={20} />
                      <div className="text-sm font-medium">
                        <span className="block font-black text-xs uppercase opacity-40 mb-1">Call Us</span>
                        02-123-4567
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <Mail className="text-blue-600 shrink-0" size={20} />
                      <div className="text-sm font-medium">
                        <span className="block font-black text-xs uppercase opacity-40 mb-1">Email</span>
                        contact@gtesecu.co.kr
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-widest ${darkMode ? 'border-white/5 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
            <div className="flex flex-wrap justify-center gap-8">
              <p>© 2024 GTE SECU CO., LTD. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Terms of Use</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              SERVER STATUS: OPERATIONAL
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${darkMode ? '#030712' : '#f8fafc'};
        }
        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}} />
    </div>
  );
};

export default App;