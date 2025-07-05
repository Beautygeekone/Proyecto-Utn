import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <h2 style={{ margin: '0 0 1rem' }}>Ballerina Capuccina</h2>
      <p>Creando experiencias extraordinarias desde 1996</p>
      <p>Email: contacto@ballerinacapuccina.com  |  Celular: +54 (0291) 154097654</p>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>
        &copy; {new Date().getFullYear()} Ballerina Capuccina. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
