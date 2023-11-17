Cypress.on('uncaught:exception', (err, runnable) => {
    // Personaliza cómo manejar las excepciones no capturadas
    console.error('Uncaught exception:', err.message);
  
    // Evita que la prueba falle automáticamente
    return false;
  });
  