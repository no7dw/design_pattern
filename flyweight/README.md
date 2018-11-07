### 使用场景

原本的意图：
	类的instance 有 实例化其他大并且多的对象 ，使用一个hash / array 来存储已经有过的、不变的对象，以减少创建更多的对象（减少资源的占用）

actually: 这个模式我认为是当今比较少用/没什么用的

大部分的场景可以通过 static 化共享的不变对象来实现：


```
	class AClass {
	   static binstance = new BLargeClass()
	   static cinstance = new CLargeClass()
	   doSth(){}
	}

```

