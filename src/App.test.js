import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const emailInput = document.getElementById('exampleFormControlInput1');
  const consultaInput = document.getElementById('exampleFormControlTextarea1');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const consulta = consultaInput.value.trim();

    if (!email || !consulta) {
      alert('Por favor completa todos los campos.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Por favor ingresa un email válido.');
      return;
    }

    alert(`¡Formulario enviado!\nEmail: ${email}\nConsulta: ${consulta}`);

    form.reset();
  });

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});


 