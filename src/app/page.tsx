import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomePage() {
  const [showMoreProducts, setShowMoreProducts] = useState(false);

  const mainProducts = [
    { name: 'Đèn thông minh', img: '/placeholder-light.jpg', desc: 'Điều khiển ánh sáng otừ xa, thay đổi màu sắc và độ sáng bằng giọng nói hoặc ứng dụng.' },
    { name: 'Ổ cắm Wi-Fi', img: '/placeholder-plug.jpg', desc: 'Bật tắt thiết bị điện từ xa, hẹn giờ thông minh và theo dõi lượng điện tiêu thụ.' },
    { name: 'Cảm biến chuyển động', img: '/placeholder-sensor.jpg', desc: 'Phát hiện chuyển động để tự động bật đèn, cảnh báo khi có người lạ hoặc tích hợp hệ thống an ninh.' }
  ];

  const moreProducts = [
    { name: 'Camera an ninh', img: '/placeholder-camera.jpg', desc: 'Giám sát từ xa với chất lượng HD, lưu trữ đám mây và phát hiện chuyển động.' },
    { name: 'Rèm cửa tự động', img: '/placeholder-curtain.jpg', desc: 'Điều khiển rèm từ xa, hẹn giờ mở/đóng theo ánh sáng hoặc giọng nói.' },
    { name: 'Cửa thông minh', img: '/placeholder-door.jpg', desc: 'Mở khóa bằng vân tay, mã số hoặc điều khiển qua smartphone một cách an toàn và tiện lợi.' }
  ];

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 font-sans scroll-smooth">
      {/* Header */}
      <motion.header className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50"
        initial="hidden" animate="visible" variants={sectionVariants}>
        <div className="text-2xl font-bold">Tera Smart</div>
        <nav className="space-x-4">
          <a href="#products" className="hover:text-blue-600">Sản phẩm</a>
          <a href="#packages" className="hover:text-blue-600">Giải pháp lắp đặt</a>
          <a href="#business" className="hover:text-blue-600">Ứng dụng doanh nghiệp</a>
          <a href="#about" className="hover:text-blue-600">Giới thiệu</a>
          <a href="#contact" className="hover:text-blue-600">Liên hệ</a>
        </nav>
      </motion.header>

      {/* Hero section */}
      <motion.section className="bg-white text-center py-20 px-4"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Nhà thông minh cho mọi người</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Biến ngôi nhà của bạn thành một không gian sống hiện đại và tiện nghi chỉ trong vài bước.
        </p>
        <a href="#products" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Khám phá sản phẩm</a>
      </motion.section>

      {/* Product Section */}
      <motion.section id="products" className="py-16 px-6 bg-gray-50"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2 className="text-3xl font-bold text-center mb-10">Sản phẩm nổi bật</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mainProducts.map((item, idx) => (
            <motion.div key={idx} className="bg-white rounded-xl shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
              <img src={item.img} alt={item.name} className="h-40 w-full object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
          <AnimatePresence>
            {showMoreProducts && moreProducts.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <img src={item.img} alt={item.name} className="h-40 w-full object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMoreProducts(!showMoreProducts)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            {showMoreProducts ? 'Ẩn bớt' : 'Xem thêm sản phẩm'}
          </button>
        </div>
      </motion.section>

      {/* Installation Packages */}
      <motion.section id="packages" className="py-16 px-6 bg-white"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2 className="text-3xl font-bold text-center mb-10">Giải pháp lắp đặt</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Gói Tiết Kiệm',
              desc: 'Dành cho người mới bắt đầu, bao gồm các thiết bị cơ bản như đèn thông minh và ổ cắm Wi-Fi.',
              img: '/placeholder-basic.jpg'
            },
            {
              name: 'Gói Tiêu Chuẩn',
              desc: 'Phù hợp với nhu cầu gia đình, tích hợp điều khiển rèm, cảm biến và thiết bị bảo mật.',
              img: '/placeholder-standard.jpg'
            },
            {
              name: 'Gói Cao Cấp',
              desc: 'Trang bị toàn diện cho biệt thự hoặc căn hộ cao cấp, hỗ trợ cấu hình và bảo trì chuyên sâu.',
              img: '/placeholder-premium.jpg'
            }
          ].map((pkg, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl p-6 shadow text-center">
              <img src={pkg.img} alt={pkg.name} className="h-40 w-full object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
              <p className="text-gray-600">{pkg.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

