#ifndef _Cursor_H_

#define SpaceSize 100 

typedef int PtrNode;
typedef PtrNode List;
typedef PtrNode Position;

void InitializeCursorSpace(void);

List MakeEmpty(List L);
int IsEmpty(const List L);
int IsLast(const Position p, const List L);
Position Find(ElementType x, const List L);
Position FindPrevious(ElementType x, const List L);
void Delete(ElementType x, List L);
void Insert(ElementType x, Position p);
void DeleteList(List L);
Position Header(const List L);
Position First(const List L);
Position Advance(const Position p);
ElementType Retrieve(const Position p);

#endif