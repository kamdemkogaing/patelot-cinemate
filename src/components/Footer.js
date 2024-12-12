import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2030{" "}
        <Link to="/" className="hover:underline">
          Cinemate
        </Link>
        . All Rights Reserved. Patrick Kamdem
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.facebook.com/patrick.kamdem"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6 "
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/patrick-kamdem-b88b3630b/"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCRnrUd84k1lNiKyzTy5Ck2g"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            Youtube
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kamdemkogaing"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};