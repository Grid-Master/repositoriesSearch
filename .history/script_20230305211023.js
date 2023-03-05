let repositories = ['111', '2222', '3333'];

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

  if (name) {
    await getRepositories;
    console.log(repositories);
    // for (let i = 0; i < repositories.length; i++) {
    //   let li = document.createElement('li');
    //   li.innerHTML = repositories[i];
    //   list.append(li);
    // }
  }
}
