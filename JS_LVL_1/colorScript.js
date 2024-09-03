function determineHeaderColor(reviews) {
    const counts = {};
    const totalReviews = reviews.length;

    reviews.forEach(review => {
        counts[review] = (counts[review] || 0) + 1;
    });

    for (const [rating, count] of Object.entries(counts)) {
        if (count > totalReviews / 2) {
            return rating;
        }
    }

    return "default";
}

const reviews = [2, 2, 2, 2, 2, 3, 2];
const headerColor = determineHeaderColor(reviews);
const headerElement = document.getElementById('header');

if (headerColor !== "default") {
    headerElement.className = `color-${headerColor}`;
}