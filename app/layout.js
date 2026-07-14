export const metadata = {
  title: 'Gaav Mart - Fresh Organic Products | Natural & Healthy Food',
  description: 'Gaav Mart brings you fresh, natural and pure organic products directly from trusted farms. Shop vegetables, fruits, dairy, grains and healthy food products online.',
  keywords: 'Gaav Mart, Organic Products, Fresh Vegetables, Organic Food, Natural Products, Farm Fresh, Grocery Store',
  authors: [{ name: 'Gaav Mart' }],
  icons: {
    icon: 'https://i.ibb.co/r2Lnw8pq/bac70c43-ddd2-4ce1-8eb7-ec417122b244.png',
    apple: 'https://i.ibb.co/r2Lnw8pq/bac70c43-ddd2-4ce1-8eb7-ec417122b244.png',
  },
  openGraph: {
    title: 'Gaav Mart - Fresh Organic Products',
    description: 'Fresh, Natural & Pure Organic Products delivered to your doorstep. Shop healthy food from trusted farms.',
    url: 'https://gaavmart.com/',
    type: 'website',
    images: [
      {
        url: 'https://i.ibb.co/r2Lnw8pq/bac70c43-ddd2-4ce1-8eb7-ec417122b244.png',
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaav Mart - Fresh Organic Products',
    description: 'Fresh, Natural & Pure Organic Products from trusted farms.',
    images: ['https://i.ibb.co/r2Lnw8pq/bac70c43-ddd2-4ce1-8eb7-ec417122b244.png'],
  }
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f5132" />
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
