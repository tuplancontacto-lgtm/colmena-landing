git mv api.json data.js
export default function handler(req, res) {
  res.status(200).json({ mensaje: 'API funcionando' });
}
