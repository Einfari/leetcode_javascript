// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// 不知道为什么leetcode通不过...

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var result;
    var len = nums.length;

    for(var i=0; i<len-1; i++){
    	if(nums[i] === nums[i+1]){
    		nums.splice(i, 1);
    	}
    }
    return nums;
};

var Q = [1,1,2,3,3,4,5,6,6,7];
var S = [1,2];
console.log(removeDuplicates(S));