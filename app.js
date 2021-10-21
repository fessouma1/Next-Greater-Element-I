/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
   let greaterNumber = [];
    let checkIndex = 0;

    for(let i = 0; i < nums1.length; i++){
        checkIndex = nums2.indexOf(nums1[i])
        checkIndex+=1;
        if(checkIndex == undefined){
            greaterNumber.push(-1);
        }
        else if(nums1[i] < nums2[checkIndex])
            {
                greaterNumber.push(nums2[checkIndex]);
            }
            else
            {
                greaterNumber.push(-1);
            }
    }
    console.log(greaterNumber)
}
let nums1 = [2,4];
let nums2 = [1,2,3,4];

nextGreaterElement(nums1, nums2);