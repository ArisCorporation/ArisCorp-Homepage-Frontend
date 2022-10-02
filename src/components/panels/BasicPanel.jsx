const BasicPanel = ({ children, bgo, width, z, center, bottom, className }) => (
  <div className={"relative box-border p-[2px] border-2 border-solid border-[#6f6f6f] rounded-3xl before:absolute before:right-20 before:left-20 before:h-[2px] before:bg-[#444] before:content-[''] before:top-[-2px] before:box-border after:bottom-[-2px] after:absolute after:right-20 after:left-20 after:h-[2px] after:bg-[#444] after:content-[''] after:box-border" + (width != null ? ' w-' + width : '') + (z != null ? ' z-' + z : '') + (center != null ? ' my-auto' : '') + (bottom != null ? ' mt-auto' : '') + (className != null ? ' ' + className : '')}>
    <div className={"bg-[rgba(39,43,48,." + (bgo != null ? bgo : 3) + ")] relative min-h-[40px] border-[3px] border-solid border-primary border-opacity-90 rounded-[20px] before:absolute before:right-10 before:left-10 before:h-1 before:bg-[#444] before:content-[''] before:top-[-3px] before:rounded-br-[1px] before:rounded-bl-[1px] before:box-border after:bottom-[-3px] after:rounded-br-[1px] after:rounded-bl-[1px] after:absolute after:left-10 after:right-10 after:h-1 after:bg-[#444] after:content-[''] after:box-border"}>
      <div className="rounded-2xl">
        {children}
      </div>
    </div>
  </div>
)

export default BasicPanel