let array = ['hello', false, 22, '23', null, undefined];

function filterBy(arr, dataType) {
    let filterArr = arr.filter((item) => {
        return typeof item !== dataType;
    });

    return filterArr;
};

console.log(filterBy(array, 'object'));