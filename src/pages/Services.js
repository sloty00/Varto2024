import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader'; // Importar el componente Loader
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import './Services.css';

const Servicios = () => {
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
      <div className="flex-col services-container">
        {loading ? (
          <Loader /> // Mostrar el Loader mientras se carga
        ) : (
          <div className='flex-grow services-item'>
            <motion.div className="flex-grow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Typography variant="h3" align="center">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  Nuestros Servicios
                </motion.div>
              </Typography>
              <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', p: 4, borderRadius: 4, boxShadow: '0 2px 8px rgba(255, 255, 255, 0.3)' }}>
                <Grid container spacing={4} className="servicios-grid">
                  {/* Columna 1 */}
                  <Grid item xs={12} sm={6} md={4}>
                    <Box component={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                      <Typography variant="h4" align="center" gutterBottom>
                        Desarrollo Web
                      </Typography>
                      <Typography variant="body1" align="justify" paragraph>
                        Ofrecemos soluciones de desarrollo web personalizadas para satisfacer las necesidades específicas de tu negocio.
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, listStyleType: 'circle' }}>
                        <li>Diseño y desarrollo de sitios web responsivos</li>
                        <li>Optimización SEO</li>
                      </Box>
                    </Box>
                  </Grid>
                  {/* Columna 2 */}
                  <Grid item xs={12} sm={6} md={4}>
                    <Box component={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                      <Typography variant="h4" align="center" gutterBottom>
                        Desarrollo de Aplicaciones
                      </Typography>
                      <Typography variant="body1" align="justify" paragraph>
                        Desarrollamos aplicaciones empresariales robustas y escalables que optimizan tus procesos internos.
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, listStyleType: 'circle' }}>
                        <li>Desarrollo de aplicaciones web y móviles</li>
                        <li>Integración de sistemas</li>
                        <li>Automatización de flujos de trabajo</li>
                      </Box>
                    </Box>
                  </Grid>
                  {/* Columna 3 */}
                  <Grid item xs={12} md={4}>
                    <Box component={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                      <Typography variant="h4" align="center" gutterBottom>
                        Consultoría Técnica
                      </Typography>
                      <Typography variant="body1" align="justify" paragraph>
                        Proporcionamos consultoría técnica especializada para resolver problemas complejos y mejorar la eficiencia operativa.
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, listStyleType: 'circle' }}>
                        <li>Análisis de infraestructura</li>
                        <li>Optimización de rendimiento</li>
                        <li>Implementación de mejores prácticas</li>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Servicios;