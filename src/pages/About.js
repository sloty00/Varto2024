import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader'; // Importar el componente Loader
import { motion } from 'framer-motion';
import { Typography, Container, Box, Grid, Avatar } from '@mui/material';
import './About.css'; // Asegúrate de tener tu archivo CSS importado aquí si es necesario

const teamMembers = [
  { name: 'John Doe', role: 'CEO', img: 'path-to-image-1.jpg' },
  { name: 'Jane Smith', role: 'CTO', img: 'path-to-image-2.jpg' },
  // Agrega más miembros del equipo según sea necesario
];

const About = () => {
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
      <div className="flex-col about-container">
        {loading ? (
          <Loader /> // Mostrar el Loader mientras se carga
        ) : (
          <div className='flex-grow about-item'>
            <motion.div className="flex-grow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Typography variant="h3" align="center"> {/* Alineación centrada del título */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  Acerca de
                </motion.div>
              </Typography>
              <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', p: 4, borderRadius: 4, boxShadow: '0 2px 8px rgba(255, 255, 255, 0.3)' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                  <Typography variant="body1">
                    En VARTO, somos apasionados por la innovación y la excelencia en cada uno de nuestros proyectos. Con más de una década de experiencia en el campo de la ingeniería y el desarrollo tecnológico, nos especializamos en crear soluciones de vanguardia que impulsan el crecimiento y la eficiencia de nuestros clientes.

                    Nuestra historia comenzó con una visión clara: combinar la precisión de la ingeniería civil con las infinitas posibilidades del desarrollo de software. Hoy, VARTO se ha convertido en un referente en el sector, destacando por nuestra capacidad para integrar tecnologías avanzadas y ofrecer soluciones personalizadas que superan las expectativas.

                    En VARTO, valoramos la lealtad, la integridad y el compromiso con la calidad. Nuestro equipo está compuesto por profesionales altamente capacitados y dedicados, que trabajan en estrecha colaboración con nuestros clientes para entender sus necesidades y ofrecerles soluciones innovadoras y efectivas.
                  </Typography>
                </motion.div>
                <div style={{ lineHeight: '2.5' }}> &nbsp;</div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                  <Typography variant="h4" align="center" gutterBottom>
                      Metodologías Ágiles y Diseños Optimizados:
                  </Typography>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                   <Typography variant="body1">
                    Para agilizar nuestros procesos de desarrollo, implementamos arquitecturas y diseños ajustados que son fundamentales en la programación ágil:
                    <Box component="ul" sx={{ pl: 2, listStyleType: 'circle' }}>
                    <li><b>Builder:</b> Utilizamos el patrón de diseño Builder para separar la construcción de un objeto complejo de su representación, permitiendo una creación más flexible y eficiente de nuestros productos.</li>

                    <li><b>Repository:</b> Aplicamos el patrón de repositorio para gestionar la persistencia de datos de manera centralizada y facilitar la integración con nuestros servicios y bases de datos, mejorando la organización y la mantenibilidad de nuestro código.</li>

                    <li><b>MVC (Modelo-Vista-Controlador):</b> Adoptamos el patrón MVC para separar la lógica de negocio de la presentación y la interacción del usuario, promoviendo un desarrollo estructurado y modular que facilita la escalabilidad y la colaboración en equipo.</li>
                    </Box>
                    Estas metodologías y diseños no solo optimizan nuestros flujos de trabajo, sino que también aseguran que nuestros productos sean robustos, flexibles y adaptables a las necesidades cambiantes del mercado.
                  </Typography>
                </motion.div>
                <div style={{ lineHeight: '2.5' }}> &nbsp;</div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Nuestro Equipo
                  </Typography>
                  <Grid container spacing={4} justifyContent="center">
                    {teamMembers.map((member, index) => (
                      <Grid item key={index}>
                        <Box textAlign="center">
                          <Avatar
                            component={motion.div}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                            alt={member.name}
                            src={member.img}
                            sx={{ width: 100, height: 100, margin: '0 auto' }}
                          />
                          <Typography variant="h6" mt={2}>{member.name}</Typography>
                          <Typography variant="body2" color="textSecondary">{member.role}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Box>
            </motion.div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default About;