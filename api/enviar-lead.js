module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }
  
  try {
    // Cargar asesores desde Railway
    const responseAsesores = await fetch('https://colmena-backend-v2-production.up.railway.app/api/asesores');
    if (!responseAsesores.ok) {
      throw new Error('Error al cargar asesores desde Railway');
    }
    const asesoresArray = await responseAsesores.json();
    
    // Convertir array a objeto usando url_slug como key
    const ASESORES = {};
    asesoresArray.forEach(asesor => {
      if (asesor.estado === 'activo') {
        ASESORES[asesor.url_slug] = {
          nombre: asesor.nombre,
          telefono: asesor.telefono,
          correo: asesor.email,
          whatsapp: asesor.telefono,
          callmebot_apikey: asesor.apikey || ''
        };
      }
    });
    
    const { asesor: asesorKey, mensaje } = req.body;
    const asesor = ASESORES[asesorKey];
    
    if (!asesor) {
      return res.status(400).json({ error: 'Asesor no encontrado' });
    }
    
    if (!asesor.callmebot_apikey || !asesor.whatsapp) {
      return res.status(400).json({ error: 'Asesor sin CallMeBot configurado' });
    }
    
    const url = `https://api.callmebot.com/whatsapp.php?phone=${asesor.whatsapp}&text=${encodeURIComponent(mensaje)}&apikey=${asesor.callmebot_apikey}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Error al enviar CallMeBot');
    }
    
    res.status(200).json({ ok: true });
    
  } catch (error) {
    console.error('Error enviar-lead:', error);
    res.status(500).json({ error: 'Error interno enviando WhatsApp' });
  }
}
