var meuArrayUm = [1,2,3];
var meuArrayDois = [4,5,6];

/* var juntaDoisArrays = meuArrayUm.concat(meuArrayDois);
console.log(juntaDoisArrays); 
 */
 
function juntaDoisArrays(meuArrayUm, meuArrayDois) {

    for(var i = 0; i < meuArrayDois.length; i++){
        meuArrayUm.push(meuArrayDois[i]);
    }
    console.log(meuArrayUm);
}
juntaDoisArrays(meuArrayUm, meuArrayDois);