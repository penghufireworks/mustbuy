import React from 'react';
import { Plane, Ship, ShoppingBag, Smartphone, QrCode, MapPin, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PickupGuide: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            離島輕鬆買，機場/港口便利取
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            不用大包小包提著走！線上預訂澎湖名產，離澎前在機場或港口一次領取，輕鬆享受旅程。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">簡單 4 步驟，輕鬆取貨</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepItem 
              icon={<ShoppingBag size={32} />} 
              step="01" 
              title="線上選購" 
              desc="瀏覽豐富的澎湖特產，將喜歡的商品加入購物車" 
            />
            <StepItem 
              icon={<Plane size={32} />} 
              step="02" 
              title="選擇取貨" 
              desc="結帳時選擇「機場」或「港口」取貨，並填寫航班資訊" 
            />
            <StepItem 
              icon={<Smartphone size={32} />} 
              step="03" 
              title="簡訊驗證" 
              desc="完成手機簡訊驗證，訂單成立後將收到取貨 QR Code" 
            />
            <StepItem 
              icon={<QrCode size={32} />} 
              step="04" 
              title="憑證取貨" 
              desc="離澎當天，憑手機簡訊或訂單內的 QR Code 至櫃檯領取" 
            />
          </div>
        </div>

        {/* Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Airport */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-500 p-4 text-white flex items-center">
              <Plane className="mr-3" />
              <h3 className="text-xl font-bold">澎湖機場取貨點</h3>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-400">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <span className="text-sm">機場平面圖示意位置</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-2 text-blue-500 flex-shrink-0 mt-1" />
                  <span><strong>位置：</strong>澎湖機場 1F 入境大廳，往右轉直走至旅遊服務中心旁。</span>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="mr-2 text-blue-500 flex-shrink-0 mt-1" />
                  <span><strong>營業時間：</strong>每日 07:00 - 21:00 (配合末班機時間)</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle size={20} className="mr-2 text-blue-500 flex-shrink-0 mt-1" />
                  <span><strong>提醒：</strong>請於班機起飛前 1 小時至櫃檯完成取貨。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Port */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-teal-600 p-4 text-white flex items-center">
              <Ship className="mr-3" />
              <h3 className="text-xl font-bold">馬公港取貨點</h3>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-400">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <span className="text-sm">港口平面圖示意位置</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-2 text-teal-600 flex-shrink-0 mt-1" />
                  <span><strong>位置：</strong>馬公港候船室內，入口處左側藍色招牌櫃檯。</span>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="mr-2 text-teal-600 flex-shrink-0 mt-1" />
                  <span><strong>營業時間：</strong>每日 07:00 - 18:00 (配合船班時間)</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle size={20} className="mr-2 text-teal-600 flex-shrink-0 mt-1" />
                  <span><strong>提醒：</strong>請於船班開航前 40 分鐘至櫃檯完成取貨。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ / Important Notes */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
            <AlertCircle className="mr-3" />
            重要注意事項
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-orange-900">
            <div>
              <h4 className="font-bold text-lg mb-2">Q: 最晚什麼時候要下單？</h4>
              <p className="text-orange-800/80">為了確保商品能準時送達機場/港口，請務必於您的離澎航班/船班時間前 <strong>12 小時</strong> 完成下單。</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Q: 忘記帶手機怎麼辦？</h4>
              <p className="text-orange-800/80">建議您將取貨 QR Code 截圖保存。若無法出示手機，請提供「訂購人姓名」與「訂單編號」，並出示身分證件供核對。</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Q: 航班延誤或取消？</h4>
              <p className="text-orange-800/80">若航班異動，請儘速聯繫我們的客服專線，我們將協助您更改取貨時間或處理退款。</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Q: 現場可以加購嗎？</h4>
              <p className="text-orange-800/80">機場/港口櫃檯僅提供「預訂取貨」服務，現場備貨有限，建議您在網站上一次買齊最保險喔！</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pb-12">
          <Link 
            to="/products" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:text-xl md:px-10 transition-transform hover:scale-105 shadow-lg"
          >
            <ShoppingBag className="mr-2" />
            立即開始選購
          </Link>
        </div>
      </div>
    </div>
  );
};

const StepItem: React.FC<{ icon: React.ReactNode, step: string, title: string, desc: string }> = ({ icon, step, title, desc }) => (
  <div className="flex flex-col items-center text-center relative">
    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 relative z-10">
      {icon}
      <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
        {step}
      </span>
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm">{desc}</p>
  </div>
);
