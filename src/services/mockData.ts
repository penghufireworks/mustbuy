import { Product, PickupLocation } from '../types';

export const mockProducts: Product[] = [
  {
    id: 'prod_001',
    name: '澎湖花枝丸',
    description: '新鮮澎湖花枝製作的花枝丸，口感Q彈，絕對是澎湖必吃美食。',
    price: 250,
    stock: 50,
    category: '海鮮製品',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&q=80',
    isActive: true
  },
  {
    id: 'prod_002',
    name: '澎湖黑糖糕',
    description: '傳統手工製作的黑糖糕，香甜可口，鬆軟綿密。',
    price: 150,
    stock: 30,
    category: '甜點',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
    isActive: true
  },
  {
    id: 'prod_003',
    name: '干貝醬',
    description: '嚴選上等干貝製作，拌麵拌飯都好吃。',
    price: 350,
    stock: 100,
    category: '伴手禮',
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-d52d83833213?w=800&q=80',
    isActive: true
  },
  {
    id: 'prod_004',
    name: '仙人掌冰心糕',
    description: '澎湖特有仙人掌果實製作，酸甜清爽。',
    price: 180,
    stock: 45,
    category: '甜點',
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
    isActive: true
  }
];

export const mockPickupLocations: PickupLocation[] = [
  {
    id: 'loc_airport',
    name: '澎湖機場取貨點',
    type: 'airport',
    address: '澎湖縣湖西鄉隘門村126-5號 (1F 旅遊服務中心旁)',
    operatingHours: '每日 08:00-20:00',
    isActive: true
  },
  {
    id: 'loc_makung_port',
    name: '馬公港取貨點',
    type: 'port',
    address: '澎湖縣馬公市臨海路32號 (候船室)',
    operatingHours: '每日 07:00-19:00',
    isActive: true
  },
  {
    id: 'loc_store_001',
    name: '馬公市區總店',
    type: 'store',
    address: '請填寫您的聯絡地址',
    operatingHours: '週一至週六 09:00-21:00',
    isActive: true
  },
  {
    id: 'loc_7-11',
    name: '7-11超商取貨',
    type: 'cvs',
    address: '全台 7-11 門市',
    operatingHours: '24小時',
    isActive: true
  }
];
