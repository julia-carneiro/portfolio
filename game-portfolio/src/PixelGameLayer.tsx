import React from "react";
import { motion, useTransform } from "framer-motion";
import { MotionValue } from "framer-motion";

interface PixelGameLayerProps {
  scrollY: MotionValue<number>;
}

const PixelGameLayer: React.FC<PixelGameLayerProps> = ({ scrollY }) => {
  // Create layer translation variants based on scroll
  const layerVariants = {
    ground: useTransform(scrollY, [0, 500], [0, 50]),
    mountains: useTransform(scrollY, [0, 500], [0, 30]),
    clouds: useTransform(scrollY, [0, 500], [0, 20]),
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ground Layer - Pixel Art */}
      <motion.div
        style={{ translateY: layerVariants.ground }}
        className="absolute bottom-0 left-0 right-0 h-64 bg-repeat-x"
        initial={{ backgroundImage: "url(/pixel-ground.png)" }}
      />

      {/* Mountain Layer - Pixel Art */}
      <motion.div
        style={{ translateY: layerVariants.mountains }}
        className="absolute bottom-24 left-0 right-0 h-48 opacity-70 bg-repeat-x"
        initial={{ backgroundImage: "url(/pixel-mountains.png)" }}
      />

      {/* Cloud Layer - Pixel Art */}
      <motion.div
        style={{ translateY: layerVariants.clouds }}
        className="absolute top-0 left-0 right-0 h-64 opacity-50 bg-repeat-x"
        initial={{ backgroundImage: "url(/pixel-clouds.png)" }}
      />
    </div>
  );
};

export default PixelGameLayer;
