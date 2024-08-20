---
layout: default
course_number: CS350
title: "Assignment 8: Hash Table"
---


<br>

This assignment will implement a hash table that stores *string* objects (without using class templates) using chaining to 
resolve collisions with the end of each chain indicated by **```nullptr```**. Thus the hash table will store **```Node```** 
objects that contain the string value in a **```data```** field and a **```next```** pointer to the next **```Node```** 
in the list. The hash table size will be fixed upon instantiation of the table and the hashing function method 
**```hash()```** has been provided.



<br>

### Getting Started

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

If you don't already have one, create a directory on your **H:** drive named **CS350** (or anywhere else you choose). 
Navigate into this new directory and create a subdirectory named **assignments**.

Download [HashTable.zip](HashTable.zip), saving it into the **assignments** directory. 

Double-click on **HashTable.zip** and extract the contents of the archive into a subdirectory called **HashTable**.

For this assignment, a static library has been provided (containing working versions of each method) to allow for testing of 
each class method independently. Any unimplemented methods in **HashTable.cpp** will use the corresponding method from 
the library, thus you can implement the methods in any order. Be sure to test each method you implement individually 
against the library for proper operation which can be accomplished by uncommenting the appropriate **```#define```** in 
the file **Flags.h** (and commenting the **```#define ALL 1```**). 
**DO NOT MODIFY ANY OF THE OTHER ```.h``` FILES INCLUDED WITH THE ASSIGNMENT**.

The class declaration is 

```cpp
	class HashTable
	{
	public:
		// Constructor, destructor
		HashTable(int tableSize = 0);
		~HashTable();
		
		// Public interface
		void insert(std::string x);
		bool find(std::string x);
		void remove(std::string x);
		void printTable();
		
		// Private fields
		Node ** table;
		int size;
		
		// Private methods
		unsigned int hash(std::string x);
		float loadFactor();
		void maxChainLength(int& maxLength, int& maxSlotIndex);
		int numEmptySlots();
	};
```



<br>

### 1. Constructor / Destructor

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

The constructor will need to dynamically allocate the **```table```** field based on the parameter passed to the 
constructor. The destructor will then need to deallocate all the nodes (rather than using a **```makeEmpty()```** method) 
and then deallocate the table array.

**Tasks**

  - Add code to **```HashTable()```** to dynamically allocate an array of **```Node*```** elements based on 
  the **```tableSize```** parameter. Hint: Be sure to initialize the elements of the array to **```nullptr```** and 
  initialize the **```size```** field in the class to maintain the size of the table. 

  - Add code to **```~HashTable()```** to iterate through the entire hash table to deallocate all the nodes in each 
  list. Then the table array should be deallocated *after* removing all the nodes.



<br>

### 2. Insert()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Inserting into a hash table consists of determining the table index via the hashing function and then placing the 
value at the *head* of the list at that index (for efficiency).
	
**Tasks**

  - Add code to the **```insert()```** method that takes a **```string```** parameter indicating the value to insert. 
  You will need to dynamically allocate a **```Node```** for this value and add it to the *head* of the hash table 
  at the appropriate index *IF* the string is not currently in the table, i.e. duplicates are not allowed. Note: Use 
  the **```hash()```** method to compute the hash value for the string. When inserting the first node at a given hash 
  slot, it should go directly into the hash table (replacing the initial **```nullptr```** in that slot) with subsequent 
  inserts at the same location added via chaining at the *beginning* of the list.



<br>

### 3. Find()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Finding a value in a hash table involves computing the hash table index and then performing a *linear search* of the 
list to determine if the value is present.

**Tasks**

  - Add code to the **```find()```** method that takes a **```string```** parameter for the value to search for. The 
  method should return a **```bool```**, i.e. **true** or **false**, indicating whether the value is present in the 
  table. Note: Use the **```hash()```** method to compute the hash value for the string. 



<br>

### 4. Remove()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Removing a value from a hash table is done by *splicing* the node out of the list (assuming the value is in the table) at the hash index.

**Tasks**

  - Add code to the **```remove()```** method that takes a **```string```** parameter for the value to be removed. 
  The method should deallocate the node *after* reassigning pointers as necessary to splice the node out of the list 
  (if it is in the table). Note: Use the **```hash()```** method to compute the hash value for the string. 



<br>

### 5. LoadFactor()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

The *load factor* for a hash table is the total number of elements divided by the number of slots in the hash table, 
i.e. represents the *average* chain length of lists in the table (as well as the *optimal* hashing for a given table size).

**Tasks**

  - Add code to the **```loadFactor()```** method that returns a **```float```** representing the load factor for the 
  current table. Note: You will need to iterate through the table to count the total number of elements that have been 
  inserted. (It would be more efficient to have a private field to track this value, but this implementation will not 
  take that approach.)



<br>

### 6. MaxChainLength()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Determining the length of the *longest* chain in the table provides an indication of how close the hashing function is to *optimal* as an optimal hashing 
function would produce a table with maximum chain length equal to the load factor.

**Tasks**

  - Add code to the **```maxChainLength()```** method to determine the length of the longest chain in the hash table and in which slot that chain
  exists.  The **```maxChainLength()```** method takes *two reference* parameters, **```maxLength```** and **```maxSlotIndex```**, that you should
  set with the appropriate values. Using reference parameters make it possible for the method to return multiple values instead of only a single value. 
  You will need to iterate through the table to determine these values.  If the hash table contains multiple slots that have equally long chains and 
  those chains represent the longest chain then return the slot with the smallest index. If the hash table is empty, both **```maxLength```** and 
  **```maxSlotIndex```** should be 0 (i.e. longest chain has a length of 0, and the slot with the smallest index containing a chain of length 0 is the
  slot at index 0).



<br>

### 7. NumEmptySlots()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Another quantity that indicates optimality is how many slots are *unused*, i.e. empty. A good hashing function should 
approximate a *uniform* distribution of hash values such that all slots are used equally. Hence a large number of unused 
slots (particularly for a significant number of values) is indicative of a poor hashing function.

**Tasks**

  - Add code to the **```numEmptySlots()```** method that returns and **```int```** giving the number of currently 
  unused slots in the table. Note: You will need to iterate through the table to count the total number unused slots.



<br>

### 8. Compiling and running the program

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Once you have completed implementing any of the above methods (the remaining unimplemented methods will be drawn from the 
static library):

**In CLion:**  
From the "Run" menu, select "Run" (or click the "Run" button in the top right of the IDE)

**In the terminal:**  
Navigate to the directory containing the source files and run the command **```make```** to compile.

Run the command **```./HashTable```**.

Congratulations, you have just implemented a hash table C++ data structure for strings!



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
* insert() - **10 points**
* find() - **10 points**
* remove() - **10 points**
* loadFactor() - **5 points**
* maxChainLength() - **5 points**
* numEmptySlots() - **5 points**



<br>

### 12. Submitting to Marmoset

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

**BE SURE TO REMOVE ALL DEBUG OUTPUT FROM YOUR METHODS PRIOR TO SUBMISSION!**  
The only method that should produce output is the provided **```printTable()```**.

Also, be sure to test ALL of your methods one last time by uncommenting the line **```#define ALL 1```**
in your **Flags.h** file.

When you are done, run the following command from your terminal in the source directory for the project:

	make submit

You will be prompted for your Marmoset username and password,
which you should have received by email.  Note that your password will
not appear on the screen.

**DO NOT MANUALLY ZIP YOUR PROJECT AND SUBMIT IT TO MARMOSET.  
YOU MUST USE THE ```make submit``` COMMAND**.
