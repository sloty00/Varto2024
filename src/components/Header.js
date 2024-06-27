import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, MenuItem, ListItemText, Breadcrumbs, Typography, Container, Box } from '@mui/material';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Función para generar los elementos del breadcrumb dinámicamente
  const generateBreadcrumbItems = () => {
    const pathnames = location.pathname.split('/').filter((x) => x); // Obtener partes de la ruta
    return (
      <Breadcrumbs aria-label="breadcrumb" sx={{ py: 0.01 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="caption" color="white">Home</Typography>
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={routeTo} variant="caption" color="white">{name}</Typography>
          ) : (
            <Link key={routeTo} to={routeTo} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="caption" color="white">{name}</Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    );
  };

  return (
    <header className="bg-gray-800 text-white">
      {/* Navegación principal */}
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center">
          <div className="relative">
            <img
              src="/images/Logo Varto.jpg"
              alt="Logo"
              className="w-20 h-20 border-2 border-gray-800 shadow-lg"
              style={{ top: '1px', position: 'relative' }}
            />
          </div>
          <ul className="flex space-x-4">
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/" className="hover:underline">Inicio</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <motion.button
                aria-label="submenu"
                aria-controls="submenu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
                whileHover={{ scale: 1.1 }}
                className="hover:underline"
              >
                Nosotros
              </motion.button>
              <Menu
                id="submenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                getContentAnchorEl={null}
                component={motion.div}
                whileHover={{ scale: 1.1 }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/About">
                    <ListItemText primary="Acerca de" />
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/Mision">
                    <ListItemText primary="Misión y Visión" />
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/Policies">
                    <ListItemText primary="Politica de Privacidad" />
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/QualityPolicy">
                    <ListItemText primary="Politica de Calidad" />
                  </Link>
                </MenuItem>
              </Menu>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/Services" className="hover:underline">Servicios</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#contacto" className="hover:underline">Contacto</a>
            </motion.li>
          </ul>
        </nav>
      </div>
      {/* Breadcrumb animado */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)', // Fondo con transparencia blanca
              p: 0.2,
              borderRadius: 2,
              boxShadow: '0 2px 8px rgba(255, 255, 255, 0.1)', // Sombra más clara
            }}
          >
            {generateBreadcrumbItems()}
          </Box>
        </motion.div>
      </Container>
    </header>
  );
};

export default Header;