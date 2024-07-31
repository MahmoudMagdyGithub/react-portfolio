import { motion } from "framer-motion";

import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h1>

      <div className="text-center tracking-lighter">
        <a href="#" className="border-b text-purple-200">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;