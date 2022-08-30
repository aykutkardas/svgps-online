import { useNavigate } from "react-router-dom";
import cx from "classnames";

import Button from "src/components/Button";
import Sample from "src/components/Sample";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="my-auto flex h-full max-w-full flex-col lg:flex-row">
      <div className="mr-auto flex grow items-center md:h-auto">
        <div className="flex w-full max-w-[600px] flex-col items-start justify-center">
          <h2 className="mb-3 bg-gradient-to-r from-purple-500 to-pink-700 bg-clip-text text-5xl font-bold text-transparent">
            No need for
            <span className="block">a bunch of files!</span>
          </h2>
          <p className="text-md mb-6 font-roboto text-neutral-600 dark:text-neutral-300 lg:text-lg">
            <span className="font-bold">SVGPS</span> removes the burden of
            working with a cluster of SVG files by converting your icons into{" "}
            <span className="text-black underline decoration-orange-500 underline-offset-2 dark:text-white">
              a single JSON file.
            </span>{" "}
            You can easily use this file in your{" "}
            <span className="text-black underline  decoration-emerald-500 underline-offset-2 dark:text-white">
              frontend
            </span>{" "}
            or{" "}
            <span className="text-black underline  decoration-sky-500 underline-offset-2 dark:text-white">
              mobile
            </span>{" "}
            projects.
          </p>
          <Button
            className="h-11 bg-purple-700 px-8 text-white ring-purple-600 hover:bg-purple-600"
            onClick={() => navigate("/app")}
          >
            Start Converting
          </Button>
        </div>
      </div>
      <div className="mx-0 mt-6 hidden grow sm:mx-2 sm:mt-0 md:h-auto lg:flex">
        <Sample className="ml-auto" />
      </div>
      <a
        href="https://www.buymeacoffee.com/aykutkardas"
        target="_blank"
        rel="noreferrer"
        className={cx(
          "absolute bottom-4 right-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-all duration-100 hover:bottom-5",
          "border-neutral-400 bg-neutral-100 shadow-lg hover:bg-neutral-200",
          "dark:border-neutral-600 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        🥤
      </a>
    </div>
  );
};

export default HomePage;
