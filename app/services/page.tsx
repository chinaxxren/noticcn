import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mic,
  FileText,
  Building2,
  CheckCircle2,
  Video,
  Phone,
  Users,
  BookOpen,
  MessageSquare,
  FileCheck,
  Mail,
  Settings,
  Code,
  Globe,
  Layers,
} from "lucide-react";

const voiceFeatures = [
  "实时语音识别",
  "实时翻译输出",
  "多语言支持",
  "高准确率",
  "稳定低延迟",
];

const voiceScenarios = [
  { icon: Video, label: "外贸客户视频会议" },
  { icon: Users, label: "商务洽谈" },
  { icon: Phone, label: "国际电话沟通" },
  { icon: BookOpen, label: "在线培训" },
  { icon: MessageSquare, label: "技术交流会议" },
];

const textFeatures = [
  "支持多种主流语言",
  "高准确度翻译",
  "专业术语优化",
  "可批量处理",
];

const textContent = [
  { icon: FileCheck, label: "产品说明书" },
  { icon: FileText, label: "合同文件" },
  { icon: Mail, label: "商务邮件" },
  { icon: BookOpen, label: "技术资料" },
  { icon: Globe, label: "网站内容" },
];

const enterpriseFeatures = [
  { icon: Settings, label: "企业内部翻译系统部署" },
  { icon: Code, label: "API接口接入" },
  { icon: Globe, label: "多语言沟通系统建设" },
  { icon: Layers, label: "定制语言模型优化" },
];

const enterpriseFor = [
  "大型外贸企业",
  "跨境电商平台",
  "国际业务团队",
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              产品与服务
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              为企业提供全方位的智能语言技术解决方案，助力企业实现高效跨语言沟通
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Voice Translation */}
      <section id="voice" className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                <Mic className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight">
                实时语音翻译服务
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Real-time Speech Translation
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                为企业提供高效的实时语音翻译能力，适用于多种商务场景。帮助企业实现跨语言实时沟通，减少人工翻译成本，提高沟通效率。
              </p>
              
              <h3 className="mt-10 text-lg font-semibold">服务特点</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {voiceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-lg font-semibold mb-6">适用场景</h3>
              <div className="space-y-4">
                {voiceScenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border"
                  >
                    <scenario.icon className="h-5 w-5 text-muted-foreground" />
                    <span>{scenario.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Text Translation */}
      <section id="text" className="py-24 bg-secondary scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 bg-card rounded-lg p-8 border border-border">
              <h3 className="text-lg font-semibold mb-6">适用内容</h3>
              <div className="space-y-4">
                {textContent.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg"
                  >
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight">
                文本翻译服务
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Text Translation
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                为企业提供高质量的文本翻译支持，适用于多种业务资料处理。确保企业在国际业务中的文本表达准确、专业、规范。
              </p>
              
              <h3 className="mt-10 text-lg font-semibold">服务特点</h3>
              <ul className="mt-4 space-y-3">
                {textFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Enterprise Solutions */}
      <section id="enterprise" className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 mx-auto bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              企业语言解决方案
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Enterprise Language Solutions
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              为企业提供定制化语言技术解决方案，实现企业级语言能力的系统化与自动化。
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-secondary rounded-lg text-center"
              >
                <div className="w-12 h-12 mx-auto bg-card rounded-full flex items-center justify-center border border-border">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <p className="mt-4 font-medium">{feature.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-secondary rounded-lg p-8">
            <h3 className="text-lg font-semibold mb-6 text-center">适用于</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {enterpriseFor.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border"
                >
                  <CheckCircle2 className="h-4 w-4 text-foreground" />
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
            需要定制化语言服务方案？
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            联系我们的专业团队，获取适合您企业的语言服务解决方案
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
