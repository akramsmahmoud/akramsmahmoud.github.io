---
author: Akram
pubDatetime: 2023-05-01
title: Mutable or Immutable, Understanding JavaScript's Yin and Yang
postSlug: mutable-or-immutable
featured: true
draft: false
tags:
  - javascript
ogImage: ""
description: Mutable or Immutable
---

As a JavaScript developer, understanding the concepts of mutability and immutability is crucial. These concepts refer to the ability of an object to be changed or not. Mutability means that an object can be altered, while immutability means that an object cannot be changed once it is created.

## Table of contents

Let's explore these concepts further and see how they can affect our code.

## Mutability

In JavaScript, most objects are mutable by default. This means that you can change their properties, add new properties, or even delete properties. For example, consider the following code:

```javascript
let person = {
  name: "John",
  age: 30,
};

person.age = 31;
console.log(person);
```

In this example, we are changing the value of the age property of the person object. This is possible because objects in JavaScript are mutable.

While mutability can be useful in certain cases, it can also lead to unexpected behavior. Consider the following code:

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

console.log(arr1); // Output: [1, 2, 3, 4]
```

In this example, we are creating two arrays `arr1` and `arr2`. We then assign `arr1` to `arr2`, which means that they both refer to the same object. We then add a new element to `arr2`, which also modifies `arr1` because they are the same object. This can lead to unexpected bugs in our code.

## Immutability

Immutability, on the other hand, means that an object cannot be changed once it is created. In JavaScript, primitive types such as strings and numbers are immutable. This means that you cannot change their value once they are created.

For example, consider the following code:

```javascript
let str = "Hello";
str[0] = "h";
console.log(str); // Output: "Hello"
```

In this example, we are trying to change the first character of the `str` variable from "H" to "h". However, since strings are immutable in JavaScript, this has no effect on the value of `str`.

Immutability can be useful in certain cases because it can help prevent unexpected changes to our code. For example, consider the following code:

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4];

console.log(arr1); // Output: [1, 2, 3]
console.log(arr2); // Output: [1, 2, 3, 4]
```

In this example, we are creating a new array `arr2` by using the spread operator (...) to copy the elements of `arr1` and adding a new element to the end. This creates a new array and leaves the original `arr1` unchanged.

## Conclusion

Understanding the concepts of mutability and immutability is important for writing reliable and bug-free code in JavaScript. While mutability can be useful in certain cases, it can also lead to unexpected behavior and bugs. Immutability, on the other hand, can help prevent unexpected changes to our code and make it more reliable.
