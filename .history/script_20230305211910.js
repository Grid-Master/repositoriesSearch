let repositories = [];

async function getRepositories() {
  let response = await fetch(`https://api.github.com/repositories`);
  repositories = await response.json();
}

// async function func1() {
//   await getRepositories();
//   console.log(repositories);
//   console.log(repositories.length);
// }

async function searchRepositories() {
  let name = document.getElementById('reposName').value;
  let list = document.getElementById('list');
  let li = document.createElement('li');
  let repositoriesNames = [];

  if (name) {
    await getRepositories();
    repositories.map((repository) => repositoriesNames.push(repository.name));
    console.log(repositoriesNames);

    for (let i = 0; i < repositories.length; i++) {
      if (repositoriesNames[i].toLowerCase().includes(name)) {
        li.innerHTML = repositoriesNames[i];
        list.append(li);
      }
    }
  }
}
