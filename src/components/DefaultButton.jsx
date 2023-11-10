import { motion } from "framer-motion"

const DefaultButton = ({ agree, danger, action, children, animate }) => (
  <motion.button whileTap={animate && { scale: 0.97 }} onClick={action} type="button" className={"inline-flex justify-center px-4 py-2 text-sm font-medium text-black transition-all duration-100 border border-transparent rounded-md w-36 hover:duration-200 focus:outline-none focus-visible:ring-0" + (agree ? " bg-primary hover:bg-secondary" : "") + (danger ? " bg-red-500 hover:bg-red-700" : "")}>
    {children}
  </motion.button>
)

export default DefaultButton