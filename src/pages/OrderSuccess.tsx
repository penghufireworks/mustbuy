import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, MapPin, Calendar, Clock, QrCode } from 'lucide-react';
import { PickupMapModal } from '../components/checkout/PickupMapModal';

export const OrderSuccess: React.FC = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  
  // Mock order data
  const orderId = 'ORD-' + Math.floor(Math.random() * 1000000);
  const pickupCode = 'A' + Math.floor(Math.random() * 10000);
  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-green-500 text-white p-8 text-center">
          <div className="bg-white text-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={48} strokeWidth={3} />
          </div>
          <h1 className="text-3xl font-bold mb-2">訂購成功！</h1>
          <p className="text-green-100">感謝您的訂購，我們已發送確認簡訊至您的手機。</p>
        </div>

        <div className="p-8 space-y-8">
          {/* QR Code Section */}
          <div className="text-center border-b border-gray-200 pb-8">
            <p className="text-gray-500 mb-4">請於取貨時出示此 QR Code</p>
            <div className="bg-white p-4 border-4 border-gray-900 inline-block rounded-xl mb-4">
              <QrCode size={160} />
            </div>
            <p className="text-2xl font-mono font-bold text-gray-800 tracking-wider">{pickupCode}</p>
          </div>

          {/* Order Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">取貨日期</h3>
                <p className="text-gray-600">2024-02-15 (範例)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">取貨時間</h3>
                <p className="text-gray-600">14:00 - 18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:col-span-2">
              <div className="bg-red-100 p-3 rounded-full text-red-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">取貨地點</h3>
                <p className="text-gray-600">澎湖機場 1F 旅遊服務中心旁櫃檯</p>
                <button 
                  onClick={() => setIsMapOpen(true)}
                  className="text-blue-600 text-sm font-medium mt-1 hover:underline flex items-center gap-1"
                >
                  <MapPin size={14} />
                  查看位置圖解
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/"
              className="flex-1 bg-gray-100 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              回首頁
            </Link>
            <Link
              to="/orders"
              className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              查看我的訂單
            </Link>
          </div>
        </div>
      </div>

      <PickupMapModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
        type="airport" // Should be dynamic based on order, defaulting to airport for now
      />
    </div>
  );
};
