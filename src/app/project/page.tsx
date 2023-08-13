import Image from "next/image";

export default function Project() {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-white-600">Projects</h1>
        <p></p>
        <div className="flex justify-center flex-col lg:flex-row bg-gray-900 rounded-xl p-4">
          <div className="m-3 flex">
            <Image
              src="/images/miglefood.png"
              alt="profile"
              width={300}
              height={300}
              className="max-w-sm rounded-lg shadow-2xl mx-auto lg:mx-0 self-center"
            />
          </div>
          <div className="m-3 lg:ml-8 flex justify-center flex-col">
            <h1 className="text-5xl font-bold">Migle Food </h1>
            <p className="py-6 text-white-400/25">
              MigleFood is an innovative Food and Beverage (FnB) <br />
              system that aims to streamline and expedite the food <br />
              ordering process for customers through a user-friendly
              <br />
              website
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}

            <div className="flex flex-row px-5 space-x-4 ">
              <a
                href="https://miglefood.my.id/"
                target="_blank"
                className="flex flex-row gap-4 bg-blue-400 rounded-full p-3"
              >
                Link
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 19 19"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/fadlyian/miglefood"
                target="_blank"
                className="flex flex-row gap-4 bg-black rounded-full p-3"
              >
                <p>Code </p>
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
        </div>
      </div>
    </section>
  );
}
