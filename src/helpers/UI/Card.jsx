import { Eye } from "react-feather";

const Card = ({ data, fetchCharacterDetails }) => {
  const { name, uid } = data || {};
  return (
    <div className="transition-transform transform hover:scale-102 hover:shadow-xl duration-300">
      <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{name}</h3>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <button
            role="button"
            tabIndex={0}
            onClick={() => fetchCharacterDetails(uid)}
            className="w-40 h-8 font-medium flex justify-center items-center gap-2 px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer transition duration-200"
          >
            <Eye className="w-4 h-4 font-medium" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
