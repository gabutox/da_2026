import express from 'express';
import './dependencies.js'; // Inicializa el contenedor de dependencias
import mainRouter from './api/router.js'; // Importa el enrutador central

const app = express();
app.use(express.json());

console.log('Configurando rutas de usuario');

// Le decimos a Express que todas las rutas del mainRouter empiecen con /api
app.use('/api', mainRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});