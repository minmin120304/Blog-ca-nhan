import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, Cat } from 'lucide-react';

export const metadata = {
  title: 'Liên hệ - Mèo Blog',
  description: 'Gửi tin nhắn hoặc góp ý cho chúng tôi về các boss yêu quý.',
};

export default function ContactPage() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@meoblog.vn', color: 'bg-blue-50 text-blue-500' },
    { icon: Phone, label: 'Điện thoại', value: '0901 234 567', color: 'bg-green-50 text-green-500' },
    { icon: MapPin, label: 'Địa chỉ', value: '123 Đường Cát, Quận Boss, TP. Hồ Chí Minh', color: 'bg-purple-50 text-purple-500' },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 rounded-full font-bold text-xs uppercase mb-6 tracking-widest">
              Liên hệ với chúng tôi
            </div>
            <h1 className="text-5xl font-black mb-6 leading-tight">Bạn có <span className="text-orange-500">Boss</span> cần chia sẻ?</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Chúng tôi luôn lắng nghe những câu chuyện, kinh nghiệm và góp ý từ cộng đồng yêu mèo. Đừng ngần ngại gửi tin nhắn cho chúng tôi nhé!
            </p>
          </div>

          <div className="space-y-8">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-6 group">
                <div className={`p-4 rounded-2xl ${info.color} group-hover:scale-110 transition-transform duration-500`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{info.label}</h4>
                  <p className="text-lg font-bold text-gray-900">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gray-50 rounded-3xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                 Thành viên đội ngũ <Cat className="w-5 h-5 text-orange-500" />
              </h3>
              <p className="text-gray-500 italic">"Chúng tôi tin rằng mỗi chú mèo đều xứng đáng có một người sen tốt nhất. Hãy cùng nhau xây dựng cộng đồng này!"</p>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 text-gray-100/30 group-hover:text-orange-100/30 transition-all duration-700">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
                 <path d="M44.7,-76.4C58.3,-69.2,70,-57.9,78.7,-44.6C87.4,-31.3,93.1,-15.7,92.5,-0.3C92,15.1,85.2,30.3,76.1,43.9C67,57.5,55.6,69.5,41.9,77.3C28.2,85.1,12.2,88.7,-2.8,93.5C-17.8,98.3,-31.8,104.3,-44.6,101.4C-57.4,98.5,-69,86.7,-77.8,73.5C-86.6,60.3,-92.6,45.7,-93.6,31.2C-94.6,16.7,-90.6,2.3,-86.1,-11.3C-81.6,-24.9,-76.6,-37.7,-68.2,-48.7C-59.8,-59.7,-48.1,-68.9,-35.6,-76.9C-23.1,-84.9,-11.5,-91.7,1.2,-93.8C13.9,-95.9,27.8,-93.3,44.7,-76.4Z" transform="translate(100 100)" />
               </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl shadow-orange-100 border border-orange-50 relative">
          <h3 className="text-2xl font-bold mb-8">Gửi tin nhắn ngay</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
