import React, { useState, useEffect } from 'react';
import { PickupType, CustomerInfo } from '../../types';

interface PickupFormProps {
  pickupMethod: PickupType;
  onSubmit: (info: CustomerInfo) => void;
  initialData?: CustomerInfo | null;
}

export const PickupForm: React.FC<PickupFormProps> = ({ pickupMethod, onSubmit, initialData }) => {
  const [formData, setFormData] = useState<CustomerInfo>({
    name: initialData?.name || '',
    phone: initialData?.phone || '',
    email: initialData?.email || '',
    flightNumber: initialData?.flightNumber || '',
    shipNumber: initialData?.shipNumber || '',
    departureDate: initialData?.departureDate || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Calculate minimum date/time for airport pickup (Current Time + 12 Hours)
  const getMinDateTime = () => {
    const date = new Date();
    date.setHours(date.getHours() + 12);
    // Format to YYYY-MM-DDTHH:MM for datetime-local input
    return date.toISOString().slice(0, 16);
  };

  const isTravelPickup = pickupMethod === 'airport' || pickupMethod === 'port';

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">填寫取貨資訊</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="請輸入真實姓名"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">手機號碼</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="請輸入您的手機號碼"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">電子郵件 (選填)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="example@email.com"
          />
        </div>
      </div>

      {isTravelPickup && (
        <div className="border-t border-gray-200 pt-6 mt-6">
          <h4 className="text-lg font-medium mb-4 text-blue-800 bg-blue-50 p-2 rounded inline-block">
            {pickupMethod === 'airport' ? '✈️ 離澎航班資訊' : '🚢 離澎船班資訊'}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                離澎日期與時間 (需預留作業時間)
              </label>
              <input
                type="datetime-local"
                name="departureDate"
                required
                min={getMinDateTime()}
                value={formData.departureDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-red-500 mt-1">
                * 為確保順利取貨，請至少提前 12 小時預訂
              </p>
            </div>
            
            {pickupMethod === 'airport' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">航班代號</label>
                <input
                  type="text"
                  name="flightNumber"
                  required
                  value={formData.flightNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="例如: AE364, B78609"
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">船班名稱</label>
                <input
                  type="text"
                  name="shipNumber"
                  required
                  value={formData.shipNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="例如: 台華輪, 凱旋3號"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {pickupMethod === 'cvs' && (
        <div className="border-t border-gray-200 pt-6 mt-6">
           <h4 className="text-lg font-medium mb-4">超商取貨資訊</h4>
           <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
             (此處將整合電子地圖選擇器)
             <br />
             目前請在備註欄填寫門市名稱
           </div>
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          確認並前往付款
        </button>
      </div>
    </form>
  );
};
