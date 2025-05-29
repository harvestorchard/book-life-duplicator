'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who's My Life in a Book?",
    answer: "We're so glad you asked! My Life in a Book is a guided storytelling platform that helps people create meaningful hardcover books through thoughtful questions. Whether you're preserving family memories or exploring personal growth, our prompt-based programs make it easy to transform life stories into beautiful keepsakes."
  },
  {
    question: "What kind of questions do you have?",
    answer: "We've crafted thousands of thoughtful questions, covering everything from childhood memories to life lessons. Each account starts with 52 pre-selected questions—perfect for a year of storytelling—but you can swap any question using our extensive library or even add your own to make it truly personal."
  },
  {
    question: "Can I choose the questions?",
    answer: "Yes! You can handpick the questions that mean the most to you, ensuring every story feels personal and true to you and your gift recipient."
  },
  {
    question: "Can I add my own questions?",
    answer: "Absolutely! You're welcome to add your own questions to make the experience even more personal."
  },
  {
    question: "Which languages are available for your books?",
    answer: "We offer question sets in a variety of languages, including English, French, Spanish, Italian, Korean, Japanese, Chinese, German, Arabic, Hebrew, Dutch, and Portuguese."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing starts at $79 for a one-year Story Prompt Program which includes one full-color keepsake book."
  },
  {
    question: "Can I order additional copies after the initial purchase?",
    answer: "Yes, you can order extra copies of your book at any time. Each extra copy costs $30."
  },
  {
    question: "Where do you ship to?",
    answer: "We ship worldwide! Shipping is free for customers in the USA, Canada, UK, Australia, New Zealand, as well as all countries in the European Union. For other countries, a shipping fee per package applies, ranging from $5 to $15, depending on the destination."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Find answers to common questions about our books, process, and how everything works.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-card px-6">
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
