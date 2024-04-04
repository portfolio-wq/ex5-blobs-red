import React from "react";
import { useSpring, animated } from "react-spring";

function Bigblob2() {
  const blob1 =
    "M158.7 -157.7C208 -109.4 252 -54.7 244.8 -7.2C237.6 40.3 179.3 80.6 129.9 130.6C80.6 180.6 40.3 240.3 -4.1 244.4C-48.6 248.6 -97.1 197.1 -126.4 147.1C-155.8 97.1 -165.9 48.6 -159.3 6.6C-152.7 -35.4 -129.4 -70.7 -100 -119C-70.7 -167.4 -35.4 -228.7 9.7 -238.4C54.7 -248 109.4 -206 158.7 -157.7";
  const blob2 =
    "M139.6 -142.1C164.6 -114.6 157.3 -57.3 164 6.7C170.7 70.7 191.4 141.4 166.4 167.9C141.4 194.4 70.7 176.7 3.4 173.3C-63.9 169.9 -127.8 180.8 -171.6 154.3C-215.4 127.8 -239.2 63.9 -231 8.2C-222.7 -47.4 -182.4 -94.8 -138.6 -122.3C-94.8 -149.8 -47.4 -157.4 4.9 -162.3C57.3 -167.3 114.6 -169.6 139.6 -142.1";

  const blobAnimation = useSpring({
    from: { x: blob1 },
    to: { x: blob2 },
    config: {
      duration: 3000,
    },
    loop: { reverse: true },
  });
  return (
    <div className="bigblob-motion2 hidden lg:block">
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width={1900}
        height={1500}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(407.8302694033731 297.56887719695067)">
          <animated.path d={blobAnimation.x} fill="#ef4444" />
        </g>
      </svg>
    </div>
  );
}

export default Bigblob2;
