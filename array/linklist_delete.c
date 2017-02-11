#include "array.h"

Status ListDelete(LinkList *L, int i, ElemType *e) {
  int j = 1;
  LinkList p;
  p = *L;

  while (p->next && j < i) {
    p = p->next;
    ++j;
  }

  if (!(p->next) || j > i) return ERROR;
  p->next = p->next->next;
  *e = p->next->data;
  free(p->next);
  return OK;
}