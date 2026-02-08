import React from 'react';
import { CreditCard, Wallet, Banknote } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type PaymentMethod = 'linepay' | 'credit_card' | 'cod';

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod | null;
  onSelect: (method: PaymentMethod) => void;
}

const methods = [
  {
    id: 'linepay',
    label: 'Line Pay',
    icon: <Wallet className="text-green-500" size={24} />,
    description: '推薦使用，快速方便'
  },
  {
    id: 'credit_card',
    label: '信用卡付款',
    icon: <CreditCard className="text-blue-500" size={24} />,
    description: '支援 Visa, Master, JCB'
  },
  {
    id: 'cod',
    label: '貨到付款',
    icon: <Banknote className="text-gray-500" size={24} />,
    description: '取貨時再付款'
  }
] as const;

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({ selectedMethod, onSelect }) => {
  return (
    <div className="space-y-4">
      {methods.map((method) => (
        <div
          key={method.id}
          onClick={() => onSelect(method.id)}
          className={twMerge(
            clsx(
              'cursor-pointer border-2 rounded-lg p-4 flex items-center transition-all',
              selectedMethod === method.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
            )
          )}
        >
          <div className="mr-4 p-2 bg-white rounded-full shadow-sm">
            {method.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{method.label}</h3>
            <p className="text-sm text-gray-500">{method.description}</p>
          </div>
          <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
            {selectedMethod === method.id && (
              <div className="w-3 h-3 rounded-full bg-blue-600" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
