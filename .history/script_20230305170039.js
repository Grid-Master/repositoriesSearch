async function getRepositories() {
  let response = await fetch('https://api.github.com/users');

  return response;
}
console.log(response);
