let repositories = [];

async function getRepositories() {
  let response = await fetch(`https://api.github.com/repositories`);
  repositories = await response.json();
}

async function searchRepositories() {
  let name = document.getElementById('reposName').value;
  let err = document.getElementById('err');
  let list = document.getElementById('list');
  let repositoriesNames = [];

  list.innerHTML = null;

  if (name) {
    err.innerText = '';
    await getRepositories();
    repositories.map((repository) => repositoriesNames.push(repository.name));
    for (let i = 0; i < repositories.length; i++) {
      if (list.childNodes.length == 20) {
        break;
      } else if (repositoriesNames[i].toLowerCase().includes(name.toLowerCase())) {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', repositories[i].html_url);
        link.setAttribute('target', '_blank');
        link.innerText = `Репозиторий - ${repositoriesNames[i]}`;
        li.innerHTML = link;
        list.append(link, `Id - ${repositories[i].id}  Создатель - ${repositories[i].owner.login}`);
      }
    }
    if (!list.hasChildNodes()) {
      list.append('Ошибка. Ничего не найдено');
    }
    document.getElementById('reposName').value = '';
  } else {
    err.innerText = 'Недостаточно символов';
  }
}
