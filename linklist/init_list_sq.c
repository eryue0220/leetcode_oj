#include "link_list.h"
#include "link_list_func.h"

Status InitList_Sq(SqList &L) {
  L.elem = (ElemType *)malloc(sizeof(ElemType));
  if (!L.elem) return ERROR;
  
  L.length  = 0;
  L.listsize = LIST_INIT_SIZE;

  return OK;
}