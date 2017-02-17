#ifndef _List_H_

struct Node;
typedef struct Node *PtrNode;
typedef PtrNode List;
typedef PtrNode Position;

List MakeEmpty(List L);
int IsEmpty(List L);
int IsLast(List L);
Position Find(ElementType x, List L);
void Delete(ElementType x, List L);
Position FindPrevious(ElementType x, List L);
void Insert(ElementType x, List L, Position p);
void DeleteList(List L);
Position Header(List L);
Position First(List L);
Position Advance(Position p);
ElementType Retrieve(Position p);

#endif