import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
const getCache = ({ name, pattern }: any) => ({
  urlPattern: pattern,
  handler: "CacheFirst" as const,
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2, // 2 years
    },
    cacheableResponse: {
      statuses: [200],
    },
  },
});
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          getCache({
            pattern: /^https:\/\/mwcjson.vercel.app\/warta/,
            name: "warta",
          }),
        ],
      },
      includeAssets: ["icon-192x192.png", "icon-512x512.png", "nu.jpg"],
      manifest: {
        name: "NU RANCAEKEK",
        short_name: "NU RANCAEKEK",
        description: "Majelis Wakil Cabang Nahdlatul Ulama Kecamatan Rancaekek",
        theme_color: "#ffffff",
        icons: [
          {
            src: "nu.jpg",
            sizes: "512x512",
            type: "image/jpg",
          },
          {
            src: "icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
