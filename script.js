//BubbleSortArray
var arr = [ 12, -6, 8, 91, 105, 35, 22];
console.log(arr);

function sortArr(array){
    for (var i = array.length - 1; i > 0; i--){
        var swap = false;
        for (var j = 0; j < i; j++){
            if (array[j] > array[j+1]){
                var tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
                swap = true;
            }
        }
        if (!swap) break;
    }
    return array;
}
var sorted = sortArr(arr);
console.log(sorted);
//---------------------------------------------------------------------------------------------------------------------------------------
//String - 1st letter toUpperCase
var str = 'is home to over 31 million developers working together to host and review code, manage projects, and build software together.';
var srtUp = str[0].toUpperCase() + str.substr(1);
console.log(srtUp);
