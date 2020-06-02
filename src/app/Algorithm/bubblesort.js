function bubble(arr){
    animation = []
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = 0; j < arr.length - i - 1; j++){
            animation.push([j,j+1])
            animation.push([j,j+1])
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                animation.push([j,j+1])
            }
            else{
                animation.push([j,j])
            }

        }
    }
    //console.log(arr)
    return animation
    //console.log(animation)
    //return arr;
}
//bubble([55, 20, 30, 100, 40, 60],[])
