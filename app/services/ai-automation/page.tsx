import type { Metadata } from "next";
import Link from "next/link";
import { Workflow, ArrowRight, Bot, Zap, Database, FileText, Mail, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Workflow Automation — GrowthSpare | Business Process Automation",
  description: "GrowthSpare builds AI-powered workflow automation systems — CRM automation, document processing, lead qualification, appointment scheduling, RAG systems, and LLM integrations.",
};

const automations = [
  { icon: Users, title: "CRM Automation", desc: "Auto-assign leads, trigger follow-up sequences, update pipeline stages, and notify sales reps based on behavior signals." },
  { icon: Mail, title: "Email Automation", desc: "Multi-step email sequences triggered by actions — sign-ups, purchases, abandoned carts, and more." },
  { icon: FileText, title: "Document Processing", desc: "Extract data from invoices, contracts, and forms using AI — no manual data entry." },
  { icon: Zap, title: "Lead Qualification", desc: "AI agent scores and qualifies inbound leads 24/7, then routes them to the right team member." },
  { icon: Bot, title: "Appointment Scheduling", desc: "Fully automated booking system that integrates with your calendar and sends confirmations." },
  { icon: Database, title: "RAG Systems", desc: "Retrieval-Augmented Generation systems that answer questions from your business documents and databases." },
  { icon: Workflow, title: "AI Workflows", desc: "Multi-step AI workflows connecting your tools — from triggers to actions across your entire stack." },
  { icon: Zap, title: "LLM Integrations", desc: "Integrate GPT-4, Claude, Gemini, and other LLMs into your product or internal workflows." },
  { icon: Bot, title: "MCP Servers", desc: "Model Context Protocol servers that give AI agents access to your business data and tools." },
];

export default function AIAutomationPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-50 to-white py-16 md:py-20 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-xs font-semibold px-3.5 py-2 rounded-full mb-6">
                <Workflow className="w-3.5 h-3.5" /> AI Workflow Automation
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                Automate Repetitive Work.
                <br />
                <span className="text-purple-600">Multiply Your Output.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-7">
                We build AI-powered automation systems that eliminate repetitive tasks, streamline
                business processes, and allow your team to focus on high-value work. From CRM
                workflows to document processing to full AI agent deployments.
              </p>
              <div className="flex gap-4 mb-8">
                <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md">
                  Start Automating
                </Link>
                <Link href="/solutions/technology-ai" className="border-2 border-gray-200 hover:border-gray-900 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-colors">
                  All AI Solutions
                </Link>
              </div>
              <div className="flex gap-6">
                {[{ v: "80%", l: "Tasks automated" }, { v: "3–6x", l: "Productivity increase" }, { v: "24/7", l: "AI runs non-stop" }].map((s) => (
                  <div key={s.l}>
                    <p className="text-2xl font-black text-purple-600">{s.v}</p>
                    <p className="text-gray-500 text-xs">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=700" alt="AI Automation" className="w-full rounded-3xl shadow-xl object-cover aspect-video" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Automation Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From simple triggers to complex multi-step AI workflows — we automate it all.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {automations.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="bg-purple-50/40 border border-purple-100 rounded-2xl p-6 hover:border-purple-200 hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{a.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Tools & Platforms We Work With</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Make (Integromat)", "n8n", "Zapier", "LangChain", "LlamaIndex", "OpenAI API", "Anthropic Claude", "Google Gemini", "Twilio", "WhatsApp Business API", "HubSpot", "Salesforce", "Pipedrive", "Notion", "Airtable", "Google Sheets"].map((t) => (
              <span key={t} className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">Start Automating Your Business Today</h2>
          <p className="text-gray-400 text-lg mb-8">Tell us which processes you want to automate and we&apos;ll design the perfect AI workflow.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">
            Book Free Automation Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
