import type { Metadata } from "next";
import Link from "next/link";
import { Bot, ArrowRight, CheckCircle2, MessageCircle, Phone, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Chatbots & Conversational AI — GrowthSpare",
  description: "GrowthSpare builds custom AI chatbots, customer support agents, WhatsApp automation bots, and voice AI agents that work 24/7 to qualify leads and support customers.",
};

const useCases = [
  { icon: MessageCircle, title: "Customer Support Agent", desc: "Handle FAQs, order tracking, complaints, and escalations — 24/7 without human intervention.", color: "bg-violet-500" },
  { icon: Zap, title: "Lead Qualification Bot", desc: "Engage website visitors, qualify leads, collect contact info, and book appointments automatically.", color: "bg-amber-500" },
  { icon: Phone, title: "WhatsApp Automation", desc: "Send order updates, payment confirmations, follow-ups, and promotional messages via WhatsApp Business API.", color: "bg-green-500" },
  { icon: Bot, title: "Voice AI Agents", desc: "Automated voice calls for appointment reminders, lead follow-up, and customer surveys.", color: "bg-blue-500" },
  { icon: MessageCircle, title: "Internal Knowledgebase AI", desc: "AI assistant trained on your company docs, policies, and SOPs — answers employee questions instantly.", color: "bg-indigo-500" },
  { icon: Zap, title: "Appointment Scheduling AI", desc: "AI agent that checks availability and books appointments directly into your calendar system.", color: "bg-rose-500" },
];

const integrations = ["WhatsApp Business API", "Telegram", "Website Widget", "Facebook Messenger", "Instagram DM", "Slack", "MS Teams", "Custom API", "Twilio (Voice)", "CRM Systems"];

export default function AIChatbotsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-violet-50 to-white py-16 md:py-20 border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-xs font-semibold px-3.5 py-2 rounded-full mb-6">
                <Bot className="w-3.5 h-3.5" /> AI Chatbots & Agents
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                AI Agents That Work{" "}
                <span className="text-violet-600">24/7 For You.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                We build custom AI chatbots and intelligent agents that handle customer support, qualify
                leads, schedule appointments, and automate workflows — so your team can focus on
                high-value work while AI handles the rest.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <Link href="/contact" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md">
                  Build Your AI Agent
                </Link>
                <Link href="/solutions/technology-ai" className="border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-colors">
                  All AI Solutions
                </Link>
              </div>
              <div className="flex gap-6 text-sm">
                {[{ v: "2 min", l: "Avg response time" }, { v: "24/7", l: "Availability" }, { v: "40%", l: "Support cost reduction" }].map((s) => (
                  <div key={s.l}>
                    <p className="text-2xl font-black text-violet-600">{s.v}</p>
                    <p className="text-gray-500 text-xs">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=700" alt="AI Chatbots" className="w-full rounded-3xl shadow-xl object-cover aspect-video" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">AI Chatbot Use Cases</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Every chatbot we build is purpose-designed for a specific business outcome.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <div key={uc.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-violet-200 hover:shadow-sm transition-all duration-200">
                  <div className={`w-11 h-11 ${uc.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{uc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-7">Platforms & Integrations</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((int) => (
              <span key={int} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">{int}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">Deploy an AI Agent for Your Business</h2>
          <p className="text-gray-400 text-lg mb-8">From WhatsApp bots to voice AI — let&apos;s build an intelligent agent that works for your specific use case.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
            Get Started with AI <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
