Checkout Session Payment Service with Stripe Integration
- A school project created for order placement and payment through integration with Stripe. Users can register, log in, and make purchases of products managed through Stripe.

Requirements
 Products: Listing of products on a page, fetched from Stripe.
 Shopping Cart: Ability to add products to a shopping cart.
 Order through Stripe: Ability to place an order through Stripe based on the contents of the shopping cart.
 Registration: Ability to register as a user on the webshop, creating a "Customer" in Stripe and saving the user in a JSON file.
 Login: Ability to log in as a customer using a custom-built login system with cookie-session.
 Saved Orders: All placed orders are saved to a list in a JSON file.
 Payment Validation: The order is only saved if payment through Stripe has been completed.

Additional
 Discount Code: Ability to enter a discount code to receive a discount on purchases, through Stripe. 
 Order History: Logged-in users should be able to view their previously placed orders. (Not done yet)
 Address and Pickup Point: Users must fill in their address and choose a pickup point before payment, integrated with PostNord API. (Not done yet)

To build and run the project, follow these steps:

Before You Start: Make sure you have node.js installed
Clone this repository from Github
New Terminal for Client: First cd client then run npm i and npm run dev
New Terminal for Server: Firstcd server Run npm i and node server
.env server: STRIPE_KEY="YOUR_API_KEY"
Make sure your express server is running
Navigate to http://localhost:5173/ in your browser

