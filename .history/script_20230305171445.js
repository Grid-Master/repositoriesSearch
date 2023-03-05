async function getRepositories() {
  let response = await fetch(`https://api.github.com/repositories?${10}`);

  let repositories = await response.json();

  console.log(repositories.map((rep) => rep.name));
}

getRepositories();
//console.log(getRepositories());
