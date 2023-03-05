let repositories = [];

async function getRepositories() {
  let response = await fetch(`https://api.github.com/repositories`);

  repositories = await response.json();
}

async function func1() {
  await getRepositories();
  console.log(repositories.slice(0, 10));
  console.log(repositories.length);
}

func1();
