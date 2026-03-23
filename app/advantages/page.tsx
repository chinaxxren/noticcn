import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Clock,
  Globe,
  Shield,
  CheckCircle2,
  Video,
  Handshake,
  Headphones,
  GraduationCap,
} from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "高效稳定",
    description:
      "系统采用先进的语音识别与机器翻译技术，具备高稳定性与持续运行能力，适用于企业级使用场景。",
    highlights: ["先进的语音识别技术", "高稳定性系统架构", "持续运行能力"],
  },
  {
    icon: Clock,
    title: "低延迟响应",
    description:
      "实时翻译系统具备快速响应能力，支持近实时翻译输出，大幅减少沟通等待时间。",
    highlights: ["快速响应能力", "近实时翻译输出", "减少沟通等待时间"],
  },
  {
    icon: Globe,
    title: "多语言支持",
    description:
      "支持多种国际主流语言，可根据企业需求扩展语言种类，满足不同市场的沟通需求。",
    highlights: ["英语", "西班牙语", "法语", "德语", "日语", "韩语"],
  },
  {
    icon: Shield,
    title: "数据安全保障",
    description:
      "我们重视客户数据安全，严格保护客户信息，确保企业沟通内容的安全性与隐私性。",
    highlights: ["客户信息保护", "通信内容加密", "隐私安全保障"],
  },
];

const useCases = [
  {
    icon: Video,
    title: "外贸企业视频会议",
    description:
      "在与海外客户进行远程会议时，实时语音翻译可帮助双方即时理解沟通内容，提高会议效率。",
  },
  {
    icon: Handshake,
    title: "国际商务谈判",
    description:
      "在商务谈判过程中，减少因语言差异带来的误解，提高沟通准确性。",
  },
  {
    icon: Headphones,
    title: "客户服务支持",
    description:
      "在面对国际客户时，企业客服人员可通过翻译系统快速响应客户需求。",
  },
  {
    icon: GraduationCap,
    title: "技术培训与交流",
    description:
      "帮助技术团队与海外客户进行顺畅交流，提高培训效率。",
  },
];

const whyChooseUs = [
  "专注语言技术领域",
  "服务外贸企业需求",
  "系统稳定可靠",
  "响应速度快",
  "持续技术优化",
  "提供专业支持服务",
];

export default function AdvantagesPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              技术优势
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              先进的技术架构，稳定可靠的服务保障，让您的国际业务沟通更加顺畅
            </p>
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">核心技术优势</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              为企业级应用场景打造的专业语言技术方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="p-8 bg-secondary rounded-lg border border-border"
              >
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                  <advantage.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{advantage.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {advantage.highlights.map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className="px-3 py-1 bg-card text-sm rounded-full border border-border"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">应用场景</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              适用于多种国际商务场景，助力企业高效沟通
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border text-center"
              >
                <div className="w-12 h-12 mx-auto bg-secondary rounded-full flex items-center justify-center">
                  <useCase.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{useCase.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                为什么选择万言信息科技
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                我们致力于为客户提供长期稳定的语言支持服务，以专业的技术能力和贴心的服务态度，成为企业可信赖的语言服务合作伙伴。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
                >
                  <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            体验专业的语言服务
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            联系我们，了解如何将先进的语言技术应用到您的业务中
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                立即咨询
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/services">查看服务</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
