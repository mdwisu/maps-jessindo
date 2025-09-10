module.exports = {
  apps: [{
    name: 'maps-jessindo',
    script: 'serve',
    args: ['-s', 'dist', '-l', '7002'],
    cwd: 'D:/projects/maps-jessindo',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 7002
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};