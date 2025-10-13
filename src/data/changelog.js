// Changelog data for Maps Jessindo
// Format: newest first

export const changelog = [
  {
    version: "1.4.0",
    date: "2025-10-13",
    type: "feature",
    items: [
      {
        category: "Tipe Lokasi Baru: Wilayah",
        icon: "⭐",
        changes: [
          "Tambah tipe lokasi 'wilayah' dengan icon bintang ungu",
          "Rendering logic untuk menampilkan lokasi wilayah sebagai marker/titik",
          "Update popup content menampilkan 'Tipe: Wilayah' dengan warna ungu",
          "Deskripsi panel diperbarui menjadi '(jalan, pasar, toko, wilayah)'",
        ],
      },
      {
        category: "Reklasifikasi Lokasi",
        icon: "🏷️",
        changes: [
          "53 lokasi dari 'store' dipindahkan ke 'region' (wilayah)",
          "D1 (Ciseeng): 2 lokasi (Jabon Mekar, Tanah Baru)",
          "D2 (Palsi): 11 lokasi (CURUG, Harja Mukti, MEKARSARI, TUGU, PALSI GUNUNG, SUKMA JAYA, CILODONG, KALI MULYA, KALI BARU, JATI MULYA, SUKA MAJU)",
          "D3 (Citereup): 13 lokasi (KARANG ASEM BARAT, TARI KOLOT, SANJA, PASIR MUKTI, CIJAYANTI, BOJONG KONENG, KARANG TENGAH, SENTUL, PONDOK RAJEG, TAPOS CIBINONG, CIKARET, PABUARAN, NANGGEWER)",
          "D4 (Klapanunggal): 27 lokasi (NAMBO, BOJONG, CIKAHURIPAN, LULUT, LEWIKARET, LIGARMUKTI, JONGGOL, SINAR GALIH, BENDUNGAN, CIBODAS, SUKAJAYA, SINGASARI, DAYEH, BABAKAN RADEN, KARYA MEKAR, MEKAR WANGI, NAROGONG, KENARI, GANDOANG, GRIYA BUKIT JAYA, TLAJUNG UDIK, CICADAS, CIKEAS UDIK, KRANGGAN, NAGRAK)",
          "Cisarua: 1 lokasi (CILEBUT)",
        ],
      },
      {
        category: "Update Koordinat",
        icon: "📍",
        changes: [
          "Beberapa lokasi wilayah sudah ada koordinat (estimated)",
          "Total 8+ lokasi wilayah dengan koordinat siap digunakan",
          "Status coordinateStatus: 'estimated' untuk lokasi yang sudah ada koordinat",
        ],
      },
    ],
  },
  {
    version: "1.3.0",
    date: "2025-10-07",
    type: "coordinates",
    items: [
      {
        category: "Sub Area B4 (Cigombong)",
        icon: "📍",
        changes: [
          "Tambah 17 lokasi baru: Pasar Cigombong Pamoyanan, Cihideung, Pasar Cibadak Cijeruk, Pasar Caringin, Rancamaya, Cipaku, Warung Nangka Ciawi, Pasar Sukasari, Pasar Ciawi, Pasar Ciluar",
          "Coverage 8 kecamatan: Cigombong, Sukaraja, Cijeruk, Caringin, Bogor Selatan, Bogor Timur, Ciawi, Bogor Utara",
          "7 jalan utama ditambahkan: Jl.Ry.Pangeran Asogiri, Jln Raya Tanah Baru, Jln.Raya Sukabumi, Jl.Mandala Pomad, Jl Veteran, Jl.Ry.Cibeduk-Tapos, Ry.Jakarta-Bogor",
        ],
      },
      {
        category: "Update Koordinat B2 & B3",
        icon: "🗺️",
        changes: [
          "B2 (Jasinga): 5 pasar diupdate koordinat (Pasar Leuwiliang, Pasar Cigudeg, Pasar Nanggung, Pasar Jasinga, Pasar Parabakti)",
          "B3 (Cisarua): 6 pasar diupdate koordinat (Pasar Bojong Gede, Pasar Cisarua, Pasar Cibeureum Cisarua, Pasar Ciampea Baru, Pasar Ciampea Lama, Pasar Jumat Tenjolaya, Pasar Dramaga)",
          "Total 11 lokasi pasar dari status needs_coordinates ke estimated",
        ],
      },
    ],
  },
  {
    version: "1.2.0",
    date: "2025-10-06",
    type: "feature", // feature, update, bugfix, coordinates
    items: [
      {
        category: "Feature Baru",
        icon: "✨",
        changes: [
          "Tambah button Google Maps di popup sub area",
          "Design button modern dengan gradient biru dan hover effect",
          "Popup multi-line sekarang semua bisa dibuka dengan koordinat yang akurat",
        ],
      },
      {
        category: "Update Koordinat",
        icon: "📍",
        changes: [
          "Sistem status koordinat diubah: needs_coordinates, estimated, verified",
          "Sub Area B2 (Jasinga): 14 lokasi ditambahkan",
          "Sub Area B3 (Cisarua): 22 lokasi ditambahkan",
        ],
      },
      {
        category: "Improvement",
        icon: "🚀",
        changes: [
          "Refactor sistem sub area menjadi dinamis dan scalable",
          "Tidak perlu hardcode untuk area B4, D1-D4",
          "Toggle sub area otomatis muncul untuk semua area",
        ],
      },
      {
        category: "Bug Fixes",
        icon: "🐛",
        changes: [
          "Fix jalan dengan geojsonPath tidak muncul di peta",
          "Fix popup line ke-2 tidak punya button Google Maps",
          "Hapus info '2 cabang' yang membingungkan user",
        ],
      },
    ],
  },
  {
    version: "1.1.0",
    date: "2025-10-03",
    type: "coordinates",
    items: [
      {
        category: "Update Koordinat B1",
        icon: "📍",
        changes: [
          "JL JUANDA: GeoJSON dari QGIS (estimated)",
          "JL PERINTIS KEMERDEKAAN: GeoJSON dari QGIS (estimated)",
          "JL.MA SALMUN BAWAH: GeoJSON dari QGIS (estimated)",
          "JL. PADASUKA: GeoJSON dari QGIS (estimated)",
          "JL.LAWANG SAKETENG: GeoJSON dari QGIS (estimated)",
        ],
      },
      {
        category: "Feature Baru",
        icon: "✨",
        changes: [
          "Tampilan sub area untuk B1 (Dalam Kota)",
          "Status koordinat dengan color coding (merah/cyan/hijau)",
          "Click to zoom pada sub area",
          "List sub area dengan search dan filter",
        ],
      },
    ],
  },
  {
    version: "1.0.0",
    date: "2025-09-28",
    type: "feature",
    items: [
      {
        category: "Initial Release",
        icon: "🎉",
        changes: [
          "Peta interaktif dengan 8 area (B1-B4, D1-D4)",
          "Multi-area selection",
          "Area toggle dengan color coding",
          "Popup informasi kecamatan",
          "Responsive control panel",
          "OpenStreetMap integration",
        ],
      },
      {
        category: "Data",
        icon: "📊",
        changes: [
          "50+ GeoJSON kecamatan Bogor & Depok",
          "B1 (Dalam Kota): 17 sub lokasi",
          "Konfigurasi area dengan warna dan deskripsi",
        ],
      },
    ],
  },
];

// Helper to get changelog by type
export const getChangelogByType = (type) => {
  return changelog.filter((entry) => entry.type === type);
};

// Helper to get latest version
export const getLatestVersion = () => {
  return changelog[0]?.version || "1.0.0";
};

// Helper to get changelog count
export const getChangelogCount = () => {
  return changelog.length;
};
