import FeatureSection from "@/_components/FeatureSection";
import SearchSection from "@/_components/SearchSection";

function Home() {
  return (
    <div>
      <SearchSection />
      <FeatureSection />
      {/* Blog Teaser Section */}
      <section className="py-12 border-2 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Teaser 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="bg-blue-500 h-48 rounded-tl-lg rounded-tr-lg">
              <img
                src="https://via.placeholder.com/400x225/blue"
                alt="Teaser Bild 1"
                className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 font-semibold tracking-wide uppercase">
                KAMILLENBLÜTEN
              </p>
              <h3 className="text-xl font-bold mt-2">
                Der Klassiker unter den Heilpflanzen
              </h3>
              <p className="text-gray-700 mt-2 text-sm">
                Kamille ist eine der bekanntesten Heilpflanzen. Sie wird für
                ihre beruhigende Wirkung bei Magen-Darm-Beschwerden und als Tee
                genutzt.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xs text-gray-500">Von Max Mustermann</p>
              <img
                src="https://via.placeholder.com/30"
                alt="Max Mustermann"
                className="rounded-full h-8 w-8"
              />
            </div>
          </div>

          {/* Teaser 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="bg-red-500 h-48 rounded-tl-lg rounded-tr-lg">
              <img
                src="https://via.placeholder.com/400x225/red"
                alt="Teaser Bild 2"
                className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 font-semibold tracking-wide uppercase">
                BÄLDERWURZEL
              </p>
              <h3 className="text-xl font-bold mt-2">
                Beruhigung für den Körper und Geist
              </h3>
              <p className="text-gray-700 mt-2 text-sm">
                Baldrianwurzel ist bekannt für ihre entspannende Wirkung. Sie
                wird bei Schlafproblemen und innerer Unruhe eingesetzt.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xs text-gray-500">Von Julia Meier</p>
              <img
                src="https://via.placeholder.com/30"
                alt="Julia Meier"
                className="rounded-full h-8 w-8"
              />
            </div>
          </div>

          {/* Teaser 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="bg-green-500 h-48 rounded-tl-lg rounded-tr-lg">
              <img
                src="https://via.placeholder.com/400x225/green"
                alt="Teaser Bild 3"
                className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 font-semibold tracking-wide uppercase">
                LAVENDEL
              </p>
              <h3 className="text-xl font-bold mt-2">
                Entspannung für Körper und Seele
              </h3>
              <p className="text-gray-700 mt-2 text-sm">
                Lavendel ist ein hervorragendes Mittel zur Beruhigung und wird
                oft für Bäder oder Tees verwendet, um Stress abzubauen.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xs text-gray-500">Von Anna Schmidt</p>
              <img
                src="https://via.placeholder.com/30"
                alt="Anna Schmidt"
                className="rounded-full h-8 w-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
