#include "array.h"

Status ListInsert(LinkList *L, int i, ElemType e) {
  int j = 1;
  LinkList p, s;
  p = *L;

  while (p && j < i) {
    p = p -> next;
    ++j;
  }

  if (!p || j > i) return ERROR;
  s->data = e;
  s->next = p->next;
  p->next = s;

  return OK;
}