import Image from "next/image";
import React from "react";

async function page() {
  const response = await fetch("https://fakestoreapi.com/users");
  const users = await response.json();

  return (
    <div>
      <h1 className="mb-4 font-bold text-4xl">Users</h1>

      <ul>
        {users.map((u: any) => (
          <li key={u.id} className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/images/icon.png"
                  alt="Neil image"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {u.name.firstname}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {u.email}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                {u.phone}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
