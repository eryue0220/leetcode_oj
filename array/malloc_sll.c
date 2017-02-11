/**
 * 静态链表的malloc
 */

#include "array.h"

int malloc_sll(StaticLinkList space) {
  int i = space[0].cur;
  if (space[0].cur) {
    space[0].cur = space[i].cur;
  }

  return i;
}