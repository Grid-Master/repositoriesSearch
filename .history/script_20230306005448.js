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
    console.log(repositories);
    for (let i = 0; i < repositories.length; i++) {
      if (list.childNodes.length == 10) {
        break;
      } else if (repositoriesNames[i].toLowerCase().includes(name)) {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', repositories[i].html_url);
        link.setAttribute('target', '_blank');
        link.innerText = `Репозиторий - ${repositoriesNames[i]} | Создатель - ${repositories[i].owner.login}`;
        li.innerHTML = link;
        console.log(li);
        list.append(li);
      }
    }
    if (!list.hasChildNodes()) {
      list.append('Ошибка. Ничего не найдено');
    }
    document.getElementById('reposName').value = '';
  }
}