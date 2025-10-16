// Changelog data for Maps Jessindo
// Format: newest first

export const changelog = [
  {
    version: "1.6.0",
    date: "2025-10-17",
    type: "feature",
    items: [
      {
        category: "Jadwal Salesman",
        icon: "📅",
        changes: [
          "Fitur baru: Jadwal Salesman terintegrasi di Modern Control Panel",
          "Tampilkan jadwal hanya untuk area spesifik yang dipilih (B1-B4, D1-D4)",
          "Dynamic schedule berdasarkan area terpilih dengan nama area di header",
          "Conditional rendering: jadwal tidak muncul saat pilih multiple areas atau semua area",
        ],
      },
      {
        category: "Data Jadwal Lengkap",
        icon: "✨",
        changes: [
          "B1 (Dalam Kota): 6 salesman, 17 lokasi kunjungan per minggu",
          "B2 (Jasinga): 6 salesman, 14 lokasi kunjungan per minggu",
          "B3 (Cisarua): 6 salesman, 22 lokasi kunjungan per minggu",
          "B4 (Cigombong): 6 salesman, 18 lokasi kunjungan per minggu",
          "D1 (Ciseeng): 6 salesman, 31 lokasi kunjungan per minggu",
          "D2 (Palsi): 6 salesman, 21 lokasi kunjungan per minggu",
          "D3 (Citereup): 6 salesman, 20 lokasi kunjungan per minggu",
          "D4 (Klapanunggal): 6 salesman, 26 lokasi kunjungan per minggu",
        ],
      },
      {
        category: "UI/UX Improvements",
        icon: "🎨",
        changes: [
          "Accordion dengan color-coded badges per divisi (GRO 1/2/3, UCI, KSP, MI)",
          "Day selector dengan 6 buttons (SENIN-SABTU)",
          "Numbered list untuk lokasi kunjungan",
          "Smooth transition dan hover effects",
          "Green theme untuk membedakan dari section lain",
        ],
      },
      {
        category: "Technical Implementation",
        icon: "⚙️",
        changes: [
          "Area mapping: dalam_kota→B1, jasinga→B2, cisarua→B3, cigombong→B4, dll",
          "Helper functions: shouldShowSchedule(), getCurrentScheduleId()",
          "Dynamic data fetching dengan getScheduleByAreaAndDay()",
          "Semua divisi mengunjungi lokasi yang sama di hari yang sama",
        ],
      },
    ],
  },
  {
    version: "1.5.0",
    date: "2025-10-16",
    type: "reorganization",
    items: [
      {
        category: "Reorganisasi Data Area D1-D4",
        icon: "🔄",
        changes: [
          "Reklasifikasi kecamatan: 53+ lokasi dipindah ke kecamatan yang benar sesuai areaFiles",
          "D1 (Ciseeng): KURIPAN & KAREKEL dipindah dari LIMO ke CISEENG, ditambah koordinat",
          "D1 (Parung): 6 lokasi (H. MAWI, BOJONGSARI, PAMEGARSARI, WARUJAYA, BOJONG INDAH, JABON MEKAR) dipindah ke PARUNG, semua dapat koordinat",
          "D1 (Beji): 4 lokasi (TANAH BARU, PONDOK CINA, KUKUSAN, BEJI) dapat koordinat estimasi",
          "D1 (Tajur Halang): 6 lokasi dapat koordinat, KLASIFIKASI ULANG dari store ke region",
        ],
      },
      {
        category: "Standardisasi Tipe Lokasi",
        icon: "🏷️",
        changes: [
          "20+ lokasi diklasifikasi ulang dari 'store' ke 'region'",
          "Konsistensi tipe data untuk semua area wilayah",
          "Struktur data lebih terorganisir dan mudah dipelihara",
        ],
      },
      {
        category: "Update Koordinat Masif",
        icon: "📍",
        changes: [
          "100+ lokasi D1-D4 dapat koordinat estimasi",
          "Status berubah dari 'needs_coordinates' ke 'estimated'",
          "D2 (Palsi): Semua 24 lokasi dapat koordinat estimasi",
          "D3 (Citereup): Semua 18 lokasi dapat koordinat estimasi",
          "D4 (Klapanunggal): Semua 32 lokasi dapat koordinat estimasi",
          "Total keseluruhan: 150+ lokasi dengan koordinat siap digunakan",
        ],
      },
      {
        category: "Improvements",
        icon: "🚀",
        changes: [
          "Sinkronisasi data antara areaFiles dan subAreaLocations",
          "Struktur data lebih konsisten dan terorganisir",
          "Persiapan untuk validasi data area B1-B4",
          "Memperbaiki mapping kecamatan yang salah sebelumnya",
        ],
      },
    ],
  },
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
