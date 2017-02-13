#define LIST_INIT_SIZE 100
#define LISTINCREMENT 10
#define ERROR 0
#define OK 1

typedef int Status; 
typedef struct {
  ElemType *elem;
  int length;
  int listsize;
} SqList;

typedef struct LNode {
  ElemType data;
  struct LNode * next;
}LNode, *LinkList;