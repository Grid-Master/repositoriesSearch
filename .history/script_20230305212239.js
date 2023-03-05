let repositories = [];

async function getRepositories() {
  let response = await fetch(`https://api.github.com/repositories`);
  repositories = await response.json();
}

async function searchRepositories() {
  let name = document.getElementById('reposName').value;
  let list = document.getElementById('list');
  let repositoriesNames = [];

  list.innerHTML = null;

  if (name) {
    await getRepositories();
    repositories.map((repository) => repositoriesNames.push(repository.name));
    console.log(repositoriesNames);

    for (let i = 0; i < repositories.length; i++) {
      if (repositoriesNames[i].toLowerCase().includes(name)) {
        let li = document.createElement('li');
        li.innerHTML = repositoriesNames[i];
        list.append(li);
        console.log('repeat');
      }
    }
  }
}
