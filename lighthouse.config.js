module.exports = {
    extends: 'lighthouse:default',
    overrides: {
      settings: {
        throttling: {
          cpu: 4, // Adjust CPU throttling as needed
          requestNetwork: {
            throughput: 1.2,
            latency: 200
          }
        }
      }
    }
  };