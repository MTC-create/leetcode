
let files = ['test.docx', 'tmp.ppt', 'dir', 'fil','sum.docx'];
// 结果：['dir', 'sum.docx', 'test.docx', 'tmp.ppt']
// 先摘出文件夹，排序,最后再插入结果数组
function fileSeq(files){
  let dir =[];//dir数组存储文件夹名
  for(let i = 0;i<files.length;i++){
    if(files[i].indexOf(".")==-1){
      dir.push(files[i]);
    }
  }
  let resultDir = dir.sort();//这里resultDir存储了已经排好序对文件夹名
// 分理出前缀后缀，并存储前缀、后缀
  let suffix=[];
  let prefix=[];
  for(let i=0,j=0;i<files.length;i++){
    if(files[i].indexOf(".")==-1) continue;
    suffix[j] = files[i].substring(files[i].indexOf(".")+1);
    prefix[j] = files[i].substring(0,files[i].indexOf("."));
    j++;
  }
//res数组用来存储去除文件夹后对所有文件名。
  let res = [];
  for(let i=0;i<suffix.length;i++){
    res.push(prefix[i]+'.'+suffix[i])
  }
//下面直接对这个没有文件夹的数组进行操作
//先按后缀排序
  for(let i=0;i<res.length;i++){
    for(let j=i+1;j<res.length;j++){
      if(res[i].substring(res[i].indexOf(".")+1)>res[j].substring(res[j].indexOf(".")+1)){
        [res[i],res[j]]=[res[j],res[i]]
      }
    }
  }
//按后缀排好序后，下面只有当两个文件名后缀相等时，才比较前缀，并排序，得到出文件夹名对最终结果
  for(let i=0;i<res.length;i++){
    for(let j=i+1;j<res.length;j++){
      if(res[i].substring(res[i].indexOf(".")+1)==res[j].substring(res[j].indexOf(".")+1)){
        if(res[i].substring(0,res[i].indexOf("."))>res[j].substring(0,res[j].indexOf("."))){
          [res[i],res[j]]=[res[j],res[i]]
        }
      }
    }
  }
//将两个结果进行拼接，split成数组。把一个字符串分割成字符串数组
  return (resultDir+','+res).split(',')
  // console.log((resultDir+','+res).split(','))//因为用了+，所以全转换为字符串了，在用spilt转换为数组
}
console.log(fileSeq(files));


