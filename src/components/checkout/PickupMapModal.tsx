import React from 'react';
import { Modal } from '../ui/Modal';
import { MapPin } from 'lucide-react';

interface PickupMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'airport' | 'port';
}

export const PickupMapModal: React.FC<PickupMapModalProps> = ({ isOpen, onClose, type }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={type === 'airport' ? '機場取貨位置圖' : '港口取貨位置圖'}
    >
      <div className="space-y-4">
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 relative overflow-hidden">
          {/* Placeholder for map image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
             <MapPin size={48} className="text-red-500 mb-2" />
             <p className="text-gray-500 text-sm">
               {type === 'airport' 
                 ? '澎湖機場 1F 旅遊服務中心旁' 
                 : '馬公港 候船室內'}
             </p>
             <p className="text-xs text-gray-400 mt-2">(此處應顯示實景地圖或平面圖)</p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md text-sm text-blue-800">
          <h4 className="font-bold mb-1">取貨指引：</h4>
          {type === 'airport' ? (
            <ul className="list-disc list-inside space-y-1">
              <li>抵達澎湖機場 1F 入境大廳</li>
              <li>往右轉，直走至旅遊服務中心</li>
              <li>櫃台位於服務中心右側，標示「澎湖特產取貨處」</li>
            </ul>
          ) : (
             <ul className="list-disc list-inside space-y-1">
              <li>進入馬公港候船室</li>
              <li>取貨櫃台位於入口處左側</li>
              <li>請認明藍色招牌</li>
            </ul>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-800 py-2 rounded-md font-medium hover:bg-gray-300"
        >
          關閉
        </button>
      </div>
    </Modal>
  );
};
