import React from 'react';
import { useStore } from '../store/useStore';
import { ProductCard } from '../components/ui/ProductCard';

export const Products: React.FC = () => {
  const products = useStore((state) => state.products);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">所有商品</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
