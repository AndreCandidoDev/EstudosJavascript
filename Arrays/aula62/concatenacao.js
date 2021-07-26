const nums1 = [1,2,3];
const nums2 = [4,5,6];

// const nums3 = nums1 + nums2; //concatena porem da forma errada criando uma string
// console.log(nums3); //exibe: 1,2,34,5,6
// console.log(typeof nums3);

const nums3 = nums1.concat(nums2); //concatena os arrays da forma correta
console.log(nums3);

const nums4 = nums1.concat(nums2, [7,8,9,10], '@@@@@') //concatena tudo em um unico array
console.log(nums4);

// ... rest; ... spread
const nums5 = [...nums1, ...nums2, 7, 8, 9, 10, 'asdsad']; //concatena usando spread operator
console.log(nums5);
