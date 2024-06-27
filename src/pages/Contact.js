import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader'; // Importar el componente Loader

function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Simular carga asíncrona
      setTimeout(() => {
          setLoading(false);
      }, 2000); // Simulación de tiempo de carga

      // Lógica adicional para cargar datos, etc.
  }, []);

  return (
    <div className="contact flex-col">
            {loading ? (
                <Loader /> // Mostrar el Loader mientras se carga
            ) : (
    <div className='flex-grow'>
      <h1>Contact Us</h1>
      <p>Contact information.</p>
    </div>
    )}
    </div>
  );
}

export default Contact;