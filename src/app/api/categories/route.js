import { NextResponse } from 'next/server';

const categories = [
  { id: 'kirana', name: 'Kirana', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c' },
  { id: 'kitchen', name: 'Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d' },
  { id: 'dairy', name: 'Dairy', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150' },
  { id: 'vegetables', name: 'Vegetables', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999' },
  { id: 'fruits', name: 'Fruits', image: 'https://images.unsplash.com/photo-1561136594-7f68413baa99' }
];

export async function GET() {
  const optimizedCategories = categories.map(c => {
    if (c.image.includes('unsplash.com')) {
      const cleanUrl = c.image.split('?')[0];
      return { ...c, image: `https://wsrv.nl/?url=${cleanUrl.replace('https://', '')}&w=400&h=300&fit=cover` };
    }
    return c;
  });
  return NextResponse.json(optimizedCategories);
}
