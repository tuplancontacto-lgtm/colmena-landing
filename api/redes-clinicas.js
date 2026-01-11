const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'tarifario', 'planes_clinicas_redes.json');
    const data = fs.readFileSync(filePath, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error('Error leyendo planes_clinicas_redes.json:', error);
    res.status(500).json({ error: 'Error al cargar redes de clínicas' });
  }
};
