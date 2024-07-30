const placeId = ChIJN70l8741GQ0Raaa8yCKXd0I;
const apiKey = AIzaSyB-sGLcK8y4eXuXyhEFK4OKtkxfoXglq8k
;

async function fetchReviews() {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`);
    const data = await response.json();
    return data.result.reviews;
}

function displayReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews-container');
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <h3>${review.author_name}</h3>
            <p>${review.text}</p>
            <p>Rating: ${review.rating}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const reviews = await fetchReviews();
    displayReviews(reviews);
});
