---
layout: default
course_number: CS350
title: "Assignment 6: AA Tree"
---


<br>

This assignment will implement a AA tree that stores arbitrary objects via class templates. The tree will dynamically allocate 
nodes as necessary for space efficiency. Pseudocode for the AA tree operations can be found in the original paper 
[Balanced Search Trees Made Simple" by Arne Andersson](http://user.it.uu.se/~arnea/ps/simp.pdf) from the Proc. Workshop 
on Algorithms and Data Structures, Springer Verlag, 1993.



<br>

### Getting Started

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

If you don't already have one, create a directory on your **H:** drive named **CS350** (or anywhere else you choose). 
Navigate into this new directory and create a subdirectory named **assignments**.

Download [AATree.zip](AATree.zip), saving it into the **assignments** directory. 

Double-click on **AATree.zip** and extract the contents of the archive into a subdirectory called **AATree**.

For this assignment, a static library has been provided (containing working versions of each method) to allow for testing of 
each class method independently. Any unimplemented methods in **AATree.cpp** will use the corresponding method from the 
library, thus you can implement the methods in any order. Be sure to test each method you implement individually against 
the library for proper operation which can be accomplished by uncommenting the appropriate **```#define```** in the 
file **Flags.h** (and commenting the **```#define ALL 1```**).  
**DO NOT MODIFY ANY OF THE OTHER ```.h``` FILES INCLUDED WITH THE ASSIGNMENT**.
 
The class declaration is 

```cpp
	template <class T>
	class AATree
	{
	public:
    	// Constructor, destructor
		AATree();
		~AATree();
		
		// Public interface
		bool find(const T & x);
		const T & findMin();
		const T & findMax();
		void insert(const T & x);
		void remove(const T & x);
		bool isEmpty() const;
		void makeEmpty();
		void printTree();
        
	
		// Node fields (Private)
		Node<T> *root;          // root node
		Node<T> *bottomNode;    // sentinel node
		Node<T> *lastNode;      // used for delete
		Node<T> *deletedNode;   // used for delete

		// Utility methods (Private)
		Node<T> * findNode(Node<T> * node, const T & x);
		Node<T> * findMinNode(Node<T> * node);
		Node<T> * findMaxNode(Node<T> * node);
		void insertNode(Node<T> * & node, const T & x);
		void removeNode(Node<T> * & node, const T & x);
		void skew(Node<T> * & node);
		void split(Node<T> * & node);
		void removeAllNodes(Node<T> * node);
		void printNodesInOrder(Node<T> * node);
	};
```



<br>

### 1. Constructor / Destructor

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Since the tree will grow dynamically as needed, the constructor simply needs to initialize the root node. The 
destructor will subsequently need to remove any nodes in the list.

**Tasks**

  - Add code to **```AATree()```** (in **```AATree.cpp```**) to initialize the **```bottomNode```** pointer (and ALL 
  of its fields appropriately). Set the data value of the **```bottomNode```** to -1. 
  Also assign the **```root```**, **```lastNode```**, and **```deletedNode```** pointers 
  to the **```bottomNode```** (since there are no nodes in the tree yet). Set the level of the **```bottomNode```** 
  to 0 since it will sit BELOW all of the level 1 nodes.  Set the left and right children of **```bottomNode```** to 
  point to **```bottomNode```**.

  - Add code to **```~AATree()```** (in **```AATree.cpp```**) to free all **```Node```**s in the tree. Note: This 
  operation should also deallocate the **```bottomNode```** that was allocated in the constructor.



<br>

### 2. IsEmpty()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

A private method which simply returns a boolean indicating whether or not the current tree contains any valid nodes.
	
**Tasks**

  - Add a method named **```isEmpty()```** (do not forget to qualify it with the class name) that takes no parameters 
  and returns a **```bool```** indicating *true* if the tree contains no nodes. Hint: Consider what **```root```** 
  points to in the case of an empty tree.



<br>

### 3. Find() / FindNode() [*Iterative*]

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

The find operation can be implemented in an iterative fashion identically to a generic binary search tree. Thus as long 
as the bottom of the tree or the desired value is not found continue traversing down the tree. If the desired value is 
less than the current node's value then follow the left child, otherwise follow the right child.

**Tasks**

  - Add a method named **```findNode()```** (do not forget to qualify it with the class name) that takes a *pointer* 
  to a **```Node```** indicating the starting node for the search and a single **```const```** reference to 
  a **```T```** object parameter and returns a *pointer* to a **```Node```** that contains the desired value. 
  Pseudocode for this *iterative* routine is given as

```
FIND-NODE-ITERATIVE(n, k)
1  while n != bottomNode and n.key != k
2     if k < n.key
3        n = n.left
4     else 
5        n = n.right
6  return n
```

  - Add a method named **```find()```** that returns a **```bool```** (do not forget to qualify it with the class name) 
  that takes a single **```const```** reference to a **```T```** object parameter and determines if the value is in the 
  tree. Hint: Consider using the **```findNode()```** method passing the **```root```** as an argument. Also, consider 
  the return value of **```findNode()```** if the desired value is not found in the tree.



<br>

### 4. FindMin() / FindMinNode() [*Iterative*]

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Finding the minimum value in an AA tree is identical to the operation for a generic binary search tree.  That is, 
continually follow left branches until a leaf node is reached. That leaf node will contain the minimum value by the 
binary search tree invariants.

**Tasks**

  - Add a method named **```findMinNode()```** (do not forget to qualify it with the class name) that takes a *pointer* 
  to a **```Node```** as a parameter for the starting point and returns a *pointer* to a **```Node```** that contains 
  the minimum value. Pseudocode for this *iterative* routine is given below.  Note that the method will return 
  **```bottomNode```** when the tree is empty.
  
```
FIND-MINIMUM-NODE-ITERATIVE(n)
1  while n.left != bottomNode
2     n = n.left
3  return n
```
    
  - Add a method named **```findMin()```** (do not forget to qualify it with the class name) that returns a 
  **```const```** reference to a **```T```** object indicating the minimum value or simply returns -1 if there is 
  none and takes no parameters. Hint: Consider using the **```findMinNode()```** method passing the **```root```** as 
  an argument. 



<br>

### 5. FindMax() / FindMaxNode() [*Iterative*]

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Finding the maximum value in an AA tree is also identical to the operation for a generic binary search tree. That is, 
continually follow right branches until a leaf node is reached. That leaf node will contain the maximum value by the 
binary search tree invariants.

**Tasks**

  - Add a method named **```findMaxNode()```** (do not forget to qualify it with the class name) that takes a *pointer* 
  to a **```Node```** as a parameter for the starting point and returns a *pointer* to a **```Node```** that contains 
  the maximum value. Pseudocode for this *iterative* routine is given below. Note that the method will return 
  **```bottomNode```** when the tree is empty.
  
```
FIND-MAXIMUM-NODE-ITERATIVE(n)
1  while n.right != bottomNode
2     n = n.right
3  return n
```

  - Add a method named **```findMax()```** (do not forget to qualify it with the class name) that returns a 
  **```const```** reference to a **```T```** object indicating the maximum value or simply returns -1 if there is 
  none and takes no parameters. Hint: Consider using the **```findMaxNode()```** method passing the **```root```** as 
  an argument. 



<br>

### 6. Insert() / InsertNode() [*Recursive*]

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

To insert a value into an AA tree recursively, like a generic BST the node is initially inserted at the proper leaf 
location. To rebalance the tree as the recursion is unrolled, a **```skew()```** and **```split()```** operation is 
called at each parent node.  Do not allow insertion of duplicate values -- simply ignore duplicates.

**Tasks**

  - Add a **```void```** method named **```insert()```** (do not forget to qualify it with the class name) that takes 
  a **```const```** reference to a **```T```** object parameter and inserts a **```Node```** containing the data at the 
  appropriate place in the tree. Hint: Consider using the **```insertNode()```** method passing the **```root```** as 
  an argument.

  - Add a method named **```insertNode()```** (do not forget to qualify it with the class name) that takes a *reference 
  to a pointer* to a **```Node```** for the starting point and a **```const```** reference to a **```T```** object as 
  parameters. Use the pseudocode from Andersson's paper as 
  a reference for this routine.  You can ignore the **```ok```** variable in Andersson's pseudocode.  If the value to 
  be inserted already exists in the tree (i.e. line 16 of Andersson's **```Insert```** pseudocode), do nothing.



<br>

### 7. Remove() / RemoveNode() [*Recursive*]

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

The process for removal of a node from an AA tree initially requires a recursive search that keeps track of other nodes 
necessary for the deletion process. Once the desired node is found, as the recursion is unrolled a sequence of 
three **```skew()```** and two **```split()```** operations are called at each parent to rebalance the tree.

**Tasks**

  - Add a **```void```** method named **```remove()```** (do not forget to qualify it with the class name) that takes 
  a **```const```** reference to a **```T```** object parameter and removes a **```Node```** containing the data. 
  Hint: Consider using the **```removeNode()```** method passing the **```root```** as an argument.

  - Add a **```void```** method named **```removeNode()```** (do not forget to qualify it with the class name) that 
  takes a *reference to a pointer* to a **```Node```** for the starting point and a **```const```** reference to 
  a **```T```** object as parameters. Use the pseudocode from Andersson's paper as a reference for this routine.  Once 
  again, you can ignore the **```ok```** variable in Andersson's pseudocode.



<br>

### 8. Skew() / Split()

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Two key operations to the maintenance of an AA tree are **```skew()```** and **```split()```** which perform various 
rotations and level updates.

**Tasks**

  - Add a **```void```** method named **```skew()```** (do not forget to qualify it with the class name) that takes 
  a *reference to a pointer* to a **```Node```** and performs the skew operation. Use the pseudocode from Andersson's 
  paper as a reference for this routine.

  - Add a **```void```** method named **```split()```** (do not forget to qualify it with the class name) that takes 
  a *reference to a pointer* to a **```Node```** and performs the split operation. Use the pseudocode from Andersson's 
  paper as a reference for this routine.



<br>

### 9. MakeEmpty() / RemoveAllNodes() [*Recursive*]

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Deallocation of all the nodes in the tree can be done via a *post-order* traversal. After both child subtrees are 
deallocated, deallocate the current node.
	
**Tasks**

  - Add a **```void```** method named **```makeEmpty()```** (do not forget to qualify it with the class name) that takes 
  no parameters and deallocates all nodes from the tree. Hint: Consider using the **```removeAllNodes()```** method. 
  Also, consider where the **```root```** should point once all the tree nodes are removed.

  - Add a **```void```** method named **```removeAllNodes()```** (do not forget to qualify it with the class name) that 
  takes a *pointer* to a **```Node```** representing the root of the subtree and implements a *recursive post-order* 
  traversal of the tree that deallocates leaf nodes. Be sure NOT to delete your sentinel node (aka **```bottomNode```**)!
  A Java implementation of post-order traversal can be found in the notes for [Tree Traversal](../lectures/Tree_Traversal_lecture.pdf).



<br>

### 10. Compiling and running the program

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Once you have completed implementing any of the above methods (the remaining unimplemented methods will be drawn from the 
static library):

**In CLion:**  
From the "Run" menu, select "Run" (or click the "Run" button in the top right of the IDE)

**In the terminal:**  
Navigate to the directory containing the source files and run the command **```make```** to compile.

Run the command **```./AATree```**.

Congratulations, you have just implemented an AA tree C++ data structure with templates!



<br>
    
### 11. Testing your data structure
    
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
    
### 12. Checking for memory leaks
    
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

### 13. Grading Criteria

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

**125 points**

* Constructor - **5 points**
* Destructor - **5 points**
* isEmpty() - **5 points**
* find() - **5 points**
* findNode() - **5 points**
* findMin() - **5 points**
* findMinNode() - **5 points**
* findMax() - **5 points**
* findMaxNode() - **5 points**
* insert() - **5 points**
* insertNode() - **15 points**
* remove() - **5 points**
* removeNode() - **20 points**
* skew() - **10 points**
* split() - **10 points**
* makeEmpty() - **5 points**
* removeAllNodes() - **10 points**



<br>

### 14. Submitting to Marmoset

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

**BE SURE TO REMOVE ALL DEBUG OUTPUT FROM YOUR METHODS PRIOR TO SUBMISSION!**  
The only methods that should produce output are the provided **```printTree()```** and **```printNodesInOrder()```**.

Also, be sure to test ALL of your methods one last time by uncommenting the line **```#define ALL 1```**
in your **Flags.h** file.

When you are done, run the following command from your terminal in the source directory for the project:

	make submit

You will be prompted for your Marmoset username and password,
which you should have received by email.  Note that your password will
not appear on the screen.

**DO NOT MANUALLY ZIP YOUR PROJECT AND SUBMIT IT TO MARMOSET.  
YOU MUST USE THE ```make submit``` COMMAND**.
