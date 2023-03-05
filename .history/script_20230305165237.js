let arr = async () => {
  let res = await fetch('https://api.github.com/users');

  return res;
};

console.log(arr());
