const swap=(arr,x,y)=>{
    let temp = arr[y];
    arr[y] = arr[x];
    arr[x] = temp;
};
var moveZeroes = function(nums) {
    n=nums.length;
    let j=0;
    for(i=0;i<n;i++){
        if(nums[i]==0){
        i=j;
        break;
        }
    }
    for(i=j+1;i<n;i++){
        if(nums[i]!=0){
        swap(nums,i,j);
        j++;
    }}
    
};
