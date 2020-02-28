
class customDCNode {
    constructor (data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}

class customDCList {
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
        let node = new customDCNode(data);
        if (this.heatPtr !== null) {
            let last = this.last();
            last.next = node;
            node.prev = last;
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
                lastNode.next.prev = lastNode;
                this.size++;
            } else if (index > 0){
                let node = this.getByIndex(index - 1);
                if (node) {
                    let nodeNext = node.next;
                    node.next = new customNode(data);
                    node.next.next = nodeNext;
                    node.next.prev = node;
                    this.size++;
                } else {
                    assert(node);
                }
            } else {
                let next = this.heatPtr;
                this.heatPtr = new customNode(data);
                this.size++;
                this.heatPtr.next = next;
                next.prev = this.heatPtr;
            }
        }
    }

    reverse() {
        if (this.size > 1) {

            let curr = this.heatPtr;

            while (curr) {
                let next = curr.next;
                curr.next = curr.prev;
                curr.prev = next;
                this.heatPtr = curr;
                curr = next;
            }
        }
    }

    sort() {
        if (this.size > 1) {
            let allSorted = false;
            while (!allSorted) {
                let curr = this.heatPtr;
                allSorted = true;
                while (curr) {
                    if (curr.prev) {
                        if (curr.data < curr.prev.data) {
                            let currData = curr.data;
                            curr.data =curr.prev.data;
                            curr.prev.data = currData;
                            allSorted = false;
                        }
                    }
                    curr = curr.next;
                }
            }
        }
    }

    popMinElement() {
        if (this.heatPtr) {
            let min = null;
            let curr = this.heatPtr;
            let saveNode = null;

            for (let i = 0; i < this.size; i++) {
                if (min) {
                    if (min > curr.data) {
                        min = curr.data;
                        saveNode = curr;

                    }
                } else {
                    min = curr.data;
                    saveNode = curr;
                }
                curr = curr.next;
            }

            if (saveNode) {
                if (!saveNode.next && !saveNode.prev) {
                    this.heatPtr = null;
                } else if (!saveNode.prev) {
                    this.heatPtr = this.heatPtr.next;
                    this.heatPtr.prev = null;
                } else if (!saveNode.next) {
                    saveNode.prev.next = null;
                } else {
                    saveNode.prev.next = saveNode.next;
                    saveNode.next.prev = saveNode.prev;
                }
                this.size--;
                return saveNode;
            }

        }

        return null;
    }

    merge(list) {
        let mergeList = new customDCList();

        let currMy = this.heatPtr;
        let currList = list.heatPtr;

        while (true) {
            let min1 = null;
            let min2 = null;
            if (currMy) {
                min1 = this.popMinElement();
            }
            if (currList) {
                min2 = list.popMinElement();
            }
            if (min1 && min2) {
                mergeList.add(Math.min(min1.data, min2.data));
                mergeList.add(Math.max(min1.data, min2.data));
            } else {
                if (!min1 && !min2) {
                    break;
                }
                if (min1) {
                    mergeList.add(min1.data);
                } 
                if (min2) {
                    mergeList.add(min2.data);
                }
            }
        }

        return mergeList;
    }
}