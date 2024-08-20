---
layout: default
course_number: CS350
title: Intro to C++
---

For this course we will be implementing a variety of data structures using C++. Like Java, C++ is an object-oriented 
programming language. However, since it is an extension of C, there are several key differences - most notably:

  - Rather than requiring separate overloaded constructors, often a single constructor with *default* parameters can be used.

  - Constructors typically use *initialization lists* (utilizing the parameters) for many of the class fields.

  - Classes have a *destructor* that must be called (indirectly) when an object is no longer needed (i.e. it is going out of scope).
  The *destructor* is responsible for any necessary cleanup, particularly of any dynamically allocated memory.

  - Often the class declaration (i.e. interface) will be placed in a *header* file (usually with extension **```.h```**) 
  with the method definitions being placed in an *implementation* file (usually with extension **```.cpp```**). The method 
  definitions must be qualified with the class name in the implementation file.

  - The **```new```** operator is used for dynamic memory allocation, but returns an *address* which must be assigned to 
  a *pointer* of appropriate type.

  - Any dynamically allocated memory must be freed using the **```delete```** operator to avoid memory leaks. This is
  also how you will call the *destructor* for an object when you no longer need that object.
<br><br>


## Java vs. C++

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

This section examines some of the differences between Java and C++.


### Class Implementation

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Below is an example Java implementation of a simple class that contains the various coin denominations with a few simple interface methods


```cpp
public class Coins {
    private int pennies;
    private int nickels;
    private int dimes;
    private int quarters;
    
    // Constructors
    public Coins() {
        pennies = 0;
        nickels = 0;
        dimes = 0;
        quarters = 0;
    }
    
    public Coins(int p, int n, int d, int q) {
        pennies = p;
        nickels = n;
        dimes = d;
        quarters = q;
    }
    
    // Interface methods
    public int findCentsValue() {
        int cents;    
        cents = 25*quarters + 10*dimes + 5*nickels + pennies;    
        return cents;
    }
        
    public int findDollars() {
        int cents = findCentsValue();
        return cents/100;
    }
        
    public int findChange() {
        int cents = findCentsValue();
        return cents%100;
    }
}
```



<br>    
The equivalent C++ class declaration (in **```Coins.h```**) would be

```cpp
class Coins {
private:
    int pennies;
    int nickels;
    int dimes;
    int quarters;
        
public:
    // Constructor (this constructor can be used 5 different ways)
    Coins(int p=0, int n=0, int d=0, int q=0):
        pennies(p),nickels(n),dimes(d),quarters(q){};
        
    // Destructor
    ~Coins(){};
        
    // Interface methods
    int findCentsValue();
    int findDollars();
    int findChange();
};
```

    
<br>
Note that only a single constructor is necessary to get the same behavior as two constructors in Java.
If no parameters are passed to the constructor, it simply uses all the default parameter values. 
Also rather than each member variable and method's visibility needing to be individually specified, C++ 
visibility can be specified in blocks.

The implementation for the methods (in **```Coins.cpp```**) would be


```cpp
#include "Coins.h"
    
int Coins::findCentsValue() {
    int cents;
    cents = 25*quarters + 10*dimes + 5*nickels + pennies;
    return cents;
}
    
int Coins::findDollars() {
    int cents = findCentsValue();
    return cents/100;
}
    
int Coins::findChange() {
    int cents = findCentsValue();
    return cents%100;
}
```
<br>

    
### Instantiating and Freeing Objects in C++

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Note that each method name is qualified with the name of the class (and no visibility specifiers are present in the 
definitions).

Instantiation an object of type ```Coins``` can be done in several ways:

```cpp
Coins c0;                       // Static allocation using all default constructor values
Coins c1();                     // Static allocation using all default constructor values (same as c0)
Coins c2(1,3,0,2);              // Static allocation using specified constructor values
Coins *c3 = new Coins();        // Dynamic allocation using all default constructor values
Coins *c4 = new Coins(1,3,0,2); // Dynamic allocation using specified constructor values
...
Coins *c5;                      // Declare pointer without associated object (i.e. an uninitialized pointer)
c5 = new Coins(1,3,0,2);        // Dynamically allocate object and assign to pointer
```


<br>
Note that **```c3```**, **```c4```**, and ```c5``` are *pointers* to **```Coins```** objects. To call the methods for the statically 
allocated objects, the *dot operator* is used. For calls to the methods in the dynamically allocated objects (since it is 
done *indirectly* through the pointer), the *arrow operator* is used. For example,


```cpp
int c0Cents   = c0.findCentsValue();
int c1Dollars = c1.findDollars();
int c2Change  = c2.findChange();

int c3Cents   = c3->findCentsValue();
int c4Dollars = c4->findDollars();
int c5Change  = c5->findChange();
```


<br>
For the dynamically allocated objects, to prevent memory leaks there would need to be corresponding calls

```cpp
delete c3;
delete c4;
delete c5;
```
<br>


### Dynamically Allocating and Freeing Arrays in C++ 

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    
<br>
To dynamically allocate an array, the **```new```** operator is used with the desired array size as

```cpp
int *a = new int[size];  // Declare pointer, dynamically allocate array, and assign on same line

int *b;                  // Declare pointer 
b = new int[size];       // and then dynamically allocated array and assign on separate lines
```

    
where the integer array **```a```** is dynamically allocated with **```size```** elements.

Accessing array elements is done exactly as you would expect
```cpp
int valueAtIndexZero = a[0];
a[1] = newValueForIndexOne;
```

To free a dynamically allocated array, simply specify that the **```delete```** operator is freeing an array as

```cpp
delete[] a;        // NOTE the square brackets when deleting an array
delete[] b;        // NOTE the square brackets when deleting an array
```

