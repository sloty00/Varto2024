import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader'; // Importar el componente Loader
import { motion } from 'framer-motion';
import { Typography, Container, Box } from '@mui/material';
import './Quality.css'; // Asegúrate de tener tu archivo CSS importado aquí si es necesario

const QualityPolicy = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga asíncrona
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulación de tiempo de carga

    // Lógica adicional para cargar datos, etc.
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <div className="flex-col quality-container">
        {loading ? (
          <Loader />
        ) : (
          <div className='flex-grow quality-item'>
          <motion.div className="flex-grow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Typography variant="h3" align="center"> {/* Alineación centrada del título */}
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                Política de Calidad
              </motion.div>
            </Typography>
            <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', p: 4, borderRadius: 4, boxShadow: '0 2px 8px rgba(255, 255, 255, 0.3)' }}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                <Typography variant="body1">
                  En Varto, estamos comprometidos con la calidad en todo lo que hacemos. Nuestra política de calidad se fundamenta en los siguientes principios:
                </Typography>
              </motion.div>
              <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Typography variant="body1">
                    <strong>Compromiso con la Calidad:</strong> Nos esforzamos por ofrecer productos/servicios que cumplan con los más altos estándares de calidad.
                  </Typography>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Typography variant="body1">
                    <strong>Mejora Continua:</strong> Implementamos procesos de mejora continua para optimizar nuestras operaciones y satisfacer las necesidades cambiantes de nuestros clientes.
                  </Typography>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Typography variant="body1">
                    <strong>Normativas y Estándares:</strong> Cumplimos con todas las normativas y estándares relevantes para nuestra industria.
                  </Typography>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Typography variant="body1">
                    <strong>Enfoque al Cliente:</strong> Integrar las expectativas y necesidades de nuestros clientes en todas nuestras operaciones es fundamental para nuestro éxito.
                  </Typography>
                </motion.li>
              </motion.ul>
            </Box>
          </motion.div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default QualityPolicy;