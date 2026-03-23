import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Eye,
  Cpu,
  Shield,
  Users,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Cpu,
    title: "技术驱动服务",
    description: "以先进的人工智能技术为核心，持续优化产品体验。",
  },
  {
    icon: Shield,
    title: "稳定优先",
    description: "系统稳定性是企业服务的基础，我们始终将稳定性放在首位。",
  },
  {
    icon: Sparkles,
    title: "数据安全",
    description: "严格的数据安全措施，保护客户信息隐私。",
  },
  {
    icon: Users,
    title: "客户至上",
    description: "深入理解客户需求，提供贴心的服务支持。",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              关于我们
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              万言信息科技（济宁）有限公司专注于智能语言技术领域，主要为企业提供实时语音翻译、文本翻译以及多语言沟通解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">公司介绍</h2>
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  在全球贸易不断发展的背景下，语言已经成为企业国际化的重要环节。我们通过融合先进的人工智能技术与语言处理能力，帮助企业实现跨语言即时沟通，降低沟通成本，提高业务效率。
                </p>
                <p>
                  万言信息科技致力于成为企业级语言服务的可靠合作伙伴，通过稳定、高效的技术方案，帮助中国企业走向世界，在国际市场中获得竞争优势。
                </p>
                <p>
                  我们的团队汇聚了语言技术、人工智能和企业服务领域的专业人才，深入理解外贸企业的实际需求，持续优化产品和服务。
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">我们的客户涵盖</h3>
              <ul className="space-y-4">
                {[
                  "外贸公司",
                  "跨境电商企业",
                  "制造业出口企业",
                  "国际商务服务机构",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-card rounded-lg p-10 border border-border">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">我们的使命</h3>
              <p className="mt-4 text-lg font-medium text-foreground">
                让全球沟通更加简单高效
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                通过先进技术降低语言门槛，让企业能够更加专注于业务本身，而不是沟通成本。
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-lg p-10 border border-border">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                <Eye className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">我们的愿景</h3>
              <p className="mt-4 text-lg font-medium text-foreground">
                成为值得信赖的企业级语言服务技术提供商
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                为中国企业走向世界提供坚实的语言支持，助力企业在国际市场取得成功。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">我们的价值观</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              为客户提供可靠、可持续的语言服务支持
            </p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto bg-secondary rounded-full flex items-center justify-center">
                  <value.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            期待与您合作
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            了解我们的产品与服务，开启全球化沟通之旅
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">
                查看服务
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
