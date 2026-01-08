export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const ASESORES = JSON.parse(process.env.ASESORES_DATA || '{}');
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
