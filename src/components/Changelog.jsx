import { useState } from "react";
import { changelog, getLatestVersion } from "../data/changelog.js";

const Changelog = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Get type badge color
  const getTypeBadge = (type) => {
    const badges = {
      feature: { bg: "bg-blue-500", text: "Fitur Baru", icon: "✨" },
      update: { bg: "bg-purple-500", text: "Update", icon: "🔄" },
      bugfix: { bg: "bg-red-500", text: "Bug Fix", icon: "🐛" },
      coordinates: { bg: "bg-green-500", text: "Koordinat", icon: "📍" },
    };
    return badges[type] || badges.feature;
  };

  // Format date to Indonesian
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <>
      {/* Changelog Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[1000] bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
        title="Lihat History Update"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span className="font-semibold text-sm">History</span>
        <span className="bg-white text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">
          v{getLatestVersion()}
        </span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[1100] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    📋 History Update
                  </h2>
                  <p className="text-blue-100 text-sm">
                    Changelog Maps Jessindo - Versi {getLatestVersion()}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-120px)] p-6">
              {/* Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                {changelog.map((entry, index) => {
                  const badge = getTypeBadge(entry.type);

                  return (
                    <div key={index} className="relative mb-8 last:mb-0">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-6 w-5 h-5 rounded-full ${badge.bg} border-4 border-white shadow`}
                      ></div>

                      {/* Content card */}
                      <div className="ml-16 bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                        {/* Version & Date */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-bold text-gray-800">
                              v{entry.version}
                            </h3>
                            <span
                              className={`${badge.bg} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                            >
                              {badge.icon} {badge.text}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 font-medium">
                            {formatDate(entry.date)}
                          </span>
                        </div>

                        {/* Changes */}
                        <div className="space-y-4">
                          {entry.items.map((item, itemIndex) => (
                            <div key={itemIndex}>
                              <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                <span className="text-lg">{item.icon}</span>
                                {item.category}
                              </h4>
                              <ul className="space-y-1.5">
                                {item.changes.map((change, changeIndex) => (
                                  <li
                                    key={changeIndex}
                                    className="flex items-start gap-2 text-sm text-gray-600"
                                  >
                                    <span className="text-blue-500 mt-1">
                                      •
                                    </span>
                                    <span>{change}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer info */}
              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800 text-center">
                  <span className="font-semibold">Total:</span>{" "}
                  {changelog.length} versi rilis •{" "}
                  <span className="font-semibold">Latest:</span> v
                  {getLatestVersion()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Changelog;
