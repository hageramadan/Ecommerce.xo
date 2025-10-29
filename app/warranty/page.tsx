export default function Page() {
  return (
    <section className="px-5 lg:px-[18%] py-16 bg-gray-50 text-gray-800 leading-relaxed">
      {/* العنوان */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-pro mb-4">
          سياسة الضمان
        </h2>
        <p className="text-gray-600 text-[15px] max-w-2xl mx-auto">
          تعرف على ما يغطيه الضمان وما لا يغطيه، بالإضافة إلى كيفية تقديم مطالبة الضمان
          للحصول على دعم سلس وسريع.
        </p>
      </div>

      {/* المحتوى */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-6">
        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">🛡️ 1. نطاق الضمان</h3>
          <p className="text-gray-700 text-[15px]">
            يغطي الضمان أي عيوب في التصنيع والمواد لمدة محددة من تاريخ الشراء. لا يشمل الضمان التلف الناتج عن سوء الاستخدام أو الإهمال.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">📋 2. كيفية تقديم مطالبة</h3>
          <p className="text-gray-700 text-[15px]">
            لتقديم مطالبة الضمان، يرجى الاحتفاظ بإيصال الشراء والتواصل مع خدمة العملاء عبر البريد الإلكتروني:
            <span className="text-pro font-medium"> support@codexxx.com</span>
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">⚠️ 3. الاستثناءات</h3>
          <ul className="list-disc list-inside text-gray-700 text-[15px] space-y-2">
            <li>الأضرار الناتجة عن سوء الاستخدام أو الإهمال.</li>
            <li>التلف الناتج عن التعديلات أو الإصلاحات غير المصرح بها.</li>
            <li>الأضرار العرضية أو الناتجة عن الكوارث الطبيعية.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">📞 4. الدعم والاستفسارات</h3>
          <p className="text-gray-700 text-[15px]">
            لأي استفسارات حول الضمان أو حالة المطالبة، يمكنك التواصل معنا عبر:
            <span className="text-pro font-medium"> support@codexxx.com</span>
          </p>
        </section>
      </div>
    </section>
  );
}
