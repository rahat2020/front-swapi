import { Eye } from "react-feather";

const Card = ({ data, fetchCharacterDetails }) => {
  const { name, uid } = data || {};
  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-lg border border-gray-50 bg-white text-card-foreground shadow-lg hover:shadow-xl transition-transform transform hover:scale-102 duration-300 ease-in-out">
        <div className="p-0">
          <div className="relative w-full h-full">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/ct_starwarsgalaxyofadventures_luke_ddt-17324_f06bc849.jpeg?region=0,0,600,600&width=560"
              alt={name}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-grow p-4">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-sm text-gray-500">
            A character from the Star Wars universe.
          </p>
        </div>
        {/* Card Footer */}
        <div className="flex items-center p-4 pt-0">
          <button
            role="button"
            tabIndex={0}
            onClick={() => fetchCharacterDetails(uid)}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
          >
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
