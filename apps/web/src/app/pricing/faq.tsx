import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@palettify/ui";
import { siteConfig } from "@/config";

const config = siteConfig.pricingPage;
const questions = config.faq;

export const FAQ = () => {
  return (
    <section className="mt-28">
      <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        Frequently asked questions
      </h2>
      <div className="container mt-8 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {questions.map((elem, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger className="text-lg font-semibold">
                {elem.question}
              </AccordionTrigger>
              <AccordionContent className="text-md pb-8">{elem.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
