'use client';
import Image from 'next/image';
import { imagesURL } from '../../public/support/js/webState';
import { motion } from 'framer-motion';

interface TeamPersonProps {
  groupData: {
    id?: string | number;
    name: string;
    position_en: string;
    description_en?: string;
    path_url: string;
  }[];
}

export default function TeamPerson({ groupData }: TeamPersonProps) {
  return (
    <div className="mt-16 grid sm:grid-cols-2 gap-6">
      {groupData.map((person, index) => {
        const isAnimated = index < 4; // Animate only the first 4 cards

        const CardContent = (
          <>
            {/* IMAGE */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
              <Image
                src={`${imagesURL}our-team/${person.path_url}`}
                alt={person.name}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300"
                priority={index < 2} // Preload the first 2 images
                loading={index >= 2 ? 'lazy' : 'eager'}
              />
            </div>

            {/* TEXT */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--darkblue)]">
                {person.name}
              </h3>
              <p className="text-[var(--mainblue)] text-sm sm:text-base mt-1">
                {person.position_en}
              </p>
              {person.description_en && (
                <p className="text-gray-500 italic mt-2 text-xs sm:text-sm leading-relaxed">
                  “{person.description_en}”
                </p>
              )}
            </div>
          </>
        );

        return isAnimated ? (
          <motion.div
            key={person.id || index}
            className="relative bg-white/60 border border-gray-100 rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {CardContent}
          </motion.div>
        ) : (
          <div
            key={person.id || index}
            className="relative bg-white/60 border border-gray-100 rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg"
          >
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}
