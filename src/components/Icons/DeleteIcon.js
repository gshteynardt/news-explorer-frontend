import React from "react"

export const DeleteIcon = ({classNameBtn , classNamePath}) => {

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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 11h-6v2h-6v2h18v-2h-6v-2zm-10 6v11a2 2 0 002 2h10a2 2 0 002-2V17h-2v11H15V17h-2zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2z"
        fill="#B6BCBF"
      />
    </svg>
  )
};
