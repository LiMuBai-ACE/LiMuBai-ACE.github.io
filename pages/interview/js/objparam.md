---
isTimeLine: true
title: 函数参数是对象会发生什么问题
date: 2020-04-14
tags:
 - 面试
 - javascript
categories:
 - 面试
---
# 函数参数是对象会发生什么问题
1. 函数传参是传递对象指针副本
2. 在函数内部改变对象属性会影响原来的值

>ECMAScript中所有函数的参数都是按值传递的。

* 值传递:从原来的value上拷贝了一份新的_value
* 引用传递:传递对象的引用
* 共享传递:传递对象的引用的副本

**总结**
* 基本类型按值传递
* 引用类型按共享传递
* 拷贝副本也是一种值的拷贝

