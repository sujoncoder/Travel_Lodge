const ProfileInfo = () => {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <div className="relative mb-4">
        <div className="relative h-24 w-24 lg:h-36 lg:w-36 rounded-full bg-gradient-to-r from-orange-500 to-red-500 grid place-items-center text-5xl lg:text-6xl text-white font-bold ring-4 ring-offset-2">
          S
        </div>
      </div>

      <div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          Sujon Sheikh
        </h3>
        <p className="mt-2 text-sm lg:text-lg text-gray-600">
          sujonsheikh.dev@gmail.com
        </p>
      </div>

      <div className="w-3/4 border-b border-gray-300 py-6 lg:py-4"></div>
    </div>
  );
};

export default ProfileInfo;
