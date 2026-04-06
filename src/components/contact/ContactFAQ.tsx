"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./ContactFAQ.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const FAQS = [
    {
        question: "Where do you currently deliver?",
        answer: "We currently offer delivery across major metropolitan areas via our partner platforms. Enter your location in the Store Locator above to find the nearest base for delivery."
    },
    {
        question: "How do I become a franchise partner?",
        answer: "We are always looking for passionate entrepreneurs. You can start by visiting our Franchise page for model details and submitting an inquiry there."
    },
    {
        question: "Do you offer vegan or dairy-free options?",
        answer: "Yes! We offer oat milk and soy milk alternatives for most of our signature blends. Our 7-Spice Masala is naturally vegan."
    },
    {
        question: "How far in advance should I book catering?",
        answer: "For intimate gatherings, we recommend 72 hours. For large corporate events or weddings, please reach out at least 2 weeks in advance."
    }
];

export function ContactFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            <SectionWrapper>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Common Inquiries</span>
                    <h2 className={styles.heading}>Frequently Asked Questions</h2>
                </div>

                <div className={styles.faqList}>
                    {FAQS.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""}`}
                        >
                            <button 
                                className={styles.question}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className={styles.questionText}>{faq.question}</span>
                                <ChevronDown className={styles.icon} />
                            </button>
                            {activeIndex === index && (
                                <div className={styles.answer}>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
