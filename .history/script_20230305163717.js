const repositories = fetch('https://api.github.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  });

console.log(repositories());
