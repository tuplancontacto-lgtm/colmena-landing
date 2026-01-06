export default function handler(req, res) {
  const data = {
  "zona": "CENTRO",
  "planes_rm": [
{
  "zona": "SUR",
  "planes_max": [
    {
      "nombre": "COLMENA MAX SUR 1126 (12468)",
      "pb_uf": 1.65,
      "pb_clp": 65544,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=70%, GS2=50%, GS3=40%, GS4=30%",
      "coberturas_grupos": {
        "GS1": 70,
        "GS2": 50,
        "GS3": 40,
        "GS4": 30
      },
      "consulta_preferente": "60% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "50% (0,46 UF)",
      "tope_consulta_le_uf": 0.46,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 2126 (12469)",
      "pb_uf": 1.68,
      "pb_clp": 66736,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=70%, GS2=50%, GS3=40%, GS4=30%",
      "coberturas_grupos": {
        "GS1": 70,
        "GS2": 50,
        "GS3": 40,
        "GS4": 30
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "60% (0,50 UF)",
      "tope_consulta_le_uf": 0.5,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 3126 (12470)",
      "pb_uf": 1.71,
      "pb_clp": 67928,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=70%, GS2=50%, GS3=40%, GS4=30%",
      "coberturas_grupos": {
        "GS1": 70,
        "GS2": 50,
        "GS3": 40,
        "GS4": 30
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "70% (0,53 UF)",
      "tope_consulta_le_uf": 0.53,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 4126 (12471)",
      "pb_uf": 1.73,
      "pb_clp": 68722,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=80%, GS2=60%, GS3=50%, GS4=30%",
      "coberturas_grupos": {
        "GS1": 80,
        "GS2": 60,
        "GS3": 50,
        "GS4": 30
      },
      "consulta_preferente": "60% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "50% (0,56 UF)",
      "tope_consulta_le_uf": 0.56,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 5126 (12472)",
      "pb_uf": 1.78,
      "pb_clp": 70708,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=80%, GS2=60%, GS3=50%, GS4=30%",
      "coberturas_grupos": {
        "GS1": 80,
        "GS2": 60,
        "GS3": 50,
        "GS4": 30
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "60% (0,60 UF)",
      "tope_consulta_le_uf": 0.6,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 6126 (12473)",
      "pb_uf": 1.83,
      "pb_clp": 72695,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=80%, GS2=60%, GS3=50%, GS4=30%",
      "coberturas_grupos": {
        "GS1": 80,
        "GS2": 60,
        "GS3": 50,
        "GS4": 30
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "70% (0,63 UF)",
      "tope_consulta_le_uf": 0.63,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 7126 (12474)",
      "pb_uf": 1.86,
      "pb_clp": 73886,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=90%, GS2=70%, GS3=60%, GS4=40%",
      "coberturas_grupos": {
        "GS1": 90,
        "GS2": 70,
        "GS3": 60,
        "GS4": 40
      },
      "consulta_preferente": "60% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "50% (0,66 UF)",
      "tope_consulta_le_uf": 0.66,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 8126 (12475)",
      "pb_uf": 1.94,
      "pb_clp": 77064,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=90%, GS2=70%, GS3=60%, GS4=40%",
      "coberturas_grupos": {
        "GS1": 90,
        "GS2": 70,
        "GS3": 60,
        "GS4": 40
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "60% (0,70 UF)",
      "tope_consulta_le_uf": 0.7,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 9126 (12476)",
      "pb_uf": 2.0,
      "pb_clp": 79448,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=90%, GS2=70%, GS3=60%, GS4=40%",
      "coberturas_grupos": {
        "GS1": 90,
        "GS2": 70,
        "GS3": 60,
        "GS4": 40
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "70% (0,73 UF)",
      "tope_consulta_le_uf": 0.73,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 10126 (12477)",
      "pb_uf": 2.03,
      "pb_clp": 80639,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=80%, GS3=70%, GS4=50%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 80,
        "GS3": 70,
        "GS4": 50
      },
      "consulta_preferente": "60% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "50% (0,76 UF)",
      "tope_consulta_le_uf": 0.76,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 11126 (12478)",
      "pb_uf": 2.1,
      "pb_clp": 83420,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=80%, GS3=70%, GS4=50%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 80,
        "GS3": 70,
        "GS4": 50
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "60% (0,80 UF)",
      "tope_consulta_le_uf": 0.8,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 12126 (12479)",
      "pb_uf": 2.25,
      "pb_clp": 89379,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=80%, GS3=70%, GS4=50%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 80,
        "GS3": 70,
        "GS4": 50
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "70% (0,83 UF)",
      "tope_consulta_le_uf": 0.83,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 13126 (12480)",
      "pb_uf": 2.3,
      "pb_clp": 91365,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=90%, GS3=80%, GS4=50%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 90,
        "GS3": 80,
        "GS4": 50
      },
      "consulta_preferente": "60% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "50% (0,86 UF)",
      "tope_consulta_le_uf": 0.86,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 14126 (12481)",
      "pb_uf": 2.5,
      "pb_clp": 99310,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=90%, GS3=80%, GS4=50%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 90,
        "GS3": 80,
        "GS4": 50
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "60% (0,90 UF)",
      "tope_consulta_le_uf": 0.9,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 15126 (12482)",
      "pb_uf": 2.75,
      "pb_clp": 109241,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=90%, GS3=80%, GS4=50%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 90,
        "GS3": 80,
        "GS4": 50
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "70% (0,93 UF)",
      "tope_consulta_le_uf": 0.93,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 16126 (12483)",
      "pb_uf": 3.0,
      "pb_clp": 119172,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=100%, GS3=90%, GS4=60%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 100,
        "GS3": 90,
        "GS4": 60
      },
      "consulta_preferente": "60% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "50% (0,96 UF)",
      "tope_consulta_le_uf": 0.96,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 19126 (12486)",
      "pb_uf": 3.05,
      "pb_clp": 121158,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=100%, GS3=100%, GS4=60%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 100,
        "GS3": 100,
        "GS4": 60
      },
      "consulta_preferente": "60% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "50% (1,00 UF)",
      "tope_consulta_le_uf": 1.0,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 17126 (12484)",
      "pb_uf": 3.15,
      "pb_clp": 125130,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=100%, GS3=90%, GS4=60%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 100,
        "GS3": 90,
        "GS4": 60
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "60% (1,00 UF)",
      "tope_consulta_le_uf": 1.0,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 20126 (12487)",
      "pb_uf": 3.2,
      "pb_clp": 127117,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=100%, GS3=100%, GS4=60%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 100,
        "GS3": 100,
        "GS4": 60
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "60% (1,00 UF)",
      "tope_consulta_le_uf": 1.0,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 18126 (12485)",
      "pb_uf": 3.25,
      "pb_clp": 129103,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=100%, GS3=90%, GS4=60%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 100,
        "GS3": 90,
        "GS4": 60
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "70% (1,00 UF)",
      "tope_consulta_le_uf": 1.0,
      "tope_anual_uf": 7500.0
    },
    {
      "nombre": "COLMENA MAX SUR 21126 (12488)",
      "pb_uf": 3.35,
      "pb_clp": 133075,
      "zona": "SUR",
      "tipo": "COLMENA MAX",
      "hospitalizacion": "GS1=100%, GS2=100%, GS3=100%, GS4=60%",
      "coberturas_grupos": {
        "GS1": 100,
        "GS2": 100,
        "GS3": 100,
        "GS4": 60
      },
      "consulta_preferente": "70% Centros Médicos RedSalud e Integramédica",
      "consulta_le": "70% (1,00 UF)",
      "tope_consulta_le_uf": 1.0,
      "tope_anual_uf": 7500.0
    }
  ],
  "total": 21,
  "uf_valor": 39724.12
  }
  ],
  "total": 228,
  "uf_valor": 39724.12
};
res.status(200).json(data);
}
