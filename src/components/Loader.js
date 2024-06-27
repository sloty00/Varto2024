import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css'; // Estilos del loader si es necesario

const Loader = () => (
    <div className="loader-container">
        <motion.div
            className="loader"
            animate={{
                rotate: 360,
                transition: {
                    duration: 1,
                    loop: Infinity,
                    ease: "linear"
                }
            }}
        />
    </div>
);

export default Loader;