import Nav from "@/app/nav";
import Image from "next/image";

const chatList = [
  {
    name: "John",
    text: "I am hungry",
    pic: "/face.jpg",
  },
  {
    name: "John",
    text: "I am hungry",
    pic: "/face.jpg",
  },
  {
    name: "John",
    text: "I am hungry",
    pic: "/face.jpg",
  },
  {
    name: "John",
    text: "I am hungry",
    pic: "/face.jpg",
  },
  {
    name: "John",
    text: "I am hungry",
    pic: "/face.jpg",
  },
  {
    name: "John",
    text: "I am hungry",
    pic: "/face.jpg",
  },
  {
    name: "John",
    text: "I am hungry",
    pic: "/face.jpg",
  },
];

export default function Message() {
  return (
    <>
      <Nav />
      <div className="flex flex-row justify-between bg-white px-5">
        <div className="flex flex-col w-2/5 pr-5 border-r">
          <div className="flex justify-between items-center mb-4">
            <p className="text-2xl font-bold">Chat</p>
            <i className="fa-regular fa-comment text-xl"></i>
          </div>
          <div className="">
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
          {chatList.map((chat) => {
            return (
              <div
                key={chat.name}
                className="flex flex-row py-4 px-2 justify-center items-center border-b-2"
              >
                <div className="w-1/4">
                  <Image
                    src={chat.pic}
                    className="object-cover h-12 w-12 rounded-full"
                    width={48}
                    height={48}
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">{chat.name}</div>
                  <span className="text-gray-500">{chat.text}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-5 flex flex-col justify-between">
          <div>
            <p className="text-xl font-bold">Buffet Lover group</p>
          </div>
          <div>
            <div className="flex justify-end mb-4">
              <div className="mr-2 py-3 px-4 bg-orange-500 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                Welcome to group everyone !
              </div>
              <Image
                src="/face.jpg"
                className="object-cover rounded-full"
                width={48}
                height={48}
                alt=""
              />
            </div>
            <div className="flex justify-start mb-4">
              <Image
                src="/face.jpg"
                className="object-cover h-12 w-12 rounded-full"
                width={48}
                height={48}
                alt=""
              />
              <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                at praesentium, aut ullam delectus odio error sit rem.
                Architecto nulla doloribus laborum illo rem enim dolor odio
                saepe, consequatur quas?
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <div>
                <div className="mr-2 py-3 px-4 bg-orange-500 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam, repudiandae.
                </div>

                <div className="mt-4 mr-2 py-3 px-4 bg-orange-500 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, reiciendis!
                </div>
              </div>
              <Image
                src="/face.jpg"
                className="object-cover h-12 w-12 rounded-full"
                width={48}
                height={48}
                alt=""
              />
            </div>
            <div className="flex justify-start mb-4">
              <Image
                src="/face.jpg"
                className="object-cover rounded-full"
                width={48}
                height={48}
                alt=""
              />
              <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                happy holiday guys!
              </div>
            </div>

            <div className="relative mt-5">
              <div className="absolute inset-y-0 left-0 flex items-center gap-3 text-orange-500">
                <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-plus"></i>
                </span>
                <i className="fa-solid fa-image text-2xl"></i>
                <i className="fa-solid fa-note-sticky text-2xl"></i>
                <i className="fa-solid fa-file text-2xl"></i>
              </div>
              <input
                type="text"
                className="block h-10 py-2 pl-4 pr-4 ml-36 w-[640px] text-gray-900 ring-1 rounded-2xl ring-inset ring-gray-300 placeholder:text-gray-400"
                placeholder="Aa"
              ></input>
              <div className="absolute inset-y-0 right-0 flex items-center text-orange-500">
                <i className="fa-solid fa-paper-plane text-xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 border-l-2 px-5">
          <div className="flex flex-col">
            <div className="font-semibold text-xl py-4">Buffet Lover group</div>
            <Image
              src="/sushi.jpg"
              className="object-cover rounded-xl"
              width={280}
              height={200}
              alt=""
            />
            <div className="font-semibold py-4">Created 22 Sep 2021</div>
            <div className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              perspiciatis!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
