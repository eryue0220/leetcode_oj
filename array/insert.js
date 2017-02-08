var maxsize = 20;
var ok = true;
var error = false;

function insert(array, pos, elem) {
  if (array.length === maxsize) return error;
  if (pos < 1 || pos > array.length + 1) return error;

  if (pos <= array.length) {
    for (var k = array.length - 1; k >= pos - 1; k--) {
      array[k + 1] = array[k];
    }
  }
  array[pos - 1] = elem;
  return ok;
}