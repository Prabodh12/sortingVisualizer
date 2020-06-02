function selection(a){
    animation = []
    var temp=0;
    for(i=0;i< a.length;i++){
        animation.push([temp,-1,i]) //red
        temp=i
        for(j=i+1;j<a.length;j++){
            animation.push([j,-2,-5]) //green
            if(a[j]<a[temp]){
                animation.push([temp,-1,j]) //red
                temp=j
            }
            else{
                animation.push([j,-3,-5]) //original color
            }
        }
        t=a[i]
        a[i]=a[temp]
        a[temp]=t
        animation.push([i,temp,-5]) //swap
    }
    //console.log(animation)
    return animation
    //console.log(a)
}

// a=[5,3,6,4,1,2]
// selection(a)