---
layout: default
course_number: CS350
title: "Lab 6: Binary tree traversal algorithms"
---


<br>

### Binary tree traversal algorithms

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

In this lab you will implement several binary tree traversal algorithms.

**Note:** Because a binary tree is a recursive data structure, most binary tree algorithms can be expressed best 
recursively.  In this assignment, all of the methods you write will be recursive, with the exception of the 
implementation of the **```printKeysLevelOrder```** method.



<br>

### Getting Started

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Download [CS350_Lab06.zip](CS350_Lab06.zip).  Unzip it.  
In a terminal window, change directory to the **```CS350_Lab06```** directory.

Using CLion (or some lame text editor), open the files **```main.cpp```** and **```Tree.cpp```**.

To compile the test program, either compile within CLion or run the command **```make```** at the command line.

To run the test program, either press the PLAY button in CLion, or run the command **```./lab06```** at the commend line.



<br>

### Your Task

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Your task is to implement the four tree traversal algorithms found in the **```Tree.cpp```**.
The methods have already been defined for you:

```cpp
    printKeysPreOrder(Node<T> *node)
    printKeysPostOrder(Node<T> *node)
    printKeysInOrder(Node<T> *node)
    printKeysLevelOrder(Node<T> *node)
```    


For each of the tree traversal algorithms, to 'process' a node, simply **print** out the node's data value.
For example, in PreOrder traversal a node is processed before both of its subtrees.  Therefore, your PreOrder method should 
print the data value of the input node and then recurse into the node's left subtree and finally into the
node's right subtree.  Print node values using using **```std::cout```**. 

A description of each of the traversal algorithms follows:

  * The **```printKeysPreOrder```** method implements a PreOrder traversal.  A PreOrder traversal processes the input node, 
  then recursively traverses the left subtree, and finally recursively traverses the right subtree.

  * The **```printKeysPostOrder```** method implements a PostOrder traversal.  A PostOrder traversal recursively traverses the 
  left subtree, then recursively traverses the right subtree, and finally processes the input node.

  * The **```printKeysInOrder```** method implements an InOrder traversal.  An InOrder traversal recursively traverses the 
  left subtree, then processes the input node, and finally recursively traverses the right subtree.

  * The **```printKeysLevelOrder```** method implements a LevelOrder traversal.  A LevelOrder traversal first processes the input 
  root node, then each child of the root, then each grandchild, etc.  Unlike the other traversals methods, LevelOrder traversal is 
  not defined recursively.  Instead, you should use a queue to keep track of the next node to be processed.  The algorithm for level 
  order traversal is as follows:


```cpp
    create a queue
    enqueue the root node
    while the queue is not empty {
        dequeue a node
        start, visit, and finish the node
        enqueue each child of the node
    }
```
  




When you run the program, it will create a **random** binary tree and then print the key values using the tree traversal 
algorithms described above.  

Example run:

<pre>
The tree has the following structure:
                ______________22______________
               /                              \
        ______13______                  ______32______
       /              \                /              \
    __11            __18            __29__          __37__
   /               /               /      \        /      \
  10              16              27      31      36      38
                 /                  \    /                   
                15                  28  30                    

Printing keys using PreOrder traversal:
22 13 11 10 18 16 15 32 29 27 28 31 30 37 36 38 

Printing keys using PostOrder traversal:
10 11 15 16 18 13 28 27 30 31 29 36 38 37 32 22 

Printing keys using InOrder traversal:
10 11 13 15 16 18 22 27 28 29 30 31 32 36 37 38 

Printing keys using LevelOrder traversal:
22 13 32 11 18 29 37 10 16 27 31 36 38 15 28 30 

======== DONE ========
</pre>




<br>

#### Hints

To create and manipulate a queue, for the LevelOrder traversal see the example code below:

```cpp
    // create a queue that holds pointers to Node<T> objects. 
    std::queue<Node<T> *> nodeQueue;  
    
    // to enqueue a node
    nodeQueue.push(node);
    
    // to get the Node at the front of the queue
    Node<T> *node = nodeQueue.front();
    
    // to dequeue the front of the queue
    nodeQueue.pop();
    
    // to check if the queue is empty
    nodeQueue.empty()
```
For more information on the std::queue, read the [documentation](http://www.cplusplus.com/reference/queue/queue/). 


<br>

### Testing

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Run the test program and check the output.


<br>
    
### Checking for memory leaks
    
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    
For this lab, don't worry about checking for memory leaks.  The destructor for the included 
```Tree``` data structure was intentionally left blank.  You will implement a destructor for
a ```Tree``` data structure in a future assignment. 
