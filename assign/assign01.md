---
layout: default
course_number: CS350
title: "Assignment 1: Integer Array Stack"
---


<br>

In this assignment, you will implement a stack data structure that contains (non-negative) integer values. The stack 
will be backed by an array which will be dynamically resized for space efficiency. 



<br>

### Getting Started

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

If you don't already have one, create a directory on your **H:** drive named **CS350** (or anywhere else you choose). 
Navigate into this new directory and create a subdirectory named **assignments**.

Download [IntArrayStack.zip](IntArrayStack.zip), saving it into the **assignments** directory. 

Double-click on **IntArrayStack.zip** and extract the contents of the archive into a subdirectory called **IntArrayStack**

For this assignment, a static library has been provided (containing working versions of each method) to allow for testing of 
each class method independently. Any unimplemented methods in **IntArrayStack.cpp** will use the corresponding method 
from the library, thus you can implement the methods in any order. Be sure to test each method you implement 
individually against the library for proper operation which can be accomplished by uncommenting the appropriate 
**```#define```** in the file **Flags.h** (and commenting the line containing **```#define ALL 1```**).  
**DO NOT MODIFY ANY OF THE OTHER ```.h``` FILES INCLUDED WITH THE ASSIGNMENT**.
 

The class declaration is 

```cpp
class IntArrayStack
{
private:
    // Class variables
    int *stack;
    int capacity;
    int top;

    // (Private) utility methods
    void resize(int newCapacity);
    
public:
    IntArrayStack();
    ~IntArrayStack();
    
    // Public interface
    void push(int x);
    int pop();
    int peek();
    void emptyStack();
    bool isEmpty();

    void printStack();
    int getCapacity();
    int getSize();
    int getTop();
    void toArray(int* arr);
};
```



<br>

### 1. Constructor / Destructor

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Since the backing array will be resizable for space efficiency, we will need to dynamically allocate it in the 
constructor and then deallocate it in the destructor.

**Tasks**

  - Add code to **```IntArrayStack()```** (in **IntArrayStack.cpp**) to dynamically allocate an initial array of size 1. 
  Do not forget to also set the **```capacity```** and **```top```** indicies appropriately.  Use a value of **```-1```** 
  to initialize your value for **```top```**.
  
  - Add code to **```~IntArrayStack()```** to free the memory pointed to by **```stack```**. Note: **```stack```** is 
  an *array* so deallocate it appropriately.



<br>

### 2. Push()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Inserting elements, (i.e. *pushing* them), onto a stack only occurs at the top of the stack (i.e. first in, last out). 
In order to have the stack use space efficiently, the backing array should grow dynamically as necessary. Use the 
following rule to determine when to expand the array:

  - If the stack is full, double the capacity of the backing array.

**Tasks**

  - Add a **```void```** method named **```push()```** (don't forget to qualify it with the class name) that takes a 
  single **```int```** as an argument and pushes it onto the top of the stack. Hint: **```top```** keeps track of the 
  *array index* of the most recently inserted element.  When the stack is empty, **```top = -1```**.  The first integer 
  inserted into the stack should be stored at index 0 of the backing array.  Since you are dynamically allocating array 
  space, don't forget to check if the current stack array is full, before attempting to add the newest element to the 
  stack.  If the stack is full, double the capacity of the backing array via the **```resize()```** method.



<br>

### 3. Peek()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Peeking at the stack allows you to see what is on the top of the stack.  Peek should not modify the stack in anyway, 
but rather simply return the topmost value.

**Tasks**

  - Add a method named **```peek()```** (don't forget to qualify it with the class name) with no paramaters that returns 
  the element at the top of the stack.  Hint: **```top```** keeps track of the *index* of the most recently inserted 
  element.  Make sure the stack is not empty before attempting to retrieve the top element.  If the stack is empty, 
  then return **```-1```**.



<br>

### 4. Pop()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Removing elements, (i.e. *popping* them, from a (non-empty) stack only occurs at the top of the stack. In order to have 
the stack use space efficiently, the backing array should shrink dynamically as necessary. Use the following rule to 
determine when to contract the array:

  - **After** popping, if the stack is less than one-third full, half the capacity of the backing array.

**Tasks**

  - Add a method named **```pop()```** (don't forget to qualify it with the class name) with no parameters that returns 
  the element at the top of the stack.  Hint: **```top```** keeps track of the *index* of the most recently inserted 
  element.  Make sure the stack is not empty before attempting to retrieve the top element.  If the stack is empty, then 
  return **```-1```**.  Since you are dynamically allocating array space, do not forget to check if the *new* stack size 
  is less than *one-third* of the backing array capacity, *halving* the capacity of the backing array if necessary via the 
  **```resize()```** method.  Be careful that you don't halve your capacity if you only have a capacity of 1 ... if you 
  do, you'll end up with a capacity of 0!



<br>

### 5. EmptyStack()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

This operation should remove all the elements from the current stack.

**Tasks**

  - Add a **```void```** method named **```emptyStack()```** (don't forget to qualify it with the class name) that takes 
  no parameters and clears the stack.  Hint: This can be done efficiently by simply resetting the **```top```** index and
  then resizing the existing array to 1. 



<br>

### 6. IsEmpty()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

This utility method is useful to check for an empty stack.

**Tasks**

 - Add a method named **```isEmpty()```** (don't forget to qualify it with the class name) that takes no parameters and 
 returns a boolean value indicating whether or not the stack is empty. Hint: Consider the value of **```top```** that 
 indicates an empty stack.



<br>

### 7. Resize()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

In order to dynamically adjust the capacity of the backing array, we first note that following the rules discussed in 
sections 2 and 4 will never lose elements currently in the backing array. Thus the steps to resize the backing array 
are:

	1. Allocate a new array of the appropriate new capacity.
	2. Copy all the **valid** elements from the old backing array to the new backing array.
	3. Free the memory for the old backing array (while the pointer is still valid).
	4. Reassign the old array pointer to the new array address.
	
**Tasks**

  - Add a **```void```** method named **```resize()```** (don't forget to qualify it with the class name) that takes one 
  parameter for the new backing array capacity that changes the capacity of **```stack```** to the new capacity with the same values 
  as the original version.  Don't forget to update the **```capacity```** variable.  **Only copy valid data to the new backing array!** 

  

<br>

### 8. Compiling and running the program

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Once you have completed implementing any of the above methods (the remaining unimplemented methods will be drawn from the 
static library):

**In CLion:**  
From the "Run" menu, select "Run" (or click the "Run" button in the top right of the IDE)

**In the terminal:**  
Navigate to the directory containing the source files and run the command **```make```** to compile.

Run the command **```./IntArrayStack```**.

Congratulations, you have just written your first C++ data structure!



<br>
    
### 9. Testing your data structure
    
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    
The test program that is distributed with this programming assignment (**```tests.cpp```**) includes a variety of 
tests to verify the functionality of your newly created data structure.  However, the tests that are included with 
this assignment are not necessarily extensive and may not test all of the edge cases for your data structure. 

Part of developing any piece of software is creating the tests required to ensure correctness.  You should 
add any tests necessary to ensure complete correctness of your data structure. A good place to start is to
consider edge cases:

 - What happens when each method is called on an empty data structure?
 - What happens when each method is called on a full data structure?
 - What happens when each method is called on a data structure that has a single element?
 
**Be assured, that when your programming assignment is graded these edge cases (and more) will be tested.**

The testing framework used in **```tests.cpp```** in called [Catch](https://github.com/philsquared/Catch). 
Documentation can be found on the [Catch website](https://github.com/philsquared/Catch). 



<br>
    
### 10. Checking for memory leaks
    
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    
Memory leaks are the result of memory that is allocated but not properly freed.  In C++, each
time you use the **```new```** keyword you are allocating memory.  All instances of **```new```** 
should have a corresponding instance of **```delete```** to free the memory that was allocated.
This can be trickier than it sounds. Thankfully, there are tools such as [**```valgrind```**](http://valgrind.org) 
that can automatically analyze your program and detect these types of errors.

To check your program for memory leaks, 

**In CLion:**  
From the "Run" menu, select "Run ... with Valgrind Memcheck" (or click the "Memcheck" button in the top right of the IDE)

**In the terminal:**  
Navigate to the directory containing the source files and run the command **```make memcheck```** from the command line.

Fix any memory leaks that are detected.



<br>

### 11. Grading Criteria

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

**55 points**

* Constructor - **5 points**
* Destructor - **5 points**
* push() - **10 points**
* peek() - **5 points**
* pop() - **10 points**
* emptyStack() - **5 points**
* isEmpty() - **5 points**
* resize() - **10 points**



<br>

### 12. Submitting to Marmoset

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

**BE SURE TO REMOVE ALL DEBUG OUTPUT FROM YOUR METHODS PRIOR TO SUBMISSION!**  The only method in your 
**IntArrayStack.cpp** file that should print output is **```printStack()```**. 

Also, be sure to test ALL of your methods one last time by uncommenting the line **```#define ALL 1```**
in your **Flags.h** file.

When you are done, run the following command from your terminal in the source directory for the project:

	make submit

You will be prompted for your Marmoset username and password,
which you should have received by email.  Note that your password will
not appear on the screen.

**DO NOT MANUALLY ZIP YOUR PROJECT AND SUBMIT IT TO MARMOSET.  
YOU MUST USE THE ```make submit``` COMMAND**.
