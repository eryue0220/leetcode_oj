#include "list.h"

Position FindPrevious(ElementType x, List L) {
  Position p;
  p = L;
  while (p -> next != NULL && p -> next -> Element != x) {
    p = p -> next;
  }

  return p;
}