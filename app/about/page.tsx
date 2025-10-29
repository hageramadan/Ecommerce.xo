export default function Page() {
  return (
    <section className="px-5 lg:px-[18%] py-16 bg-gray-50 text-gray-800 leading-relaxed">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-pro mb-4">
          من نحن
        </h2>
        <p className="text-gray-600 text-[15px] max-w-2xl mx-auto">
          هومزمارت هو متجر واحد حيث يمكنك شراء كل شيء من الأثاث إلى الأدوات المنزلية وأكثر!
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
        <ol className="list-decimal list-inside space-y-5 text-[15px] md:text-[16px] text-gray-700">
          <li>
            نحن نبث الثقة في تجربة التسوق المنزلي عبر الإنترنت من خلال إيجاد الحلول للعلامات التجارية والمصنعين والعملاء.
          </li>
          <li>
            نحن نجمع بين قوة التكنولوجيا والخدمات اللوجستية لتوفير تجربة سلسة للعميل؛ لذلك، نقدم قيمة لجميع أصحاب المصلحة لدينا.
          </li>
          <li>
            نحن نُعيد تعريف مفهوم "المنزل" — لدى هومزمارت أكبر اختيار لتصميم وتأثيث وإنارة منزلك بنقرة واحدة، مع الراحة والتقنية التنبؤية والنهج المتمحور حول العميل.
          </li>
        </ol>
      </div>
    </section>
  );
}
