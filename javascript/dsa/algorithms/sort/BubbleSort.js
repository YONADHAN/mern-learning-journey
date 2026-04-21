function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for(let i = 0;i<arr.length-1;i++) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp
        }
    }while(swapped)
}

const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr)