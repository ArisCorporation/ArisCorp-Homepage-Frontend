import Link from "next/link"
const BasicPanel = ({ a, href, external, onClick, children, className, disabled }) => {
  // border-[rgba(200,200,200,.9)]
  return a ? (
    <Link legacyBehavior href={href}>
      <a target={external ? "_blank" : null} className={"relative text-inherit decoration-transparent inline-block min-w-[50px] p-[2px] bg-transparent group border-2 border-primary rounded-[10px] transition-all hover:duration-200 duration-500 ease-out box-border before:absolute before:-top-[2px] before:right-[14px] before:left-[14px] before:h-[2px] before:bg-[#444] before:box-border after:absolute after:-bottom-[2px] after:right-[14px] after:left-[14px] after:h-[2px] after:bg-[#444] after:box-border " + className + (!disabled ? ' cursor-pointer' : '')}>
        <div className={"px-[14px] py-[6px] box-border overflow-hidden whitespace-nowrap text-center text-ellipsis rounded-[6px] transition-all hover:duration-200 duration-500 ease-out" + (!disabled && ' group-hover:bg-white/5 group-hover:text-primary')}>
          {children}
        </div>
      </a>
    </Link>
  ) : (
    <div onClick={onClick ? onClick : null} className={"relative text-inherit decoration-transparent inline-block min-w-[50px] p-[2px] bg-transparent group border-2 border-primary rounded-[10px] transition-all hover:duration-200 duration-500 ease-out box-border before:absolute before:-top-[2px] before:right-[14px] before:left-[14px] before:h-[2px] before:bg-[#444] before:box-border after:absolute after:-bottom-[2px] after:right-[14px] after:left-[14px] after:h-[2px] after:bg-[#444] after:box-border " + className + (!disabled ? ' cursor-pointer' : '')}>
      <div className={"px-[14px] py-[6px] box-border overflow-hidden whitespace-nowrap text-center text-ellipsis rounded-[6px] transition-all hover:duration-200 duration-500 ease-out" + (!disabled ? ' group-hover:bg-white/5 group-hover:text-primary' : '')}>
        {children}
      </div>
    </div>)
}


export default BasicPanel