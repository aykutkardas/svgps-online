export default function Header() {
  return <header>
    <div className="flex justify-between h-16 w-full items-center">
      <a href="/" className="">
        <img className="object-contain" src="/logo.svg" alt="" />
      </a>

      <nav className="flex items-center space-x-5">
        <a href="https://github.com/aykutkardas/svgps-online" rel="noopener nofollow" target="_blank" className="flex items-center space-x-2 text-slate-800">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9283 2C7.03529 1.99937 2.86417 5.54799 2.08076 10.3779C1.29734 15.2079 4.13295 19.893 8.77536 21.439C9.27536 21.529 9.45436 21.222 9.45436 20.958C9.45436 20.721 9.44636 20.093 9.44336 19.258C6.66836 19.858 6.08236 17.92 6.08236 17.92C5.89967 17.317 5.50693 16.7993 4.97536 16.461C4.07536 15.842 5.04436 15.856 5.04436 15.856C5.68503 15.9438 6.24891 16.3235 6.57136 16.884C6.84429 17.3803 7.30411 17.747 7.84866 17.9026C8.39321 18.0583 8.97737 17.99 9.47136 17.713C9.51778 17.207 9.74289 16.7341 10.1063 16.379C7.89236 16.128 5.56436 15.272 5.56436 11.449C5.55207 10.4602 5.91925 9.5043 6.59036 8.778C6.28671 7.91731 6.32247 6.97325 6.69036 6.138C6.69036 6.138 7.52736 5.869 9.43236 7.159C11.0662 6.71101 12.7905 6.71101 14.4243 7.159C16.3303 5.868 17.1663 6.138 17.1663 6.138C17.5359 6.97286 17.5717 7.91757 17.2663 8.778C17.9399 9.50423 18.3068 10.4626 18.2903 11.453C18.2903 15.286 15.9603 16.128 13.7383 16.375C14.2176 16.8651 14.4635 17.5373 14.4133 18.221C14.4133 19.555 14.4013 20.631 14.4013 20.958C14.4013 21.225 14.5793 21.535 15.0883 21.437C19.7288 19.8884 22.5614 15.203 21.7763 10.3743C20.9913 5.54565 16.8204 1.99888 11.9283 2Z" fill="currentColor"/>
          </svg>
          <span>
            Github
          </span>
        </a>
        <a href="https://twitter.com/aykutkardas" rel="noopener nofollow" target="_blank" className="flex items-center space-x-2 text-slate-800">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39061 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z" fill="currentColor"/>
          </svg>
          <span>
            Twitter
          </span>
        </a>
      </nav>
    </div>
  </header>
}