import Image from "next/image";
import styles from "./ProductCard.module.css";
import { Plus } from "lucide-react";

interface ProductCardProps {
    name: string;
    description: string;
    price: string;
    image: string;
    ingredients?: string[];
    tag?: string;
}

export function ProductCard({ name, description, price, image, ingredients, tag }: ProductCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                {tag && <span className={styles.badge}>{tag}</span>}

                {/* Hover Overlay */}
                <div className={styles.overlay}>
                    {ingredients && (
                        <div className={styles.ingredients}>
                            <span className={styles.ingLabel}>Ingredients</span>
                            <p className={styles.ingList}>{ingredients.join(" • ")}</p>
                        </div>
                    )}
                    <button className={styles.addBtn} aria-label="Quick View">
                        <Plus />
                    </button>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.name}>{name}</h3>
                    <span className={styles.price}>{price}</span>
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
