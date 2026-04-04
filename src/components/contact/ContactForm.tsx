"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import styles from "./ContactForm.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactForm() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent! We'll get back to you shortly.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <SectionWrapper id="contact-form" className={styles.section}>
            <div className={styles.grid}>
                <div className={styles.infoCol}>
                    <span className={styles.eyebrow}>Get in Touch</span>
                    <h2 className={styles.heading}>We'd Love to Hear from You</h2>
                    <p className={styles.subtext}>
                        Whether you have a question about our menu, franchise opportunities, or just want to say hello, our team is ready to answer all your questions.
                    </p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <div className={styles.iconBox}><Mail size={20} /></div>
                            <div>
                                <h4 className={styles.detailTitle}>Email Us</h4>
                                <p className={styles.detailText}>hello@chaibrand.com</p>
                                <p className={styles.detailText}>franchise@chaibrand.com</p>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <div className={styles.iconBox}><Phone size={20} /></div>
                            <div>
                                <h4 className={styles.detailTitle}>Call Us</h4>
                                <p className={styles.detailText}>+91 98765 43210</p>
                                <p className={styles.detailText}>Mon-Fri, 9am to 6pm</p>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <div className={styles.iconBox}><MapPin size={20} /></div>
                            <div>
                                <h4 className={styles.detailTitle}>Head Office</h4>
                                <p className={styles.detailText}>101, Chai Tower, Cyber City</p>
                                <p className={styles.detailText}>Gurugram, Haryana, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.formCol}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.group}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.input}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <label className={styles.label} htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className={styles.input}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <label className={styles.label} htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className={styles.textarea}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <Button type="submit" variant="primary" size="lg" className="w-full">Send Message</Button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
}
