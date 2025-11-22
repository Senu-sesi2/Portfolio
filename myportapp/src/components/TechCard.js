import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TechCardStyles.css";

// images in src/assets
import techImg from "../assets/TechStack.png";
import skillsImg from "../assets/skills.png";

const images = [techImg, skillsImg];

const spring = { type: "spring", stiffness: 300, damping: 30 };

const TechCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0); // which image
  const [dir, setDir] = useState(0); // direction for slide animation
  const [scale, setScale] = useState(1);
  const imgRef = useRef(null);

  // PINCH helpers
  const pinchState = useRef({ initialDistance: 0, initialScale: 1 });

  const openModal = (i) => {
    setIndex(i);
    setDir(0);
    setScale(1);
    setIsOpen(true);
    // reset transform positions (framer-motion drag keeps pos so clear)
    if (imgRef.current) {
      imgRef.current.style.left = "";
      imgRef.current.style.top = "";
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setScale(1);
    // tiny delay clear positions is not necessary
  };

  const showNext = (newDir = 1) => {
    setDir(newDir);
    setIndex((prev) => (prev + 1) % images.length);
    setScale(1);
  };

  const showPrev = () => {
    setDir(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setScale(1);
  };

  // wheel zoom (Ctrl+wheel common, but we accept wheel)
  const handleWheel = (e) => {
    if (!isOpen) return;
    e.preventDefault();
    const delta = -e.deltaY;
    setScale((s) => {
      let next = s + delta * 0.0015;
      next = Math.max(0.6, Math.min(3, next));
      return Number(next.toFixed(3));
    });
  };

  // touch pinch handlers (basic)
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const t0 = e.touches[0];
      const t1 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
      pinchState.current.initialDistance = dist;
      pinchState.current.initialScale = scale;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      const t0 = e.touches[0];
      const t1 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
      const ratio = dist / (pinchState.current.initialDistance || dist);
      let next = (pinchState.current.initialScale || 1) * ratio;
      next = Math.max(0.6, Math.min(4, next));
      setScale(Number(next.toFixed(3)));
    }
  };

  const handleTouchEnd = (e) => {
    // keep current scale
    pinchState.current.initialDistance = 0;
    pinchState.current.initialScale = scale;
  };

  // stop overlay from closing when clicking image / controls
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="tech">
      <div className="card-container">
        <div className="card">
          <h3>- Tech Stack -</h3>
          <span className="bar" />
          <p className="tsc">TFT</p>
          <p>- Technologies -</p>
          <p>- Frameworks -</p>
          <p>- Tools -</p>
          <button className="btn" onClick={() => openModal(0)}>
            LEARN MORE
          </button>
        </div>

        <div className="card">
          <h3>- Skills -</h3>
          <span className="bar" />
          <p className="tsc">TSE</p>
          <p>- Technical Skills -</p>
          <p>- Soft Skills -</p>
          <p>- Experience -</p>
          <button className="btn" onClick={() => openModal(1)}>
            LEARN MORE
          </button>
        </div>

        <div className="card">
          <h3>- Certifications -</h3>
          <span className="bar" />
          <p className="tsc">AGU</p>
          <p>- ALX -</p>
          <p>- Google -</p>
          <p>- Udemy -</p>
          <a
            href="https://drive.google.com/drive/folders/1Y3yT3C3CAeRIIQG0wY83wtCqnkEiAa6y?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Modal with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            transition={{ duration: 0.2 }}
          >
            <div className="modal-inner" onClick={stopPropagation}>
              <button
                className="modal-close"
                aria-label="Close"
                onClick={closeModal}
              >
                ✕
              </button>

              <button className="modal-arrow left" onClick={showPrev} aria-label="Previous">
                ‹
              </button>
              <button className="modal-arrow right" onClick={() => showNext(1)} aria-label="Next">
                ›
              </button>

              {/* Sliding image */}
              <div className="modal-stage">
                <AnimatePresence initial={false} custom={dir}>
                  <motion.img
                    key={index}
                    src={images[index]}
                    ref={imgRef}
                    className="modal-image"
                    // animation for slide in/out
                    custom={dir}
                    initial={{ x: dir >= 0 ? 300 : -300, opacity: 0, scale: 0.9 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      scale: scale,
                      transition: { ...spring }
                    }}
                    exit={{ x: dir >= 0 ? -300 : 300, opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.2}
                    onDragStart={() => {
                      if (imgRef.current) imgRef.current.style.cursor = "grabbing";
                    }}
                    onDragEnd={() => {
                      if (imgRef.current) imgRef.current.style.cursor = "grab";
                    }}
                    onDoubleClick={() => {
                      // reset scale to 1 or zoom 2
                      setScale((s) => (s > 1 ? 1 : 2));
                    }}
                    onPointerDown={(e) => {
                      // make sure grabbing cursor shows immediately for pointer devices
                      if (imgRef.current) imgRef.current.style.cursor = "grabbing";
                    }}
                    onPointerUp={() => {
                      if (imgRef.current) imgRef.current.style.cursor = "grab";
                    }}
                    draggable={false}
                    onClick={(e) => e.stopPropagation()}
                    // style transform scale will be controlled by framer animate scale
                    style={{ touchAction: "none", userSelect: "none" }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechCard;
