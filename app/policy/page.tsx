export default function Page() {
  return (
    <section className="px-5 lg:px-[18%] py-16 bg-gray-50 text-gray-800 leading-relaxed">
      {/* العنوان والوصف */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-pro mb-4">
          سياسة الإرجاع والاسترداد
        </h2>
        <p className="text-gray-600 text-[15px] max-w-2xl mx-auto">
          نلتزم في <span className="font-semibold text-pro">هومزمارت</span> بتوفير تجربة تسوق آمنة وموثوقة، 
          مع إتاحة خيارات مرنة للإرجاع والاستبدال بما يضمن رضاك التام عن مشترياتك.
        </p>
      </div>

      {/* المحتوى */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-6">
        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">🛒 شروط الإرجاع:</h3>
          <ul className="list-disc list-inside space-y-2 text-[15px] text-gray-700">
            <li>يجب أن يتم طلب الإرجاع خلال <strong>7 أيام</strong> من تاريخ الاستلام.</li>
            <li>يجب أن يكون المنتج في حالته الأصلية دون أي تلف أو استخدام.</li>
            <li>يُشترط وجود جميع الملحقات والعبوات الأصلية للمنتج.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">💳 الاسترداد المالي:</h3>
          <ul className="list-disc list-inside space-y-2 text-[15px] text-gray-700">
            <li>يتم رد المبلغ خلال <strong>5 إلى 10 أيام عمل</strong> بعد استلام المنتج المُرجع وفحصه.</li>
            <li>سيُعاد المبلغ إلى نفس وسيلة الدفع المستخدمة عند الشراء.</li>
            <li>قد تُخصم رسوم الشحن أو الاسترجاع في بعض الحالات.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">⚙️ سياسة الاستبدال:</h3>
          <ul className="list-disc list-inside space-y-2 text-[15px] text-gray-700">
            <li>يمكنك استبدال المنتج بمنتج آخر من نفس القيمة أو أعلى.</li>
            <li>في حال اختلاف السعر، يجب دفع الفارق قبل إتمام عملية الاستبدال.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">📞 للمساعدة:</h3>
          <p className="text-gray-700 text-[15px]">
            إذا واجهت أي مشكلة أثناء عملية الإرجاع أو الاستبدال، يُرجى التواصل مع فريق خدمة العملاء عبر:
          </p>
          <ul className="list-disc list-inside text-[15px] text-gray-700 mt-2">
            <li>البريد الإلكتروني: <span className="text-pro font-medium">support@codexxxx.com</span></li>
            <li>الهاتف: <span className="text-pro font-medium">0123456789</span></li>
          </ul>
        </section>
      </div>
    </section>
  );
}
