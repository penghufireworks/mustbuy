import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Trash2, Plus, Minus } from 'lucide-react';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity, getCartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">購物車是空的</h2>
        <p className="text-gray-600 mb-8">快去選購喜歡的伴手禮吧！</p>
        <Link to="/products" className="text-blue-600 hover:text-blue-800 font-medium">
          繼續購物 &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">購物車</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {cart.map((item) => (
            <li key={item.productId} className="p-6 flex items-center">
              <img 
                src={item.product.imageUrl} 
                alt={item.product.name} 
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-6 flex-1">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{item.product.name}</h3>
                  <p className="text-lg font-bold text-gray-900">NT$ {item.product.price * item.quantity}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center border rounded-md">
                    <button 
                      onClick={() => updateCartQuantity(item.productId, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button 
                      onClick={() => updateCartQuantity(item.productId, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.productId)}
                    className="text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    <Trash2 size={16} /> 移除
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-medium text-gray-900">總計</span>
            <span className="text-2xl font-bold text-blue-600">NT$ {getCartTotal()}</span>
          </div>
          <Link 
            to="/checkout"
            className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            前往結帳
          </Link>
        </div>
      </div>
    </div>
  );
};
