import axios from "axios";
import { showAlert } from "./alert";

let stripe;

const initializeStripe = async () => {
	try {
		const response = await axios.get("/api/v1/config"); // Fetch the config
		stripe = Stripe(response.data.STRIPE_PUBLIC_KEY); // Use the public key
	} catch (err) {
		console.log("stripe failed");
	}
};

const bookBtn = document.getElementById("book-tour");

export const bookTour = async (tourId) => {
	try {
		const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

		console.log(session);

		await stripe.redirectToCheckout({
			sessionId: session.data.session.id,
		});
	} catch (err) {
		showAlert("error", err);
	}
};

initializeStripe().then(() => {
	if (bookBtn) {
		bookBtn.addEventListener("click", (e) => {
			e.target.textContent = "Processing...";
			const { tourId } = e.target.dataset;
			bookTour(tourId);
		});
	}
});

// initializeStripe();
