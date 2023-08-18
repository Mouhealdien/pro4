import Link from "next/link";
import React from "react";
import Input from "../../components/Input";

const index = () => {
  return (
    <section class="bg-white  ">
      <div class="flex justify-center min-h-screen">
        <div
          class="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')",
          }}
        ></div>

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div class="w-full">
            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
              Get your free account now.
            </h1>

            <p class="mt-4 text-gray-500 ">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form className=" grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label class="block mb-2 text-sm text-gray-600 ">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johnsnow@example.com"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 ">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <Link href="/networks">
                <button class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>log In </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </form>
            <div class=" py-6 text-sm font-medium text-gray-500 ">
              Not registered?{" "}
              <Link href="/sign-in" class="text-secondary hover:underline ">
                Create account
              </Link>
            </div>
    
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
