import express from 'express';
import rutas from './routes/routes.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3001;

// Configuración MEJORADA de CORS
const corsOptions = {
  origin: [
    'http://localhost:3000', // Desarrollo local
    'https://app-557d508f-f322-494d-92a9-265f0de10141.cleverapps.io' // Producción (sin barra al final)
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Añadido OPTIONS
  allowedHeaders: ['Content-Type', 'Authorization'],
  
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', rutas);

// Manejador de errores para CORS
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(403).json({ error: 'Acceso no autorizado por CORS' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
