import { useLanguage } from "@/contexts/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "15+", label: t("stats.years") },
    { number: "5", label: t("stats.brands") },
    { number: "10+", label: t("stats.countries") },
    { number: "1000+", label: t("stats.clients") },
  ];

  return (
    <section className="py-20 bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">
                {stat.number}
              </div>
              <div className="text-lg text-green-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
