import { ExternalLink, Navigation } from "react-feather";

const Header = () => {
  return (
    <div className="flex-1 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
            Explore the Galaxy
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover the heroes, villains, and legends that shaped a galaxy far,
            far away. From Jedi Masters to Sith Lords, explore the rich universe
            of Star Wars characters.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <button
              role="button"
              tabIndex={0}
              className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white w-40 px-4 py-1rounded-lg font-semibold cursor-pointer transition-colors rounded-md"
            >
              <ExternalLink className="w-4 h-4 font-medium" />
              Explore Jedi
            </button>
            <button
              role="button"
              tabIndex={0}
              className="flex justify-center items-center gap-2 border border-yellow-500 text-yellow-400 hover:yellow-red-500 hover:text-yellow w-40 px-4 py-1 cursor-pointer rounded-md font-semibold bg-transparent transition-colors"
            >
              <Navigation className="w-4 h-4 font-medium" />
              Discover Sith
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
