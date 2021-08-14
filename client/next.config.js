/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    API_KEY: 'bf48fa1bd2bbd60c33258e6880c519fc',
    MAPBOX_API_KEY:
      'pk.eyJ1IjoibGVhbmRyb2ZhaHVyIiwiYSI6ImNrc2MxNHpscTBjY2gyb3AzaWJvang0MWQifQ.8YlNhNEvHNM9e8EiaYSKtQ',
  },
  images: {
    domains: ['assets.weatherstack.com'],
  },
};
