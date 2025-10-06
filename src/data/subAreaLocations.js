// Sub area locations for B1 (Dalam Kota)
// Coordinates are estimated based on kecamatan centroid
// You can adjust coordinates manually for more precise locations

// Coordinate Status:
// - "needs_verification": Koordinat belum sesuai/butuh verifikasi
// - "set_by_dev": Koordinat sudah di-set oleh programmer
// - "verified": Koordinat sudah di-cek dan diverifikasi oleh supervisor

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
      coordinateStatus: "set_by_dev",
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
      coordinateStatus: "set_by_dev",
    },
    {
      name: "PASAR BOGOR BAWAH",
      type: "market",
      kecamatan: "bogor_tengah",
      // For markets/stores: single coordinate point
      coords: [-6.595, 106.7975],
      coordinateStatus: "needs_verification",
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
      coordinateStatus: "set_by_dev",
    },
    {
      name: "PASAR BOGOR ATAS",
      type: "market",
      kecamatan: "bogor_tengah",
      coords: [-6.5945, 106.7968],
      coordinateStatus: "needs_verification",
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
      coordinateStatus: "set_by_dev",
    },
    {
      name: "JL. PADASUKA",
      type: "street",
      kecamatan: "bogor_tengah",
      geojsonPath: "/data/geojson/subarea/jl padasuka.geojson",
      coordinateStatus: "set_by_dev",
    },
    {
      name: "PASAR CUNPOK",
      type: "market",
      kecamatan: "bogor_tengah",
      coords: [-6.6090808608443465, 106.80254570091829],
      coordinateStatus: "set_by_dev",
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
          [-6.607220, 106.799602],
          [-6.607428, 106.799843],
          [-6.607732, 106.800176],
          [-6.607993, 106.800540],
          [-6.608030, 106.800680],
          [-6.608014, 106.800900],
          [-6.607988, 106.801237]
        ],
      ],
      coordinateStatus: "set_by_dev",
    },
    {
      name: "JL.LAWANG SAKETENG",
      type: "street",
      kecamatan: "bogor_tengah",
      geojsonPath: "/data/geojson/subarea/jl lawang saketeng.geojson",
      coordinateStatus: "set_by_dev",
    },
    {
      name: "JL JUANDA",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.5965, 106.7975],
        [-6.5963, 106.7978],
        [-6.596, 106.798],
      ],
      coordinateStatus: "needs_verification",
    },
    {
      name: "RUKO MERDEKA",
      type: "store",
      kecamatan: "bogor_tengah",
      coords: [-6.5968, 106.7963],
      coordinateStatus: "needs_verification",
    },
    {
      name: "JL PERINTIS KEMERDEKAAN",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.598, 106.7965],
        [-6.5978, 106.7968],
        [-6.5975, 106.797],
      ],
      coordinateStatus: "needs_verification",
    },
    {
      name: "JL.MA SALMUN BAWAH",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.5955, 106.798],
        [-6.5953, 106.7983],
        [-6.595, 106.7985],
      ],
      coordinateStatus: "needs_verification",
    },
    {
      name: "RUKO SALMUN ATAS",
      type: "store",
      kecamatan: "bogor_tengah",
      coords: [-6.5953, 106.7978],
      coordinateStatus: "needs_verification",
    },
    {
      name: "JL DEWI SARTIKA",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.596, 106.7955],
        [-6.5958, 106.7958],
        [-6.5955, 106.796],
      ],
      coordinateStatus: "needs_verification",
    },
    {
      name: "PASAR ANYAR BLOK CD",
      type: "market",
      kecamatan: "bogor_tengah",
      coords: [-6.597, 106.796],
      coordinateStatus: "needs_verification",
    },
    {
      name: "JL SAWOJAJAR",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.5948, 106.797],
        [-6.5946, 106.7973],
        [-6.5943, 106.7975],
      ],
      coordinateStatus: "needs_verification",
    },

    // BOGOR UTARA - 1 location
    {
      name: "PASAR INDUK JAMBU 2",
      type: "market",
      kecamatan: "bogor_utara",
      coords: [-6.5692, 106.8149],
      coordinateStatus: "needs_verification",
    },

    // TANAH SEREAL - 4 locations
    {
      name: "KEBON PEDES",
      type: "store",
      kecamatan: "tanah_sereal",
      coords: [-6.548, 106.7863],
      coordinateStatus: "needs_verification",
    },
    {
      name: "PONDOK RUMPUT",
      type: "store",
      kecamatan: "tanah_sereal",
      coords: [-6.5475, 106.7868],
      coordinateStatus: "needs_verification",
    },
    {
      name: "JL. RAYA SEMPLAK",
      type: "street",
      kecamatan: "tanah_sereal",
      coords: [
        [-6.5485, 106.7855],
        [-6.5483, 106.7858],
        [-6.548, 106.786],
      ],
      coordinateStatus: "needs_verification",
    },
    {
      name: "CIMANGGU",
      type: "store",
      kecamatan: "tanah_sereal",
      coords: [-6.5485, 106.787],
      coordinateStatus: "needs_verification",
    },
  ],
};

// Helper function to get sub areas by kecamatan
export const getSubAreasByKecamatan = (kecamatan) => {
  return subAreaLocations.dalam_kota.filter(
    (location) => location.kecamatan === kecamatan
  );
};

// Helper function to get all sub areas for an area
export const getSubAreasByArea = (areaId) => {
  return subAreaLocations[areaId] || [];
};
