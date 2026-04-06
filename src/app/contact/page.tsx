import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { ContactForm } from "@/components/contact/ContactForm";

// Below-fold — code split
const ContactCatering = dynamic(() => import("@/components/contact/ContactCatering").then(m => ({ default: m.ContactCatering })));
const StoreLocator    = dynamic(() => import("@/components/contact/StoreLocator").then(m => ({ default: m.StoreLocator })));
const ContactFAQ      = dynamic(() => import("@/components/contact/ContactFAQ").then(m => ({ default: m.ContactFAQ })));
const ContactSocial   = dynamic(() => import("@/components/contact/ContactSocial").then(m => ({ default: m.ContactSocial })));
const Footer          = dynamic(() => import("@/components/layout/Footer").then(m => ({ default: m.Footer })));

export const metadata = {
    title: "Contact Us | ChaiAdda Locations",
    description: "Find a ChaiAdda store near you or get in touch with our team for franchise and business inquiries.",
};

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <div className="navbar-offset">
                <ContactForm />
                <ContactCatering />
                <StoreLocator />
                <ContactFAQ />
                <ContactSocial />
            </div>
            <Footer />
        </main>
    );
}

