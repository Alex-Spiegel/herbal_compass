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

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-green-800">
        What's Waiting for You
      </h2>
      <div className="flex flex-wrap justify-between gap-6 py-5">
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
      </div>
    </section>
  );
}

export default FeatureSection;
