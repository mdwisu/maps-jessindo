// Data structure for salesman schedule
export const salesmanSchedule = {
  B1: {
    area: "B1",
    divisions: {
      "GRO 1": {
        name: "RESKY",
        division: "GRO 1",
        schedule: {
          SENIN: {
            area: "BOGOR TENGAH",
            subArea: "BOGOR TENGAH",
            location: "JLN RODA"
          },
          SELASA: {
            area: "BOGOR TENGAH",
            subArea: "BOGOR TENGAH",
            location: "JL. OTISTA"
          },
          RABU: {
            area: "BOGOR TENGAH",
            subArea: "BOGOR TENGAH",
            location: "JL. PADASUKA"
          },
          KAMIS: {
            area: "BOGOR TENGAH",
            subArea: "BOGOR TENGAH",
            location: "RUKO MERDEKA"
          },
          JUMAT: {
            area: "BOGOR TENGAH",
            subArea: "BOGOR TENGAH",
            location: "JL DEWI SARTIKA"
          },
          SABTU: {
            area: "TANAH SAREAL",
            subArea: "KEBON PEDES",
            location: ""
          }
        }
      },
      "GRO 2": {
        name: "MICHAEL",
        division: "GRO 2",
        schedule: {
          SENIN: {
            area: "BOGOR UTARA",
            subArea: "BOGOR UTARA",
            location: "JL KLENTENG"
          },
          SELASA: {
            area: "BOGOR UTARA",
            subArea: "PASAR BOGOR ATAS",
            location: ""
          },
          RABU: {
            area: "BOGOR UTARA",
            subArea: "PASAR CUNPOK",
            location: ""
          },
          KAMIS: {
            area: "BOGOR UTARA",
            subArea: "JL PERINTIS KEMERDEKAAN",
            location: ""
          },
          JUMAT: {
            area: "BOGOR UTARA",
            subArea: "PASAR ANYAR BLOK CD",
            location: ""
          },
          SABTU: {
            area: "BOGOR UTARA",
            subArea: "PONDOK RUMPUT",
            location: ""
          }
        }
      },
      "GRO 3": {
        name: "FIKRI",
        division: "GRO 3",
        schedule: {
          SENIN: {
            area: "TANAH SAREAL",
            subArea: "PASAR BOGOR BAWAH",
            location: ""
          },
          SELASA: {
            area: "TANAH SAREAL",
            subArea: "JL SUKAMULYA",
            location: ""
          },
          RABU: {
            area: "TANAH SAREAL",
            subArea: "JL. PEDATI",
            location: ""
          },
          KAMIS: {
            area: "TANAH SAREAL",
            subArea: "JL.MA SALMUN BAWAH",
            location: ""
          },
          JUMAT: {
            area: "TANAH SAREAL",
            subArea: "JL SAWOJAJAR",
            location: ""
          },
          SABTU: {
            area: "TANAH SAREAL",
            subArea: "JL. RAYA SEMPLAK",
            location: ""
          }
        }
      },
      UCI: {
        name: "DELVIA",
        division: "UCI",
        schedule: {
          SENIN: {
            area: "",
            subArea: "",
            location: ""
          },
          SELASA: {
            area: "",
            subArea: "",
            location: "JL.LAWANG SAKETENG"
          },
          RABU: {
            area: "",
            subArea: "",
            location: "RUKO SALMUN ATAS"
          },
          KAMIS: {
            area: "",
            subArea: "CIMANGGU",
            location: ""
          },
          JUMAT: {
            area: "",
            subArea: "",
            location: ""
          },
          SABTU: {
            area: "",
            subArea: "",
            location: ""
          }
        }
      },
      KSP: {
        name: "AISAH",
        division: "KSP",
        schedule: {
          SENIN: {
            area: "",
            subArea: "",
            location: ""
          },
          SELASA: {
            area: "",
            subArea: "JL JUANDA",
            location: ""
          },
          RABU: {
            area: "BOGOR UTARA",
            subArea: "PASAR INDUK JAMBU 2",
            location: ""
          },
          KAMIS: {
            area: "",
            subArea: "",
            location: ""
          },
          JUMAT: {
            area: "",
            subArea: "",
            location: ""
          },
          SABTU: {
            area: "",
            subArea: "",
            location: ""
          }
        }
      },
      MI: {
        name: "DHIO",
        division: "MI",
        schedule: {
          SENIN: { area: "", subArea: "", location: "" },
          SELASA: { area: "", subArea: "", location: "" },
          RABU: { area: "", subArea: "", location: "" },
          KAMIS: { area: "", subArea: "", location: "" },
          JUMAT: { area: "", subArea: "", location: "" },
          SABTU: { area: "", subArea: "", location: "" }
        }
      }
    }
  }
};

// Helper function to get schedule by day
export const getScheduleByDay = (day) => {
  const daySchedule = [];

  Object.entries(salesmanSchedule).forEach(([area, data]) => {
    Object.entries(data.divisions).forEach(([division, salesman]) => {
      const dayData = salesman.schedule[day];
      if (dayData && (dayData.area || dayData.location)) {
        daySchedule.push({
          area,
          division,
          name: salesman.name,
          ...dayData
        });
      }
    });
  });

  return daySchedule;
};

// Helper function to get salesman by division
export const getSalesmanByDivision = (division) => {
  const result = [];

  Object.entries(salesmanSchedule).forEach(([area, data]) => {
    if (data.divisions[division]) {
      result.push({
        area,
        division,
        name: data.divisions[division].name,
        schedule: data.divisions[division].schedule
      });
    }
  });

  return result;
};

// Helper function to get all areas covered
export const getAllCoveredAreas = () => {
  const areas = new Set();

  Object.entries(salesmanSchedule).forEach(([mainArea, data]) => {
    Object.entries(data.divisions).forEach(([division, salesman]) => {
      Object.values(salesman.schedule).forEach(day => {
        if (day.area) {
          areas.add(day.area);
        }
      });
    });
  });

  return Array.from(areas);
};