const timer = (str) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(str);

            if(str === 'A' 
                || str === 'B'
                || str === 'C'
            ){
                resolve({code: "허용", word: str});
            } else{
                reject(new Error("허용되지 않은 문자 입력됨"));
            }
        }, 2000);
    });
}

const process = async ()=>{
    try{
        const result = await timer('A'); // awit 넣으면 대기
        console.log(result.code, result.word);

        const result2 = await timer('B');
        console.log(result2.code, result2.word);

        const result3 = await timer('D');
        console.log(result3.code, result3.word)
    } catch (error){
        console.log(error.message);
    }
}


process();