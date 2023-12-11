import { createProxyMiddleware } from 'http-proxy-middleware';
import { Application } from 'express';

module.exports = function (app: Application) {
  app.use(
    '/api',  // The path you want to proxy (adjust this as needed)
    createProxyMiddleware({
      target: 'https://api.rawg.io',  // The target URL of the API
      changeOrigin: true,
    })
  );
};
