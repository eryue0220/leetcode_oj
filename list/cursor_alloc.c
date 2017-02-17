#include "cursor.h"

struct Node {
  ElementType Element;
  Position Next;
};

struct Node CursorSpace[SpaceSize];

Static Position CursorAlloc(void) {
  Position p;
  p = CursorSpace[0].next;
  CursorSpace[0].next = CursorSpace[p].next;

  return p;
}