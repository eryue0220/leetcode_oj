/**
 * 初始化静态链表
 */

 #include "array.h"

 Status InitStaticLinkList(StaticLinkList space) {
   int i;
   
   for (i = 0; i < MAXSIZE; i++) {
     space[i].cur = i + 1; 
   }
   // 当前静态链表为空，则最后一个元素的cur为0
   space[MAXSIZE - 1].cur = 0;
   return OK;
 }