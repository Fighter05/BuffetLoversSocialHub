import React from "react";
import Nav from "@/app/nav";
import Image from "next/image";

const profile = () => {
  return (
    <>
      <Nav />
      <div className="h-screen flex justify-center">
        <div className="w-3/4">
          <div className="relative rounded-b-2xl bg-gray-300 bg-[url('../app/img/Shabu.jpg')] bg-no-repeat bg-cover h-60">
            <Image
              src="/face.jpg"
              className="absolute -bottom-32 left-5 object-cover h-48 w-48 rounded-full"
              width={100}
              height={200}
              alt=""
            />
          </div>

          <div className="ml-60 mt-5 flex justify-between items-center">
            <div>
              <p className=" text-3xl font-bold">John Handsome</p>
              <div className="flex gap-2 mt-2">
                <p className="text-xl">Followers 999</p>
                <p className="text-xl">Followering 2</p>
              </div>
            </div>
            <div>
              <button className="text-lg p-3 border-2 ease-in-out duration-300 border-orange-500 hover:bg-orange-500 hover:text-white rounded-2xl">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4">
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
                  placeholder="Share what'on your mind, John"
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
            <p className="my-5 text-3xl font-bold">Posts</p>
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

              <div className="relative mb-12">
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
        </div>
      </div>
    </>
  );
};

export default profile;
