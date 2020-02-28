
function initList() {
    let list = new customList();

    list.add(2);
    list.add(43);
    list.add(3);
    list.add(5);
    list.add(23);

    return list;
}

function initListDC() {
    let list = new customDCList();

    list.add(2);
    list.add(43);
    list.add(3);
    list.add(5);
    list.add(23);

    return list;
}


describe('List', function() {


    // it('Add', function() {
    //     initList();

    // });


    // it('Find ', function() {
    //     let list = initList();

    //     list.find(43);
    //     list.find(2);
    //     list.find(2);
    //     list.find(5);

    // });

    // it('Next ', function() {
    //     let list = initList();

    //     list.nextData(43);
    //     list.nextData(2);
    // });

    // it('Get by index ', function() {
    //     let list = initList();

    //     list.getByIndex(2);
    //     list.getByIndex(1);
    //     list.getByIndex(1);

    // });
  
    // it('Insert ', function() {
    //     let list = initList();

    //     list.insert(32, 2);
    //     list.insert(322, 1);
    //     list.insert(2, 1);

    // });

    // it('Last ', function() {
    //     let list = initList();

    //     list.last();
    //     list.last();
    //     list.last();

    // });

    // it('Reverse ', function() {
    //     let list = initList();

    //     list.reverse();
    // });

    // it('Sort ', function() {
    //     let list = initList();

    //     list.print();
    //     console.log('');
    //     list.sort();
    //     list.print();
    // });

    // it('Merge ', function() {
    //     let list = initList();
    //     let list2 = new customList();
    //     list2.add(2);
    //     list2.add(53);
    //     list2.add(1);
    //     list2.add(23);
    //     list2.add(12);

    //     let mergeList = list.merge(list2);
    //     if (mergeList) {
    //         mergeList.print();
    //     }

    //     // list.print();
    //     // console.log('');
    //     // list.sort();
    //     // list.print();
    // });


    it('Add DC', function() {
        initListDC();

    });


    it('Find DC', function() {
        let list = initListDC();

        list.find(43);
        list.find(2);
        list.find(2);
        list.find(5);

    });

    it('Next DC', function() {
        let list = initListDC();

        list.nextData(43);
        list.nextData(2);
    });

    it('Get by index DC', function() {
        let list = initListDC();

        list.getByIndex(2);
        list.getByIndex(1);
        list.getByIndex(1);

    });
  
    it('Insert DC', function() {
        let list = initListDC();

        list.insert(32, 2);
        list.insert(322, 1);
        list.insert(2, 1);

    });

    it('Last DC', function() {
        let list = initListDC();

        list.last();
        list.last();
        list.last();

    });

    it('Reverse DC', function() {
        let list = initListDC();

        list.print();
        console.log('');
        list.reverse();
        list.print();
        console.log('');
    });

    it('Sort DC', function() {
        let list = initListDC();

        list.print();
        console.log('');
        list.sort();
        list.print();
    });

    it('Merge DC', function() {
        let list = initListDC();
        let list2 = new customDCList();
        list2.add(2);
        list2.add(53);
        list2.add(1);
        list2.add(23);
        list2.add(12);

        console.log('');
        let mergeList = list.merge(list2);
        if (mergeList) {
            mergeList.print();
        }

        // list.print();
        // console.log('');
        // list.sort();
        // list.print();
    });

});
