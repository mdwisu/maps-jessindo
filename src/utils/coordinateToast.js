// Utility function to show coordinate toast with copy button (Dev Mode)
export const showCoordinateToast = (lat, lng) => {
  // Only show in development mode
  if (import.meta.env.VITE_APP_MODE !== 'development') {
    return;
  }

  const coordString = `[-${Math.abs(lat).toFixed(6)}, ${lng.toFixed(6)}]`;
  console.log('📍 Koordinat diklik:', coordString);
  console.log('📋 Copy untuk subAreaLocations.js:', `coords: ${coordString}`);

  // Remove all existing toasts (remove by class to catch any old versions)
  document.querySelectorAll('[id^="coord-toast"]').forEach(el => {
    const parent = el.parentElement;
    if (parent && document.body.contains(parent)) {
      document.body.removeChild(parent);
    }
  });

  // Show toast notification with copy button
  const toast = document.createElement('div');
  toast.innerHTML = `
    <div id="coord-toast" style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 10001; background: #1f2937; color: white; padding: 16px 20px; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.4); font-size: 13px; min-width: 350px; animation: slideUp 0.3s ease-out;">
      <div style="font-weight: bold; margin-bottom: 10px; font-size: 14px;">📍 Koordinat Diklik (Dev Mode)</div>
      <div style="font-family: monospace; font-size: 12px; background: #374151; padding: 8px 10px; border-radius: 6px; margin-bottom: 10px; text-align: center; letter-spacing: 0.5px;">${coordString}</div>
      <button id="copy-coord-btn" style="width: 100%; background: #3b82f6; color: white; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600; transition: all 0.2s; box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);">
        📋 Klik untuk Copy
      </button>
    </div>
  `;

  // Add animation keyframes if not exists
  if (!document.getElementById('toast-animation-style')) {
    const style = document.createElement('style');
    style.id = 'toast-animation-style';
    style.textContent = `
      @keyframes slideUp {
        from {
          transform: translateX(-50%) translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);

  // Add copy functionality
  const copyBtn = document.getElementById('copy-coord-btn');
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(coordString).then(() => {
      copyBtn.textContent = '✅ Tersalin ke Clipboard!';
      copyBtn.style.background = '#10b981';
      copyBtn.style.boxShadow = '0 2px 4px rgba(16, 185, 129, 0.3)';
    });
  });

  // Hover effect
  copyBtn.addEventListener('mouseenter', () => {
    if (!copyBtn.textContent.includes('Tersalin')) {
      copyBtn.style.background = '#2563eb';
      copyBtn.style.transform = 'scale(1.02)';
    }
  });
  copyBtn.addEventListener('mouseleave', () => {
    if (!copyBtn.textContent.includes('Tersalin')) {
      copyBtn.style.background = '#3b82f6';
      copyBtn.style.transform = 'scale(1)';
    }
  });

  setTimeout(() => {
    if (document.body.contains(toast)) {
      toast.style.transition = 'opacity 0.3s ease-out';
      toast.style.opacity = '0';
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
      }, 300);
    }
  }, 6000);
};
