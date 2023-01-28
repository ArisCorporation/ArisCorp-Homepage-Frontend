import Link from "next/link"
const BasicPanel = ({ a, href, external, onClick, children, bgo, width, z, center, bottom, className, childClassName }) => {
  // border-[rgba(200,200,200,.9)]
  return a ? (
    <Link href={href}>
      <a target={external ? "_blank" : null} className={"decoration-transparent relative min-w-[50px] inline-block box-border p-[2px] border-2 border-solid transition-all duration-500 ease-out border-[rgba(0,255,232,0.9)] rounded-[10px] before:absolute before:right-[14px] before:left-[14px] before:h-[2px] before:bg-[#444] before:content-[''] before:top-[-2px] before:box-border after:bottom-[-2px] after:absolute after:right-[14px] after:left-[14px] after:h-[2px] after:bg-[#444] after:content-[''] after:box-border" + (width != null ? ' w-' + width : '') + (z != null ? ' z-' + z : '') + (center != null ? ' my-auto' : '') + (bottom != null ? ' mt-auto' : '') + (className != null ? ' ' + className : '')} >
        <div className={"bg-[rgba(39,43,48,." + (bgo != null ? bgo : 3) + ")] ease-out relative rounded-[6px] px-[14px] py-2 overflow-hidden text-center transition-all duration-500 " + childClassName}>
          {children}
        </div>
      </a>
    </Link>
  ) : (
    <div onClick={onClick ? onClick : null} className={"relative min-w-[50px] inline-block box-border p-[2px] border-2 border-solid transition-all duration-500 ease-out border-[rgba(0,255,232,0.9)] rounded-[10px] before:absolute before:right-[14px] before:left-[14px] before:h-[2px] before:bg-[#444] before:content-[''] before:top-[-2px] before:box-border after:bottom-[-2px] after:absolute after:right-[14px] after:left-[14px] after:h-[2px] after:bg-[#444] after:content-[''] after:box-border" + (width != null ? ' w-' + width : '') + (z != null ? ' z-' + z : '') + (center != null ? ' my-auto' : '') + (bottom != null ? ' mt-auto' : '') + (className != null ? ' ' + className : '')}>
      <div className={"bg-[rgba(39,43,48,." + (bgo != null ? bgo : 3) + ")] ease-out relative rounded-[6px] px-[14px] py-2 overflow-hidden text-center transition-all duration-500 " + childClassName}>
        {children}
      </div>
    </div>)
}


export default BasicPanel