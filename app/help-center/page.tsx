"use client";

export default function HelpCenterPage() {
  return (
    <section className="px-5 lg:px-[18%] py-16 bg-gray-50 text-gray-800">
  
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pro mb-3">
          مركز المساعدة
        </h2>
        <p className="text-gray-600 text-[15px] max-w-2xl mx-auto">
          مرحبًا، كيف يمكننا مساعدتك؟ ابحث عن الأسئلة أو الكلمات المفتاحية مثل "استرداد".
        </p>
      </div>

      <div className="mb-12">
        <h3 className="font-semibold text-lg text-pro mb-3">كلمات مفتاحية</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "عمل طلب",
            "دفع الطلب",
            "متابعة الطلب",
            "صالات العرض",
          ].map((word, idx) => (
            <span
              key={idx}
              className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-pro text-pro-hover cursor-pointer transition"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

   
      <div className="mb-12">
        <h3 className="font-semibold text-lg text-pro mb-3">الأسئلة الأكثر شيوعاً</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-5">
            <h4 className="font-semibold mb-3">الحساب</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>إنشاء حساب على </li>
              <li>إزاي أعدّل بيانات حسابي؟</li>
              <li>نسيت كلمة السر؟</li>
              <li>إزاي أقفل حسابي؟</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <h4 className="font-semibold mb-3">الطلبات</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>عمل طلب</li>
              <li>دفع الطلب</li>
              <li>متابعة الطلب</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <h4 className="font-semibold mb-3">المنتجات والخدمات</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>التوصيل</li>
              <li>الاسترجاع والاسترداد</li>
              <li>صالات العرض</li>
            </ul>
          </div>
        </div>
      </div>

      {/* قسم استفسار */}
      <div className="bg-white rounded-2xl shadow p-8">
        <h3 className="font-semibold text-lg text-pro mb-3">لم تجد إجابتك؟</h3>
        <p className="text-gray-700 mb-4">
          إذا لم تجد الإجابة على سؤالك، يمكنك التواصل معنا مباشرة عبر البريد الإلكتروني أو الرقم الساخن:
        </p>
        <ul className="text-gray-700 space-y-1">
          <li>البريد الإلكتروني: <span className="text-pro font-medium">hello@codexxx.com</span></li>
          <li>رقم الدعم: <span className="text-pro font-medium">15829</span></li>
        </ul>
      </div>
    </section>
  );
}
