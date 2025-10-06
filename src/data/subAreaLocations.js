// Sub area locations for B1 (Dalam Kota)
// Coordinates are estimated based on kecamatan centroid
// You can adjust coordinates manually for more precise locations

// Coordinate Status:
// - "needs_coordinates": Koordinat belum di-set sama sekali
// - "estimated": Koordinat sudah di-set programmer (masih tebakan/estimasi, butuh konfirmasi supervisor)
// - "verified": Koordinat sudah dikonfirmasi dan diverifikasi oleh supervisor

export const subAreaLocations = {
  dalam_kota: [
    // BOGOR TENGAH - 11 locations
    {
      name: "JLN RODA",
      type: "street",
      kecamatan: "bogor_tengah",
      // For streets: array of coordinate pairs for polyline
      coords: [
        [-6.602802950027568, 106.79989369519579],
        [-6.603770844975626, 106.80006511015092],
        [-6.60438922131256, 106.80024554694579],
        [-6.604505726912718, 106.80032674350348],
        [-6.604726, 106.800626],
        [-6.604966, 106.800932],
        [-6.605275, 106.80134],
        [-6.605488, 106.801673],
        [-6.605893, 106.802085],
        [-6.606602, 106.802574],
        [-6.607167, 106.803083],
        [-6.607849, 106.803598],
        [-6.608339, 106.803904],
        [-6.608888, 106.804269],
        [-6.609501, 106.804767],
      ],
      coordinateStatus: "estimated",
    },
    {
      name: "JL KLENTENG",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.603378, 106.800015],
        [-6.603346, 106.800203],
        [-6.603303, 106.800433],
        [-6.603229, 106.800852],
        [-6.603191, 106.801056],
        [-6.603165, 106.801222],
      ],
      coordinateStatus: "estimated",
    },
    {
      name: "PASAR BOGOR BAWAH",
      type: "market",
      kecamatan: "bogor_tengah",
      coords: [-6.604114135487258, 106.80041765656713],
      coordinateStatus: "estimated",
    },
    {
      name: "JL. OTISTA",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.601524, 106.804628],
        [-6.601524, 106.804628],
        [-6.601524, 106.804628],
        [-6.601593, 106.804392],
        [-6.601673, 106.804065],
        [-6.601774, 106.803711],
        [-6.601993, 106.803035],
        [-6.602217, 106.80237],
        [-6.602462, 106.801207],
        [-6.602622, 106.800016],
        [-6.602637, 106.799822],
        [-6.60308, 106.798894],
      ],
      coordinateStatus: "estimated",
    },
    {
      name: "PASAR BOGOR ATAS",
      type: "market",
      kecamatan: "bogor_tengah",
      coords: [-6.603000219739741, 106.80000709681437],
      coordinateStatus: "estimated",
    },
    {
      name: "JL SUKAMULYA",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.608852167567128, 106.80687723972021],
        [-6.609059, 106.807047],
        [-6.60924, 106.807122],
        [-6.609368, 106.807149],
        [-6.609485, 106.807273],
        [-6.609623, 106.807503],
        [-6.609767, 106.807734],
        [-6.609916, 106.808035],
        [-6.610167, 106.808463],
        [-6.610407, 106.808758],
        [-6.610615, 106.808925],
        [-6.61087, 106.809188],
        [-6.611435, 106.809552],
        [-6.611782, 106.80966],
        [-6.612192, 106.809757],
        [-6.612656, 106.809875],
        [-6.612938, 106.809848],
        [-6.61321, 106.809746],
        [-6.613364, 106.809687],
        [-6.613359, 106.809601],
        [-6.613322, 106.809547],
        [-6.613178, 106.809467],
        [-6.61297, 106.80937],
        [-6.612757, 106.80929],
        [-6.612666, 106.80922],
        [-6.612511, 106.809091],
        [-6.612384, 106.80892],
        [-6.612346, 106.808753],
        [-6.612373, 106.80848],
        [-6.61248, 106.808126],
        [-6.612581, 106.80782],
        [-6.612741, 106.807461],
      ],
      coordinateStatus: "estimated",
    },
    {
      name: "JL. PADASUKA",
      type: "street",
      kecamatan: "bogor_tengah",
      geojsonPath: "/data/geojson/subarea/jl padasuka.geojson",
      coordinateStatus: "estimated",
    },
    {
      name: "PASAR CUNPOK",
      type: "market",
      kecamatan: "bogor_tengah",
      coords: [-6.6090808608443465, 106.80254570091829],
      coordinateStatus: "estimated",
    },
    {
      name: "JL. PEDATI",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [
          [-6.604574613691224, 106.79761906673767],
          [-6.604513, 106.797724],
          [-6.604428, 106.797907],
          [-6.604332, 106.798121],
          [-6.604076, 106.798652],
          [-6.603868, 106.799113],
        ],
        [
          [-6.606858, 106.799033],
          [-6.606964, 106.799194],
          [-6.60722, 106.799602],
          [-6.607428, 106.799843],
          [-6.607732, 106.800176],
          [-6.607993, 106.80054],
          [-6.60803, 106.80068],
          [-6.608014, 106.8009],
          [-6.607988, 106.801237],
        ],
      ],
      coordinateStatus: "estimated",
    },
    {
      name: "JL.LAWANG SAKETENG",
      type: "street",
      kecamatan: "bogor_tengah",
      geojsonPath: "/data/geojson/subarea/jl lawang saketeng.geojson",
      coordinateStatus: "estimated",
    },
    {
      name: "JL JUANDA",
      type: "street",
      kecamatan: "bogor_tengah",
      geojsonPath: "/data/geojson/subarea/jl juanda.geojson",
      coordinateStatus: "estimated",
    },
    {
      name: "RUKO MERDEKA",
      type: "store",
      kecamatan: "bogor_tengah",
      coords: [-6.593130695058147, 106.78758484107303],
      coordinateStatus: "estimated",
    },
    {
      name: "JL PERINTIS KEMERDEKAAN",
      type: "street",
      kecamatan: "bogor_tengah",
      geojsonPath: "/data/geojson/subarea/jl perintis kemerdekaan.geojson",
      coordinateStatus: "estimated",
    },
    {
      name: "JL.MA SALMUN BAWAH",
      type: "street",
      kecamatan: "bogor_tengah",
      geojsonPath: "/data/geojson/subarea/jl ma salmun.geojson",
      coordinateStatus: "estimated",
    },
    {
      name: "RUKO SALMUN ATAS",
      type: "store",
      kecamatan: "bogor_tengah",
      coords: [-6.589876256581328, 106.79186415446772],
      coordinateStatus: "estimated",
    },
    {
      name: "JL DEWI SARTIKA",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.59613592780465, 106.79157092244593],
        [-6.595353, 106.791743],
        [-6.594399, 106.791952],
        [-6.593375, 106.792183],
        [-6.592501, 106.79236],
        [-6.591984, 106.792483],
        [-6.591968, 106.792639],
        [-6.591217, 106.792746],
        [-6.590727, 106.792639],
        [-6.589006, 106.792714],
        [-6.588323, 106.792725],
      ],
      coordinateStatus: "estimated",
    },
    {
      name: "PASAR ANYAR BLOK CD",
      type: "market",
      kecamatan: "bogor_tengah",
      coords: [-6.590926802485619, 106.79263150922434],
      coordinateStatus: "estimated",
    },
    {
      name: "JL SAWOJAJAR",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.5886489233693295, 106.79697572323988],
        [-6.588558, 106.79279],
        [-6.588516, 106.792119],
      ],
      coordinateStatus: "estimated",
    },

    // BOGOR UTARA - 1 location
    {
      name: "PASAR INDUK JAMBU 2",
      type: "market",
      kecamatan: "bogor_utara",
      coords: [-6.5702189662607005, 106.80733788907608],
      coordinateStatus: "estimated",
    },

    // TANAH SEREAL - 4 locations
    {
      name: "KEBON PEDES",
      type: "store",
      kecamatan: "tanah_sereal",
      coords: [-6.567947375694929, 106.79571286002924],
      coordinateStatus: "estimated",
    },
    {
      name: "PONDOK RUMPUT",
      type: "store",
      kecamatan: "tanah_sereal",
      coords: [-6.572131343433982, 106.79365453536026],
      coordinateStatus: "estimated",
    },
    {
      name: "JL. RAYA SEMPLAK",
      type: "street",
      kecamatan: "tanah_sereal",
      coords: [
        [-6.563890965888567, 106.7633449984955],
        [-6.561843, 106.763092],
        [-6.561396, 106.762995],
        [-6.560916, 106.762893],
        [-6.55969, 106.762571],
        [-6.558108, 106.762105],
        [-6.555171, 106.761584],
        [-6.553977, 106.761391],
        [-6.552938, 106.761209],
        [-6.551483, 106.760962],
        [-6.550726, 106.760844],
        [-6.549479, 106.760624],
        [-6.547928, 106.760367],
        [-6.546756, 106.760216],
        [-6.544294, 106.76034],
        [-6.528385, 106.761353],
        [-6.531226, 106.76115],
        [-6.525054, 106.761579],
        [-6.523722, 106.761659],
      ],
      coordinateStatus: "estimated",
    },
    {
      name: "CIMANGGU",
      type: "store",
      kecamatan: "tanah_sereal",
      coords: [-6.57073095723953, 106.78865760010426],
      coordinateStatus: "estimated",
    },
  ],

  jasinga: [
    // LEUWILIANG - 3 locations
    {
      name: "PASAR LEUWILIANG",
      type: "market",
      kecamatan: "leuwiliang",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "PASAR KAMBING LEUWILIANG",
      type: "market",
      kecamatan: "leuwiliang",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL. LINGKAR PASAR",
      type: "street",
      kecamatan: "leuwiliang",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL RAYA LEUWILIANG",
      type: "street",
      kecamatan: "leuwiliang",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // CIGUDEG - 2 locations
    {
      name: "PASAR CIGUDEG",
      type: "market",
      kecamatan: "cigudeg",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL RAYA CIGUDEG",
      type: "street",
      kecamatan: "cigudeg",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // CIBUNGBULANG - 1 location
    {
      name: "JL RAYA CIBUNGBULANG",
      type: "street",
      kecamatan: "cibungbulang",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // NANGGUNG - 3 locations
    {
      name: "PASAR NANGGUNG",
      type: "market",
      kecamatan: "nanggung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "CIBEBER",
      type: "store",
      kecamatan: "nanggung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "SADENG",
      type: "store",
      kecamatan: "nanggung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // JASINGA - 2 locations
    {
      name: "PASAR JASINGA",
      type: "market",
      kecamatan: "jasinga",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL RAYA JASINGA",
      type: "street",
      kecamatan: "jasinga",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // PAMIJAHAN - 2 locations
    {
      name: "PASAR PARABAKTI",
      type: "market",
      kecamatan: "pamijahan",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL. KH ABDUL HAMID",
      type: "street",
      kecamatan: "pamijahan",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
  ],

  cisarua: [
    // BOJONG GEDE - 4 locations
    {
      name: "PASAR BOJONG GEDE",
      type: "market",
      kecamatan: "bojong_gede",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL RAYA BOJONG GEDE",
      type: "street",
      kecamatan: "bojong_gede",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "CILEBUT",
      type: "store",
      kecamatan: "bojong_gede",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL RAYA BAMBU KUNING",
      type: "street",
      kecamatan: "bojong_gede",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // CISARUA - 4 locations
    {
      name: "KAYUMANIS",
      type: "store",
      kecamatan: "cisarua",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "PASAR CISARUA",
      type: "market",
      kecamatan: "cisarua",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "RUKO PAFESTA PSR CISARUA",
      type: "store",
      kecamatan: "cisarua",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "PASAR CIBEUREUM CISARUA",
      type: "market",
      kecamatan: "cisarua",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIAMPEA - 6 locations
    {
      name: "PASAR CIAMPEA BARU",
      type: "market",
      kecamatan: "ciampea",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "PASAR CIAMPEA LAMA",
      type: "market",
      kecamatan: "ciampea",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL RAYA CIAMPEA",
      type: "street",
      kecamatan: "ciampea",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL RY BANTAR KAMBING",
      type: "street",
      kecamatan: "ciampea",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL RAYA CIBANTENG",
      type: "street",
      kecamatan: "ciampea",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL.ABDUL FATAH",
      type: "street",
      kecamatan: "ciampea",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // TENJOLAYA - 1 location
    {
      name: "PASAR JUMAT TENJOLAYA",
      type: "market",
      kecamatan: "tenjolaya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // DRAMAGA - 1 location
    {
      name: "PASAR DRAMAGA",
      type: "market",
      kecamatan: "dramaga",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // BOGOR BARAT - 3 locations
    {
      name: "JL.RY GUNUNG BATU",
      type: "street",
      kecamatan: "bogor_barat",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL. RY CIFOR SBJ BOGOR",
      type: "street",
      kecamatan: "bogor_barat",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL. RAYA SINDANG BARANG",
      type: "street",
      kecamatan: "bogor_barat",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // RANCABUNGUR - 2 locations
    {
      name: "JL RAYA PABUARAN CITAYAM",
      type: "street",
      kecamatan: "rancabungur",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JLN.CAGAR ALAM",
      type: "street",
      kecamatan: "rancabungur",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // CIPAYUNG (DEPOK) - 1 location
    {
      name: "VITARA",
      type: "store",
      kecamatan: "cipayung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
  ],
};

// Helper function to get sub areas by kecamatan
export const getSubAreasByKecamatan = (kecamatan, areaId = null) => {
  if (areaId && subAreaLocations[areaId]) {
    return subAreaLocations[areaId].filter(
      (location) => location.kecamatan === kecamatan
    );
  }

  // Search across all areas if no areaId provided
  const allLocations = [];
  for (const area in subAreaLocations) {
    const filtered = subAreaLocations[area].filter(
      (location) => location.kecamatan === kecamatan
    );
    allLocations.push(...filtered);
  }
  return allLocations;
};

// Helper function to get all sub areas for an area
export const getSubAreasByArea = (areaId) => {
  return subAreaLocations[areaId] || [];
};
