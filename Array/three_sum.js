// https://leetcode.com/problems/3sum/
// 这个算法的时间复杂度太大了，应该是O(n3)，leetcode测试会超时，在本机node.js环境下可以测试成功，算法需要进行优化。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	var len = nums.length;
	var result = [];

	for (var i = 0; i < len; i++) {
		// var sp_nums = nums.splice(i,1);
		for (var j = i + 1; j < len; j++) {
			for (var k = j + 1; k < len; k++) {
				if (nums[i] + nums[j] + nums[k] === 0 && i != j && i != k && j != k) {
					var rs = [nums[i], nums[j], nums[k]].sort();
					result.push(rs);
				}
			}
		}
	}

	for (var m = 0; m < result.length; m++) {
		for (var n = m + 1; n < result.length; n++) {
			if (result[m].toString() === result[n].toString()) {
				result.splice(n, 1);
			}
		}
	}
	return result;
};

var S = [-1, 0, 1, 2, -1, -4];
var Q = [-13,11,11,0,-5,-14,12,-11,-11,-14,-3,0,-3,12,-1,-9,-5,-13,9,-7,-2,9,-1,4,-6,-13,-7,10,10,9,7,13,5,4,-2,7,5,-13,11,10,-12,-14,-5,-8,13,2,-2,-14,4,-8,-6,-13,9,8,6,10,2,6,5,-10,0,-11,-12,12,8,-7,-4,-9,-13,-7,8,12,-14,10,-10,14,-3,3,-15,-14,3,-14,10,-11,1,1,14,-11,14,4,-6,-1,0,-11,-12,-14,-11,0,14,-9,0,7,-12,1,-6];
console.log(threeSum(Q));