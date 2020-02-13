// (function (){

//     console.log('starting');

//     let list = new customList()
//     list.add(21);
//     list.add(324);
//     list.add(255);
//     list.print();

//     // let node = list.find(324);
//     // if (node) {
//     //     console.log(list.next(node).data)
//     // }

//     // console.log(list.getByIndex(0).data);

//     console.log('');
    
//     list.insert(45, 3);
//     list.print();

    
//     console.log('end');
// })();


function initList() {
    let list = new customList();

    list.add(2);
    list.add(43);
    list.add(3);
    list.add(5);
    list.add(23);

    return list;
}

describe("List", function() {


    it("Add", function() {
        initList();

    });


    it("Find ", function() {
        let list = initList();

        list.find(43);
        list.find(2);
        list.find(2);
        list.find(5);

    });

    it("Next ", function() {
        let list = initList();

        list.nextData(43);
        list.nextData(2);
    });

    it("Get by index ", function() {
        let list = initList();

        list.getByIndex(2);
        list.getByIndex(1);
        list.getByIndex(1);

    });
  
    it("Insert ", function() {
        let list = initList();

        list.insert(32, 2);
        list.insert(322, 1);
        list.insert(2, 1);

    });

    it("Last ", function() {
        let list = initList();

        list.last();
        list.last();
        list.last();

    });
});
