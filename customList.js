
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
                this.size++;
            } else if (index > 0){
                let node = this.getByIndex(index - 1);
                if (node) {
                    let nodeNext = node.next;
                    node.next = new customNode(data);
                    this.size++;
                    node.next.next = nodeNext;
                } else {
                    assert(node);
                }
            } else {
                let next = this.heatPtr;
                this.heatPtr = new customNode(data);
                this.size++;
                this.heatPtr.next = next;
            }
        }
    }

    reverse() {
        if (this.size > 1) {

            let prev = this.heatPtr;
            let curr = this.heatPtr.next;
            let next;

            this.heatPtr.next = null;

            while (curr) {
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            this.heatPtr = prev;
        }
    }

    sort() {
        if (this.size > 1) {
            let allSorted = false;
            while (!allSorted) {
                let curr = this.heatPtr.next;
                let prev = this.heatPtr;
                while (curr) {
                    if (prev.data > curr.data){
                        let tmp = curr.data;
                        curr.data = prev.data;
                        prev.data = tmp;
                        allSorted = false;
                        break;
                    }
                    prev = curr;
                    curr = curr.next;
                    allSorted = true;
                }
            }
        }
    }

    popMinElement() {
        if (this.heatPtr) {
            let min = null;
            let curr = this.heatPtr;
            let iter = 0;
            for (let i = 0; i < this.size; i++) {
                if (min) {
                    if (min > curr.data){
                        min = curr.data;
                        iter = i;
                    }
                } else {
                    min = curr.data;
                    iter = i;
                }

                curr = curr.next;
            }

            let prev = null
            curr = this.heatPtr;
            for (let i = 0; i <= iter; i++) {
                if (i == iter) {
                    if (prev) {
                        let minEl = curr;
                        prev.next = curr.next;
                        this.size--;
                        return minEl;
                    } else {
                        let minEl = curr;
                        this.heatPtr = this.heatPtr.next;
                        this.size--;
                        return minEl;
                    }
                }
                prev = curr;
                curr = curr.next
            }

        }
        return null;
    }

    // appendAfterMax(data) {
    //     if (this.heatPtr) {
    //         if (this.size > 1) {
                
    //             let curr = this.heatPtr;
    //             let prev = null;
    //             let hasInsert = false;

    //             while (curr) {
    //                 if (curr.data > data) {

    //                     if (prev === null) {
    //                         this.heatPtr = new customNode(data);
    //                         this.heatPtr.next = curr;
    //                     } else {
    //                         prev.next = new customNode(data);
    //                         prev.next.next = curr;
    //                     }
    //                     hasInsert = true;
    //                     break;
    //                 }
    //                 prev = curr;
    //                 curr = curr.next;
    //             }
    //             if (!hasInsert) {
    //                 if (prev) {
    //                     prev.next = new customNode(data);
    //                 }
    //             }

    //         } else {
    //             if (this.heatPtr.data > data) {
    //                 let next = this.heatPtr;
    //                 this.heatPtr = new customNode(data);
    //                 this.heatPtr.next = next;
    //             } else {
    //                 this.heatPtr.next = new customNode(data);
    //             }
    //         }
    //     } else {
    //         this.heatPtr = new customNode(data);
    //     }
    //     this.size++;
    // }

    merge(list) {
        let mergeList = new customList();

        let currMy = this.heatPtr;
        let currList = list.heatPtr;

        while (true) {
            let min1 = null;
            let min2 = null;
            if (currMy) {
                min1 = this.popMinElement();
                // mergeList.appendAfterMax(currMy.data)
            }
            if (currList) {
                min2 = list.popMinElement();
                // mergeList.appendAfterMax(currList.data);
            }
            if (min1 && min2) {
                if (min1.data < min2.data){
                    mergeList.add(min1.data);
                    mergeList.add(min2.data);
                } else {
                    mergeList.add(min2.data);
                    mergeList.add(min1.data);
                }
            } else {
                if (!min1 && !min2) {
                    break;
                }
                if (min1) {
                    mergeList.data(min1);
                }
                if (min2) {
                    mergeList.data(min2);
                }
            }

        }

        return mergeList;
    }
}