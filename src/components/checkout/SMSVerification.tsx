import React, { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';

interface SMSVerificationProps {
  phone: string;
  onVerified: () => void;
}

export const SMSVerification: React.FC<SMSVerificationProps> = ({ phone, onVerified }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [mockOtp, setMockOtp] = useState('');

  useEffect(() => {
    // Simulate sending OTP on mount
    handleSendOtp();
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && isSent) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [timeLeft, isSent]);

  const handleSendOtp = () => {
    setIsSent(true);
    setTimeLeft(300);
    // Mock OTP generation
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setMockOtp(newOtp);
    console.log(`[Mock SMS] Sending OTP to ${phone}: ${newOtp}`);
    alert(`[測試環境] 您的驗證碼是: ${newOtp}`);
  };

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join('');
    if (enteredCode === mockOtp) {
      onVerified();
    } else {
      setError('驗證碼錯誤，請重新輸入');
      setCode(['', '', '', '', '', '']);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center border border-gray-200">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
        <Smartphone size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-2">手機號碼驗證</h3>
      <p className="text-gray-600 mb-6">
        驗證碼已發送至 <span className="font-semibold">{phone}</span>
        <br />
        請輸入 6 位數驗證碼
      </p>

      <div className="flex justify-center gap-2 mb-6">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        ))}
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        onClick={handleVerify}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors mb-4 shadow-md"
      >
        驗證
      </button>

      <div className="text-sm text-gray-500">
        {timeLeft > 0 ? (
          <p>驗證碼有效時間剩餘: {formatTime(timeLeft)}</p>
        ) : (
          <button
            onClick={handleSendOtp}
            className="text-blue-600 hover:underline"
          >
            重新發送驗證碼
          </button>
        )}
      </div>
      
      <div className="mt-4 p-2 bg-yellow-50 text-yellow-800 text-xs rounded border border-yellow-200">
        測試提示: 請查看 console 或 alert 獲取驗證碼
      </div>
    </div>
  );
};
