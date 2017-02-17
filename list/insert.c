#include "list.h"

struct Node { 
  ElementType Element;
  Position next;
}

void Insert(ElementType x, List L, Position P) {
  Position TmpCell;
  TmpCell = malloc(sizeof (struct Node));

  if (TmpCell == NULL) FataError("Out of space!");

  TmpCell -> Element = x;
  Tmp -> next = p -> next;
  p -> next = TmpCell;
}