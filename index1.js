//array spread

// function arraySpread(arr1,arr2){
//     console.log(...arr1,...arr2)
// }
// let arr1=[2,3,4];
// let arr2=[5,7,8];
// arraySpread(arr1,arr2);

//array flattering

// function arrayFlattering(arr){
//    console.log(arr.flat())
// }
// let arr=[1,2,5,8,5,[8,9,10],78,[96,100]]
// arrayFlattering(arr)

//duplicate array

// function duplicateArray(arr){
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] in res){
//             continue;
//         }
//         res.push(arr[i]);
//     }
//     return res;
// }
// let arr=[1,2,3,1,2,2,5];
// console.log(duplicateArray(arr));

//intersection of two arrays

// function intersection(arr1,arr2){
//     let res=[];
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//            if(arr1[i]===arr2[j]){
//               res.push(arr1[i])
//            }
//         }
//     }
//     return res;
// }
// let arr1=[1,2,3];
// let arr2=[2,3,4];
// console.log(intersection(arr1,arr2));

///mappinng
// let arr=[1,2,3,4,5,6];
// let res=arr.map(arr=>(arr*5));
// console.log(res);