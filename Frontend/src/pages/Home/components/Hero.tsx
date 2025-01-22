const Hero = () => {
  return (
    <div>
      <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="text-center">
          <div className="mb-2 inline-flex rounded border border-gray-200 bg-white px-2 py-1 text-sm font-medium leading-4 text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
            Quality is not an act, it is a habit.
          </div>
          <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
            Fast shopping{" "}
            <span className="text-blue-600 dark:text-blue-500">
              great quality, and exactly as described! I will definitely be
              ordering again!
            </span>
          </h1>
          <h2 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3 dark:text-gray-300">
            When you buy from us, you’re not just purchasing a product, you’re
            supporting craftsmanship and passion.
          </h2>
        </div>
        <div className="flex flex-col gap-2 pb-28 pt-10 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-7 py-3.5 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
          >
            <svg
              className="hi-mini hi-arrow-down-tray inline-block size-5 opacity-75"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            <span>Contact Now !</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
          >
            <span>Lets go</span>
          </a>
        </div>
        <div className="relative mx-5 lg:mx-32">
          <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-blue-200 lg:size-72 dark:border-blue-900" />
          <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-blue-100 lg:size-72 dark:border-blue-950" />
          <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-blue-200 lg:size-72 dark:border-blue-900" />
          <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-blue-100 lg:size-72 dark:border-blue-950" />
          <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-blue-100 lg:-m-8 dark:bg-gray-800" />
          <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-blue-800/75 shadow-inner lg:-m-8 dark:bg-blue-900/75" />
          <img
            src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-1280x800.jpg"
            className="relative mx-auto rounded-lg shadow-lg"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
