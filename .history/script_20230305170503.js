async function getRepositories() {
  let response = await fetch('https://api.github.com/users');

  let repositories = await response.json();

  console.log(repositories);
}

getRepositories();
//console.log(getRepositories());
