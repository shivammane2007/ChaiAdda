import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { StoreLocator } from "@/components/contact/StoreLocator";
import { ContactCatering } from "@/components/contact/ContactCatering";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactSocial } from "@/components/contact/ContactSocial";

export const metadata = {
    title: "Contact Us | Chai Brand Locations",
    description: "Find a Chai Brand store near you or get in touch with our team for franchise and business inquiries.",
};

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
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
