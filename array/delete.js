var error = false;
var ok = true;

function ListDelete(list, pos) {
  if (list.length === 0) return error;
  if (pos < 0 || pos > list.length) return error;

  list.splice(pos, 1);
  return ok;
}