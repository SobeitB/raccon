module.exports = {
   webpack: {
      resolve: { 
         fallback: {
            stream: require.resolve('stream-browserify'),
            os: require.resolve('os-browserify/browser'),
            http:require.resolve("stream-http"),
            https:require.resolve("https-browserify")
         }
      }    
   }
};