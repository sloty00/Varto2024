import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BrandsCarousel.css'; // Asegúrate de importar tu archivo CSS

const brands = [
  { src: '/images/NodejsLogo.png', title: 'Nodejs' },
  { src: '/images/react_logo_3.png', title: 'React' },
  { src: '/images/JWT.png', title: 'Java Web Token' },
  { src: '/images/AD.png', title: 'Microsoft AD' },
  { src: '/images/Primary_Horizontal_Lockup_Full_Color.png', title: 'Firebase' },
  { src: '/images/mysql_brand.png', title: 'Mysql' },
  { src: '/images/veeam4.png', title: 'Veeam' },
];

const BrandsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
  };

  return (
    <div className="brands-carousel-container"> {/* Aplica la clase aquí */}
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="brands-carousel-item"> {/* Aplica la clase aquí */}
            <img
              src={brand.src}
              alt={brand.title}
              style={{ width: '80%', height: '80%', objectFit: 'contain' }} // Ajusta el tamaño y ajuste de la imagen si es necesario
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandsCarousel;