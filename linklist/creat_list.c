#include "link_list.h"

void CreateList_L(LinkList &L, int n) {
  int i;
  LinkList L, p;
  L = (LinkList) malloc (sizeof(LNode));
  L -> next = null;

  for (i = n; i > 0; --i) {
    p = (LinkList) malloc (sizeof(LNode));
    scanf(&p -> data);
    p -> next = L ->next;
    L -> next = p; 
  }
}