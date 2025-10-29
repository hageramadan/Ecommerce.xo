export default function Page() {
  return (
    <section className="px-5 lg:px-[18%] py-16 bg-gray-50 text-gray-800 leading-relaxed">

      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-pro mb-4">
          شروط الاستخدام
        </h2>
        <p className="text-gray-600 text-[15px] max-w-2xl mx-auto">
          نُرحّب بك في <span className="font-semibold text-pro">كود أكس</span>، المنصة التي تربط أصحاب المنازل
          والمهنيين في عالم تصميم المنازل. باستخدامك لموقعنا أو تطبيقاتنا،
          فإنك توافق على الالتزام بشروط الاستخدام الموضحة أدناه.
        </p>
      </div>

      {/* المحتوى */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-6">
        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">📜 1. قبول الشروط</h3>
          <p className="text-gray-700 text-[15px]">
            من خلال الوصول إلى موقع كود أكس أو استخدام خدماتنا، فإنك توافق على هذه الشروط والأحكام.
            إذا كنت لا توافق على أي جزء منها، يُرجى التوقف عن استخدام الموقع فورًا.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">🧾 2. استخدام المنصة</h3>
          <ul className="list-disc list-inside space-y-2 text-[15px] text-gray-700">
            <li>يُسمح باستخدام الموقع فقط للأغراض القانونية والمشروعة.</li>
            <li>يُحظر استخدام المنصة في نشر محتوى مسيء أو مضلل أو ينتهك حقوق الآخرين.</li>
            <li>يحتفظ كود أكس بحق تعليق أو حذف أي حساب يخالف هذه الشروط.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">🔒 3. حماية البيانات</h3>
          <p className="text-gray-700 text-[15px]">
            نحن نحرص على حماية بياناتك الشخصية وفقًا لسياسة الخصوصية الخاصة بنا.
            باستخدامك للموقع، فإنك توافق على جمع واستخدام بياناتك كما هو موضح في تلك السياسة.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">💡 4. حقوق الملكية الفكرية</h3>
          <p className="text-gray-700 text-[15px]">
            جميع المحتويات على موقع كود أكس بما في ذلك النصوص والصور والتصاميم والبرمجيات
            هي ملكية فكرية حصرية لكود أكس أو المرخصين له، ويحظر نسخها أو إعادة استخدامها دون إذن مسبق.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">⚙️ 5. تعديل الشروط</h3>
          <p className="text-gray-700 text-[15px]">
            يحتفظ كود أكس بحق تعديل شروط الاستخدام في أي وقت دون إشعار مسبق.
            يتم نشر أي تغييرات على هذه الصفحة، ويعتبر استمرارك في استخدام الموقع قبولًا للشروط الجديدة.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-pro mb-2">📞 6. تواصل معنا</h3>
          <p className="text-gray-700 text-[15px]">
            لأي استفسارات بخصوص هذه الشروط، يمكنك التواصل معنا عبر البريد الإلكتروني:
            <span className="text-pro font-medium"> support@codexxxx.com</span>
          </p>
        </section>
      </div>
    </section>
  );
}
