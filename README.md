# Go4Profit Shopping Platform

A modern, simple e-commerce platform for Go4Profit branded merchandise. Built with React.

## About Go4Profit

Go4Profit provides professional bookkeeping services to small business owners. This platform allows employees and clients to purchase branded merchandise including t-shirts, hoodies, pens, cups, notebooks, bags, thermos, and more.

## Features

✨ **Simple & Modern Design** - Clean, minimal interface with easy navigation  
🛒 **Guest Checkout** - No account required, just add to cart and purchase  
📱 **Responsive** - Works perfectly on desktop and mobile devices  
🎨 **Category Filtering** - Browse by Apparel, Drinkware, Stationery, Bags, and Accessories  
💳 **Easy Checkout** - Streamlined payment process  
🔔 **Add to Cart Notifications** - Visual feedback when items are added  

## Products

The platform features 25+ branded items including:
- Classic & Premium T-Shirts
- Hoodies & Zip-ups
- Professional Pens & Pen Sets
- Coffee Mugs & Travel Mugs
- Leather Journals & Notebooks
- Tote Bags, Backpacks, & Messenger Bags
- Thermos Flasks & Water Bottles
- Mouse Pads & Sticker Packs

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
cd go4profit-shopping
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will open at `http://localhost:3000` (or another port if 3000 is busy)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
go4profit-shopping/
├── src/
│   ├── components/
│   │   ├── HomePage.js          # Main product listing page
│   │   ├── HomePage.css
│   │   ├── CheckoutPage.js      # Cart and payment page
│   │   └── CheckoutPage.css
│   ├── data/
│   │   └── products.js          # Product catalog data
│   ├── App.js                   # Main app component
│   ├── App.css
│   └── index.js
└── public/
    └── index.html
```

## How It Works

### Shopping Flow
1. Browse products on the home page
2. Filter by category if desired
3. Click "Add to Cart" on any product
4. View cart badge updating in real-time
5. Click cart button to proceed to checkout
6. Enter shipping and payment information
7. Complete purchase - no account needed!

### State Management
The app uses React's built-in useState hooks for:
- Cart management (add, remove, update quantities)
- Page navigation (home ↔ checkout)
- Form data handling

## Technologies Used

- **React** - Frontend framework
- **CSS3** - Modern styling with animations
- **Unsplash Images** - Product photography
- **Pure JavaScript** - No external dependencies for state management

## Color Scheme

- Primary: `#1a1a2e` (Dark Navy)
- Accent: `#00d4ff` (Cyan)
- Background: `#f8f9fa` (Light Gray)
- Success: `#4caf50` (Green)
- Error: `#ff6b6b` (Red)

## Future Enhancements

- Payment gateway integration (Stripe, PayPal)
- Order history and tracking
- Size/color variations for apparel
- Wishlist functionality
- Search functionality
- Product reviews and ratings
- Email confirmation

## License

This project is proprietary software for Go4Profit.

---

**Go4Profit** - Professional Bookkeeping Services  
© 2025 All Rights Reserved
