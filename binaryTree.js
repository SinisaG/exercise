function Node (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree () {
  this.root = null;
}

BinarySearchTree.prototype = {
  //restore constructor
  constructor: BinarySearchTree,

  add: function (value){
    var current = this.root;
    if (!current) {
      this.root = new Node(value);
      return;
    }
    while (true) {
      if (current.left && value <= current.value) {
        current = current.left;
      } else if (current.right && value > current.value) {
        current = current.right;
      } else if (!current.left && value <= current.value) {
        current.left = new Node(value);
        break;
      } else if (!current.right && value > current.value) {
        current.right = new Node(value);
        break;
      }
    }
  },

  contains: function(value){
    var found = false;
    var current = this.root;
    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else if (current.value === value) {
        found = true;
      }
    }
    return found;
  },

  traverse: function (process) {
    inOrder(this.root);
    function inOrder (node) {
      if (node) {
        //traverse the left subtree
        if (node.left !== null){
            inOrder(node.left);
        }
        //call the process method on this node
        process.call(this, node);
        //traverse the right subtree
        if (node.right !== null){
            inOrder(node.right);
        }
      }
    }
  },

  find : function (value) {
    var current = this.root;
    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else if (current.value === value) {
        return current;
      }
    }
    return;
  },

  size: function(){
    var i = 0;
    this.traverse(function () {
      i++;
    })
    return i;
  },

  toArray: function(){
    var array = [];
    this.traverse(function (node) {
      array.push(node.value);
    })
    return array;
  },

  toString: function(){
    var array = [];
    this.traverse(function (node) {
      array.push(node.value);
    })
    return array.join(', ');
  }
}

var BST = new BinarySearchTree();

BST.add(5);
BST.add(3);
BST.add(1);
BST.add(6);
BST.add(1);
console.log(BST.contains(1));
console.log(BST.size());
console.log(BST.toArray());
console.log(BST.toString());
