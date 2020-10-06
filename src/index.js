// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result=[];
    if (!matrix || matrix.length === 0) return [];
    let switcher=[];
    for(let i=0;i<matrix.length;i++){
        if(i%2===0){
            switcher.push(0);
        }else if(i%2===1){
            switcher.push(1);
        }
    }
    matrix.forEach((array,index)=>{
        if(switcher[index]===0){
            result=result.concat(array);
        }else if(switcher[index]===1){
            result=result.concat(array.reverse());
        }
    });
    return result;
};
