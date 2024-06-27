import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import './Carousel.css'; // Asegúrate de importar tu archivo CSS

const carouselItems = [
  {
    title: 'Bienvenidos a VARTO',
    description: 'En VARTO, somos pioneros en la creación de soluciones tecnológicas y de ingeniería que transforman ideas innovadoras en realidades tangibles. Con más de una década de experiencia, combinamos precisión, creatividad y tecnología avanzada para ofrecer productos y servicios que superan las expectativas de nuestros clientes.',
    imageUrl: 'images/Banner2.jpg',
  },
  {
    title: 'Desarrollo Web',
    description: 'En VARTO nos especializamos en ofrecer soluciones de desarrollo web personalizadas y de alta calidad. Utilizamos tecnologías avanzadas para crear sitios web modernos, funcionales y atractivos que cumplen con las necesidades específicas de nuestros clientes. Desde aplicaciones web complejas hasta sitios corporativos intuitivos, nuestro enfoque está en la innovación y la excelencia para proporcionar experiencias digitales que impulsen el éxito de su negocio.',
    imageUrl: 'images/Banner7.jpeg',
  },
  {
    title: 'Desarrollo APP',
    description: 'En VARTO nos especializamos en el desarrollo de aplicaciones de escritorio y soluciones de workflow que optimizan procesos empresariales. Nuestras aplicaciones funcionales combinan diseño intuitivo con funcionalidades robustas, asegurando una experiencia de usuario eficiente y satisfactoria en entornos de computadoras. Además, nuestras soluciones de workflow APP están diseñadas para automatizar y mejorar la eficiencia operativa, adaptándose a las necesidades específicas de cada organización. En VARTO, estamos comprometidos con ofrecer soluciones tecnológicas innovadoras que impulsan el crecimiento y el éxito de nuestros cliente.',
    imageUrl: 'images/OIG4.jpg',
  },
  {
    title: 'Consultoría Técnica',
    description: 'En VARTO ofrecemos servicios especializados en consultoría técnica, orientados a optimizar la infraestructura y los procesos tecnológicos de las empresas. Nuestro equipo de expertos en tecnología trabaja estrechamente con nuestros clientes para identificar oportunidades de mejora, implementar soluciones eficientes y asegurar el máximo rendimiento de sus sistemas informáticos. Nos dedicamos a proporcionar asesoramiento estratégico y práctico que impulse la innovación y el crecimiento empresarial, adaptándonos siempre a las necesidades específicas de cada organización.',
    imageUrl: 'images/Banner10.jpeg',
  },
];

const CustomCarousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Ajusta la velocidad del autoplay según tus necesidades
    pauseOnHover: false, // Evita pausar el autoplay al pasar el mouse sobre el carrusel
    waitForAnimate: false, // Evita esperar la animación antes de cambiar de diapositiva
  beforeChange: function(currentSlide, nextSlide) {
    console.log("before change", currentSlide, nextSlide);
  },
  afterChange: function(currentSlide) {
    console.log("after change", currentSlide);
  }
};

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Slider {...settings}>
      {carouselItems.map((item, index) => (
        <div key={index} className="carousel-item">
          <motion.img
            src={item.imageUrl}
            alt={item.title}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, delay: 0.5 }}
            variants={textVariants}
            className="carousel-text"
          >
            <Typography variant="h3" component={motion.div} variants={textVariants} transition={{ duration: 1.5, delay: 1 }}>
              {item.title}
            </Typography>
            <Typography variant="body1" component={motion.div} variants={textVariants} transition={{ duration: 1.5, delay: 1.5 }}>
              {item.description}
            </Typography>
          </motion.div>
        </div>
      ))}
    </Slider>
  );
};

export default CustomCarousel;