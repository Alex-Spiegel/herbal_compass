function HerbariumFeatureSection() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-green-800">
        Discover the World of Medicinal Herbs
      </h2>
      <p className="max-w-3xl">
        From timeless classics to hidden gems - our herbarium holds nature's
        finest. Learn about healing properties, traditional uses, and modern
        insights. Whether you're curious or committed - start your herbal
        journey here.
      </p>
      <div
        style={{
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
        }}
        className="grid grid-cols-3 gap-5 p-5 my-5 auto-rows-[180px] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl bg-lime-300"
      >
        {/* Card 1: groß */}
        <div className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden">
          <img
            src="/plants/02_fennel-3564229_1280.jpg"
            alt="Chamomile"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
            <h3 className="text-xl font-bold">Fennel</h3>
            <p className="text-sm text-gray-200">The Gentle Soother</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative col-span-1 row-span-1 rounded-3xl overflow-hidden">
          <img
            src="/plants/09_Milk_thistle_flowerhead.jpg"
            alt="Thyme"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-semibold mt-2">Milk Thistle</h3>
            <p className="text-sm text-gray-200">The Liver Guardian</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative col-span-1 row-span-1 rounded-3xl overflow-hidden">
          <img
            src="/plants/06_free-photo-of-close-up-of-pine-cone-on-tree-branch-in-toblach.jpeg"
            alt="Eucalyptus"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-semibold mt-2">Pine</h3>
            <p className="text-sm text-gray-200">The Fresh Reviver</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative col-span-1 row-span-1 rounded-3xl overflow-hidden">
          <img
            src="/plants/08_pexels-photo-12201672.webp"
            alt="Mint"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-semibold mt-2">Mint</h3>
            <p className="text-sm text-gray-200">Cool & refreshing</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="relative col-span-2 row-span-1 rounded-3xl overflow-hidden">
          <img
            src="/plants/03_pexels-photo-207518.webp"
            alt="Lavender"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-semibold mt-2">Lavender</h3>
            <p className="text-sm text-gray-200">For calm minds</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HerbariumFeatureSection;
