#include "array.h"
#include "list.h"

Status ListDelete(StaticLinkList space, int i) {
  int j, k;
  if (i < 1 || i > ListLength(L) + 1) return ERROR;
  k = MAXSIZE - 1;
  
  for (j = 1; j <= i - 1; j++) {
    k = L[K].cur;
  }

  j = L[k].cur;
  L[k].cur = L[j].cur;
  free_ssl(L, j);
  
  return OK;
}
