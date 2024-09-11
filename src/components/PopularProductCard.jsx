import { star } from "../assets/icons";

import { motion } from "framer-motion";

const cardVariant = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <motion.div
    variants={cardVariant}
    initial={"hidden"}
    animate={"visible"}
    className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </motion.div>
  );
};

export default PopularProductCard;
