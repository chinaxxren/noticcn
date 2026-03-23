"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Building2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              联系我们
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              如果您有语言服务需求，欢迎联系我们，我们将为您提供专业解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight">联系方式</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                我们的团队随时准备为您提供专业的语言服务咨询，帮助您找到最适合的解决方案。
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">公司名称</h3>
                    <p className="mt-1 text-muted-foreground">
                      万言信息科技（济宁）有限公司
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">邮箱</h3>
                    <a
                      href="mailto:contact@wanyan-tech.com"
                      className="mt-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      contact@wanyan-tech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">电话</h3>
                    <p className="mt-1 text-muted-foreground">
                      请通过邮件联系获取
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">地址</h3>
                    <p className="mt-1 text-muted-foreground">
                      山东省济宁市
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-secondary rounded-lg">
                <h3 className="font-semibold">商务合作</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  如果您是外贸企业、跨境电商或国际业务服务机构，我们可以为您提供定制化的语言服务解决方案。请填写右侧表单或直接发送邮件与我们联系。
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold tracking-tight">在线咨询</h2>
              <p className="mt-2 text-muted-foreground">
                填写以下表单，我们会尽快与您联系
              </p>

              {isSubmitted ? (
                <div className="mt-8 p-8 bg-card rounded-lg border border-border text-center">
                  <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">提交成功</h3>
                  <p className="mt-2 text-muted-foreground">
                    感谢您的咨询，我们会在 1-2 个工作日内与您联系
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    继续咨询
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        姓名 <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="请输入您的姓名"
                        className="bg-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-foreground"
                      >
                        公司名称
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="请输入您的公司名称"
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        邮箱 <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="请输入您的邮箱"
                        className="bg-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        电话
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="请输入您的电话"
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-foreground"
                    >
                      感兴趣的服务
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">请选择</option>
                      <option value="voice">实时语音翻译</option>
                      <option value="text">文本翻译服务</option>
                      <option value="enterprise">企业解决方案</option>
                      <option value="other">其他</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      留言 <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="请描述您的需求或问题"
                      rows={5}
                      className="bg-card resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "提交中..."
                    ) : (
                      <>
                        提交咨询
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
