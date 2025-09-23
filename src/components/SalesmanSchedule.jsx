import { useState } from 'react';
import { salesmanSchedule, getScheduleByDay } from '../data/salesmanSchedule';

const SalesmanSchedule = () => {
  const [selectedDay, setSelectedDay] = useState('SENIN');
  const [showDetails, setShowDetails] = useState(true);

  const days = ['SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];

  const currentSchedule = getScheduleByDay(selectedDay);

  const divisionColors = {
    'GRO 1': '#ef4444',
    'GRO 2': '#f97316',
    'GRO 3': '#eab308',
    'UCI': '#22c55e',
    'KSP': '#3b82f6',
    'MI': '#8b5cf6'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <h3 className="text-lg font-bold text-gray-800">Jadwal Salesman</h3>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-gray-500 hover:text-gray-700"
          title={showDetails ? 'Sembunyikan Detail' : 'Tampilkan Detail'}
        >
          <svg
            className={`w-5 h-5 transform transition-transform ${showDetails ? '' : 'rotate-180'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Day Selector */}
      <div className="mb-4 flex-shrink-0">
        <div className="flex flex-wrap gap-2">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedDay === day
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Content */}
      {showDetails && (
        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
          <div className="text-sm text-gray-600 mb-3">
            Menampilkan jadwal untuk hari <strong>{selectedDay}</strong>
          </div>

          {currentSchedule.length > 0 ? (
            <div className="space-y-2">
              {currentSchedule.map((salesman, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: divisionColors[salesman.division] }}
                        />
                        <span className="font-medium text-gray-800">
                          {salesman.name}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {salesman.division}
                        </span>
                      </div>

                      <div className="text-sm text-gray-600 space-y-1">
                        {salesman.area && (
                          <div>
                            <span className="font-medium">Area:</span> {salesman.area}
                          </div>
                        )}
                        {salesman.subArea && (
                          <div>
                            <span className="font-medium">Sub Area:</span> {salesman.subArea}
                          </div>
                        )}
                        {salesman.location && (
                          <div>
                            <span className="font-medium">Lokasi:</span> {salesman.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <svg
                className="w-12 h-12 mx-auto mb-3 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p>Tidak ada jadwal untuk {selectedDay}</p>
            </div>
          )}

          {/* Legend */}
          <div className="border-t border-gray-200 pt-3 mt-4 flex-shrink-0">
            <div className="text-sm font-medium text-gray-700 mb-2">Legenda Divisi:</div>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(divisionColors).map(([division, color]) => (
                <div key={division} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs text-gray-600">{division}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesmanSchedule;