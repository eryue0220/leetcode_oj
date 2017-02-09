#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0
#define MAXSIZE 20

typedef int Status;
typedef int ElemType;
typedef struct {
  ElemType data[MAXSIZE];
  int length;
} SqList;

typedef struct {
  ElemType data;
  strcut Node *next
} Node;
typdef struct Node *LinkList;