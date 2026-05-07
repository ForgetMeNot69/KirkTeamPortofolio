import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is BoorgerKirk Team?",
    answer:
      "BoorgerKirk is a four-member team focused on websites, AI automation, machine learning prototypes, and computer science projects.",
    value: "item-1",
  },
  {
    question: "Can you build a full website?",
    answer:
      "Yes. We can build landing pages, portfolios, dashboards, and full-stack web apps depending on the project scope.",
    value: "item-2",
  },
  {
    question: "Do you work with AI and machine learning?",
    answer:
      "Yes. We can prototype AI-assisted workflows, automation tools, data analysis, and machine learning experiments.",
    value: "item-3",
  },
  {
    question: "Can the team help shape an unclear idea?",
    answer:
      "Yes. If the idea is still rough, we can help turn it into features, screens, data requirements, and a practical first milestone.",
    value: "item-4",
  },
  {
    question: "How do we start a project?",
    answer:
      "Send a short message through the contact form with your idea, deadline, and expected output. We will use that to define the first version.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
