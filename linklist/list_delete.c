#include "link_list.h"

Status ListDelete(LinkList &L, int i, ElemType &e) {
  LinkList p;
  int j = 0;
  
  while (p -> next && j < i - 1) {
    p = p -> next;
    ++j;
  }

  if (!(p -> next) || j > i - 1) return ERROR;

  q = p -> next;
  p -> next = q -> next;
  e = q -> data;
  free(q);

  return OK;
}