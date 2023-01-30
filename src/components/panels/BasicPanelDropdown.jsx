import Link from "next/link"
const BasicPanel = ({ children }) => (
  <div className="right-0 left-auto block absolute top-full mt-[10px] z-50 min-w-[200px] p-[2px] border-2 border-primary rounded-[10px] cursor-pointer box-border before:absolute before:-top-[2px] before:right-[14px] before:left-[14px] before:h-[2px] before:bg-[#444] before:box-border after:absolute after:-bottom-[2px] after:right-[14px] after:left-[14px] after:h-[2px] after:bg-[#444] after:box-border">
    {children}
  </div>
)

export const BasicPanelDropdownItem = () => {
  <Link>
    <a className="mb-0 group bg-transparent border-none block w-full m-0 text-left relative min-w-[50px] p-[2px] rounded-[10px] cursor-pointer transition-all duration-500 box-border">
      <div className="group-hover:bg-black/60 group-hover:text-primary flex items-center justify-between text-left py-[6px] px-[14px] overflow-hidden whitespace-nowrap text-ellipsis rounded-[6px] transition-all duration-500 box-border">
        <div className="mr-[6px] w-1/4"></div>
        <span className="box-border flex-1">
        </span>
      </div>
    </a>
  </Link>
}

export default BasicPanel