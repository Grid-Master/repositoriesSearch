let arr = fetch('https://api.github.com/users')
  .then((response) => response.json())
  .then((result) => result);

console.log(arr);
