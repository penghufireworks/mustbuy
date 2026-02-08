import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PickupMethodSelector } from '../components/checkout/PickupMethodSelector';
import { PickupForm } from '../components/checkout/PickupForm';
import { SMSVerification } from '../components/checkout/SMSVerification';
import { PaymentMethodSelector, PaymentMethod } from '../components/checkout/PaymentMethodSelector';
import { useStore } from '../store/useStore';
import { CustomerInfo, PickupType } from '../types';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, pickupMethod, setPickupMethod, customerInfo, setCustomerInfo, getCartTotal, clearCart } = useStore();
  
  // Local state for UI flow
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart', { replace: true });
    }
  }, [cart.length, navigate]);
  
  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">購物車是空的</h2>
        <p className="text-gray-600">正為您導向購物車頁面…</p>
      </div>
    );
  }

  const handleMethodSelect = (method: PickupType) => {
    setPickupMethod(method);
    setStep(2);
  };

  const handleFormSubmit = (info: CustomerInfo) => {
    setCustomerInfo(info);
    setStep(3);
  };

  const handleVerified = () => {
    setStep(4);
  };

  const handlePaymentSelect = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  const handlePlaceOrder = () => {
    if (!paymentMethod) return;
    
    // Simulate API call
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">結帳</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Checkout Steps */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Step 1: Pickup Method */}
          <section>
            <div className="flex items-center mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
              <h2 className="text-xl font-semibold">選擇取貨方式</h2>
            </div>
            
            <PickupMethodSelector 
              selectedMethod={pickupMethod} 
              onSelect={handleMethodSelect} 
            />
          </section>

          {/* Step 2: Customer Info */}
          {step >= 2 && pickupMethod && (
            <section className="animate-fade-in">
              <div className="flex items-center mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                <h2 className="text-xl font-semibold">填寫資料</h2>
              </div>
              
              <PickupForm 
                pickupMethod={pickupMethod}
                onSubmit={handleFormSubmit}
                initialData={customerInfo}
              />
            </section>
          )}

          {/* Step 3: SMS Verification */}
          {step >= 3 && customerInfo && (
            <section className="animate-fade-in">
              <div className="flex items-center mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
                <h2 className="text-xl font-semibold">手機驗證</h2>
              </div>
              
              <SMSVerification 
                phone={customerInfo.phone}
                onVerified={handleVerified}
              />
            </section>
          )}

          {/* Step 4: Payment */}
          {step >= 4 && (
            <section className="animate-fade-in">
              <div className="flex items-center mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 ${step >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>4</div>
                <h2 className="text-xl font-semibold">付款方式</h2>
              </div>
              
              <PaymentMethodSelector 
                selectedMethod={paymentMethod}
                onSelect={handlePaymentSelect}
              />

              <div className="mt-8">
                <button
                  onClick={handlePlaceOrder}
                  disabled={!paymentMethod}
                  className={`w-full py-4 rounded-lg font-bold text-xl shadow-lg transition-all ${
                    paymentMethod 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {paymentMethod ? `確認付款 NT$ ${getCartTotal()}` : '請選擇付款方式'}
                </button>
              </div>
            </section>
          )}

        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
            <h3 className="text-lg font-semibold mb-4">訂單摘要</h3>
            <ul className="space-y-4 mb-4 max-h-64 overflow-y-auto">
              {cart.map((item) => (
                <li key={item.productId} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.product.name} x {item.quantity}
                  </span>
                  <span className="font-medium">NT$ {item.product.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
              <span className="font-semibold text-gray-900">總計</span>
              <span className="text-2xl font-bold text-blue-600">NT$ {getCartTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
