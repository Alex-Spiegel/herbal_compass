import Image from "next/image";

function BlogCard({
  imageSrc,
  imageAlt,
  herbName,
  title,
  teaserText,
  author,
  authorImageSrc,
}) {
  return (
    <div
      style={{
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
      }}
      className="max-w-80 min-w-56 p-6 flex flex-col justify-between gap-2 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl  bg-lime-300"
    >
      {/* Bildbereich */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-auto object-cover rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl"
        />
      </div>

      {/* Textbereich */}
      <div className="mt-4">
        <p className="text-sm text-gray-500 font-semibold tracking-wide uppercase">
          {herbName}
        </p>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{teaserText}</p>
      </div>

      {/* Authorsbereich */}
      <div className="flex flex-col items-center gap-2">
        <img
          src={authorImageSrc}
          alt={author}
          className="rounded-full w-14 h-14 border-2 border-green-600"
        />
        <p className="text-sm text-gray-500">by {author}</p>
      </div>
    </div>
  );
}

export default BlogCard;
