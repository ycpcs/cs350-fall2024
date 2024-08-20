---
layout: default
course_number: CS350
title: "Lab 3: Value semantics in C++"
---


<br>

### Getting Started

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Download [CS350_Lab03.zip](CS350_Lab03.zip).  Unzip it.  
In a terminal window, change directory to the **```CS350_Lab03```** directory.

Using CLion (or some lame text editor), open the file **```main.cpp```**.

To compile the test program, either compile within CLion or run the command **```make```** at the command line.

To run the test program, either press the PLAY button in CLion, or run the command **```./lab03```** at the commend line.



<br>

### Your Task

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Complete the implementation of the **```Histogram```** class.
You can re-use most of your implementation from [Lab 1](lab01.html).

The only difference between the **```Histogram```** class in Lab 3 (as compared to Lab 1) is that in this lab, the class 
will have a copy constructor and assignment operator.

The copy constructor should initialize the **```Histogram```** object so that it is an exact copy of the 
**```Histogram```** passed as the **```const```** reference parameter **```other```**.  That is, the copy
constructor is creating a **new** instantiation of a **```Histogram```** object and initializing that new
**```Histogram```** object with the same contents as the **```Histogram```** named **```other```**. Your copy
constructor will look a lot like your standard constructor. However, your copy constuctor is getting all the 
information it needs to initialize the new **```Histogram```** object from the incoming existing **```Histogram```** object.

The assignment operator should modify the existing **```Histogram```** object so that it becomes an exact copy of the 
**```Histogram```** passed as the **```const```** reference parameter **```rhs```**.  That is, the assignment
operator modifies or changes the contents of an already existing **```Histogram```** object (_this_ **```Histogram```** object). The assignment
operator replaces the current contents of the existing **```Histogram```** object with the contents of the 
**```Histogram```** passed in as **```rhs```**.  The assignment operator should return a pointer to the 
**```Histogram```** object that was updated (i.e. **```return *this;```**).



<br>

### Hints

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Read the test code in **```main.cpp```**.  Make sure that you understand at which points in the program the copy 
constructor and assignment operator are used, and what is supposed to happen.

Each **```Histogram```** object will need to have its own private storage array.

You will need **two** fields in each **```Histogram```** object: the pointer to the array of **```int```** elements 
storing the counts, and an **```int```** field to keep track of how many buckets there are.  Fields 
(**```m_counts```** and **```m_numBuckets```**) are specified in the class for this purpose.

The copy constructor should initialize the object so that its array is
the same size, and has the same contents, as **```other```**.

The assignment operator should de-allocate the current array and allocate a new array with the same size and contents 
as **```rhs```**.



<br>

### Testing

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Run the test program.  If it prints

<pre>
End of main: everything is OK?
</pre>

Then all the operations succeeded.

**Important**: Just because all of the operations succeeded doesn't mean that the class is completely correct.  If you 
forgot to delete the storage array for any of the **```Histogram```** objects, then programs using the class will have 
a memory leak.



<br>
    
### Checking for memory leaks
    
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    
Memory leaks are the result of memory that is allocated but not properly freed.  In C++, each
time you use the **```new```** keyword you are allocating memory.  All instances of **```new```** 
should have a corresponding instance of **```delete```** to free the memory that was allocated.
This can be trickier than it sounds. Thankfully, there are tools such as [**```valgrind```**](http://valgrind.org) 
that can automatically analyze your program and detect these types of errors.

To check your program for memory leaks, run the command **```make memcheck```** from the command line.
You can also run valgrind directly from many IDEs.

Fix any memory leaks that are detected.
