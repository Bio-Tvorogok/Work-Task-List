
class customNode {
    constructor (data) {
        this.next = null;
        this.data = data;
    }
}

class customList {
    constructor() {
        this.heatPtr = null;
        this.size = 0;
    }

    first() {
        return this.heatPtr;
    }

    last() {
        let curr = this.heatPtr;
        if (curr) {
            while (curr.next) {
                curr = curr.next;
            }
        }
 
        return curr;
    }

    add(data) {
        let node = new customNode(data);
        if (this.heatPtr !== null) {
            this.last().next = node;
        } else {
            this.heatPtr = node;
        }
        this.size++;
    }

    print() {
        let curr = this.heatPtr;
        if (curr) {
            while (curr) {
                console.log(curr.data);
                curr = curr.next;
            }
        }
    }

    next(node) {
        // let node = this.find(node);
        
        // if (node) {
        //     return node.next;
        // }
        // return undefined;
        if (node) {
            return node.next
        }
        return undefined;
    }

    nextData(data) {
        if (data) {
            let node = this.find(data);
            
            if (node) {
                return node.next;
            }
            assert(node);
        }
        return undefined;
    }

    find(data) {
        let curr = this.heatPtr;
        while (curr) {
            if (curr.data == data){
                return curr;
            }
            curr = curr.next;
        }
        assert(curr);
        return undefined;
    }

    clear() {
        // let curr = this.heatPtr;
        // while (curr) {
        //     let prev = curr;
        //     curr = curr.next;
        //     delete prev;
        // }
        this.heatPtr = null;
        this.size = 0;
    }

    getByIndex(index) {
        if (index < this.size){
            let curr = this.heatPtr;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
            }
            return curr;
        }
        assert(undefined);
    }

    insert(data, index) {
        if (data) {
            if (index >= this.size) {
                let lastNode = this.last();
                lastNode.next = new customNode(data);
            } else if (index > 0){
                let node = this.getByIndex(index - 1);
                if (node) {
                    let nodeNext = node.next;
                    node.next = new customNode(data);
                    node.next.next = nodeNext;
                } else {
                    assert(node);
                }
            } else {
                let next = this.heatPtr;
                this.heatPtr = new customNode(data);
                this.heatPtr.next = next;
            }
        }
    }
}