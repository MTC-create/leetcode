//动态规划背包问题
// P[i][c] 表示 前 i个物品，装入容量为c的最大价值
// v[i] 表示第 i件物品的价值
// w[i] 表示每件物品的重量
//C 表示背包的容量
//P二维数组是用来存结果
//rec二维数组是为了回溯
function knapSack(n,v,w,capacity){

  //初始化两个备忘数组
  let P = Array(n+1).fill().map(() => Array(capacity+1));
  let rec = Array(n+1).fill().map(() => Array(capacity+1));
  for(let i =0;i<=n;i++){
    P[i][0] = 0;
    rec[i][0] = 0;
  }
  for(let i= 0;i<=capacity;i++){
    P[0][i] = 0;
    rec[0][i] = 0;
  }
//回来后，看怎么修改，能实现统一i
  for(let i = 1; i <= n; i++){
    for(let c = 1; c <= capacity; c++ ){
      if(w[i-1]<=c && v[i-1]+P[i-1][c-w[i-1]]>P[i-1][c]){//错的主要原因就是伪代码中的i指的是第i个物品。
        P[i][c] = v[i-1]+P[i-1][c-w[i-1]];
        rec[i][c] = 1;
      }else {
        P[i][c] = P[i-1][c];
        rec[i][c] = 0;
      }
    }
  }
  //逆向获取加入的物品
  let K = capacity;
  for(let i = n; i > 0; i--){
    if(rec[i][K] === 1){
      console.log("选择商品"+i)
      K=K-w[i-1];//错的主要原因就是伪代码中的i指的是第i个物品。
    }else{
      console.log("不选择商品"+i)
    }
  }
  return P[n][capacity];
}
console.log(knapSack(5,[24,2,9,10,9],[10,3,4,5,4],13))