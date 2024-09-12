import Image from "next/image";

import Products from "./@products/page";
import Users from "./@users/page";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Geolocation {
  lat: string;
  long: string;
}

interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface Name {
  firstname: string;
  lastname: string;
}

interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}

interface Props {
  products: React.ReactNode;
  users: React.ReactNode;
}

export default function HomePage() {
  return (
    <div className="mt-20 max-w-[1280px] m-auto">
      <h1 className="font-bold text-4xl mb-4">Home Page</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Image
        src="/images/image.jpg"
        alt="My Image"
        height={300}
        width={650}
        className="m-auto"
      />

      <div className="flex justify-between">
        <Products />
        <Users />
      </div>
    </div>
  );
}
