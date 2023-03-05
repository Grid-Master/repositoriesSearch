let repositories = ['111', '2222', '3333'];

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
  let name = document.getElementById('reposName').value;
  let list = document.getElementById('list');

  console.log(list.append);

  if (name) {
    let li = document.createElement('li');
    li.innerHTML = 'name2';
    list.append(li);
  }
}
