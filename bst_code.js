/**
 *  This Peace of code contains all th BST Functionalities. 
 *  1. BST Node 
 *  2. BST Tree   ( Difine the Tree)
 *  2. Insert Node Into the BST 
 *  3. Remove Node from the BST 
 *  4. Tree Triversals 
 */

// 1. BST Node 
class Node {
    constructor(data){
        this.data=data; // or you can call it key as well
        this.left=null;
        this.right=null;
    }
}

// 2. BST Tree Defination 
class BinarySearchTree {
    constructor(){
        this.root=null;
    }
   
    // Create New Node First than insert it to the tree
    addNewNode(data){ 
        let newNode = new Node(data);
        if(this.root===null){
            this.root=newNode;
            return;
        }
        this.insertNode(this.root,newNode);
    }
    // Insert New Node in the tree 
    insertNode(treeNode,newNode){
        if(treeNode===null){
            treeNode=newNode;
        }
        if(newNode.data<treeNode.data){
            if(treeNode.left===null){
                // insert newNode to the left of treeNode
                treeNode.left=newNode;
                return;
            }
            // Move treeNode to the left 
            this.insertNode(treeNode.left,newNode);
        }else {
            if(treeNode.right===null){
                // insert newNode to the right of treeNode
                treeNode.right=newNode;
                return;
            }
            this.insertNode(treeNode.right,newNode);
        }
    }

    
    // Tree Triversals 
    inorder(treeNode){
        if(treeNode===null){
            return;
        }
        // Note The Order These are very Important while doing the coding
        this.inorder(treeNode.left);
        console.log(treeNode.data);
        this.inorder(treeNode.right);
    }





    /** 
     * Insert Data Inside the BST  ( Itretive Solution )
     */
    insertNodeI(data){
        let newNode =new Node(data);
        // IF Root is Null Assign new Node to Root
        if(this.root===null){
            this.root = newNode;
        }
        // create the reference between the currentNode and the root than use carrent to iterate the tree.
        // Here we can't directly use root because if we use root than we can't again point root to it's starting 
        // position 
        let currentNode = this.root; 
        while(currentNode!==null){
            if(newNode.data <currentNode.data){
                // If left is null than make newNode as left node of the tree
                if(currentNode.left===null){
                    currentNode.left=newNode;
                    break;
                }
                // Than Take step to Left for current Node 
                currentNode=currentNode.left;
            }
            else {
                // If the new Node value if greater or equal than Move to right
                if(currentNode.right===null){
                    currentNode=newNode;
                    break;
                }
                currentNode=currentNode.right;
            }

        }
    }

    /**
     *  Remove The Node whose data or key match in the tree
     */
    removeNode(data){
        if(this.root===null){
          // BST don't have any node in the tree 
          return;
        }
        // make the Reference between the currentNode and the root node. 
        let currentNode = this.root;
    }
}

const main = function (){
    // here we will create the Tree Like this 
    // Stpe(1): Decleare the tree 
    const myBST = new BinarySearchTree();

    // Step(2) : Insert the Nodes in the tree 
    myBST.addNewNode(50);
    myBST.addNewNode(45);
    myBST.addNewNode(33);
    myBST.addNewNode(47);
    myBST.addNewNode(57);
    myBST.addNewNode(90);
    myBST.addNewNode(80);
    myBST.addNewNode(85);
    myBST.addNewNode(70);
    myBST.addNewNode(83);

    // Step(3): Display the tree  
    var treeNode = myBST.root;
    myBST.inorder(treeNode);
}

main();
