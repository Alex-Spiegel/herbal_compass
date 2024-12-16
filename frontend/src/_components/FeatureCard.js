import Image from "next/image";

function FeatureCard({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="w-64 min-w-56 h-80 p-6 grid grid-rows-[auto_4rem_4rem_2rem] gap-2 rounded-lg bg-lime-200">
      <Image src={imageSrc} alt={imageAlt} width={64} height={64} />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-sm font-bold text-gray-600">{description}</p>
      <button
        className="text-green-900 px-3 py-1.5 text-xs font-bold border-2 border-green-700 rounded-full"
        onClick={onButtonClick}
      >
        {buttonText} &#187;
      </button>
    </div>
  );
}

export default FeatureCard;
