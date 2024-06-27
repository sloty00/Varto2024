import React from 'react';

function Footer() {
  return (
    <footer id='contacto' className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contenido actual */}
        <div> 
          <h2 className="text-lg font-semibold">Contactanos</h2>
          <p>Puerto Montt, Chile</p>
          <p>Email: varto@cass.cl</p>
          <p>Phone: (123) 456-7890</p>
          <div style={{ lineHeight: '11.5' }}> &nbsp;</div>
          <div className="flex space-x-2 mt-4">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/varto-000000?logo=x&style=for-the-badge" alt="X.com" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Facebook-1877F2?logo=facebook&logoColor=white&style=for-the-badge" alt="Facebook" />
            </a>
            <a href="https://m.me" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Messenger-00B2FF?logo=messenger&logoColor=white&style=for-the-badge" alt="Messenger" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge" alt="GitHub" />
            </a>
          </div>
        </div>

        {/* Widget de Google Maps */}
        <div>
          <h2 className="text-lg font-semibold">Ubicación</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.9310242073437!2d-72.94400368423505!3d-41.47108792456327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961abdaf4b07d5e7%3A0xf94f5e1e3ff5235b!2sPuerto%20Montt%2C%20Los%20Lagos%20Region%2C%20Chile!5e0!3m2!1sen!2sus!4v1625506552455!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;