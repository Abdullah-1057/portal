import transitions from "@site/static/transitions.json";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";

export type OpenChatCardProps = {
  className?: string;
  title: React.ReactNode;
  body: React.ReactNode;
  links: React.ReactNode[];
  imageUrl: string;
};

const OpenChatCard: React.FC<OpenChatCardProps> = ({
  className,
  title,
  body,
  imageUrl,
  links,
}) => {
  return (
    <AnimateSpawn
      className={clsx("md:container-12 pt-30 md:pt-40", className)}
      el={motion.section}
      variants={transitions.container}
    >
      <div className="md:rounded-[32px] backdrop-blur-2xl bg-white-60 relative flex flex-col md:flex-row md:gap-10 lg:gap-0 px-6 md:px-0">
        <div className="max-w-sm mx-auto md:max-w-none md:mx-0 flex-1 md:self-center md:order-2 lg:self-start -mt-12 mb-12 lg:-mt-12">
          <motion.img
            src={imageUrl}
            alt=""
            className="w-full relative"
            variants={transitions.item}
            loading="lazy"
          />
        </div>
        <div className="flex-1 md:order-1 pb-20 md:py-30">
          <div className="md:ml-2/12">
            <motion.h2
              className=" text-transparent bg-clip-text gradient-text tw-heading-3 md:tw-heading-60 mb-6"
              variants={transitions.item}
            >
              {title}
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-8"
              variants={transitions.item}
            >
              {body}
            </motion.p>

            <div className="flex flex-col gap-3 items-start">
              {links.map((link, index) => (
                <React.Fragment key={index}>{link}</React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimateSpawn>
  );
};

export default OpenChatCard;
