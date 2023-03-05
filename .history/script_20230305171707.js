let repositories = [];

async function getRepositories() {
  let response = await fetch(`https://api.github.com/repositories?total=${10}`);

  repositories = await response.json();
}

getRepositories();

//console.log(getRepositories());
