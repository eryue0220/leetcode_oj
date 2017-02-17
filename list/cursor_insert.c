#include "cursor.h"

void Insert(ElementType x, List L, Position p) {
  Position tmpCell;
  tmpCell = CursorAlloc();

  if (tmpCell == 0) return;

  CursorSpace[tmpCell].Element = x;
  CursorSpace[tmpCell].next = CursorSpace[p].next;
  CursorSpace[p].next = CursorSpace[tmpCell];
}