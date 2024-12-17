import FeatureCard from "./FeatureCard";

function FeatureSection() {
  const features = [
    {
      imageSrc: "/01.plant.png",
      imageAlt: "plant",
      title: "Discover medicinal herbs",
      description: "Browse through our herbary and explore natures remedies.",
      buttonText: "Find out more",
      path: "/herbarium",
    },
    {
      imageSrc: "/02.tea-ceremony.png",
      imageAlt: "tea",
      title: "Find your product",
      description: "Teas, baths and more made of medicinal plants.",
      buttonText: "Find out more",
      path: "/products",
    },
    {
      imageSrc: "/03.open-book.png",
      imageAlt: "articles",
      title: "Interesting facts and tips",
      description: "Blog articles and knowledge about natural medicine.",
      buttonText: "Find out more",
      path: "/blog",
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
          linkPath={feature.path}
        />
      ))}
    </section>
  );
}

export default FeatureSection;
