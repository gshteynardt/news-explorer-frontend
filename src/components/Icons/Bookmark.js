import React from "react"

export const Bookmark = ({classNameBtn, classNamePath}) => {
  return (
    <svg
      className={classNameBtn}
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={40} height={40} rx={8} fill="#fff" />
      <path
        className={classNamePath}
        d="M19.382 23.714L14 27.943V12h12v15.942l-5.382-4.228-.618-.486-.618.486z"
        strokeWidth={2}
      />
    </svg>
  )
};
