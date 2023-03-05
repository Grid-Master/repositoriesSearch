let repositories = [];
const token = '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';

async function getRepositories() {
  let response = await fetch(`https://api.github.com/repositories`
  });

  repositories = await response.json();
}

async function func1() {
  await getRepositories();
  console.log(repositories);
  console.log(repositories.length);
}

func1();
