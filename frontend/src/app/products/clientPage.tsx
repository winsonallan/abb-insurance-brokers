'use client';

import '../../../public/support/css/homepage.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { imagesURL } from '../../../public/support/js/webState';
import MainPoint from '@/components/mainPoint';
import { useEffect } from 'react';
import AOS from 'aos';

export default function ProductClient() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const sections = [
    {
      type: 'product',
      title: 'Asuransiku.id',
      description: `Asuransiku.id is a technology-driven insurance brokerage platform designed to make finding the right coverage effortless.
      Explore and compare trusted insurance options from reputable providers, curated to match your unique needs.
      Whether you’re looking to protect your vehicle, property, life, or travels, Asuransiku.id delivers transparency, competitive offers, and a seamless experience — helping you make smarter insurance decisions, anytime and anywhere.`,
      image: `${imagesURL}our-products/asuransiku-id.png`,
      links: [
        { text: 'Visit Asuransiku.id', href: 'https://www.asuransiku.id' },
        {
          text: 'Download the Asuransiku.id App (Android)',
          href: 'https://play.google.com/store/apps/details?id=id.asuransiku.app.abb',
        },
        {
          text: 'Download Asuransiku.id Pro (Android)',
          href: 'https://play.google.com/store/apps/details?id=id.asuransiku.pro',
        },
      ],
    },
    {
      type: 'service',
      title: 'Claims Management',
      description: `When an incident occurs, the true value of your insurance partner is revealed.
      ABB stands beside you from the first report of loss through to final settlement — ensuring clarity, efficiency, and peace of mind.`,
      image: `${imagesURL}our-services/claims-management.jpeg`,
      link: '/claims-management',
    },
    {
      type: 'service',
      title: 'Risk Management',
      description: `Effective risk management begins long before a policy is signed — it starts with understanding where your true exposures lie.
      We help businesses uncover hidden liabilities, clarify insurable risks, and make informed decisions.`,
      image: `${imagesURL}our-services/risk-management.jpeg`,
      link: '/risk-management',
    },
    {
      type: 'service',
      title: 'Insurance Management',
      description: `Insurance should do more than protect — it should empower.
      ABB approaches insurance management as a transparent, long-term partnership built on trust and measurable value.`,
      image: `${imagesURL}our-services/insurance-management.jpeg`,
      link: '/insurance-management',
    },
  ];

  return (
    <div className="pageContent w-full min-h-screen py-20 px-6 md:px-16 lg:px-24">
      <main className="content-wrap space-y-32">
        {/* PRODUCTS */}
        <MainPoint pointText="Our Products" />

        {sections
          .filter((sec) => sec.type === 'product')
          .map((product, idx) => (
            <motion.section
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              data-aos="fade-up"
              className="flex flex-col lg:flex-row items-center gap-12 p-8 md:p-10 rounded-3xl shadow-md bg-gradient-to-br from-white/60 to-white/40 border border-white/30 transition-all duration-300 hover:shadow-xl shadow-(color:--lightoceanblue)"
              style={{background: 'var(--superlightoceanblue)'}}
            >
              {/* TEXT */}
              <div className="flex-1 space-y-5">
                <h2 className="text-3xl font-bold text-[var(--mainblue)]">{product.title}</h2>
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
                <div className="space-y-3">
                  {product.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[var(--mainblue)] font-medium hover:text-[var(--oceanblue)] transition-colors"
                    >
                      &gt; {link.text}
                    </a>
                  ))}
                </div>
              </div>

              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex-1 flex justify-center"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}   // explicit width
                  height={400}  // explicit height
                  className="rounded-2xl border-[4px] border-[var(--mainblue)] p-2 bg-white"
                  loading="lazy"
                />
              </motion.div>
            </motion.section>
          ))}

        {/* SERVICES */}
        <MainPoint pointText="Our Services" />

        {sections
          .filter((sec) => sec.type === 'service')
          .map((service, idx) => (
            <motion.section
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              data-aos="fade-up"
              className={`flex flex-col ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-12 p-8 md:p-10 rounded-3xl shadow-md bg-gradient-to-br from-white/60 to-white/40 border border-white/30 transition-all duration-300 hover:shadow-xl shadow-(color:--lightoceanblue)`}
              style={{background: 'var(--superlightoceanblue)'}}

            >
              {/* TEXT */}
              <div className="flex-1 space-y-5">
                <h2 className="text-3xl font-bold text-[var(--mainblue)]">{service.title}</h2>
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
                <div>
                  <a
                    href={service.link}
                    className="inline-block mt-4 px-6 py-3 bg-white text-white rounded-full shadow-md hover:bg-[var(--oceanblue)] transition-all hover:shadow-lg shadow-(color:--lightoceanblue)"
                  >
                    Learn More &gt;
                  </a>
                </div>
              </div>

              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex-1 flex justify-center"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}   // explicit width
                  height={400}  // explicit height
                  className="rounded-2xl p-2 bg-white object-cover max-h-[400px]"
                  style={{aspectRatio: '4/3'}}
                  loading="lazy"
                />
              </motion.div>
            </motion.section>
          ))}
      </main>
    </div>
  );
}
