import Container80 from "@/_components/Container80";

import SearchSection from "@/_components/SearchSection";
import FeatureSection from "@/_components/FeatureSection";
import HerbariumFeatureSection from "@/_components/HerbariumFeatureSection";
import BlogTeaserSection from "@/_components/BlogTeaserSection";

function HomePage() {
  return (
    <>
      <SearchSection />
      <Container80>
        <FeatureSection />
        <HerbariumFeatureSection />
        <BlogTeaserSection />
      </Container80>
    </>
  );
}

export default HomePage;
