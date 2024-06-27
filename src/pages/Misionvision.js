import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader'; // Importar el componente Loader
import { Container, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import './Misionvision.css'; // Asegúrate de tener tu archivo CSS importado aquí si es necesario

const Mision = () => {
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
      <div className="flex-col mision-container">
        {loading ? (
          <Loader /> // Mostrar el Loader mientras se carga
        ) : (
          <div className="flex-grow mision-item">
            <motion.div className="flex-grow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Typography variant="h3" align="center">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  Misión
                </motion.div>
              </Typography>
              <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', p: 4, borderRadius: 4, boxShadow: '0 2px 8px rgba(255, 255, 255, 0.3)' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                  <Typography variant="body1">
                    Nuestra misión en VARTO es proporcionar soluciones tecnológicas integrales y de alta calidad que permitan a nuestros clientes optimizar sus operaciones y alcanzar sus objetivos estratégicos. Nos comprometemos a innovar continuamente y a utilizar nuestras habilidades y conocimientos para crear productos y servicios que generen un impacto positivo y duradero.
                  </Typography>
                </motion.div>
                <div style={{ lineHeight: '2.5' }}> &nbsp;</div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                  <Typography variant="h3" align="center" gutterBottom>
                    Visión
                  </Typography>
                  <Box mt={2}>
                    <Typography variant="body1" align="center" paragraph>
                      En VARTO, aspiramos a ser líderes globales en el desarrollo de soluciones tecnológicas y de ingeniería, reconocidos por nuestra capacidad para transformar ideas innovadoras en realidades tangibles. Nos esforzamos por crear un futuro donde la tecnología y la ingeniería trabajen en armonía para mejorar la calidad de vida y fomentar el desarrollo sostenible en todas las comunidades a las que servimos.
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Mision;