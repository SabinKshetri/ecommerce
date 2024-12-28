import { Link } from "react-router-dom";
import Card from "../../globals/components/Card/Card";
import Footer from "../../globals/components/footer/Footer";
import Navbar from "../../globals/components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <>
        {/* Hero Section: Centered with Simple Header */}
        <div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
          {/* Main Header */}
          <header
            id="page-header"
            className="relative flex flex-none items-center py-8"
          >
            <Navbar />
            {/* Main Header Content */}
            <div className="container mx-auto flex flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:px-8 xl:max-w-7xl">
              <div>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                >
                  <svg
                    className="hi-mini hi-cube-transparent inline-block size-5 text-blue-600 transition group-hover:scale-110 dark:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Company</span>
                </a>
              </div>
              <nav className="space-x-3 md:space-x-6">
                <Link
                  to="/login"
                  className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                >
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                >
                  <span>Register</span>
                </Link>
                <Link
                  to="/logout"
                  className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                >
                  <span>Logout</span>
                </Link>
              </nav>
            </div>
            {/* END Main Header Content */}
          </header>
          {/* END Main Header */}

          {/* Hero Content */}
          <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
            <div className="text-center">
              <div className="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
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
                When you buy from us, you’re not just purchasing a product,
                you’re supporting craftsmanship and passion.
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
          {/* END Hero Content */}
        </div>
        {/* END Hero Section: Centered with Simple Header */}
      </>
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
