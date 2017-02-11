/**
 * 静态链表插入操作
 */

#include "array.h"
#include "list.h"

Status sll_insert(StaticLinkList L, int i, ElemType e) {
  int i, k, l;
  k = MAXSIZE - 1;
  
  if (i < 1 || i > ListLength(L) + 1) return ERROR;
  j = malloc_sll(L);
  if (!j) return ERROR;

  L[j].data = e;
  for (l = 1; l < i - 1; l++) {
    k = L[k].cur;
  }
  L[j].cur = L[k].cur;
  L[k].cur = j;
  
  return OK;
}