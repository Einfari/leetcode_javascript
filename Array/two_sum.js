// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var len = nums.length;
	var result;

	for (var i = 0; i < len; i++) {
		var index = nums.indexOf(target - nums[i]);
		if (index > -1 && index != i) {
			result = [i, index]
			break;
		}
	}
	return result;
 };

var numbers = [3, 2, 4, 5, 1];
console.log(twoSum(numbers, 6));