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
      if (i < 10) break;
      else if (repositoriesNames[i].toLowerCase().includes(name)) {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', repositories[i].html_url);
        link.innerText = `${repositories[i].id} - ${repositoriesNames[i]}`;
        li.innerHTML = link;
        list.append(link);
      }
    }
    document.getElementById('reposName').value = '';
  }
}