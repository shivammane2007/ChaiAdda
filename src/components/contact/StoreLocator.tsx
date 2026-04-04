"use client";

import * as React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import styles from "./StoreLocator.module.css";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stores = [
    {
        id: 1,
        city: "Mumbai",
        area: "Bandra West",
        address: "Shop 4, Hill Road, Near Mehboob Studio, Bandra West, Mumbai 400050",
        phone: "+91 98200 12345"
    },
    {
        id: 2,
        city: "Delhi",
        area: "Connaught Place",
        address: "Block B, Inner Circle, Connaught Place, New Delhi 110001",
        phone: "+91 98100 67890"
    },
    {
        id: 3,
        city: "Bangalore",
        area: "Indiranagar",
        address: "100ft Road, Defence Colony, Indiranagar, Bengaluru 560038",
        phone: "+91 98800 24680"
    },
    {
        id: 4,
        city: "Gurugram",
        area: "Cyber Hub",
        address: "Unit 2, Cyber Hub, DLF Cyber City, Phase 2, Gurugram 122002",
        phone: "+91 98123 45678"
    }
];

export function StoreLocator() {
    const [selectedCity, setSelectedCity] = React.useState("All");

    const filteredStores = selectedCity === "All"
        ? stores
        : stores.filter(store => store.city === selectedCity);

    return (
        <SectionWrapper id="locations" className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Find a Café Near You</h2>
                <p className={styles.subtext}>Experience the magic of authentic chai at our locations.</p>
            </div>

            <div className={styles.filterBar}>
                <button
                    className={`${styles.filterBtn} ${selectedCity === "All" ? styles.active : ""}`}
                    onClick={() => setSelectedCity("All")}
                >
                    All Locations
                </button>
                {Array.from(new Set(stores.map(s => s.city))).map(city => (
                    <button
                        key={city}
                        className={`${styles.filterBtn} ${selectedCity === city ? styles.active : ""}`}
                        onClick={() => setSelectedCity(city)}
                    >
                        {city}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {filteredStores.map(store => (
                    <div key={store.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}><MapPin size={24} /></div>
                            <div>
                                <h3 className={styles.city}>{store.city}</h3>
                                <span className={styles.area}>{store.area}</span>
                            </div>
                        </div>
                        <p className={styles.address}>{store.address}</p>
                        <p className={styles.phone}>{store.phone}</p>
                        <div className={styles.actions}>
                            <Button size="sm" variant="outline" className="w-full">
                                <Navigation size={16} style={{ marginRight: '8px' }} /> Get Directions
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
