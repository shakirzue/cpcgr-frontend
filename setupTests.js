Object.defineProperty(window.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length)
  }
});
