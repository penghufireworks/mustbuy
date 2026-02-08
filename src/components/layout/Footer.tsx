import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">澎湖特產電商</h3>
            <p className="text-gray-300">
              提供最道地的澎湖名產，機場取貨最方便。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡我們</h3>
            <p className="text-gray-300">
              電話：請填寫您的聯絡電話<br />
              地址：請填寫您的聯絡地址
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">關於我們</a></li>
              <li><a href="/pickup-guide" className="text-gray-300 hover:text-white">取貨說明</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white">隱私權政策</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} 澎湖特產電商. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
