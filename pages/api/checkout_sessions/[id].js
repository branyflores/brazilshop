import Stripe from "stripe";

const Stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const id = req.query.id;

    try {
    if(!id.startsWith('cs_')) {
        throw Error('Incorrect CheckoutSession ID.');
    }

    const checkout_session = await Stripe.checkout.sessions.retrieve(id);

    res.status(200).jason(checkout_session);
    } catch (err) {
    res.status(500).json({statusCode: 500, message: err.message})
  }
}