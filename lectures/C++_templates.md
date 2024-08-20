---
layout: default
course_number: CS350
title: C++ Templates
---

Since data structures are typically designed to hold *any* type of objects, C++ provides a mechanism for creating 
generic classes known as *templates*. Thus we can qualify our class with an arbitrary template type and then instantiate 
an object of the generic class based on the particular data we wish the data structure to store.
<br>



### Example

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

Below is an example Java implementation of a simple generic class 

```cpp
public class ArrayList<E> {
    // fields
    private int size;

    // Constructor
    public ArrayList() {
        ...
    }

    // Interface methods
    public void add(E elt) {
        // add elt to the end of the collection
    }

    public int size() {
        // return the number of objects in the collection
    }

    public E get(int i) {
        // return element i of the collection
    }

    // other methods...
}
```

<br>
Here **```E```** is used as a generic object that can be used as both a parameter and return value datatype. Thus to 
instantiate an **```ArrayList```** that stores **```int```**'s we would use

```cpp
ArrayList<int> list = new ArrayList<int>();
```

<br>
The equivalent C++ class declaration (in **```ArrayList.h```**) would be


```cpp
template <class T>
class ArrayList 
{
private:
    // fields
    int size;

public:
    // Constructor
    ArrayList();

    // Destructor
    ~ArrayList();

    // Interface methods
    void add(const T & elt);
    int size();
    const T & get(int i) const;
};
```

<br>

Here the generic type is specified as a template at which point **```T```** can be used within the class as a generic 
datatype. Further note that unlike Java where all objects are treated as references, we need to explicitly specify 
reference parameters if we wish to pass objects of type **```T```** by reference.  This is done by including an 
**```&```** between the parameter type and the parameter name, e.g. see the **```add()```** method in the above class.  


Additionally, parameters can be qualified with **```const```** to protect them from modification within the method. For example, the **```add()```** method cannot modify the **```elt```** parameter that it receives as an argument. That is, the **```add()```** method will must treat the **```elt```** parameter as a constant.

We can also specify that a method itself is constant, i.e. the method cannot change any class fields, by adding 
**```const```** to the end of the method declaration. For example, the **```get()```** method in the above class is declared as a **```const```** method. Thus, the **```get()```** method is not allowed to modify class fields such as the **```int size```** field.

Adding the **```const```** keyword to the return type ensures that the return value must get assigned to a **```const```**
variable at the point of call.  Any attempt to modify the returned object at the point of call will result in an error.
This is particularly useful for data structures since external modifications to a data structure can damage data 
structure invariants.  

The implementation for the methods (in **```ArrayList.cpp```**) would be


```cpp
#include "ArrayList.h"

template <class T>
ArrayList<T>::ArrayList()
{
    // Constructor initializations
}
	
template <class T>
ArrayList<T>::~ArrayList() 
{
    // Destructor cleanup
}
	
template <class T>
void ArrayList<T>::add(const T & elt) 
{
    // add elt to the end of the collection
}
		
template <class T>
int ArrayList<T>::size() 
{
    // return the number of objects in the collection
}
	
template <class T>	
const T & ArrayList<T>::get(int i) const
{
    // return element i of the collection
}
		
// other methods...
	
// Create template methods for int and double
template class ArrayList<int>;
template class ArrayList<double>;
```

<br>

Note that each method name is qualified with the name of the class *and template definition* (and no visibility 
specifiers are present in the definitions). One other issue with C++ templates is that since **```.cpp```** files are compiled 
separately *before* they are linked with other source files, methods with templates have no way of knowing which 
class **```T```** to be instantiated with. This issue can be resolved in one of two ways:

  - The method definitions can be placed into the header file with the class declaration. That way the compiler will 
  know which versions of the templated methods to instantiate based on the usage in the source file that includes the 
  header (through the preprocessor stage of compilation).
  
  - Specific implementations can be added to the end of the **```.cpp```** file (as shown in the example above) which will create concrete 
  implementations for all the methods using the specified types. Unfortunately, with this approach the class can only be instantiated for 
  these types and thus is not truly generic. Thus in the example above, only **```ArrayList<int>```** or 
  **```ArrayList<double>```** could be used. One advantage, though, is it does prevent the class from being instantiated 
  for objects that may not be valid, e.g. if **```T```** would require certain interface methods.

Instantiation an object of type **```ArrayList```** is then done by specifying the datatype to be used for the template:

```cpp
ArrayList<int> theList;           // ArrayList containing ints
ArrayList<double> anotherList;    // ArrayList containing doubles

ArrayList<int> *pList;            // Pointer to ArrayList containing ints
pList = new ArrayList<int>();     // dynamically allocating an ArrayList and assigning to existing pointer

ArrayList<int> *pListNew = new ArrayList<int>();  // dynamically allocating an ArrayList and assigning to a pointer
```

<br>

Note that pList is a *pointer* to an **```ArrayList```** object. At this point, using the objects is similar to any 
other objects

```cpp
theList.add(1);
anotherList.add(1.5);
int x = theList.get(0);

pList->add(3);
int y = pList->get(0);
```

<br>
For the dynamically allocated objects, to prevent memory leaks, there would need to be corresponding call

```cpp
delete pList;
delete pListNew;
```
