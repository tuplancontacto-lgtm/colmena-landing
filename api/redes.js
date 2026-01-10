module.exports = async function handler(req, res) {
  res.status(200).json({
    "COLMENA MAX": {
      "zonas": ["NORTE", "CENTRO", "SUR", "NACIONAL"],
      "grupos": ["G41","G42","G43","G44","G45","G46"]
    },
    "COLMENA MAX SUR": {
      "zonas": ["SUR"],
      "grupos": ["G41","G42","G43","G44"]
    },
    "COLMENA PLUS": {
      "zonas": ["CENTRO"],
      "grupos": ["G41","G42","G43","G44","G45","G46"]
    }
  });
}

