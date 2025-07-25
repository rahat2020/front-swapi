const AppSpinner = ({ customClasses = "w-20 h-20" }) => {
  return (
    <div>
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div
          className={`${customClasses} border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full`}
        >
          <div
            className={`${customClasses} border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AppSpinner;
