import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "/", label: "首页" },
    { href: "/about", label: "关于我们" },
    { href: "/services", label: "产品与服务" },
    { href: "/advantages", label: "技术优势" },
    { href: "/contact", label: "联系我们" },
  ],
  services: [
    { href: "/services#voice", label: "实时语音翻译" },
    { href: "/services#text", label: "文本翻译服务" },
    { href: "/services#enterprise", label: "企业解决方案" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-semibold tracking-tight">万言科技</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-md leading-relaxed">
              万言信息科技（济宁）有限公司，专注于智能语言技术应用，致力于为外贸企业提供高质量的实时语音翻译与文本翻译解决方案。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4">导航</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">服务</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2026 万言信息科技（济宁）有限公司 版权所有
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                鲁ICP备2026012479号
              </a>
              <Link
                href="mailto:contact@wanyan-tech.com"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                contact@wanyan-tech.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
