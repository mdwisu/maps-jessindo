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
      type: "region",
      kecamatan: "tanah_sereal",
      coords: [-6.567947375694929, 106.79571286002924],
      coordinateStatus: "estimated",
    },
    {
      name: "PONDOK RUMPUT",
      type: "region",
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
      type: "region",
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
      coords: [-6.573583798063858, 106.63387757417885],
      coordinateStatus: "estimated",
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
      coords: [
        [-6.573789, 106.637975],
        [-6.574014, 106.637952],
        [-6.574181, 106.637979],
        [-6.574602, 106.63807],
        [-6.575156, 106.638107],
        [-6.575577, 106.63792],
        [-6.575923, 106.637619],
        [-6.575996, 106.637249],
        [-6.575497, 106.635643],
        [-6.575318, 106.634758],
        [-6.575263, 106.634191],

        [-6.570206, 106.624435],
      ],
      coordinateStatus: "estimated",
    },

    // CIGUDEG - 2 locations
    {
      name: "PASAR CIGUDEG",
      type: "market",
      kecamatan: "cigudeg",
      coords: [-6.549294656223307, 106.53483149925927],
      coordinateStatus: "estimated",
    },
    {
      name: "JL RAYA CIGUDEG",
      type: "street",
      kecamatan: "cigudeg",
      geojsonPath: "/data/geojson/subarea/jl raya cigudeg.geojson",
      coordinateStatus: "estimated",
    },

    // CIBUNGBULANG - 1 location
    {
      name: "JL RAYA CIBUNGBULANG",
      type: "street",
      kecamatan: "cibungbulang",
      coords: [
        [-6.559541211859181, 106.68888644447506],
        [-6.575705898360544, 106.64742381867836],
      ],
      coordinateStatus: "needs_coordinates",
    },

    // NANGGUNG - 3 locations
    {
      name: "PASAR NANGGUNG",
      type: "market",
      kecamatan: "nanggung",
      coords: [-6.604937087956129, 106.53980822778442],
      coordinateStatus: "estimated",
    },
    {
      name: "CIBEBER",
      type: "region",
      kecamatan: "nanggung",
      coords: [-6.625691736189321, 106.5413113641958],
      coordinateStatus: "estimated",
    },
    {
      name: "SADENG",
      type: "region",
      kecamatan: "nanggung",
      coords: [-6.556903553907012, 106.5836517923662],
      coordinateStatus: "estimated",
    },

    // JASINGA - 2 locations
    {
      name: "PASAR JASINGA",
      type: "market",
      kecamatan: "jasinga",
      coords: [-6.485537409757198, 106.48002853193545],
      coordinateStatus: "estimated",
    },
    {
      name: "JL RAYA JASINGA",
      type: "street",
      kecamatan: "jasinga",
      coords: [[-6.544816825950291, 106.52864213417354]],
      coordinateStatus: "needs_coordinates",
    },

    // PAMIJAHAN - 2 locations
    {
      name: "PASAR PARABAKTI",
      type: "market",
      kecamatan: "pamijahan",
      coords: [-6.686195201841699, 106.6484986276201],
      coordinateStatus: "estimated",
    },
    {
      name: "JL. KH ABDUL HAMID",
      type: "street",
      kecamatan: "pamijahan",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
  ],

  ciseeng: [
    // CISEENG - 1 location
    {
      name: "PS CISEENG",
      type: "market",
      kecamatan: "ciseeng",
      coords: [-6.449643393356176, 106.69896189937896],
      coordinateStatus: "estimated",
    },

    // LIMO - 6 locations
    {
      name: "KURIPAN",
      type: "region",
      kecamatan: "limo",
      coords: [-6.421350108551939, 106.66423792224393],
      coordinateStatus: "estimated",
    },
    {
      name: "KAREKEL",
      type: "store",
      kecamatan: "limo",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "MERUYUNG",
      type: "region",
      kecamatan: "limo",
      coords: [-6.377971872859941, 106.77112138762618],
      coordinateStatus: "estimated",
    },
    {
      name: "GROGOL",
      type: "region",
      kecamatan: "limo",
      coords: [-6.37598067646587, 106.78705953899257],
      coordinateStatus: "estimated",
    },
    {
      name: "KRUKUT",
      type: "region",
      kecamatan: "limo",
      coords: [-6.358164648131618, 106.78974637267498],
      coordinateStatus: "estimated",
    },
    {
      name: "LIMO",
      type: "region",
      kecamatan: "limo",
      coords: [-6.366998148117564, 106.78066912771006],
      coordinateStatus: "estimated",
    },

    // BEJI - 2 locations
    {
      name: "KEADILAN",
      type: "region",
      kecamatan: "pancoran mas",
      coords: [-6.4031013554958065, 106.78305333535802],
      coordinateStatus: "estimated",
    },
    {
      name: "BEJI",
      type: "region",
      kecamatan: "beji",
      coords: [-6.372246395590876, 106.81746587046892],
      coordinateStatus: "estimated",
    },

    // PARUNG - 1 location
    {
      name: "PS PARUNG",
      type: "market",
      kecamatan: "parung",
      coords: [-6.423207182348265, 106.73177571794558],
      coordinateStatus: "estimated",
    },

    // TAJUR HALANG - 1 location
    {
      name: "H. MAWI",
      type: "store",
      kecamatan: "tajur_halang",
      coords: [-6.431718112377794, 106.7138899414703],
      coordinateStatus: "estimated",
    },

    // BOJONGSARI - 2 locations
    {
      name: "BOJONGSARI",
      type: "region",
      kecamatan: "bojongsari",
      coords: [-6.400058815463938, 106.74074700786824],
      coordinateStatus: "estimated",
    },
    {
      name: "COGREK",
      type: "store",
      kecamatan: "parung",
      coords: [-6.421297373958523, 106.69142520561292],
      coordinateStatus: "estimated",
    },

    // SAWANGAN - 1 location
    {
      name: "PAMEGARSARI",
      type: "store",
      kecamatan: "sawangan",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // PANCARAN MAS - 1 location
    {
      name: "WARUJAYA",
      type: "store",
      kecamatan: "pancaran_mas",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // LIMO - 1 location
    {
      name: "BOJONG INDAH",
      type: "store",
      kecamatan: "limo",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SUKMA JAYA - 1 location
    {
      name: "JABON MEKAR",
      type: "region",
      kecamatan: "sukma_jaya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // BEJI - 2 locations
    {
      name: "TANAH BARU",
      type: "region",
      kecamatan: "beji",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "PONDOK CINA",
      type: "store",
      kecamatan: "beji",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // BEJI - 1 location
    {
      name: "KUKUSAN",
      type: "store",
      kecamatan: "beji",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // BEJI - 1 location
    {
      name: "PS KEMIRI",
      type: "market",
      kecamatan: "beji",
      coords: [-6.3894717664004546, 106.82262192095597],
      coordinateStatus: "estimated",
    },

    // PANCARAN MAS - 1 location
    {
      name: "PS CITAYEM",
      type: "market",
      kecamatan: "pancaran_mas",
      coords: [-6.450924741582781, 106.79966573840042],
      coordinateStatus: "estimated",
    },

    // PANCARAN MAS - 1 location
    {
      name: "KALI SUREN",
      type: "store",
      kecamatan: "pancaran_mas",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // PANCARAN MAS - 1 location
    {
      name: "JL CITAYEM",
      type: "street",
      kecamatan: "pancaran_mas",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // SAWANGAN - 1 location
    {
      name: "PONDOK TERONG",
      type: "store",
      kecamatan: "sawangan",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // PARUNG - 1 location
    {
      name: "NANGERANG",
      type: "store",
      kecamatan: "parung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // TAJUR HALANG - 1 location
    {
      name: "TONJONG",
      type: "store",
      kecamatan: "tajur_halang",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SUKMA JAYA - 1 location
    {
      name: "SUKMA JAYA",
      type: "store",
      kecamatan: "sukma_jaya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
  ],

  palsi: [
    // CURUG - 1 location
    {
      name: "CURUG",
      type: "region",
      kecamatan: "curug",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SUKMA JAYA - 1 location
    {
      name: "HARJA MUKTI",
      type: "region",
      kecamatan: "sukma_jaya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CILUPOD - 1 location
    {
      name: "MEKARSARI",
      type: "region",
      kecamatan: "cilupod",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIMANGGIS - 1 location
    {
      name: "TUGU",
      type: "region",
      kecamatan: "cimanggis",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIBINONG - 1 location
    {
      name: "PALSI GUNUNG",
      type: "region",
      kecamatan: "cibinong",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CISALAK - 1 location
    {
      name: "PS. CISALAK",
      type: "market",
      kecamatan: "cisalak",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SUKMA JAYA - 1 location
    {
      name: "SUKMA JAYA",
      type: "region",
      kecamatan: "sukma_jaya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIPAYUNG - 1 location
    {
      name: "KOJA",
      type: "store",
      kecamatan: "cipayung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SUKATANI - 1 location
    {
      name: "PS SUKATANI",
      type: "market",
      kecamatan: "sukatani",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIPAYUNG - 1 location
    {
      name: "BAKTI ABRI",
      type: "store",
      kecamatan: "cipayung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIPAYUNG - 1 location
    {
      name: "GAS ALAM",
      type: "store",
      kecamatan: "cipayung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIPAYUNG - 1 location
    {
      name: "PEKAPURAN",
      type: "store",
      kecamatan: "cipayung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIPAYUNG - 1 location
    {
      name: "BANJARAN PUCUNG",
      type: "store",
      kecamatan: "cipayung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIPAYUNG - 2 locations
    {
      name: "PASAR MUSI & MINI",
      type: "market",
      kecamatan: "cipayung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "PASAR AGUNG",
      type: "market",
      kecamatan: "cipayung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SUKMA JAYA - 1 location
    {
      name: "MEKAR JAYA",
      type: "store",
      kecamatan: "sukma_jaya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SUKMA JAYA - 1 location
    {
      name: "KEBAHAGIAN",
      type: "store",
      kecamatan: "sukma_jaya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SUKMA JAYA - 1 location
    {
      name: "ABADI JAYA",
      type: "store",
      kecamatan: "sukma_jaya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CILODONG - 2 locations
    {
      name: "CILODONG",
      type: "region",
      kecamatan: "cilodong",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "KALI MULYA",
      type: "region",
      kecamatan: "cilodong",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // BEJI - 1 location
    {
      name: "KALI BARU",
      type: "region",
      kecamatan: "beji",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // JATI MULYA - 1 location
    {
      name: "JATI MULYA",
      type: "region",
      kecamatan: "jati_mulya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SUKA MAJU - 1 location
    {
      name: "SUKA MAJU",
      type: "region",
      kecamatan: "suka_maju",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // PUCUNG - 1 location
    {
      name: "PS PUCUNG",
      type: "market",
      kecamatan: "pucung",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
  ],

  citereup: [
    // CITEREUP - 2 locations
    {
      name: "PS CITEREUP BAWAH (LAMA)",
      type: "market",
      kecamatan: "citereup",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "PS CITEREUP ATAS (BARU)",
      type: "market",
      kecamatan: "citereup",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // KARANG ASEM BARAT - 1 location
    {
      name: "KARANG ASEM BARAT",
      type: "region",
      kecamatan: "karang_asem_barat",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // TARI KOLOT - 1 location
    {
      name: "TARI KOLOT",
      type: "region",
      kecamatan: "tari_kolot",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SANJA - 1 location
    {
      name: "SANJA",
      type: "region",
      kecamatan: "sanja",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // PASIR MUKTI - 1 location
    {
      name: "PASIR MUKTI",
      type: "region",
      kecamatan: "pasir_mukti",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // BABAKAN MADANG - 1 location
    {
      name: "PASAR BABAKAN MADANG",
      type: "market",
      kecamatan: "babakan_madang",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIJAYANTI - 1 location
    {
      name: "CIJAYANTI",
      type: "region",
      kecamatan: "cijayanti",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // BOJONG KONENG - 1 location
    {
      name: "BOJONG KONENG",
      type: "region",
      kecamatan: "bojong_koneng",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // KARANG TENGAH - 1 location
    {
      name: "KARANG TENGAH",
      type: "region",
      kecamatan: "karang_tengah",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SENTUL - 1 location
    {
      name: "SENTUL",
      type: "region",
      kecamatan: "sentul",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIKEMA - 1 location
    {
      name: "PSR CIKEMA",
      type: "market",
      kecamatan: "cikema",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // PONDOK RAJEG - 1 location
    {
      name: "PONDOK RAJEG",
      type: "region",
      kecamatan: "pondok_rajeg",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIBINONG - 1 location
    {
      name: "TAPOS CIBINONG",
      type: "region",
      kecamatan: "cibinong",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIKARET - 1 location
    {
      name: "CIKARET",
      type: "region",
      kecamatan: "cikaret",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // PABUARAN - 1 location
    {
      name: "PABUARAN",
      type: "region",
      kecamatan: "pabuaran",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // NANGGEWER - 1 location
    {
      name: "NANGGEWER",
      type: "region",
      kecamatan: "nanggewer",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIBINONG - 1 location
    {
      name: "PSR CIBINONG",
      type: "market",
      kecamatan: "cibinong",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
  ],

  klapanunggal: [
    // NAMBO - 1 location
    {
      name: "NAMBO",
      type: "region",
      kecamatan: "nambo",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // BOJONG - 1 location
    {
      name: "BOJONG",
      type: "region",
      kecamatan: "bojong",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIKAHURIPAN - 1 location
    {
      name: "CIKAHURIPAN",
      type: "region",
      kecamatan: "cikahuripan",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // LULUT - 1 location
    {
      name: "LULUT",
      type: "region",
      kecamatan: "lulut",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // LEWIKARET - 1 location
    {
      name: "LEWIKARET",
      type: "region",
      kecamatan: "lewikaret",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // LIGARMUKTI - 1 location
    {
      name: "LIGARMUKTI",
      type: "region",
      kecamatan: "ligarmukti",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // JONGGOL - 2 locations
    {
      name: "JONGGOL",
      type: "region",
      kecamatan: "jonggol",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "SINAR GALIH",
      type: "region",
      kecamatan: "jonggol",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // BENDUNGAN - 1 location
    {
      name: "BENDUNGAN",
      type: "region",
      kecamatan: "bendungan",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIBODAS - 1 location
    {
      name: "CIBODAS",
      type: "region",
      kecamatan: "cibodas",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SUKAJAYA - 1 location
    {
      name: "SUKAJAYA",
      type: "region",
      kecamatan: "sukajaya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // SINGASARI - 1 location
    {
      name: "SINGASARI",
      type: "region",
      kecamatan: "singasari",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // DAYEH - 1 location
    {
      name: "DAYEH",
      type: "region",
      kecamatan: "dayeh",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CARIU - 2 locations
    {
      name: "PASAR CARIU",
      type: "market",
      kecamatan: "cariu",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "BABAKAN RADEN",
      type: "region",
      kecamatan: "cariu",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // KARYA MEKAR - 1 location
    {
      name: "KARYA MEKAR",
      type: "region",
      kecamatan: "karya_mekar",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // MEKAR WANGI - 1 location
    {
      name: "MEKAR WANGI",
      type: "region",
      kecamatan: "mekar_wangi",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CILENGSI - 2 locations
    {
      name: "PASAR CILENGSI",
      type: "market",
      kecamatan: "cilengsi",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "NAROGONG",
      type: "region",
      kecamatan: "cilengsi",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // GUNUNG PUTRI - 2 locations
    {
      name: "KENARI",
      type: "region",
      kecamatan: "gunung_putri",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "GANDOANG",
      type: "region",
      kecamatan: "gunung_putri",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // MEKARSARI - 1 location
    {
      name: "MEKARSARI",
      type: "region",
      kecamatan: "mekarsari",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // GRIYA BUKIT JAYA - 1 location
    {
      name: "GRIYA BUKIT JAYA",
      type: "region",
      kecamatan: "griya_bukit_jaya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // WANAHERANG - 1 location
    {
      name: "PASAR WANAHERANG",
      type: "market",
      kecamatan: "wanaherang",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // TLAJUNG UDIK - 1 location
    {
      name: "TLAJUNG UDIK",
      type: "region",
      kecamatan: "tlajung_udik",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CICADAS - 1 location
    {
      name: "CICADAS",
      type: "region",
      kecamatan: "cicadas",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // CIKEAS UDIK - 1 location
    {
      name: "CIKEAS UDIK",
      type: "region",
      kecamatan: "cikeas_udik",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // KRANGGAN - 1 location
    {
      name: "KRANGGAN",
      type: "region",
      kecamatan: "kranggan",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },

    // NAGRAK - 1 location
    {
      name: "NAGRAK",
      type: "region",
      kecamatan: "nagrak",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
  ],

  cisarua: [
    // BOJONG GEDE - 4 locations
    {
      name: "PASAR BOJONG GEDE",
      type: "market",
      kecamatan: "bojong_gede",
      coords: [-6.489535614077373, 106.79448528489633],
      coordinateStatus: "estimated",
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
      type: "region",
      kecamatan: "bojong_gede",
      coords: [-6.530169807759946, 106.79559132851234],
      coordinateStatus: "estimated",
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
      type: "region",
      kecamatan: "cisarua",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "PASAR CISARUA",
      type: "market",
      kecamatan: "cisarua",
      coords: [-6.680693838539969, 106.92956039022036],
      coordinateStatus: "estimated",
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
      coords: [-6.687812308534672, 106.94050463705204],
      coordinateStatus: "estimated",
    },

    // CIAMPEA - 6 locations
    {
      name: "PASAR CIAMPEA BARU",
      type: "market",
      kecamatan: "ciampea",
      coords: [-6.5507788132295985, 106.6933068519425],
      coordinateStatus: "estimated",
    },
    {
      name: "PASAR CIAMPEA LAMA",
      type: "market",
      kecamatan: "ciampea",
      coords: [-6.5398986237295, 106.69664628484054],
      coordinateStatus: "estimated",
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
      coords: [-6.619033832989359, 106.69492897487565],
      coordinateStatus: "estimated",
    },

    // DRAMAGA - 1 location
    {
      name: "PASAR DRAMAGA",
      type: "market",
      kecamatan: "dramaga",
      coords: [-6.57542938088173, 106.73998884634919],
      coordinateStatus: "estimated",
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

  cigombong: [
    // CIGOMBONG - 1 location
    {
      name: "PASAR CIGOMBONG PAMOYANAN",
      type: "market",
      kecamatan: "cigombong",
      coords: [-6.747811188924524, 106.79803096995775],
      coordinateStatus: "estimated",
    },

    // SUKARAJA - 2 locations
    {
      name: "CIHIDEUNG",
      type: "region",
      kecamatan: "Cijeruk",
      coords: [-6.6894929558991505, 106.79122230885717],
      coordinateStatus: "estimated",
    },
    {
      name: "JL.RY.PANGERAN ASOGIRI",
      type: "street",
      kecamatan: "sukaraja",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JLN RAYA TANAH BARU",
      type: "street",
      kecamatan: "sukaraja",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JLN.RAYA SUKABUMI",
      type: "street",
      kecamatan: "sukaraja",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // CIJERUK - 1 location
    {
      name: "PASAR CIBADAK CIJERUK",
      type: "market",
      kecamatan: "cijeruk",
      coords: [-6.707351672355963, 106.79590789482587],
      coordinateStatus: "estimated",
    },

    // CARINGIN - 1 location
    {
      name: "PASAR CARINGIN",
      type: "market",
      kecamatan: "caringin",
      coords: [-6.943279929207259, 107.58221830417871],
      coordinateStatus: "estimated",
    },

    // BOGOR SELATAN - 3 locations
    {
      name: "RANCAMAYA",
      type: "region",
      kecamatan: "bogor_selatan",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "CIPAKU",
      type: "region",
      kecamatan: "bogor_selatan",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL.MANDALA POMAD",
      type: "street",
      kecamatan: "bogor_selatan",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // BOGOR TIMUR - 2 locations
    {
      name: "JL VETERAN",
      type: "street",
      kecamatan: "bogor_timur",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "JL.RY.CIBEDUK-TAPOS",
      type: "street",
      kecamatan: "bogor_timur",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },

    // CIAWI - 3 locations
    {
      name: "WARUNG NANGKA CIAWI",
      type: "store",
      kecamatan: "ciawi",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "PASAR SUKASARI",
      type: "market",
      kecamatan: "ciawi",
      coords: [-6.61834079302604, 106.8127759875217],
      coordinateStatus: "estimated",
    },
    {
      name: "PASAR  CIAWI",
      type: "market",
      kecamatan: "ciawi",
      coords: [-6.656440009532861, 106.8471596793115],
      coordinateStatus: "estimated",
    },

    // BOGOR UTARA - 2 locations
    {
      name: "PASAR CILUAR",
      type: "market",
      kecamatan: "bogor_utara",
      coords: [-6.544538955663917, 106.82718978543961],
      coordinateStatus: "estimated",
    },
    {
      name: "RY.JAKARTA-BOGOR",
      type: "street",
      kecamatan: "bogor_utara",
      coords: [],
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
