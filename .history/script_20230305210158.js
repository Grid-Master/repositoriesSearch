let repositories = [];

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
  console.log(list);

  if (name) {
    // for(let i =0; i< repositories.length; i++) {
    //     list.innerHTML
    // }
  }
}
