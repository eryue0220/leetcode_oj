#include "list.h"

void DeleteList(List L) {
  Position p;

  p = L -> next;
  L -> next = NULL;
  
  while (p) {
    free(p);
    p = p -> next;
  }
}