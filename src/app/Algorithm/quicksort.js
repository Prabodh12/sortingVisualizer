function swap(items, leftIndex, rightIndex,animation){
    animation.push([leftIndex,rightIndex,-1]);
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right,animation) {
    var pivotidx = Math.floor((right + left) / 2)
    var pivot   = items[Math.floor((right + left) / 2)]; //middle element
    var i       = left; //left pointer
    var j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            animation.push([i,pivotidx,-2]);
            animation.push([i,pivotidx,-3]);
            i++;
        }
        animation.push([i,pivotidx,-2]);
        animation.push([i,pivotidx,-3]);
        while (items[j] > pivot) {
            animation.push([j,pivotidx,-2]);
            animation.push([j,pivotidx,-3]);
            j--;
        }
        animation.push([j,pivotidx,-2]);
        animation.push([j,pivotidx,-3]);

        if(i==pivotidx){
            pivotidx=j;   
        }
        if(j==pivotidx){
            pivotidx=i;
        }
        if (i <= j) {
            swap(items, i, j,animation); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right,animation) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right,animation); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1,animation);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right,animation);
        }
    }
    
    return animation;
}

function quick(items){
    var animation=[];
    quickSort(items,0,items.length-1,animation);
    console.log(items)
    return animation;
}

//console.log(quick([5,7,3,6,0,2,4,7]));
// first call to quick sort
// var items=[5,7,3,6,0,2,4,7];
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]