var error = false;
var ok = true;

function getElem(list, pos) {
  if (!list.length || pos < 1 || pos > list.length) return false;
  return list[pos];
}