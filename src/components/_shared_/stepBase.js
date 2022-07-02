import { motion } from 'framer-motion';

export default function StepBase({ children, isGoingBack }) {
  const initial = { x: isGoingBack ? -1000 : 1000 };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full max-w-screen-md px-6 sm:px-0 my-4"
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      initial={initial}
      animate={{ x: 0 }}
    >
      {children}
    </motion.div>
  );
}
