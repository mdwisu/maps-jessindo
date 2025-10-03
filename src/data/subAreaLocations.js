// Sub area locations for B1 (Dalam Kota)
// Coordinates are estimated based on kecamatan centroid
// You can adjust coordinates manually for more precise locations

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
    },
    {
      name: "JL KLENTENG",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.5965, 106.797],
        [-6.5963, 106.7973],
        [-6.596, 106.7975],
      ],
    },
    {
      name: "PASAR BOGOR BAWAH",
      type: "market",
      kecamatan: "bogor_tengah",
      // For markets/stores: single coordinate point
      coords: [-6.595, 106.7975],
    },
    {
      name: "JL. OTISTA",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.600892346283031, 106.80512711467146],
        [-6.601737, 106.805186],
        [-6.601337, 106.8048],
        [-6.601593, 106.804392],
        [-6.601673, 106.804065],
        [-6.601774, 106.803711],
        [-6.601993, 106.803035],
        [-6.602217, 106.80237],
        [-6.602462, 106.801207],
        [-6.602622, 106.800016],
        [-6.602637, 106.799822],
        [-6.603080, 106.798894]
      ],
    },
    {
      name: "PASAR BOGOR ATAS",
      type: "market",
      kecamatan: "bogor_tengah",
      coords: [-6.5945, 106.7968],
    },
    {
      name: "JL SUKAMULYA",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.597, 106.7965],
        [-6.5968, 106.7968],
        [-6.5965, 106.797],
      ],
    },
    {
      name: "JL. PADASUKA",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.5958, 106.7955],
        [-6.5956, 106.7958],
        [-6.5953, 106.796],
      ],
    },
    {
      name: "PASAR CUNPOK",
      type: "market",
      kecamatan: "bogor_tengah",
      coords: [-6.5963, 106.798],
    },
    {
      name: "JL. PEDATI",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.5975, 106.797],
        [-6.5973, 106.7973],
        [-6.597, 106.7975],
      ],
    },
    {
      name: "JL.LAWANG SAKETENG",
      type: "street",
      kecamatan: "bogor_tengah",
      coords: [
        [-6.595, 106.795],
        [-6.5948, 106.7953],
        [-6.5945, 106.7955],
      ],
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
    },
    {
      name: "RUKO MERDEKA",
      type: "store",
      kecamatan: "bogor_tengah",
      coords: [-6.5968, 106.7963],
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
    },
    {
      name: "RUKO SALMUN ATAS",
      type: "store",
      kecamatan: "bogor_tengah",
      coords: [-6.5953, 106.7978],
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
    },
    {
      name: "PASAR ANYAR BLOK CD",
      type: "market",
      kecamatan: "bogor_tengah",
      coords: [-6.597, 106.796],
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
    },

    // BOGOR UTARA - 1 location
    {
      name: "PASAR INDUK JAMBU 2",
      type: "market",
      kecamatan: "bogor_utara",
      coords: [-6.5692, 106.8149],
    },

    // TANAH SEREAL - 4 locations
    {
      name: "KEBON PEDES",
      type: "store",
      kecamatan: "tanah_sereal",
      coords: [-6.548, 106.7863],
    },
    {
      name: "PONDOK RUMPUT",
      type: "store",
      kecamatan: "tanah_sereal",
      coords: [-6.5475, 106.7868],
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
    },
    {
      name: "CIMANGGU",
      type: "store",
      kecamatan: "tanah_sereal",
      coords: [-6.5485, 106.787],
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
