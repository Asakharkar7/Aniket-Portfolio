import Lottie from "react-lottie-player";
import { motion } from "framer-motion";
import deskAnimation from "../assests/desk.json"; // 👈 your downloaded file

export default function AvatarAnimation() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Avatar at desk */}
      <Lottie
        loop
        animationData={deskAnimation}
        play
        style={{ width: 300, height: 300 }}
      />

      {/* Floating charts */}
      <motion.div
        className="absolute top-10 left-10 bg-blue-500 w-16 h-16 rounded-lg"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.div
        className="absolute top-20 right-10 bg-green-500 w-20 h-12 rounded-lg"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.div
        className="absolute bottom-10 left-1/2 bg-purple-500 w-12 h-12 rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </div>
  );
}
