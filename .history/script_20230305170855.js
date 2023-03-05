async function getRepositories() {
  let response = await fetch('https://api.github.com/repositories');

  let repositories = await response.json();

  console.log(repositories.map((rep) => rep.name));
}

getRepositories();
//console.log(getRepositories());
