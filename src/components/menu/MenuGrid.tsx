"use client";

import * as React from "react";
import { ProductCard } from "./ProductCard";
import styles from "./MenuGrid.module.css";
import { Button } from "@/components/ui/Button";

// Dummy Data
const categories = ["All", "Classic Chai", "Signature Blends", "Iced Chai", "Snacks"];

const products = [
    {
        id: 1,
        category: "Classic Chai",
        name: "Masala Chai",
        price: "₹120",
        description: "Our signature blend of Assam strong tea with 7 secret spices.",
        image: "/images/masala_chai.png",
        ingredients: ["Assam Tea", "Ginger", "Cardamom", "Cloves", "Cinnamon"],
        tag: "Bestseller"
    },
    {
        id: 2,
        category: "Classic Chai",
        name: "Adrak Chai",
        price: "₹100",
        description: "Strong ginger tea, perfect for a rainy day or a sore throat.",
        image: "/images/adrak_chai.png",
        ingredients: ["Fresh Ginger", "Black Tea", "Milk"]
    },
    {
        id: 3,
        category: "Signature Blends",
        name: "Saffron Gold",
        price: "₹180",
        description: "Royal blend with premium Kashmiri saffron and almonds.",
        image: "/images/saffron_gold.png",
        ingredients: ["Saffron", "Almonds", "Rose Petals"],
        tag: "Premium"
    },
    {
        id: 4,
        category: "Iced Chai",
        name: "Iced Masala Latte",
        price: "₹190",
        description: "Chilled masala chai with a creamy texture.",
        image: "/images/iced_masala_latte.png",
        ingredients: ["Cold Milk", "Chai Concentrate", "Ice"]
    },
    {
        id: 5,
        category: "Snacks",
        name: "Bun Maska",
        price: "₹80",
        description: "Soft bun slathered with homemade white butter.",
        image: "/images/bun_maska.png", // generic food
        ingredients: ["Bun", "White Butter", "Sugar"]
    },
    {
        id: 6,
        category: "Signature Blends",
        name: "Rose Cardamom",
        price: "₹150",
        description: "Aromatic blend of dried rose petals and green cardamom.",
        image: "/images/rose_cardamom.png",
        ingredients: ["Rose Petals", "Cardamom", "Tea"]
    }
];

export function MenuGrid() {
    const [activeCategory, setActiveCategory] = React.useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className={styles.wrapper}>
            {/* Category Tabs */}
            <div className={styles.tabsWrapper}>
                <div className={styles.tabs}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.tab} ${activeCategory === cat ? styles.activeTab : ""}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className={styles.grid}>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
