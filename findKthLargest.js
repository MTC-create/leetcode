// //快排
// 在长度为n的排序数组中，第k大的数字的下标是n-k
// 用快速排序的函数partition对数组分区，如果函数partition选取的中间值在分区之后的下标正好是n-k，分区后左边的的值都比中间值小，右边的值都比中间值大，即使整个数组不是排序的，中间值也肯定是第k大的数字
// 如果函数partition选取的中间值在分区之后的下标大于n-k，那么第k大的数字一定位于中间值的左侧，于是再对中间值的左侧的子数组分区（记住n-k在哪侧，就在哪一侧）
// 如果函数partition选择的中间值在分区之后的下标小于n-k，那么第k大的数字一定位于中间值的右侧，于是再对中间值的右侧的子数组分区
//
/*单边循环法4, 7, 3, 5, 6, 2, 8, 1
*步骤：
* 一. 首先获取基准元素standardValue,同时设置一个mark指针指向数列起始位置,mark指针表示小于基准元素的区域边界.用以上数组来说:

standardValue=4, mark=0
二. 然后,从基准元素的下一位(即7)开始遍历数组:

如果遍历到的元素大于基准元素,继续遍历;

如果遍历到的元素小于基准元素,需要完成:

1.将mark指针右移1位,因为小于基准元素的区域边界增大了1;

2.将最新遍历到的元素和mark指针指向的元素进行交换,因为最新遍历的元素属于小于基准元素standardValue的区域.继续往下走，直到遍历结束

4, 3, 2, 1, 6, 7, 8, 5
三. 最后,将基准元素和指针指向的元素交换,这一轮宣告结束,将看到的数组是这样:

1, 3, 2, 4, 6, 7, 8, 5
实现了将数组中比基准元素4小的元素移动到了左边, 比基准元素4大的元素移动到了右边, 分成左右两个部分, 然后对左右两个部分继续一 二 三的步骤,也就是递归.
*
* */
function partition(arr, startIndex, endIndex) {
  // 取第一个位置的元素作为基准元素（也可以选择随机位置）
  let pivot = arr[startIndex];
  // 设置一个mark指针指向数组起始位置 -- 最终  这个mark指针代表小于基准元素的区域边界
  let mark = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {//这里4.8错了，这里是小于等于end
    if (arr[i] < pivot) {
      mark++;//如果遍历的元素小与主元，则交换
      [arr[mark], arr[i]] = [arr[i], arr[mark]];//ES6解构语法，交换值
    }
  }
  arr[startIndex] = arr[mark];//最后,将基准元素和指针指向的元素交换,这一轮宣告结束
  arr[mark] = pivot;//同上
  return mark;
}
var findKthLargest = function (nums, k) {
  let targetIndex = nums.length - k;
  let start = 0,
      end = nums.length - 1;
  let index = partition(nums, start, end);
  while (index != targetIndex) {
    if (index > targetIndex) {      //这里写错了，逻辑记错了
      end = index - 1;
    } else {
      start = index + 1;
    }
    index = partition(nums, start, end);
  }
  return nums[index];
};
console.log(findKthLargest(arrs,k))

// //冒泡
// let arr = [4,23,100,9,7,49,36,57];
// console.log("原始数据："+arr);
//
// for(let i=0;i<arr.length-1;i++){//确定轮数
//   for(let j=0;j<arr.length-1-i;j++){//确定每次比较的次数
//     if(arr[j]>arr[j+1]){
//       let tem = arr[j];
//       arr[j] = arr[j+1];
//       arr[j+1] = tem;
//     }
//   }
//   console.log("第"+i+"次排序"+arr)
// }
// console.log("最终排序："+arr)

//mox
function partition(arr,startIndex,endIndex){
  let pivot = arr[startIndex];
  let mark = startIndex;                  //这里第二遍默写写错了，写成了mark=0，应该是从startIndex开始。
  for(let i=startIndex+1;i<=endIndex;i++){  //这里开始是startIndex+1开始
    if(arr[i]<pivot){
      mark++;
      [arr[i],arr[mark]] = [arr[mark],arr[i]];
    }
  }
  arr[startIndex]=arr[mark];
  arr[mark]=pivot;
}
//mox冒泡错了
for(let i=0;i<arr.length-1;i++){
  for(let j=i;j<arr.length-1-i;j++){
    if(arr[j]>arr[j+1]){   //写错了，这里就是j和j+1
      let temp =arr[j];
      arr[j]=arr[j+1];
      arr[j+1]=temp;
    }
  }
}