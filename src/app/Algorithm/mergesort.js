function merge(array){
    const animation=[];
    if(array.length<=1){
        return array
    }
    const auxiarray = array.slice();
    (mergeSort(array,0,array.length-1,auxiarray,animation))
    return animation
}

function mergeSort(mainarray,s,e,auxiarray,animation){
    if(s==e) return;
    const m = Math.floor((s+e)/2);
    mergeSort(auxiarray,s,m,mainarray,animation)
    mergeSort(auxiarray,m+1,e,mainarray,animation)
    domerge(mainarray,s,m,e,auxiarray,animation)
}

function domerge(mainarray,s,m,e,auxiarray,animation){
    let k=s;
    let i=s;
    let j=m+1;
    while(i<=m && j<=e){
        animation.push([i,j])
        animation.push([i,j])
        if(auxiarray[i]<=auxiarray[j]){
            animation.push([k,auxiarray[i]])
            mainarray[k++]=auxiarray[i++];
        }
        else{
            animation.push([k,auxiarray[j]])
            mainarray[k++]=auxiarray[j++];
        }
    }
    while(i<=m){
        animation.push([i,i])
        animation.push([i,i])
        animation.push([k,auxiarray[i]])
        mainarray[k++]=auxiarray[i++];
    }
    while(j<=e){
        animation.push([j,j])
        animation.push([j,j])
        animation.push([k,auxiarray[j]])
        mainarray[k++]=auxiarray[j++];
    }
}

//merge([50,30,20,60,10,80])