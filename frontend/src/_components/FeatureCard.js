import Image from "next/image";
import Link from "next/link";

function FeatureCard({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  linkPath,
  onButtonClick,
}) {
  return (
    <div
      style={{
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
      }}
      className="max-w-80 min-w-56 h-[400px] p-6 flex flex-col justify-between gap-2 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl bg-lime-300"
    >
      <Image src={imageSrc} alt={imageAlt} width={120} height={120} />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="font-semibold text-gray-600">{description}</p>
      <Link
        href={linkPath}
        className="flex justify-center items-center h-14 px-3 text-lg font-bold text-white bg-green-800 rounded-full hover:bg-green-950"
        onClick={onButtonClick}
      >
        {buttonText} &#187;
      </Link>
    </div>
  );
}

export default FeatureCard;
