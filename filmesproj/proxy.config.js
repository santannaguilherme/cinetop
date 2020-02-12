const proxy = [
    {
      context: '/api',
      target: 'https://cinetoplus-decola.azurewebsites.net/',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;