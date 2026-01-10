const fs = require("fs");
const path = require("path");

module.exports = function handler(req, res) {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "tarifario",
      "planes_redes_acceso.json"
    );

    const jsonData = fs.readFileSync(filePath, "utf8");
    res.status(200).json(JSON.parse(jsonData));
  } catch (error) {
    res.status(500).json({
      error: "No se pudo cargar el JSON",
      detalle: error.message
    });
  }
}

