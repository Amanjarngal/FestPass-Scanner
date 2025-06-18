import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HowToUseQRSection() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const steps = [
    {
      title: "Step 1: Visit the Fest Portal",
      description: "Go to our official Fest Website and navigate to the Registration section.",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", // website icon
    },
    {
      title: "Step 2: Fill Out Your Details",
      description: "Provide accurate information like your Name, College, Roll No, Email, and Event Type (Attendee, Participant, or Contributor).",
      image: "https://lh3.googleusercontent.com/proxy/kdZfa9aBIhfvViubEvmcAlI5vs5w9iLJARryhLayRG7WuX5WABaBmnoMjV7vbmI1yr75cZP69MhHeJ4u5H3B0VXs12kY_jbhs1sH9YlNeD7cd1Q", // form
    },
    {
      title: "Step 3: Receive Your QR Entry Pass",
      description: "After successful submission, you’ll receive a unique QR code containing your identity and access rights.",
      image: "https://www.hellotech.com/guide/wp-content/uploads/2020/05/HelloTech-qr-code-1024x1024.jpg",
    },
    {
      title: "Step 4: Save or Print Your QR",
      description: "Take a screenshot of QR Code or print it for a smooth entry experience at the gate.",
      image: "https://play-lh.googleusercontent.com/LJ5imEGeWpS0QYq-dDtSmlMcPohaAiZVXPffNrwC_iy1JgKJJxjnS2DhJ2L5q4pAuok=w480-h960-rw", // download/save
    },
    {
      title: "Step 5: Show QR to the Gate Guard",
      description: "At the entry gate, show your QR pass. The guard will scan it using our official scanner device or web scanner.",
      image: "https://stavecorp.com/wp-content/uploads/2021/03/1792-1.png", // scanning
    },
    {
      title: "Step 6: Access Granted!",
      description: "Once verified, you're officially inside the fest! Enjoy events, competitions, food stalls, and more!",
      image: "https://thumbs.dreamstime.com/b/access-granted-denied-stamp-stamps-set-44982540.jpg", // celebration
    },
  ];

  return (
    <section
    id="instructions"
      ref={ref}
      className="min-h-screen py-20 px-6 bg-black text-white flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 drop-shadow-[0_4px_30px_rgba(255,255,255,0.6)]"
      >
        How to <span className="text-cyan-300">Join the Fest</span>
      </motion.h2>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 max-w-4xl w-full">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.25 }}
            className="flex flex-col sm:flex-row items-center gap-6 bg-white/5 p-6 rounded-xl shadow-xl backdrop-blur-sm hover:scale-[1.03] transition"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-xl bg-white p-2 shadow-md"
            />
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 text-cyan-400 drop-shadow-sm">
                {step.title}
              </h3>
              <p className="text-base sm:text-lg text-white/80">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
