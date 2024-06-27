import React, { useState, useEffect } from 'react';
import CustomCarousel from '../components/Carousel';
import Loader from '../components/Loader'; // Importar el componente Loader

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simular carga asíncrona
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulación de tiempo de carga

        // Lógica adicional para cargar datos, etc.
    }, []);
    
  return (
    <div className="home">
            {loading ? (
                <Loader /> // Mostrar el Loader mientras se carga
            ) : (
    <div mt-0>
      <CustomCarousel />
    </div>
     )}
    </div>
  );
}

export default Home;