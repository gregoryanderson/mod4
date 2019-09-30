function testNum(num) {
  return new Promise(function(resolve, reject) {
    if (num > 10) {
      return resolve("Success");
    } else {
      return reject("Baaaad");
    }
  });
}

testNum(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

testNum(5)
  .then(result => console.log(result))
  .catch(error => console.log(error));

function makeAllCaps(words) {
  return new Promise(function(resolve, reject) {
    if (words.includes(typeof number)) {
      return reject("baaad");
    } else {
      return resolve(
        words.forEach(word => {
          return word.toUpperCase();
        })
      );
    }
  });
}

function sortWords(words) {
  return words.sort();
}

makeAllCaps(["wowow", "pants", "bird"])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["wowow", 5, "bird"])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error));
