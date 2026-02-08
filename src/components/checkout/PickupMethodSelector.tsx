import React from 'react';
import { Plane, Ship, MapPin, Truck, Store } from 'lucide-react';
import { PickupType } from '../../types';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface Option {
  id: PickupType;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const options: Option[] = [
  {
    id: 'airport',
    label: '機場取貨',
    icon: <Plane size={24} />,
    description: '澎湖機場 1F 櫃台'
  },
  {
    id: 'port',
    label: '馬公港取貨',
    icon: <Ship size={24} />,
    description: '馬公港候船室'
  },
  {
    id: 'store',
    label: '門市自取',
    icon: <Store size={24} />,
    description: '馬公市區總店'
  },
  {
    id: 'cvs',
    label: '7-11 取貨',
    icon: <MapPin size={24} />,
    description: '全台 7-11 門市'
  },
  {
    id: 'home',
    label: '宅配到府',
    icon: <Truck size={24} />,
    description: '黑貓宅急便'
  }
];

interface PickupMethodSelectorProps {
  selectedMethod: PickupType | null;
  onSelect: (method: PickupType) => void;
}

export const PickupMethodSelector: React.FC<PickupMethodSelectorProps> = ({ selectedMethod, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {options.map((option) => (
        <div
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={twMerge(
            clsx(
              'cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center text-center transition-all',
              selectedMethod === option.id
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
            )
          )}
        >
          <div className="mb-3 p-2 rounded-full bg-white shadow-sm">
            {option.icon}
          </div>
          <h3 className="font-semibold text-lg mb-1">{option.label}</h3>
          <p className="text-sm text-gray-500">{option.description}</p>
        </div>
      ))}
    </div>
  );
};
