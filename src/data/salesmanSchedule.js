// Data jadwal salesman per area
// Semua divisi mengunjungi lokasi yang sama di hari yang sama
export const salesmanSchedule = {
  B1: {
    area: "B1 (Dalam Kota)",
    salesmen: [
      { division: "GRO 1", name: "RESKY" },
      { division: "GRO 2", name: "MICHAEL" },
      { division: "GRO 3", name: "FIKRI" },
      { division: "UCI", name: "DELVIA" },
      { division: "KSP", name: "AISAH" },
      { division: "MI", name: "DHIO" },
    ],
    schedule: {
      SENIN: ["JLN RODA", "JL KLENTENG", "PASAR BOGOR BAWAH"],
      SELASA: ["JL. OTISTA", "PASAR BOGOR ATAS", "JL SUKAMULYA"],
      RABU: [
        "JL. PADASUKA",
        "PASAR CUNPOK",
        "JL. PEDATI",
        "JL.LAWANG SAKETENG",
        "JL JUANDA",
      ],
      KAMIS: [
        "RUKO MERDEKA",
        "JL PERINTIS KEMERDEKAAN",
        "JL.MA SALMUN BAWAH",
        "RUKO SALMUN ATAS",
        "PASAR INDUK JAMBU 2",
      ],
      JUMAT: ["JL DEWI SARTIKA", "PASAR ANYAR BLOK CD", "JL SAWOJAJAR"],
      SABTU: ["KEBON PEDES", "PONDOK RUMPUT", "JL. RAYA SEMPLAK", "CIMANGGU"],
    },
  },
  B2: {
    area: "B2 (Jasinga)",
    salesmen: [
      { division: "GRO 1", name: "BASTIAN" },
      { division: "GRO 2", name: "IIK S" },
      { division: "GRO 3", name: "ALFIANA" },
      { division: "UCI", name: "DARUS" },
      { division: "KSP", name: "DENY" },
      { division: "MI", name: "AGUS ABDILAH" },
    ],
    schedule: {
      SENIN: [
        "PASAR LEUWILIANG",
        "PASAR KAMBING LEUWILIANG",
        "JL. LINGKAR PASAR",
      ],
      SELASA: [
        "PASAR CIGUDEG",
        "JL RAYA CIGUDEG",
        "JL RAYA LEUWILIANG",
        "JL RAYA CIBUNGBULANG",
      ],
      RABU: ["PASAR NANGGUNG", "CIBEBER", "SADENG"],
      KAMIS: ["PASAR JASINGA", "JL RAYA JASINGA"],
      JUMAT: [
        "PASAR LEUWILIANG",
        "PASAR KAMBING LEUWILIANG",
        "JL. LINGKAR PASAR",
      ],
      SABTU: ["PASAR PARABAKTI", "JL. KH ABDUL HAMID"],
    },
  },
  B3: {
    area: "B3 (Cisarua)",
    salesmen: [
      { division: "GRO 1", name: "ABDUL" },
      { division: "GRO 2", name: "OKTOVANI" },
      { division: "GRO 3", name: "HERY" },
      { division: "UCI", name: "HAIKAL" },
      { division: "KSP", name: "ARI S" },
      { division: "MI", name: "LUIS" },
    ],
    schedule: {
      SENIN: [
        "PASAR BOJONG GEDE",
        "JL RAYA BOJONG GEDE",
        "CILEBUT",
        "JL RAYA BAMBU KUNING",
        "KAYUMANIS",
      ],
      SELASA: [
        "PASAR CISARUA",
        "RUKO PAFESTA PSR CISARUA",
        "PASAR CIBEUREUM CISARUA",
      ],
      RABU: [
        "PASAR CIAMPEA BARU",
        "PASAR CIAMPEA LAMA",
        "JL RAYA CIAMPEA",
        "JL RY BANTAR KAMBING",
      ],
      KAMIS: ["JL RAYA CIBANTENG", "JL.ABDUL FATAH", "PASAR JUMAT TENJOLAYA"],
      JUMAT: [
        "PASAR DRAMAGA",
        "JL.RY GUNUNG BATU",
        "JL. RY CIFOR SBJ BOGOR",
        "JL. RAYA SINDANG BARANG",
      ],
      SABTU: ["JL RAYA PABUARAN CITAYAM", "JLN.CAGAR ALAM", "VITARA"],
    },
  },
  B4: {
    area: "B4 (Cigombong)",
    salesmen: [
      { division: "GRO 1", name: "ADNAN" },
      { division: "GRO 2", name: "SYAHRUL" },
      { division: "GRO 3", name: "HENDRA" },
      { division: "UCI", name: "REGA" },
      { division: "KSP", name: "YANA" },
      { division: "MI", name: "FIKRIY RAMDAN" },
    ],
    schedule: {
      SENIN: ["PASAR CIGOMBONG"],
      SELASA: [
        "PAMOYANAN",
        "CIHIDEUNG",
        "PASAR CIBADAK CIJERUK",
        "PASAR. CARINGIN",
        "JLN.RAYA SUKABUMI",
      ],
      RABU: [
        "RANCAMAYA",
        "CIPAKU",
        "JL VETERAN",
        "JL.RY.CIBEDUK-TAPOS",
        "WARUNG NANGKA CIAWI",
      ],
      KAMIS: ["PASAR SUKASARI", "PASAR CIAWI"],
      JUMAT: ["PASAR CILUAR", "RY.JAKARTA-BOGOR"],
      SABTU: [
        "JL.RY.PANGERAN ASOGIRI",
        "JLN RAYA TANAH BARU",
        "JL.MANDALA POMAD",
      ],
    },
  },
  D1: {
    area: "D1 (Ciseeng)",
    salesmen: [
      { division: "GRO 1", name: "BADRU" },
      { division: "GRO 2", name: "DONI" },
      { division: "GRO 3", name: "JAINAL" },
      { division: "UCI", name: "ANDIKA" },
      { division: "KSP", name: "DENI" },
      { division: "MI", name: "BAYU P" },
    ],
    schedule: {
      SENIN: [
        "PS CISEENG",
        "KURIPAN",
        "KAREKEL",
        "PRUMPUNG",
        "PARIGI (CISEENG)",
      ],
      SELASA: ["MERUYUNG", "GROGOL", "KRUKUT", "LIMO", "KEADILAN", "VITARA"],
      RABU: [
        "PS PARUNG",
        "H. MAWI",
        "BOJONGSARI",
        "COGREK",
        "PAMEGARSARI",
        "WARUJAYA",
        "BOJONG INDAH",
        "INKOPAD",
        "JABON MEKAR",
      ],
      KAMIS: ["TANAH BARU", "PONDOK CINA", "KUKUSAN", "BEJI", "PSR DEPOK JAYA"],
      JUMAT: ["PS KEMIRI", "KEMIRI MUKA"],
      SABTU: [
        "TUGU MACAN",
        "PS CITAYEM",
        "KALI SUREN",
        "JL CITAYEM",
        "PONDOK TERONG",
        "NANGERANG",
        "TONJONG",
      ],
    },
  },
  D2: {
    area: "D2 (Palsi)",
    salesmen: [
      { division: "GRO 1", name: "LISAN" },
      { division: "GRO 2", name: "DENDI" },
      { division: "GRO 3", name: "HAIKAL" },
      { division: "UCI", name: "VACANT" },
      { division: "KSP", name: "ROHMAT" },
      { division: "MI", name: "ADITYA" },
    ],
    schedule: {
      SENIN: ["CURUG", "HARJA MUKTI", "MEKARSARI", "TUGU", "PALSI GUNUNG"],
      SELASA: ["PS. CISALAK", "SUKMA JAYA", "KOJA"],
      RABU: ["PS SUKATANI", "BAKTI ABRI", "GAS ALAM", "PEKAPURAN", "BANJARAN PUCUNG"],
      KAMIS: [
        "PASAR MUSI & MINI",
        "PASAR AGUNG",
        "MEKAR JAYA",
        "KEBAHAGIAN",
        "ABADI JAYA",
      ],
      JUMAT: ["JATI MULYA", "CILODONG", "SUKA MAJU", "KALI BARU"],
      SABTU: ["PS PUCUNG", "KALI MULYA"],
    },
  },
  D3: {
    area: "D3 (Citereup)",
    salesmen: [
      { division: "GRO 1", name: "ROHIM" },
      { division: "GRO 2", name: "RAMA" },
      { division: "GRO 3", name: "ACE" },
      { division: "UCI", name: "HELMI" },
      { division: "KSP", name: "UCOK" },
      { division: "MI", name: "MAD E NUR" },
    ],
    schedule: {
      SENIN: ["PS CITEREUP LAMA", "TARI KOLOT", "SANJA"],
      SELASA: ["PS CITEREUP BARU", "KARANG ASEM BARAT"],
      RABU: [
        "PSR CIKEMA",
        "PONDOK RAJEG",
        "CIKARET",
        "PABUARAN",
        "TAPOS CIBINONG",
        "KERADENAN",
        "SUKAHATI",
      ],
      KAMIS: [
        "PASAR BABAKAN MADANG",
        "CIJAYANTI",
        "PASIR MUKTI",
        "SENTUL",
        "BOJONG KONENG",
        "KARANG TENGAH",
      ],
      JUMAT: ["PASAR CIBINONG"],
      SABTU: ["NANGGEWER", "KANDANG RODA", "KAUM PANDAK", "CIJUJUNG"],
    },
  },
  D4: {
    area: "D4 (Klapanunggal)",
    salesmen: [
      { division: "GRO 1", name: "JODI" },
      { division: "GRO 2", name: "EKO" },
      { division: "GRO 3", name: "FAISAL" },
      { division: "UCI", name: "STEVENT" },
      { division: "KSP", name: "ROHMAN" },
      { division: "MI", name: "ILHAM" },
    ],
    schedule: {
      SENIN: [
        "NAMBO",
        "BOJONG",
        "CIKAHURIPAN",
        "LULUT",
        "LEWIKARET",
        "PASAR PISANG",
        "PASAR DAYEUH",
      ],
      SELASA: ["PASAR JONGGOL"],
      RABU: ["PASAR CARIU", "BABAKAN RADEN", "MEKAR WANGI", "KARYA MEKAR"],
      KAMIS: ["PASAR CILENGSI", "KENARI", "KAMPUNG SETU"],
      JUMAT: ["GANDOANG", "MEKARSARI", "PREMAPERA", "KAPUNG SETU", "HARMONI"],
      SABTU: [
        "GRIYA BUKIT JAYA",
        "PSR WANAHERANG",
        "TLAJUNG UDIK",
        "CICADAS",
        "CIKEAS UDIK",
        "KRANGGAN",
        "NAGRAK",
      ],
    },
  },
};

// Warna badge untuk setiap divisi
export const divisionColors = {
  "GRO 1": "#ef4444", // red
  "GRO 2": "#f97316", // orange
  "GRO 3": "#eab308", // yellow
  UCI: "#22c55e", // green
  KSP: "#3b82f6", // blue
  MI: "#8b5cf6", // purple
};

// Helper function: Dapatkan jadwal untuk area tertentu di hari tertentu
export const getScheduleByAreaAndDay = (areaId, day) => {
  const areaData = salesmanSchedule[areaId];
  if (!areaData) return { salesmen: [], locations: [] };

  return {
    salesmen: areaData.salesmen || [],
    locations: areaData.schedule[day] || [],
  };
};

// Helper function: Dapatkan semua jadwal untuk area tertentu (semua hari)
export const getScheduleByArea = (areaId) => {
  const areaData = salesmanSchedule[areaId];
  if (!areaData) return null;
  return areaData;
};
