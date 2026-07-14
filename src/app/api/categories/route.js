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
    if (c.image.includes('unsplash.com') && !c.image.includes('?')) {
      return { ...c, image: c.image + '?auto=format&fit=crop&w=400&q=80' };
    }
    return c;
  });
  return NextResponse.json(optimizedCategories);
}
