import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

import { motion } from "framer-motion";

const listItemVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.3, transition: { duration: 0.2 } },
};

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <motion.img
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <motion.ul
          variants={listItemVariants}
          initial={"hidden"}
          animate={"visible"}
          className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"
        >
          {navLinks.map((item) => (
            <motion.li 
              variants={listItemVariants}
              whileHover={"hover"}
            key={item.label}>
              
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
