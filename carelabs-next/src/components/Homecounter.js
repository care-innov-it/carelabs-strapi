"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const animateValue = (end, duration, callback) => {
  let start = 0;
  let startTime = null;

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp;

    const progress = timestamp - startTime;
    const fraction = Math.min(progress / (duration * 1000), 1);

    const value = Math.floor(fraction * end);
    callback(value);

    if (fraction < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};


const HomeCounter = ({ end = "100+", duration = 2, color = "#000" }) => {

  // -----------------------------
  // CASE 1 — "24/7" type value
  // -----------------------------
  if (end.includes("/")) {
    const [left, right] = end.split("/");
    const leftNum = parseInt(left, 10);
    const rightNum = parseInt(right, 10);

    const [leftCount, setLeftCount] = useState(0);
    const [rightCount, setRightCount] = useState(0);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        animateValue(leftNum, duration, setLeftCount);
        animateValue(rightNum, duration, setRightCount);
      }
    }, [isInView, leftNum, rightNum, duration]);

    return (
      <span ref={ref} className="text-5xl font-bold" style={{ color }}>
        {leftCount}/{rightCount}
      </span>
    );
  }

  // ------------------------------------
  // CASE 2 — Normal values like "100+"
  // ------------------------------------
  const numericEnd = parseInt(end.replace(/\D/g, ""), 10);
  const suffix = end.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animateValue(numericEnd, duration, setCount);
    }
  }, [isInView, numericEnd, duration]);

  return (
    <span ref={ref} className="text-5xl font-bold" style={{ color }}>
      {count}{suffix}
    </span>
  );
};

export default HomeCounter;
