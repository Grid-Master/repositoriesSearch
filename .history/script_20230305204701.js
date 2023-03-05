let repositories = [];

async function getRepositories() {
  let response = await fetch(`https://api.github.com/repositories`);

  repositories = await response.json();
}

async function func1() {
  await getRepositories();
  console.log(repositories);
  console.log(repositories.length);
}

function searchRepositories() {
  console.log(1);
}
