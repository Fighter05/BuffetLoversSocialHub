"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "fa-solid fa-house text-2xl",
    active: "fa-solid fa-house text-2xl text-orange-500",
    href: "/",
  },
  {
    name: "fa-regular fa-bell text-2xl",
    active: "fa-solid fa-bell text-2xl text-orange-500",
    href: "/noti",
  },
  {
    name: "fa-regular fa-message text-2xl",
    active: "fa-solid fa-message text-2xl text-orange-500",
    href: "/message",
  },
  {
    name: "fa-regular fa-user text-2xl",
    active: "fa-solid fa-user text-2xl text-orange-500",
    href: "/profile",
  },
];

const nav = () => {
  const pathname = usePathname();

  return (
    <ul className="flex justify-between py-5 px-5">
      <div className="flex items-center gap-10">
        <p className="text-3xl font-bold text-orange-500">Buffet Lover</p>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <input
            type="text"
            className="block w-full rounded-2xl py-2 pl-9 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            placeholder="Search"
          ></input>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link href={link.href} key={link.name}>
              {isActive ? (
                <i className={link.active}></i>
              ) : (
                <i className={link.name}></i>
              )}
            </Link>
          );
        })}
      </div>
    </ul>
  );
};

export default nav;
