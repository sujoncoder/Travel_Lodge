import Image from "next/image";
import { auth } from "../../../auth";

const ProfileInfo = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <div className="relative mb-4">
        <div className="relative h-24 w-24s lg:h-32 lg:w-32 rounded-full bg-gradient-to-r from-orange-500 to-red-500 grid place-items-center text-5xl lg:text-6xl text-white font-bold ring-4 ring-offset-2">
          {session?.user?.image ? (
            <Image
              src={session?.user.image}
              width={90}
              height={90}
              alt={session?.user.name}
              className="w-full h-full"
            />
          ) : (
            session?.user.name.charAt(0).toLocaleUpperCase()
          )}
        </div>
      </div>

      <div>
        <h3 className="text-2xl lg:text-3xl font-semibold capitalize text-gray-900">
          {session?.user.name}
        </h3>
        <p className="mt-2 text-sm lg:text-lg text-gray-600">
          {session?.user.email}
        </p>
      </div>

      <div className="w-3/4 border-b border-gray-300 py-6 lg:py-4"></div>
    </div>
  );
};

export default ProfileInfo;
