### 使用场景

原本的意图：
	类的instance 有 实例化其他大并且多的对象 ，使用一个hash / array 来存储已经有过的、不变的对象，以减少创建更多的对象（减少资源的占用, 通过cache/pool 方式来加快实例化的速度）

actually: 这个模式我认为是当今比较少用/没什么用的

大部分的场景可以通过 static 化共享的不变对象来实现：


```
	class AClass {
	   static binstance = new BLargeClass()
	   static cinstance = new CLargeClass()
	   doSth(){}
	}

```

较真一点，flyweight 的sample code,结合上面有以下不一样的点：
  
  - 检查要的内容有没有，如果没有，则实例化
  - 使用hash/array 存已经实例化过的instance


[flyweight in real world](https://dzone.com/articles/design-patterns-in-the-real-world-flyweight)
[order system using flyweight](https://medium.com/@rafacdelnero/design-patterns-saga-18-real-world-situations-with-flyweight-8a6a2d94e32f)

如上面的order system , 我完全可以简化成：

 [simple flyweight](https://github.com/no7dw/design_pattern/flyweight/p.js)

