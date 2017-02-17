#include "list.h"

Position Find(Element x, CursorSpace L) {
  Position p;
  p = CursorSpace[L].next;

  while (p !== NULL && p.Element != x) 
    p = CursorSpace[p].next;

  return p;
}