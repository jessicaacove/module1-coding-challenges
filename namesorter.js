function namesSorter (departmentsArray) {
  var arr = [];

  departmentsArray.forEach((subarray) => {
    subarray.forEach((name) => {
      arr.push(name);
    });
  });

  arr.sort(function(a, b) {
    return a.length - b.length || a.localeCompare(b);
  });

  return arr;
}
