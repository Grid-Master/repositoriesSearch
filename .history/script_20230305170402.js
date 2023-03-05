async function getRepositories() {
  let response = await fetch('https://api.github.com/users');

  let repositories = await response.text();

  return repositories;
}
console.log(getRepositories());
