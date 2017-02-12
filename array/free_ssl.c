#include "array.h"
#include "list.h"

void free_ssl(StaticLinkList space, int k) {
  space[k].cur = space[0].cur;
  space[0].cur = k;
}