/**
 * @param {string[]} strs
 * @return {string}
 */                                                                                             
var longestCommonPrefix = function(strs) {                               
    if(strs==null||strs.length==0){
    return "";
}
prefix = strs[0];
for(i=0;i<prefix.length;i++){
    char = prefix.charAt(i);

    for(j=1;j<strs.length;j++){
        if(strs[j].charAt(i)!==char||i===strs[j].length){
            return prefix.substring(0,i)
        }
    }
} return prefix;
    
};
