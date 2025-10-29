"use client";

export default function ContactPage() {
  return (
    <section className="px-5 lg:px-[18%] py-16 bg-gray-50 text-gray-800">
      {/* العنوان */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pro mb-3">اتصل بنا</h2>
        <p className="text-gray-600 text-[15px] max-w-2xl mx-auto">
          للتواصل معنا، يرجى استخدام أي من الوسائل التالية أو إرسال رسالة من خلال الفورم.
        </p>
      </div>

      {/* معلومات التواصل */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <h3 className="font-semibold text-lg text-pro mb-2">الخط الساخن</h3>
          <p className="text-gray-700 text-[15px]">15829</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <h3 className="font-semibold text-lg text-pro mb-2">مواعيد عمل خدمة العملاء</h3>
          <p className="text-gray-700 text-[15px]">كل يوم من 9:00 صباحاً إلي 7:00 مساءاً</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <h3 className="font-semibold text-lg text-pro mb-2">البريد الإلكتروني</h3>
          <p className="text-gray-700 text-[15px]">hello@codexx.com</p>
        </div>
      </div>

      {/* الفورم */}
      <div className="bg-white rounded-2xl shadow p-8 md:p-12 mb-16">
        <h3 className="text-2xl font-semibold text-pro mb-6">أرسل لنا رسالة</h3>
        <form className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">الإسم الأول</label>
            <input
              type="text"
              placeholder="أدخل الاسم الأول"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-pro focus:ring-1 focus:ring-pro"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">الإسم الأخير</label>
            <input
              type="text"
              placeholder="أدخل الاسم الأخير"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-pro focus:ring-1 focus:ring-pro"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">رقم الهاتف</label>
            <input
              type="text"
              placeholder="أدخل رقم الهاتف"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-pro focus:ring-1 focus:ring-pro"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-pro focus:ring-1 focus:ring-pro"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium">رسالة</label>
            <textarea
              placeholder="فضلاً أدخل رسالتك"
              rows={5}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-pro focus:ring-1 focus:ring-pro"
            ></textarea>
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium">الشركة</label>
            <input
              type="text"
              placeholder="اسم الشركة (اختياري)"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-pro focus:ring-1 focus:ring-pro"
            />
          </div>
          <button
            type="submit"
            className="bg-pro text-white py-3 rounded-xl mt-4 md:col-span-2 hover:bg-pro-max transition"
          >
            إرسال
          </button>
        </form>
      </div>

   
    </section>
  );
}
