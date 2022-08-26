import { NavLink } from "react-router-dom";

import Icon from "src/components/Icon";
import ThemeSwitcher from "src/components/ThemeSwitcher";

import packageJson from "../../../package.json";

const getActiveClassName = ({ isActive }) =>
  isActive
    ? "text-fuchsia-700 dark:text-fuchsia-500"
    : "text-neutral-800 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300";

const Header = () => (
  <div className="w-full flex justify-between">
    <div className="flex items-center justify-center select-none cursor-pointer flex-nowrap text-fuchsia-600 dark:text-fuchsia-500">
      <NavLink to="/" className="flex items-center">
        <Icon icon="package" className="w-8 h-8" />
        <span
          className="font-bold hidden sm:block after:content-[attr(data-version)] after:text-[10px] after:text-neutral-400 after:ml-1"
          data-version={packageJson.version}
        >
          SVGPS
        </span>
      </NavLink>
    </div>
    <nav className="flex items-center gap-3 font-bold text-sm">
      <NavLink to="/" className={getActiveClassName}>
        About
      </NavLink>
      <NavLink to="/icons" className={getActiveClassName}>
        Icons
      </NavLink>
      <a
        href="https://github.com/aykutkardas/svgps-online"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <Icon
          icon="github"
          className="w-6 h-6 text-neutral-800 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300"
        />
      </a>
      <ThemeSwitcher />
    </nav>
  </div>
);

export default Header;
