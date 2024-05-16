/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.maxSize = 200000; // Ajustar el tamaño de los chunks para reducir el uso de memoria
    }
    return config;
  },
};
