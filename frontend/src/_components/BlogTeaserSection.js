import BlogCard from "./BlogCard";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function BlogTeaserSection() {
  const blogArticles = [
    {
      imageSrc: "/plants/01_pexels-photo-2339013.webp",
      imageAlt: "Chamomile",
      herbName: "Chamomile",
      title: "The Calming Power of Chamomile",
      teaserText:
        "Discover how chamomile can help reduce stress, support sleep, and soothe digestion—naturally and gently.",
      author: "Sophie Lane",
      authorImageSrc: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      imageSrc: "/plants/05_Eucalyptus-obliqua-Messmate-Kings-Flat-001-1.jpg",
      imageAlt: "Eucalyptus",
      herbName: "Eucalyptus",
      title: "Breathe Easy with Eucalyptus",
      teaserText:
        "From cold relief to skin care, eucalyptus offers powerful benefits you can bring into your daily routine.",
      author: "Marcus Hale",
      authorImageSrc: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      imageSrc: "/plants/07_Thyme-in-an-open-land-garden.jpg",
      imageAlt: "Thyme",
      herbName: "Thyme",
      title: "Thyme: Small Herb, Big Impact",
      teaserText:
        "Packed with antioxidants and antimicrobial properties, thyme is a natural go-to for health and flavor.",
      author: "Elena Brooks",
      authorImageSrc: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  return (
    <section className="mt-20">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="max-w-3xl">
          {/* text */}
          <h2 className="text-3xl font-bold text-green-800">
            Stories from the World of Herbs
          </h2>
          <p>
            Have a look at our blog, containing curated articles for the
            naturally curious. Discover tips, remedies, and stories rooted in
            herbal wisdom.
          </p>
        </div>
        <div className="shrink-0">
          {/* button */}
          <Link
            href="/blog"
            className="flex items-center gap-2 p-3 font-bold text-white bg-green-800 rounded-full hover:bg-green-950"
          >
            VIEW ALL <FaChevronRight />
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-6 py-5">
        {blogArticles.map((article, index) => (
          <BlogCard
            key={index}
            imageSrc={article.imageSrc}
            imageAlt={article.imageAlt}
            herbName={article.herbName}
            title={article.title}
            teaserText={article.teaserText}
            author={article.author}
            authorImageSrc={article.authorImageSrc}
          />
        ))}
      </div>
    </section>
  );
}
export default BlogTeaserSection;
