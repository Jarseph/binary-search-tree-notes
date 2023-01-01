...
/*
_replaceWith() is used to find the node you want to use to replace a node that has children. 
If the node that you are replacing has a parent, then you need to wire up the references from 
the parent to the replacement node, and the replacement node back to the parent. Otherwise, if 
the node is a root node, then you simply copy over the properties of the replacement node.
*/
    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
/*
_findMin() is used to find the minimum value from the right subtree. 
When you are removing a node from the tree that has two children, you 
want to replace the node with the smallest node from the right subtree.
*/
    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
    ...
    
    module.exports = {
      _replaceWith,
      _findMin,
    }
