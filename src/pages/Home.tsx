import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, MapPin, Truck } from 'lucide-react';
import { useStore } from '../store/useStore';
import { ProductCard } from '../components/ui/ProductCard';

export const Home: React.FC = () => {
  const products = useStore((state) => state.products);

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            澎湖必買伴手禮，機場輕鬆取
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            精選澎湖在地特色美食，花枝丸、黑糖糕、干貝醬。
            線上預訂，回程機場直接提貨，免大包小包！
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 md:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              快速下單
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pickup Methods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          多元取貨方式，超方便！
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
              <Plane size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">機場/港口取貨</h3>
            <p className="text-gray-600">
              離澎前在機場或碼頭櫃台領取，直接托運最輕鬆。
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="p-3 bg-orange-100 rounded-full text-orange-600 mb-4">
              <MapPin size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">門市/超商取貨</h3>
            <p className="text-gray-600">
              澎湖市區門市自取，或全台 7-11 店到店。
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="p-3 bg-green-100 rounded-full text-green-600 mb-4">
              <Truck size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">宅配到府</h3>
            <p className="text-gray-600">
              買太多拿不動？直接幫您宅配寄回家。
            </p>
          </div>
        </div>
      </section>

      {/* Hot Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-gray-900">熱銷推薦</h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
            查看全部 <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
