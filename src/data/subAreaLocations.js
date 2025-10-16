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
      coords: [
        [-6.643744, 106.652066],
        [-6.643536, 106.652109],
        [-6.643312, 106.652061],
        [-6.642987, 106.652163],
        [-6.642604, 106.652233],
        [-6.642081, 106.652243],
        [-6.641814, 106.652238],
        [-6.641628, 106.652281],
        [-6.641505, 106.652335],
        [-6.641415, 106.652598],
      ],
      coordinateStatus: "needs_coordinates",
    },
  ],

  ciseeng: [
    // CISEENG - 3 locations
    {
      name: "PS CISEENG",
      type: "market",
      kecamatan: "ciseeng",
      coords: [-6.449643393356176, 106.69896189937896],
      coordinateStatus: "estimated",
    },
    {
      name: "KURIPAN",
      type: "region",
      kecamatan: "ciseeng",
      coords: [-6.421350108551939, 106.66423792224393],
      coordinateStatus: "estimated",
    },
    {
      name: "KAREKEL",
      type: "region",
      kecamatan: "ciseeng",
      coords: [-6.490219, 106.679219],
      coordinateStatus: "estimated",
    },

    // LIMO - 4 locations
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

    // PANCORAN MAS - 1 location
    {
      name: "KEADILAN",
      type: "region",
      kecamatan: "pancoran_mas",
      coords: [-6.4031013554958065, 106.78305333535802],
      coordinateStatus: "estimated",
    },

    // PARUNG - 9 locations
    {
      name: "PS PARUNG",
      type: "market",
      kecamatan: "parung",
      coords: [-6.423207182348265, 106.73177571794558],
      coordinateStatus: "estimated",
    },
    {
      name: "H. MAWI",
      type: "store",
      kecamatan: "parung",
      coords: [-6.431718112377794, 106.7138899414703],
      coordinateStatus: "estimated",
    },
    {
      name: "BOJONGSARI",
      type: "region",
      kecamatan: "parung",
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
    {
      name: "PAMEGARSARI",
      type: "region",
      kecamatan: "parung",
      coords: [-6.440291697569557, 106.72800207738882],
      coordinateStatus: "estimated",
    },
    {
      name: "WARUJAYA",
      type: "region",
      kecamatan: "parung",
      coords: [-6.4251803560894, 106.71009335212193],
      coordinateStatus: "estimated",
    },
    {
      name: "BOJONG INDAH",
      type: "region",
      kecamatan: "parung",
      coords: [-6.434420169610219, 106.70137902708596],
      coordinateStatus: "estimated",
    },
    {
      name: "JABON MEKAR",
      type: "region",
      kecamatan: "parung",
      coords: [-6.456129450579288, 106.72732371843394],
      coordinateStatus: "estimated",
    },

    // BEJI - 5 locations
    {
      name: "TANAH BARU",
      type: "region",
      kecamatan: "beji",
      coords: [-6.373403477051212, 106.80291770239826],
      coordinateStatus: "estimated",
    },
    {
      name: "PONDOK CINA",
      type: "region",
      kecamatan: "beji",
      coords: [-6.364955954536124, 106.83197668813405],
      coordinateStatus: "estimated",
    },
    {
      name: "KUKUSAN",
      type: "region",
      kecamatan: "beji",
      coords: [-6.363621557658004, 106.818508041987],
      coordinateStatus: "estimated",
    },
    {
      name: "BEJI",
      type: "region",
      kecamatan: "beji",
      coords: [-6.372246395590876, 106.81746587046892],
      coordinateStatus: "estimated",
    },
    {
      name: "PS KEMIRI",
      type: "market",
      kecamatan: "beji",
      coords: [-6.3894717664004546, 106.82262192095597],
      coordinateStatus: "estimated",
    },

    // TAJUR HALANG - 7 locations
    {
      name: "PS CITAYEM",
      type: "market",
      kecamatan: "tajur_halang",
      coords: [-6.450924741582781, 106.79966573840042],
      coordinateStatus: "estimated",
    },
    {
      name: "KALI SUREN",
      type: "region",
      kecamatan: "tajur_halang",
      coords: [-6.465463282966842, 106.74012768984426],
      coordinateStatus: "estimated",
    },
    {
      name: "JL CITAYEM",
      type: "street",
      kecamatan: "tajur_halang",
      coords: [],
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "PONDOK TERONG",
      type: "region",
      kecamatan: "tajur_halang",
      coords: [-6.435177, 106.80661],
      coordinateStatus: "estimated",
    },
    {
      name: "NANGERANG",
      type: "region",
      kecamatan: "tajur_halang",
      coords: [-6.464940499260672, 106.77845632913163],
      coordinateStatus: "estimated",
    },
    {
      name: "TONJONG",
      type: "store",
      kecamatan: "tajur_halang",
      coords: [-6.486238069827463, 106.75362655438461],
      coordinateStatus: "estimated",
    },
    {
      name: "SUKMA JAYA",
      type: "region",
      kecamatan: "tajur_halang",
      coords: [-6.483884816196252, 106.78101962520411],
      coordinateStatus: "estimated",
    },
  ],

  palsi: [
    // CIMANGGIS - 8 locations
    {
      name: "CURUG",
      type: "region",
      kecamatan: "cimanggis",
      coords: [-6.3860735303386935, 106.8710397851498],
      coordinateStatus: "estimated",
    },
    {
      name: "HARJA MUKTI",
      type: "region",
      kecamatan: "cimanggis",
      coords: [-6.3784623767197655, 106.89567995195627],
      coordinateStatus: "estimated",
    },
    {
      name: "MEKARSARI",
      type: "region",
      kecamatan: "cimanggis",
      coords: [-6.364170125039651, 106.86854244165649],
      coordinateStatus: "estimated",
    },
    {
      name: "TUGU",
      type: "region",
      kecamatan: "cimanggis",
      coords: [-6.363376640438769, 106.84905989633994],
      coordinateStatus: "estimated",
    },
    {
      name: "PALSI GUNUNG",
      type: "region",
      kecamatan: "cimanggis",
      coords: [-6.356372871528919, 106.85689259022755],
      coordinateStatus: "estimated",
    },
    {
      name: "PS. CISALAK",
      type: "market",
      kecamatan: "cimanggis",
      coords: [-6.3776540461000755, 106.86789405807554],
      coordinateStatus: "estimated",
    },
    {
      name: "SUKMA JAYA",
      type: "region",
      kecamatan: "cimanggis",
      coords: [-6.396700301132094, 106.8432927782009],
      coordinateStatus: "estimated",
    },
    {
      name: "KOJA",
      type: "store",
      kecamatan: "cimanggis",
      coords: [-6.379419851456488, 106.86968356829775],
      coordinateStatus: "estimated",
    },

    // TAPOS - 5 locations
    {
      name: "PS SUKATANI",
      type: "market",
      kecamatan: "tapos",
      coords: [-6.386923760881482, 106.88949561427839],
      coordinateStatus: "estimated",
    },
    {
      name: "BAKTI ABRI",
      type: "region",
      kecamatan: "tapos",
      coords: [-6.408830221072519, 106.87703063808787],
      coordinateStatus: "estimated",
    },
    {
      name: "GAS ALAM",
      type: "region",
      kecamatan: "tapos",
      coords: [-6.384370783363124, 106.88130768559073],
      coordinateStatus: "estimated",
    },
    {
      name: "PEKAPURAN",
      type: "region",
      kecamatan: "tapos",
      coords: [-6.398064763631739, 106.87595155153247],
      coordinateStatus: "estimated",
    },
    {
      name: "BANJARAN PUCUNG",
      type: "region",
      kecamatan: "tapos",
      coords: [-6.434389320163433, 106.86647551763794],
      coordinateStatus: "estimated",
    },

    // SUKMA JAYA - 5 locations
    {
      name: "PASAR MUSI & MINI",
      type: "market",
      kecamatan: "sukma_jaya",
      coords: [-6.389206238074389, 106.8479951858994],
      coordinateStatus: "estimated",
    },
    {
      name: "PASAR AGUNG",
      type: "market",
      kecamatan: "sukma_jaya",
      coords: [-6.392543759951827, 106.84559570296652],
      coordinateStatus: "estimated",
    },
    {
      name: "MEKAR JAYA",
      type: "region",
      kecamatan: "sukma_jaya",
      coords: [-6.389750774151896, 106.83776945345687],
      coordinateStatus: "estimated",
    },
    {
      name: "KEBAHAGIAN",
      type: "store",
      kecamatan: "sukma_jaya",
      coords: null,
      coordinateStatus: "needs_coordinates",
    },
    {
      name: "ABADI JAYA",
      type: "region",
      kecamatan: "sukma_jaya",
      coords: [-6.395381942266425, 106.84885612210482],
      coordinateStatus: "estimated",
    },

    // CILODONG - 6 locations
    {
      name: "CILODONG",
      type: "region",
      kecamatan: "cilodong",
      coords: [-6.429874024689085, 106.84435638106699],
      coordinateStatus: "estimated",
    },
    {
      name: "KALI MULYA",
      type: "region",
      kecamatan: "cilodong",
      coords: [-6.434012660486498, 106.8199283025485],
      coordinateStatus: "estimated",
    },
    {
      name: "KALI BARU",
      type: "region",
      kecamatan: "cilodong",
      coords: [-6.436002587515826, 106.83434866263185],
      coordinateStatus: "estimated",
    },
    {
      name: "JATI MULYA",
      type: "region",
      kecamatan: "cilodong",
      coords: [-6.4476934972069335, 106.8288074819635],
      coordinateStatus: "estimated",
    },
    {
      name: "SUKA MAJU",
      type: "region",
      kecamatan: "cilodong",
      coords: [-6.415983008118037, 106.85377156143936],
      coordinateStatus: "estimated",
    },
    {
      name: "PS PUCUNG",
      type: "market",
      kecamatan: "cilodong",
      coords: [-6.445601493545718, 106.82897432186324],
      coordinateStatus: "estimated",
    },
  ],

  citereup: [
    // CITEREUP - 6 locations
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
      coords: [-6.480288228209669, 106.88374128143829],
      coordinateStatus: "estimated",
    },
    {
      name: "KARANG ASEM BARAT",
      type: "region",
      kecamatan: "citereup",
      coords: [-6.490651181531844, 106.86969742403662],
      coordinateStatus: "estimated",
    },
    {
      name: "TARI KOLOT",
      type: "region",
      kecamatan: "citereup",
      coords: [-6.498946169325959, 106.88998664370709],
      coordinateStatus: "estimated",
    },
    {
      name: "SANJA",
      type: "region",
      kecamatan: "citereup",
      coords: [-6.504132431392682, 106.86734709336832],
      coordinateStatus: "estimated",
    },
    {
      name: "PASIR MUKTI",
      type: "region",
      kecamatan: "citereup",
      coords: [-6.509091923358835, 106.8974281830629],
      coordinateStatus: "estimated",
    },

    // BABAKAN MADANG - 5 locations
    {
      name: "PASAR BABAKAN MADANG",
      type: "market",
      kecamatan: "babakan_madang",
      coords: [-6.563800651939857, 106.86365626419501],
      coordinateStatus: "estimated",
    },
    {
      name: "CIJAYANTI",
      type: "region",
      kecamatan: "babakan_madang",
      coords: [-6.604829874073544, 106.87238190859732],
      coordinateStatus: "estimated",
    },
    {
      name: "BOJONG KONENG",
      type: "region",
      kecamatan: "babakan_madang",
      coords: [-6.606805700551057, 106.90602831292492],
      coordinateStatus: "estimated",
    },
    {
      name: "KARANG TENGAH",
      type: "region",
      kecamatan: "babakan_madang",
      coords: [-6.593104095466009, 106.93586623198249],
      coordinateStatus: "estimated",
    },
    {
      name: "SENTUL",
      type: "region",
      kecamatan: "babakan_madang",
      coords: [-6.520225147271234, 106.85050599338103],
      coordinateStatus: "estimated",
    },

    // CIBINONG - 7 locations
    {
      name: "PSR CIKEMA",
      type: "market",
      kecamatan: "cibinong",
      coords: [-6.457420913510081, 106.85734011923284],
      coordinateStatus: "estimated",
    },
    {
      name: "PONDOK RAJEG",
      type: "region",
      kecamatan: "cibinong",
      coords: [-6.457128021698059, 106.82127148993312],
      coordinateStatus: "estimated",
    },
    {
      name: "TAPOS CIBINONG",
      type: "region",
      kecamatan: "cibinong",
      coords: [-6.419685493839556, 106.87729902665819],
      coordinateStatus: "estimated",
    },
    {
      name: "CIKARET",
      type: "region",
      kecamatan: "cibinong",
      coords: [-6.475540230062435, 106.83857249649657],
      coordinateStatus: "estimated",
    },
    {
      name: "PABUARAN",
      type: "region",
      kecamatan: "cibinong",
      coords: [-6.454665480333848, 106.84935527903062],
      coordinateStatus: "estimated",
    },
    {
      name: "NANGGEWER",
      type: "region",
      kecamatan: "cibinong",
      coords: [-6.51224151894113, 106.82898981843765],
      coordinateStatus: "estimated",
    },
    {
      name: "PSR CIBINONG",
      type: "market",
      kecamatan: "cibinong",
      coords: [-6.466379385033878, 106.85662179622004],
      coordinateStatus: "estimated",
    },
  ],

  klapanunggal: [
    // KELAPA NUNGGAL - 6 locations
    {
      name: "NAMBO",
      type: "region",
      kecamatan: "kelapa_nunggal",
      coords: [-6.474627199822438, 106.92889175743902],
      coordinateStatus: "estimated",
    },
    {
      name: "BOJONG",
      type: "region",
      kecamatan: "kelapa_nunggal",
      coords: [-6.451560823686812, 106.99663666511854],
      coordinateStatus: "estimated",
    },
    {
      name: "CIKAHURIPAN",
      type: "region",
      kecamatan: "kelapa_nunggal",
      coords: [-6.453222500796806, 106.97492041604424],
      coordinateStatus: "estimated",
    },
    {
      name: "LULUT",
      type: "region",
      kecamatan: "kelapa_nunggal",
      coords: [-6.492740985074461, 106.91600373879034],
      coordinateStatus: "estimated",
    },
    {
      name: "LEWIKARET",
      type: "region",
      kecamatan: "kelapa_nunggal",
      coords: [-6.51585724926883, 106.9402617649489],
      coordinateStatus: "estimated",
    },
    {
      name: "LIGARMUKTI",
      type: "region",
      kecamatan: "kelapa_nunggal",
      coords: [-6.496695667387163, 106.97938478277364],
      coordinateStatus: "estimated",
    },

    // JONGGOL - 7 locations
    {
      name: "JONGGOL",
      type: "region",
      kecamatan: "jonggol",
      coords: [-6.467299988769324, 107.0494282308772],
      coordinateStatus: "estimated",
    },
    {
      name: "SINAR GALIH",
      type: "region",
      kecamatan: "jonggol",
      coords: [-6.472207970164153, 107.08908858974598],
      coordinateStatus: "estimated",
    },
    {
      name: "BENDUNGAN",
      type: "region",
      kecamatan: "jonggol",
      coords: [-6.493477027386483, 107.08497576280901],
      coordinateStatus: "estimated",
    },
    {
      name: "CIBODAS",
      type: "region",
      kecamatan: "jonggol",
      coords: [-6.5113364574646555, 107.01888877664452],
      coordinateStatus: "estimated",
    },
    {
      name: "SUKAJAYA",
      type: "region",
      kecamatan: "jonggol",
      coords: [-6.549026377859594, 107.01351997409144],
      coordinateStatus: "estimated",
    },
    {
      name: "SINGASARI",
      type: "region",
      kecamatan: "jonggol",
      coords: [-6.470740149402667, 107.01647166925862],
      coordinateStatus: "estimated",
    },
    {
      name: "DAYEH",
      type: "region",
      kecamatan: "jonggol",
      coords: [-6.47725188678031, 107.06212618811492],
      coordinateStatus: "estimated",
    },

    // CARIU - 4 locations
    {
      name: "PASAR CARIU",
      type: "market",
      kecamatan: "cariu",
      coords: [-6.506236993486041, 107.13168759302906],
      coordinateStatus: "estimated",
    },
    {
      name: "BABAKAN RADEN",
      type: "region",
      kecamatan: "cariu",
      coords: [-6.483153866365924, 107.14095613316663],
      coordinateStatus: "estimated",
    },
    {
      name: "KARYA MEKAR",
      type: "region",
      kecamatan: "cariu",
      coords: [-6.548875726164873, 107.10299567450875],
      coordinateStatus: "estimated",
    },
    {
      name: "MEKAR WANGI",
      type: "region",
      kecamatan: "cariu",
      coords: [-6.523598032125338, 107.1088562171489],
      coordinateStatus: "estimated",
    },

    // CILEUNGSI - 5 locations
    {
      name: "PASAR CILENGSI",
      type: "market",
      kecamatan: "cileungsi",
      coords: [-6.406948155411674, 106.96155176419295],
      coordinateStatus: "estimated",
    },
    {
      name: "NAROGONG",
      type: "region",
      kecamatan: "cileungsi",
      coords: [-6.374035515046327, 106.97189211593756],
      coordinateStatus: "estimated",
    },
    {
      name: "KENARI",
      type: "region",
      kecamatan: "cileungsi",
      coords: [-6.410468379526571, 106.96135155852755],
      coordinateStatus: "estimated",
    },
    {
      name: "GANDOANG",
      type: "region",
      kecamatan: "cileungsi",
      coords: [-6.411551478347609, 107.01336211143676],
      coordinateStatus: "estimated",
    },
    {
      name: "MEKARSARI",
      type: "region",
      kecamatan: "cileungsi",
      coords: [-6.405769757672571, 106.99500008221725],
      coordinateStatus: "estimated",
    },

    // GUNUNG PUTRI - 8 locations
    {
      name: "GRIYA BUKIT JAYA",
      type: "region",
      kecamatan: "gunung_putri",
      coords: [-6.439131854035296, 106.90653101216498],
      coordinateStatus: "estimated",
    },
    {
      name: "PASAR WANAHERANG",
      type: "market",
      kecamatan: "gunung_putri",
      coords: [-6.416591511551995, 106.93758969036267],
      coordinateStatus: "estimated",
    },
    {
      name: "TLAJUNG UDIK",
      type: "region",
      kecamatan: "gunung_putri",
      coords: [-6.446719770917268, 106.91214167273831],
      coordinateStatus: "estimated",
    },
    {
      name: "CICADAS",
      type: "region",
      kecamatan: "gunung_putri",
      coords: [-6.432496380084329, 106.92940611707058],
      coordinateStatus: "estimated",
    },
    {
      name: "CIKEAS UDIK",
      type: "region",
      kecamatan: "gunung_putri",
      coords: [-6.402772521092884, 106.92716359328162],
      coordinateStatus: "estimated",
    },
    {
      name: "KRANGGAN",
      type: "region",
      kecamatan: "gunung_putri",
      coords: [-6.457908562042157, 106.88391136839319],
      coordinateStatus: "estimated",
    },
    {
      name: "NAGRAK",
      type: "region",
      kecamatan: "gunung_putri",
      coords: [-6.384539302386663, 106.94383682629599],
      coordinateStatus: "estimated",
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
      coords: [-6.52715120479067, 106.76979795935901],
      coordinateStatus: "estimated",
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
      coords: [-6.679848217070288, 106.93188895527219],
      coordinateStatus: "estimated",
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
      coords: [-6.670126678504035, 106.82716617826154],
      coordinateStatus: "estimated",
    },
    {
      name: "CIPAKU",
      type: "region",
      kecamatan: "bogor_selatan",
      coords: [-6.636071253449834, 106.81415236004254],
      coordinateStatus: "estimated",
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
      coords: [-6.678801156023391, 106.84001639972247],
      coordinateStatus: "estimated",
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
