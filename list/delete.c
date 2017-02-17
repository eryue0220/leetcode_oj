#include "list.h"

void Delete(ElementType x, List L) {
  Position p, tmpCell;
  p = FindPrevious(x, L);

  if (!IsLast(p, l)) {
    tmpCell = p -> next;
    p -> next = tmpCell -> next;
    free(tmpCell);
  }
}