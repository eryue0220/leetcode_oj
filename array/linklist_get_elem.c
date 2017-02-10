#include "array.h"

Status GetElem(LinkList * L, int i, ElemType *e) {
  int j = 1;
  LinkList p;
  p = L -> next;

  while (p && j < i) {
    p = p -> next;
    ++j;
  }

  if (!p || j > i) return ERROR;
  *e = p -> data;
  return OK;
}