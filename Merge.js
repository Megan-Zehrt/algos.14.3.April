// 88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for merged nums1

    // Merge nums2 into nums1, starting from the end
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]; // Copy nums1 element to nums1[k] and decrement indices
        } else {
            nums1[k--] = nums2[j--]; // Copy nums2 element to nums1[k] and decrement indices
        }
    }

    // If nums2 has remaining elements, copy them to nums1
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
};