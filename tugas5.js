function panggilkelipatan() {
  var data = []
  for (var i = 1; i < 20; i++) {
    if (i%3 === 0) {
      data.push(i)
    }
  }
  return data;
}
console.log(panggilkelipatan());
