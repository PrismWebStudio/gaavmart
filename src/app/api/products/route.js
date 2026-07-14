import { NextResponse } from 'next/server';

const products = [
  // Vegetables (Daily Life)
  { id: 'v1', categoryId: 'vegetables', name: 'Organic Tomato', weight: '1 Kg', price: 60, image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337' },
  { id: 'v2', categoryId: 'vegetables', name: 'Fresh Onion', weight: '1 Kg', price: 40, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb' },
  { id: 'v3', categoryId: 'vegetables', name: 'Potato', weight: '1 Kg', price: 35, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655' },
  { id: 'v4', categoryId: 'vegetables', name: 'Fresh Carrots', weight: '500 gm', price: 50, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37' },
  { id: 'v5', categoryId: 'vegetables', name: 'Organic Spinach (Palak)', weight: '250 gm', price: 30, image: 'https://images.unsplash.com/photo-1622205313162-be1d5712a43c' },
  { id: 'v6', categoryId: 'vegetables', name: 'Green Chilli', weight: '100 gm', price: 15, image: 'https://images.unsplash.com/photo-1587550186762-297746401089' },

  // Dairy Items (Daily Life)
  { id: 'd1', categoryId: 'dairy', name: 'Fresh Cow Milk', weight: '1 Ltr', price: 65, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150' },
  { id: 'd2', categoryId: 'dairy', name: 'Fresh Paneer', weight: '200 gm', price: 85, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0' },
  { id: 'd3', categoryId: 'dairy', name: 'Fresh Curd (Dahi)', weight: '400 gm', price: 40, image: 'https://images.unsplash.com/photo-1628189679244-c68e82ef4518' },
  { id: 'd4', categoryId: 'dairy', name: 'Desi Cow Ghee', weight: '500 ml', price: 450, image: 'https://images.unsplash.com/photo-1587049352847-4d4b1273661b' },
  { id: 'd5', categoryId: 'dairy', name: 'Amul Butter', weight: '100 gm', price: 60, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d' },

  // Fruits (Daily Life)
  { id: 'f1', categoryId: 'fruits', name: 'Fresh Apples', weight: '1 Kg', price: 180, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6' },
  { id: 'f2', categoryId: 'fruits', name: 'Robusta Bananas', weight: '1 Dozen', price: 60, image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf' },
  { id: 'f3', categoryId: 'fruits', name: 'Sweet Orange', weight: '1 Kg', price: 120, image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b' },
  { id: 'f4', categoryId: 'fruits', name: 'Fresh Mangoes (Alphonso)', weight: '1 Kg', price: 400, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078' },
  { id: 'f5', categoryId: 'fruits', name: 'Pomegranate (Anaar)', weight: '1 Kg', price: 150, image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec' },

  // Kirana Store Items
  { id: 'k1', categoryId: 'kirana', name: 'Premium Basmati Rice', weight: '5 Kg', price: 550, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c' },
  { id: 'k2', categoryId: 'kirana', name: 'Toor Dal (Arhar)', weight: '1 Kg', price: 160, image: 'https://images.unsplash.com/photo-1585996025115-467406a6b5a3' },
  { id: 'k3', categoryId: 'kirana', name: 'Chana Dal', weight: '1 Kg', price: 120, image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4' },
  { id: 'k4', categoryId: 'kirana', name: 'Aashirvaad Atta', weight: '10 Kg', price: 450, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' },
  { id: 'k5', categoryId: 'kirana', name: 'Tata Salt', weight: '1 Kg', price: 25, image: 'https://images.unsplash.com/photo-1628268909376-e8c5dfdc010f' },
  { id: 'k6', categoryId: 'kirana', name: 'Refined Sugar', weight: '1 Kg', price: 45, image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635' },
  { id: 'k7', categoryId: 'kirana', name: 'Mustard Oil (Kachi Ghani)', weight: '1 Ltr', price: 155, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5' },
  { id: 'k8', categoryId: 'kirana', name: 'Refined Sunflower Oil', weight: '1 Ltr', price: 130, image: 'https://images.unsplash.com/photo-1620601445749-0d12e8eb6b78' },
  { id: 'k9', categoryId: 'kirana', name: 'Turmeric Powder (Haldi)', weight: '200 gm', price: 65, image: 'https://images.unsplash.com/photo-1615486171448-4fd24e12e1db' },
  { id: 'k10', categoryId: 'kirana', name: 'Red Chilli Powder', weight: '200 gm', price: 80, image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d' },

  // Kitchen Items
  { id: 'kit1', categoryId: 'kitchen', name: 'Non-Stick Frying Pan', weight: '1 Unit', price: 499, image: 'https://images.unsplash.com/photo-1584285421526-7db72d658257' },
  { id: 'kit2', categoryId: 'kitchen', name: 'Stainless Steel Pressure Cooker', weight: '3 Ltr', price: 1299, image: 'https://images.unsplash.com/photo-1585237731722-132d78bfb020' },
  { id: 'kit3', categoryId: 'kitchen', name: 'Kitchen Knife Set', weight: '3 Pcs', price: 350, image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546' },
  { id: 'kit4', categoryId: 'kitchen', name: 'Wooden Chopping Board', weight: '1 Unit', price: 299, image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d' },
  { id: 'kit5', categoryId: 'kitchen', name: 'Storage Container Set', weight: '6 Pcs', price: 599, image: 'https://images.unsplash.com/photo-1602144564887-e2be90e0ab11' }
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  let filtered = products;

  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.categoryId === category);
  }

  if (search) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }

  filtered = filtered.map(p => {
    if (p.image.includes('unsplash.com')) {
      const cleanUrl = p.image.split('?')[0];
      return { ...p, image: `https://wsrv.nl/?url=${cleanUrl.replace('https://', '')}&w=400&h=300&fit=cover` };
    }
    return p;
  });

  return NextResponse.json(filtered);
}
