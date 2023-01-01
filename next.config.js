/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY

const nextConfig = {
  reactStrictMode: true,
  // redirect requst(get) to other url
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false
      }
    ]
  },
  //mask api key in browser by rewriting url
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }

    ]
  }
}

module.exports = nextConfig
