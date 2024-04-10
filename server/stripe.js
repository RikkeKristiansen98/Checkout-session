const initStripe = () => {
    const apiKey = process.env.STRIPE_KEY;

    if (!apiKey) {
        console.error("Stripe API key is not defined. Make sure to set the environment variable STRIPE_KEY.");
        return null; // Returnera null om apiKey inte är definierad
    }

    return new Stripe(apiKey, {
        apiVersion: "2023-10-16"
    });
};

module.exports = initStripe;
