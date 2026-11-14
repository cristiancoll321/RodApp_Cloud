// URL base del backend: localhost en desarrollo, Azure en produccion.
const API_HOST = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8080'
  : 'https://REEMPLAZAR-POR-TU-APP.azurewebsites.net';