async function getRepositories() {
  let response = await fetch('https://api.github.com/users');

  let repositories = response.json();

  return repositories;
}
console.log(getRepositories());
