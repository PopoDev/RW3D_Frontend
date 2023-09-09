/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "https://rw3d-backend.vercel.app/api/:path*"
            : "https://rw3d-backend.vercel.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
