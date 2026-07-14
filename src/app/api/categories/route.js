import { NextResponse } from 'next/server';

const categories = [
  { id: 'vegetables', name: 'Vegetables', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999' },
  { id: 'fruits', name: 'Fruits', image: 'https://images.unsplash.com/photo-1561136594-7f68413baa99' },
  { id: 'dairy', name: 'Dairy', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150' },
  { id: 'pulses', name: 'Pulses', image: 'https://images.unsplash.com/photo-1585996025115-467406a6b5a3' },
  { id: 'grains', name: 'Grains', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c' },
  { id: 'more', name: 'More', image: 'more_icon' }
];

export async function GET() {
  const optimizedCategories = categories.map(c => {
    if (c.image.includes('unsplash.com')) {
      const cleanUrl = c.image.split('?')[0];
      return { ...c, image: `https://wsrv.nl/?url=${cleanUrl.replace('https://', '')}&w=100&h=100&fit=cover` };
    }
    return c;
  });
  return NextResponse.json(optimizedCategories);
}
