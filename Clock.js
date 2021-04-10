let H =0

function solution(H){

     let count = 0;
    let s=""

    for(let i=0; i<H+1; i++){
        for(let j=0; j<60; j++){
            for(let k=0; k<60; k++){
                if((i.toString()+j.toString()+k.toString()).includes('3')){
                    count++
                }
            }
        }
    } 

    console.log(count)
}

solution(H)