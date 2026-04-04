"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import styles from "./LeadForm.module.css";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function LeadForm() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        budget: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your interest! Our team will contact you shortly.");
        // Handle submission logic here
    };

    return (
        <SectionWrapper id="inquiry-form" className={styles.formSection}>
            <div className={styles.container}>
                <div className={styles.textSide}>
                    <h2 className={styles.heading}>Start Your Journey Today</h2>
                    <p className={styles.subtext}>
                        Fill out the form below to receive our detailed franchise brochure and schedule a call with our business development team.
                    </p>
                    <ul className={styles.benefitsList}>
                        <li>✔️ Exclusive territory rights</li>
                        <li>✔️ Comprehensive 2-week training</li>
                        <li>✔️ Site selection assistance</li>
                        <li>✔️ Launch marketing package</li>
                    </ul>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.group}>
                        <label className={styles.label} htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={styles.input}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label className={styles.label} htmlFor="email">Email Address</label>
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
                            <label className={styles.label} htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className={styles.input}
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label className={styles.label} htmlFor="city">City / Location</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className={styles.input}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <label className={styles.label} htmlFor="budget">Investment Budget</label>
                            <select
                                id="budget"
                                name="budget"
                                className={styles.select}
                                required
                                onChange={handleChange}
                            >
                                <option value="">Select Range</option>
                                <option value="10-15L">₹10 Lakhs - ₹15 Lakhs</option>
                                <option value="15-25L">₹15 Lakhs - ₹25 Lakhs</option>
                                <option value="25L+">Above ₹25 Lakhs</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label} htmlFor="message">Message (Optional)</label>
                        <textarea
                            id="message"
                            name="message"
                            className={styles.textarea}
                            rows={4}
                            onChange={handleChange}
                        />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full">
                        Submit Inquiry
                    </Button>
                </form>
            </div>
        </SectionWrapper>
    );
}
