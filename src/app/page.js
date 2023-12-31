import Image from "next/image";
import Nav from "../app/nav";
import Shabu from "../app/img/Shabu.jpg";

const menuLists = [
  { name: "Fight's Profile", icon: "fa-solid fa-user text-xl" },
  { name: "Your Friends", icon: "fa-solid fa-user-group text-xl" },
  { name: "Your Groups", icon: "fa-solid fa-people-group text-xl" },
  { name: "Your Pages", icon: "fa-solid fa-flag text-xl" },
  { name: "Video", icon: "fa-solid fa-video text-xl" },
  { name: "Marketplace", icon: "fa-solid fa-store text-xl" },
];

const shortcutLists = [
  {
    name: "Buffet Lover group",
    icon: "fa-solid fa-face-kiss-wink-heart text-lg",
  },
  { name: "How to eat buffet 24/7", icon: "fa-solid fa-clock text-lg" },
  { name: "I will eat Buffet until DIE", icon: "fa-solid fa-dice text-lg" },
];

const contactLists = [
  { name: "John Handsome" },
  { name: "Joe Nathan" },
  { name: "Johnson " },
  { name: "Mary Jane" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <div className="bg-gray-100 pt-5 px-5 pb-10">
        <div className="flex justify-between">
          <div className="w-64">
            <div className="border-b border-gray-400 pb-2">
              {menuLists.map((menu) => {
                return (
                  <div
                    key={menu.name}
                    className="flex p-5 gap-4 items-center rounded-2xl cursor-pointer ease-in-out duration-300  hover:bg-white hover:text-orange-500"
                  >
                    <i className={menu.icon}></i>
                    <p>{menu.name}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <p className="pt-4 pb-2 text-gray-500">Your Shortcuts</p>
              {shortcutLists.map((shortcut) => {
                return (
                  <div
                    key={shortcut.name}
                    className="flex p-5 gap-4 items-center rounded-2xl cursor-pointer ease-in-out duration-300  hover:bg-white hover:text-orange-500"
                  >
                    <span className="bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                      <i className={shortcut.icon}></i>
                    </span>
                    <p>{shortcut.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-3xl font-bold">Activity Feed</p>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-user text-xl"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="block h-20 w-full rounded-t-2xl py-2 pl-20 pr-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  placeholder="Share what'on your mind, Fight"
                ></input>
                <div className="absolute inset-y-0 right-0 flex items-center pr-6">
                  <i className="fa-solid fa-paper-plane text-xl"></i>
                </div>
              </div>
              <div className="bg-gray-100 text-orange-500 h-12 rounded-b-2xl border-b border-x border-gray-300 flex items-center gap-4 pl-6">
                <i className="fa-solid fa-camera text-xl"></i>
                <i className="fa-solid fa-image text-xl"></i>
                <i className="fa-solid fa-link text-xl"></i>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-t-2xl flex justify-between items-center p-4 border-t border-x border-gray-300">
                <div className="flex items-center gap-4">
                  <span className="bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-user text-xl"></i>
                  </span>
                  <div>
                    <p className="text-xl font-bold">Fight</p>
                    <div className="flex items-center gap-2">
                      <p>4 hr.</p>
                      <i className="fa-solid fa-earth-americas"></i>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="fa-solid fa-ellipsis text-2xl"></i>
                  <i className="fa-solid fa-xmark text-2xl"></i>
                </div>
              </div>
              <div className="bg-white px-4 pb-4 border-x border-gray-300">
                <p className="text-xl">
                  I love Buffet!! and Shabu-shabu, on the other hand, is a
                  Japanese hot pot style of dining. It involves cooking thinly
                  sliced meat, vegetables, and other ingredients in a pot of
                  simmering broth at your table.
                </p>
              </div>
              <div className="bg-[url('../app/img/Shabu.jpg')] h-[500px] bg-cover bg-no-repeat"></div>
              <div className="bg-white p-4 flex justify-between border-x border-gray-300">
                <div className="flex gap-4 items-center">
                  <i className="fa-regular fa-thumbs-up"></i>
                  <p>Like</p>
                  <i className="fa-regular fa-comment"></i>
                  <p>Comment</p>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-share"></i>
                  <p>Share</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="bg-gray-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="block h-20 w-full py-2 pl-16 pr-16 text-gray-900 ring-1 rounded-b-2xl ring-inset ring-gray-300 placeholder:text-gray-400"
                  placeholder="Write a comment"
                ></input>
                <div className="absolute inset-y-0 right-0 flex items-center pr-6">
                  <i className="fa-solid fa-paper-plane text-xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="w-64">
            <div className="border-b border-gray-400 pb-2">
              <p className="pb-2 text-gray-500">Sponsored</p>
              <div className="bg-white w-64 h-64 rounded-2xl flex items-center justify-center">
                <p className="text-3xl font-bold text-center">
                  Buy 1 <br /> Free 100!! <br />
                  <i class="fa-solid fa-face-surprise"></i>
                </p>
              </div>
              <div className="p-2">
                <p className="text-xl font-bold">Sale Until DIE</p>
                <p className="">saleuntildie.com</p>
              </div>
            </div>
            <div>
              <p className="pt-4 pb-2 text-gray-500">Your Contacts</p>
              {contactLists.map((contact) => {
                return (
                  <div
                    key={contact.name}
                    className="flex p-5 gap-4 items-center rounded-2xl cursor-pointer ease-in-out duration-300  hover:bg-white hover:text-orange-500"
                  >
                    <span className="relative bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-user text-xl"></i>
                      <div className="absolute w-3 h-3 bg-green-500 rounded-full right-0 bottom-0"></div>
                    </span>
                    <p>{contact.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
