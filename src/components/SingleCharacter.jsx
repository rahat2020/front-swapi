import { X } from "react-feather";
import BirthdayIcon from "../helpers/Svgicon/BirthdayIcon";

const Info = ({ label, value, icon: Icon }) => (
  <div className="flex items-start gap-2">
    {Icon && <Icon className="w-5 h-5 text-blue-600 mt-1" />}
    <div className="flex flex-col">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="font-medium">{value || "N/A"}</span>
    </div>
  </div>
);

const SingleCharacter = ({ data = {}, handleCloseModal }) => {
  const { description, properties } = data || {};
  const {
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    homeworld,
    mass,
    name,
    skin_color,
    url,
  } = properties || {};

  return (
    <div className="p-6">
      <div className="px-2 py-2">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-600 italic">
            {description || "A character from the Star Wars universe."}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
          <Info label="Birth Year" value={birth_year} icon={BirthdayIcon} />
          <Info label="Gender" value={gender} />
          <Info label="Height" value={`${height} cm`} />
          <Info label="Mass" value={`${mass} kg`} />
          <Info label="Hair Color" value={hair_color} />
          <Info label="Eye Color" value={eye_color} />
          <Info label="Skin Color" value={skin_color} />
          <Info label="Homeworld" value={homeworld} />
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-start items-center">
          <button
            role="button"
            tabIndex={0}
            onClick={handleCloseModal}
            className="w-30 h-7 font-medium flex justify-center items-center gap-2 px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer transition duration-200"
          >
            <X className="w-4 h-4 font-medium" />
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;
