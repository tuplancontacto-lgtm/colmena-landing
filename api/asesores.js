module.exports = function handler(req, res) {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  
  try {
    // Leer datos desde variable de entorno
    const ASESORES = JSON.parse(process.env.ASESORES_DATA || '{}');
    
    // Si piden un asesor específico: /api/asesores?id=karina_gonzalez
    if (req.query.id) {
      const asesor = ASESORES[req.query.id];
      if (!asesor) {
        return res.status(404).json({ error: 'Asesor no encontrado' });
      }
      return res.status(200).json(asesor);
    }
    
    // Devolver todos los asesores
    res.status(200).json(ASESORES);
    
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener asesores' });
  }
};
