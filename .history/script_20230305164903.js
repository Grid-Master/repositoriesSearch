fetch('https://api.github.com/users')
  .then((response) => response.json())
  .then((result) => result);
