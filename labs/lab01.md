---
layout: default
course_number: CS350
title: "Lab 1: Histogram in C++"
---


<br>

### Getting Started 

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Download [CS350_Lab01.zip](CS350_Lab01.zip).  Unzip it. 
In a terminal window, change directory to the **```CS350_Lab01```** directory.


Using CLion (or some lame text editor), open the files **```Histogram.h```**, **```Histogram.cpp```**, and **```main.cpp```**.

To compile the test program, either compile within CLion or run the command **```make```** at the command line.

To run the test program, either press the PLAY button in CLion, or run the command **```./lab01```** at the commend line.



<br>

### Your Task

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Complete the **```Histogram```** class.  The class declaration (in **```Histogram.h```**)
should look like this:

```cpp
class Histogram {
private:
    int *m_counts;

public:
    explicit Histogram(int numBuckets);
    ~Histogram();

    void increaseCount(int bucket);
    int getCount(int bucket);
};
```

The idea is that a **```Histogram```** object counts the number of occurrences of events, where each event is identified 
by an integer *bucket*.  A bucket is represented as a single index of an array. Each time an event associated with a 
particular bucket occurs, the corresponding array index is incremented.

The pointer **```m_counts```** should be set to point to the array of buckets. You will need to dynamically allocate this array in
the constructor of your **```Histogram.cpp```** file.
The **```numBuckets```** parameter to the constructor specifies how many buckets the 
**```Histogram```** object will have.  The first bucket has index 0, the second has index 1, etc.

You will need to add implementations for the constructor, destructor, **```increaseCount```**, and **```getCount```** 
methods in **```Histogram.cpp```**.

**NOTE** that you should **NOT** add any additional fields in either the **```Histogram.h```** or the 
**```Histogram.cpp```** files.



<br>

### Testing

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

The source file **```main.cpp```** has a test program that reads a line of text and uses a **```Histogram```** object 
to count the number of occurrences of the letters ```A-Z```, then prints a bar graph.

Example run (user input in **bold**):


<pre>
Enter text, followed by QUIT on its own line
<b>Oh freddled gruntbuggly</b>
<b>Thy micturations are to me</b>
<b>As plurdled gabbleblotchits on a lurgid bee.</b>
<b>Groop I implore thee, my foonting turlingdromes</b>
<b>And hooptiously drangle me with crinkly bindlewurdles,</b>
<b>Or I will rend thee in the gobberwarts with my blurglecruncheon,</b>
<b>See if I don't!</b>
<b>QUIT</b>
A: ========
B: =========
C: =====
D: =============
E: =========================
F: ===
G: ===========
H: ==========
I: ==================
J: 
K: =
L: ==================
M: =======
N: ===============
O: ==================
P: ====
Q: 
R: ===================
S: ========
T: =================
U: ==========
V: 
W: =====
X: 
Y: ======
Z: 
</pre>



<br>

### Hints and approach

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Use a dynamically-allocated array of **```int```** elements to store the counts for each bucket.  There is an **```m_counts```** field declared whose type is **```int```**\*  that you should use to store the counts.  The constructor should create a dynamically allocated array in the constructor and assign it to the **```int```**\* field.

**Important**: The array elements are not automatically initialized to 0!  You will need to do this explicitly using a loop.

**Important**: don't forget to use the **```delete[]```** operator to de-allocate the array!

Implement the program incrementally, as follows:

  - Start by making all the methods no-ops: the **```getCount```** method should always return 0
  - Next, allocate the array in the constructor and delete it in the destructor; make sure the program still runs
  - Finally, implement the **```increaseCount```** and **```getCount```** methods so that they use the array



<br>
    
### Checking for memory leaks (Optional)
    
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    
Memory leaks are the result of memory that is allocated but not properly freed.  In C++, each
time you use the **```new```** keyword you are allocating memory.  All instances of **```new```** 
should have a corresponding instance of **```delete```** to free the memory that was allocated.
This can be trickier than it sounds. Thankfully, there are tools such as [**```valgrind```**](http://valgrind.org) 
that can automatically analyze your program and detect these types of errors.

To check your program for memory leaks, run the command **```make memcheck```** from the command line.
You can also run valgrind directly from many IDEs.

Fix any memory leaks that are detected.

