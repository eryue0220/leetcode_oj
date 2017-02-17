#include "list.h"

Position Find(ElementType x, List L) {
  Position p;
  p = L -> next;
  while (p != NULL && p -> Elmenet != x)
    p = p -> next;

  return p;
}