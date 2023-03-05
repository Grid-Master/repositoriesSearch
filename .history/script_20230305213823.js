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
    console.log(repositories);
    repositories.map((repository) => repositoriesNames.push(repository.name));

    for (let i = 0; i < repositories.length; i++) {
      if (repositoriesNames[i].toLowerCase().includes(name)) {
        let li = document.createElement('li');
        li.innerHTML = `${repositoriesNames[i]}`;
        list.append(li);
      }
    }
  }
}

// let enterEvent = document.getElementById('reposName').addEventListener('keydown', function (e) {
//   if (e.keyCode == 13) {
//     return false;
//   }
//   return true;
// });
