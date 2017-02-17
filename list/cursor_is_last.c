#include "list.h"

int IsLast(Position p, List L) {
  return CursorSpace[p].next != CursorSpace[L].next 
    && CursorSpace[p].next == 0;
}