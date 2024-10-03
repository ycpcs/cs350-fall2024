
var PREPOPULATE = false;

var courseInfo = {
    courseName: "CS350: Data Structures",
    classDays: ["Tue", "Thur"],


    // The following is true if final exam is on the LAST day of class;
    // false if final exam is during exam week."
    inClassFinalExam: true,
    // The following is for the college-scheduled final exam.
    // It is not used if final is on last day of class"
    finalExamDates: [
        new FinalExamDay("101", new Date("12/11/2021 10:15:00")),
        new FinalExamDay("102", new Date("12/9/2021 12:45:00"))
    ],


    classPeriods: [
        {
            topic: new Topic( "Intro to C++", "lectures/intro_to_C++.html" ),
            lab: new Lab("Lab 1: Histogram in C++", "labs/lab01.html")
        },
        {
            topic: new TripleTopic( "Stacks", "lectures/Stacks_lecture.pdf", "Queues", "lectures/Queues_lecture.pdf", "Visualizations (x4)", "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html" ),
            lab: new Lab("Lab 2: Postfix expression evaluator", "labs/lab02.html"),
            handout: new Handout("Handout: Stacks & Queues", "activities/1 - Stacks & Queues.pdf"),
            assign: new Assignment("Integer Array Stack", "assign/assign01.html", 11)
        },
        {
            topic: new Topic( "C++ Templates", "lectures/C++_templates.html" ),
            lab: new Lab("Lab 3: Value semantics in C++", "labs/lab03.html")
        },
        {
            topic: new Topic( "Linked Lists", "lectures/LinkedList_lecture.pdf" )
//             lab: new Lab("Lab 4: Benchmarking vector and list", "labs/lab04.html")
        },
        {
            topic: new Topic( "Doubly Linked Lists", "lectures/DoublyLinkedList_lecture.pdf" ),
            lab: new Lab("Lab 5: Linked list implementation", "labs/lab05.html"),
            assign: new Assignment("Doubly Linked List", "assign/assign02.html", 7)
        },
        {
            topic: new Topic( "Skip Lists (Find)", "lectures/Skip_Lists.pdf" ),
            handout: new Handout("Handout: Skip Lists (Find)", "./activities/2 - Skiplist Find.pdf")
        },
        {
            topic: new Topic( "Skip Lists (Insert / Remove)", "" ),
            handout: new Handout("Handout: Skip Lists (Insert / Remove)", "activities/3 - Skiplist Insert.pdf"),
            assign: new Assignment("SkipList", "assign/assign03.html", 15)
        },
        {
            topic: new Topic( "Review for Exam #1", "" )
        },
        {
            topic: new Topic( "** Exam #1", "" )
        },
        {
            topic: new DoubleTopic( "Trees", "lectures/Trees_lecture.pdf", "Tree Traversal", "lectures/Tree_Traversal_lecture.pdf" ),
            lab: new Lab("Lab 6: Binary tree traversal algorithms", "labs/lab06.html"),
//             assign: new Assignment("RandomArt", "assign/assign04.html", 1000000000)
        },
        {
            topic: new Topic( "Binary Search Trees (Find)", "lectures/Binary_Search_Trees.pdf" )
        },
        {
            topic: new Topic( "Binary Search Trees (Insert / Remove)", "" ),
            handout: new Handout("Handout: BST (Remove)", "activities/4 - BST Remove.pdf"),
            assign: new Assignment("BST", "assign/assign05.html", 21)
        },


// Fall 2024 - adjusted due to surgery        
//         {
//             topic: new Topic( "AVL Trees (Insert)", "lectures/AVL_Trees.pdf" ),
//             handout: new Handout("Handout: AVL Trees (Insert)", "activities/5 - AVL Trees Insert.pdf")
//         },
//         {
//             topic: new Topic( "AVL Trees (Remove)", "" ),
//             handout: new Handout("Handout: AVL Trees (Remove)", "activities/6 - AVL Trees Remove.pdf")
//         },
//         {
//             topic: new Topic( "Red-Black Trees", "lectures/Red-Black_Trees.pdf" ),
//             handout: new Handout("Handout: Red-Black Trees (Insert)", "activities/7 - Red-Black Trees Insert.pdf")
//         },
//         {
//             topic: new Topic( "Red-Black Trees (Cont.)", "" ),
//             handout: new Handout("Handout: Red-Black Trees (Insert More)", "activities/8 - Red-Black Trees Insert 2.pdf")
//         },
        {
            topic: new Topic( "AVL Trees", "lectures/AVL_Trees.pdf" ),
            lab: new Lab("Handout: AVL Trees (Insert)", "activities/5 - AVL Trees Insert.pdf"),
            handout: new Handout("Handout: AVL Trees (Remove)", "activities/6 - AVL Trees Remove.pdf")
        },
        {
            topic: new Topic( "Red-Black Trees", "lectures/Red-Black_Trees.pdf" ),
            lab: new Lab("Handout: Red-Black Trees (Insert)", "activities/7 - Red-Black Trees Insert.pdf"),
            handout: new Handout("Handout: Red-Black Trees (Insert More)", "activities/8 - Red-Black Trees Insert 2.pdf")            
        },



        {
            topic: new Topic( "Review for Exam #2", "" )
        },
        {
            topic: new DoubleTopic( "** Exam #2", "", "Tree Template Worksheet", "resources/tree_template_worksheet.pdf")
        },
        {
            topic: new Topic( "AA-Trees (Insert)", "lectures/AA-tree_lecture.pdf" ),
            handout: new Handout("Handout: AA-Trees (Insert)", "activities/9 - AA Trees.pdf"),
            assign: new Assignment("AATree", "assign/assign06.html", 12)
        },
        {
            topic: new Topic( "AA-Trees (Delete)", "" ),
            handout: new Handout("Handout: AA-Trees (Delete)", "activities/10 - AA Trees 2.pdf")
        },
        {
            topic: new Topic( "B-Trees", "lectures/B-Trees.pdf" ),
            handout: new Handout("Handout: B-Trees", "activities/11 - B-Trees.pdf")
        },
        {
            topic: new Topic( "Review for Exam #3", "" )
        },
        {
            topic: new Topic( "** Exam #3", "" )
        },
        {
            topic: new Topic( "Binary Heaps", "lectures/Heaps.pdf" ),
            handout: new Handout("Handout: Binary Heaps", "activities/12 - Binary Heaps.pdf"),
            assign: new Assignment("Binary Heap", "assign/assign07.html", 6)
        },
        {
            topic: new Topic( "Binary Heaps (Cont.)", "" )
        },
        {
            topic: new Topic( "Hash Tables", "lectures/Hash_Tables.pdf" ),
            handout: new Handout("Handout: Hash Tables", "activities/13 - Hash Tables.pdf"),
            assign: new Assignment("Hash Table", "assign/assign08.html", 7)
        },
//         {
//             topic: new Topic( "Hash Tables (Cont.)", "" )
//         },
        {
            topic: new DoubleTopic( "Graphs", "lectures/Graphs.pdf", "Dijkstra's Algorithm", "lectures/Dijkstras_Algorithm.pdf" ),
            handout: new Handout("Handout: Graphs", "activities/14 - Graphs Adjacency Matrix and List.pdf")
        },
        {
            topic: new Topic( "** Final Exam (non-cumulative)", "")
        }
    ]
};
