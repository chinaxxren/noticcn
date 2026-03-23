import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Mic,
  FileText,
  Building2,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Languages,
} from "lucide-react";

const clients = [
  "外贸公司",
  "跨境电商企业",
  "制造业出口企业",
  "国际商务服务机构",
];

const services = [
  {
    icon: Mic,
    title: "实时语音翻译",
    description: "为企业提供高效的实时语音翻译能力，适用于视频会议、商务洽谈等场景。",
    href: "/services#voice",
  },
  {
    icon: FileText,
    title: "文本翻译服务",
    description: "高质量的文本翻译支持，适用于产品说明书、合同文件、商务邮件等。",
    href: "/services#text",
  },
  {
    icon: Building2,
    title: "企业解决方案",
    description: "定制化语言技术解决方案，包括企业内部翻译系统部署、API接口接入等。",
    href: "/services#enterprise",
  },
];

const advantages = [
  {
    icon: Zap,
    title: "高效稳定",
    description: "系统采用先进的语音识别与机器翻译技术，具备高稳定性与持续运行能力。",
  },
  {
    icon: Globe,
    title: "多语言支持",
    description: "支持英语、西班牙语、法语、德语、日语、韩语等多种国际主流语言。",
  },
  {
    icon: Shield,
    title: "数据安全",
    description: "严格保护客户信息，确保企业沟通内容的安全性与隐私性。",
  },
  {
    icon: Languages,
    title: "低延迟响应",
    description: "实时翻译系统具备快速响应能力，支持近实时翻译输出。",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            让语言不再成为贸易的障碍
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto text-balance">
            实时语音翻译与智能语言服务解决方案提供商
          </p>
          <p className="mt-4 text-base text-primary-foreground/60 max-w-xl mx-auto">
            专注为外贸企业提供高效、精准、稳定的语言支持服务，助力企业轻松拓展全球市场
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="min-w-[160px]">
              <Link href="/services">
                了解我们的服务
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[160px] bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
                万言信息科技
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                万言信息科技（济宁）有限公司，是一家专注于智能语言技术应用的科技企业，致力于为外贸企业提供高质量的实时语音翻译与文本翻译解决方案。
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                我们结合先进的人工智能技术与丰富的语言服务经验，为客户提供稳定、高效、可规模化部署的语言支持服务，帮助企业在国际沟通中更加顺畅、高效。
              </p>
              <Button asChild variant="link" className="mt-6 px-0 text-foreground">
                <Link href="/about">
                  了解更多
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
                >
                  <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              核心服务
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              为企业提供全方位的语言技术解决方案
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-8 bg-card rounded-lg border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold group-hover:text-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-foreground">
                  了解更多
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              技术优势
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              先进的技术架构，稳定可靠的服务保障
            </p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto bg-secondary rounded-full flex items-center justify-center">
                  <advantage.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{advantage.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/advantages">
                查看全部优势
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            准备好开启全球化沟通了吗？
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            联系我们，获取专属于您的语言服务解决方案
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-10">
            <Link href="/contact">
              立即咨询
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
