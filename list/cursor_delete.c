#include "cursor.h"

void Delete(ElementType x, List L) {
  Position p, tmpCell;
  p = FindPrevious(x, L);

  if (!IsLast(p, L)) {
    tmpCell = CursorSpace[p].next;
    CursorSpace[p].next = CursorSpace[tmpCell].next;
    CursorFree(tmpCell);
  }
}
