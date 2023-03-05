async function getRepositories() {
  let response = await fetch('https://api.github.com/users');

  let repositories = await response.json();

  return repositories;
}
console.log(getRepositories());
