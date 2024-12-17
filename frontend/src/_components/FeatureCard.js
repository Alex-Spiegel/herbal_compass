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
    <div className="w-72 min-w-56 h-[400px] p-6 flex flex-col justify-between gap-2 rounded-lg bg-lime-200">
      <Image src={imageSrc} alt={imageAlt} width={120} height={120} />
      <h2 className="text-2xl font-semibold">{title}</h2>
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
