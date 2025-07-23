const Skelton = () => {
  return Array.from({ length: 10 }).map((_, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md p-4 animate-pulse flex flex-col justify-between"
    >
      <div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      </div>
      <div className="mt-4">
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  ));
};

export default Skelton;
