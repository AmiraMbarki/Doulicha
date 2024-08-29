// import aboutUsBg from "../assets/aboutUsBg.jpg";

export default function AboutUs() {
  return (
    <div
      className="p-5"
      //   style={{
      //     backgroundImage: `url(${require("../assets/aboutUsBg.jpg")})`,
      //   }}
    >
      <div className="bg-gray-100 text-gray-800 bg-opacity-10">
        {/* Hero Section */}
        <section className="bg-cover bg-center h-64 flex items-center justify-center">
          <div className="bg-primary bg-opacity-100 p-8 rounded-lg text-center">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Doulicha
            </h1>
            <p className="text-lg text-gray-200 mt-2">
              Your gateway to unforgettable camping experiences.
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-12 px-8 md:px-16 lg:px-32">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-center mb-8 text-white">
            Welcome to Doulicha, your ultimate destination for discovering the
            best camping spots around the country. Whether you're a seasoned
            outdoor enthusiast or a family looking for a weekend getaway, we
            provide a curated selection of camping locations tailored to suit
            every type of adventurer. From secluded forest retreats to scenic
            lakeside campsites, each location is chosen for its natural beauty,
            amenities, and accessibility. Embark on your next journey with us
            and experience the great outdoors like never before.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-12 text-black grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 lg:px-32">
          <div className="text-center bg-white opacity-40 p-6 shadow-lg rounded-lg">
            <h3 className="text-xl  font-bold mb-2">Curated Locations</h3>
            <p className="font-semibold">
              Only the best spots, handpicked for you.
            </p>
          </div>
          <div className="text-center bg-white opacity-40  p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
            <p className="font-semibold">
              Simple and hassle-free booking process.
            </p>
          </div>
          <div className="text-center bg-white opacity-40  p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Community Driven</h3>
            <p className="font-semibold">Join a community of nature lovers.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
