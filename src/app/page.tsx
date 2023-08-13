/* eslint-disable react/no-unescaped-entities */
import autoprefixer from "autoprefixer";
import Image from "next/image";
import About from "./about/page";

export default function Home() {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen">
        <div className="container mx-auto p-4">
          <div className="flex justify-center flex-col-reverse lg:flex-row-reverse">
            <div className="m-3 lg:ml-8 flex justify-center flex-col">
              <h1 className="text-5xl font-bold">Full Stack Developer👋🏻 </h1>
              <p className="py-6 text-white-400/25">
                Hai, I'm Fadly Sofyansyah. Passionate about creating web
                applications.
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}

              <div className="flex flex-row px-5 space-x-4 ">
                <a
                  href="https://www.linkedin.com/in/fadly-ian-396a43235/"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      clip-rule="evenodd"
                    />
                    <path d="M3 5.012H0V15h3V5.012Z" />
                  </svg>
                </a>

                <a href="https://github.com/fadlyian" target="_blank">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="m-3 flex">
              <Image
                src="/profile.jpg"
                alt="profile"
                width={300}
                height={300}
                className="max-w-sm rounded-lg shadow-2xl mx-auto lg:mx-0 self-center"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-stretch p-10 m-10 ">
            <h1 className="text-2xl font-semibold self-center">Tech Stack |</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-3">
              <div className="rounded-full flex justify-center bg-red-100 p-4">
                <div className="relative h-16 w-16">
                  <img src="/icon/html.png" alt="laravel" className="object-cover w-full h-auto" />
                </div>
              </div>
              <div className="rounded-full flex justify-center bg-red-100 p-4">
                <div className="relative h-16 w-16">
                  <img src="/icon/css.svg" alt="laravel" className="" />
                </div>
              </div>
              <div className="rounded-full flex justify-center bg-red-100 p-4">
                <div className="relative h-16 w-16">
                  <img src="/icon/js.svg" alt="laravel" className="" />
                </div>
              </div>
              <div className="rounded-full flex justify-center bg-red-100 p-4">
                <div className="relative h-16 w-16 flex justify-center">
                  <img src="/icon/php.svg" alt="laravel" className="" />
                </div>
              </div>
              <div className="rounded-full flex justify-center bg-red-100 p-4">
                <div className="relative h-16 w-16 flex justify-center">
                  <img src="/icon/tailwind.svg" alt="laravel" className="" />
                </div>
              </div>
              <div className="rounded-full flex justify-center bg-red-100 p-4">
                <div className="relative h-16 w-16">
                  <img src="/icon/react.svg" alt="laravel" className="" />
                </div>
              </div>
              <div className="rounded-full flex justify-center bg-red-100 p-4">
                <div className="relative h-16 w-16">
                  <img src="/icon/next.svg" alt="laravel" className="" />
                </div>
              </div>
              <div className="rounded-full flex justify-center bg-red-100 p-4">
                <div className="relative h-16 w-16">
                  <img src="/icon/laravel.svg" alt="laravel" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About/>
    </>
  );
}
