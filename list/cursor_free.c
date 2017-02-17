#include "cursor.h"

struct Node {
  ElementType Element;
  Position Next;
}

struct Node CursorSpace[SpaceSize];

static void CursorFree(Position p) {
  CursorSpace[p].next = CursorSpace[0].next;
  CursorSpace[0] = p;
}