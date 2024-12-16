import FeatureCard from "./FeatureCard";

function FeatureSection() {
  const features = [
    {
      imageSrc: "/01.plant.png",
      imageAlt: "plant",
      title: "Heilpflanzen entdecken",
      description: "Finde natürliche Lösungen für Deine Beschwerden.",
      buttonText: "Mehr erfahren",
    },
    {
      imageSrc: "/02.tea-ceremony.png",
      imageAlt: "tea",
      title: "Produkte finden",
      description: "Tees, Bäder und mehr mit Deinen Heilpflanzen.",
      buttonText: "Mehr erfahren",
    },
    {
      imageSrc: "/03.open-book.png",
      imageAlt: "articles",
      title: "Wissenswertes und Tipps",
      description:
        "Blog-Artikel und was Du über Naturheilkunde wissen solltest.",
      buttonText: "Mehr erfahren",
    },
  ];

  // Darunter: Nochmal einlesen in map()-Methode, index & key & react, spread-operator syntax
  return (
    <section className="max-w-5xl mx-auto px-14 py-12 flex flex-wrap justify-around gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          imageSrc={feature.imageSrc}
          imageAlt={feature.imageAlt}
          title={feature.title}
          description={feature.description}
          buttonText={feature.buttonText}
        />
      ))}
    </section>
  );
}

export default FeatureSection;
