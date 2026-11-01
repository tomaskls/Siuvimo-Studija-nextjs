import React from 'react';
import style from './Reviews.module.css';
import { reviews } from '../../../schemas/reviews';

// Atidaro studijos „Google“ atsiliepimų langą (Place ID gautas iš žemėlapio kontaktų puslapyje)
const GOOGLE_REVIEWS_URL = 'https://search.google.com/local/reviews?placeid=ChIJu5WfZDDj5UYRt3932zkQ5jc';

// Vardas ir pavardės pirmoji raidė: „Karolis Jurkus“ → „Karolis J.“
function shortName(name: string) {
    const [first, last] = name.split(' ');
    return last ? `${first} ${last[0]}.` : first;
}

const newestFirst = [...reviews].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

export default function Reviews() {
    return (
        <section className={style.section} aria-labelledby="atsiliepimai">
            <h2 id="atsiliepimai" className={style.title}>Klientų atsiliepimai</h2>
            <div className={style.list}>
                {newestFirst.map((review) => (
                    <figure key={review.author.name} className={style.card}>
                        <div
                            className={style.stars}
                            role="img"
                            aria-label={`Įvertinimas: ${review.reviewRating.ratingValue} iš ${review.reviewRating.bestRating}`}
                        >
                            {'★'.repeat(review.reviewRating.ratingValue)}
                        </div>
                        <blockquote className={style.text}>{review.reviewBody}</blockquote>
                        <figcaption className={style.author}>{shortName(review.author.name)}</figcaption>
                    </figure>
                ))}
            </div>
            <a className={style.more} href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                Visi atsiliepimai „Google“ →
            </a>
        </section>
    );
}
