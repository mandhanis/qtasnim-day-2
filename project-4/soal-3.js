// 1.
const hutang = (bayar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let janji = 'nih saya bayar, lunas ya :)'
            if(!janji){
                resolve(janji)
            }else{
                reject('yaelah 50 rebu doang ntar aja lah >:(')
            }
        }, 3000)
    })
}
hutang()
.then(result => console.log(result))
.catch(error => console.log(error));

// 2.
const cekFood = (food) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                const dataFood = ['ayam', 'telur', 'sayur', 'daging', 'roti']
                let cek = dataFood.find((item) => {
                    return item == food
                })
                if(cek){
                    resolve(cek)
                }else{
                    reject(new Error('Ini tidak sehat'))
                }
        }, 2000)

    })
        
}

const getFood = async () => {
    try{
        let inputFood = "sayur";
        let hasil = await cekFood(inputFood)
        console.log(hasil + " adalah makanan sehat")
    }catch (Error){
        console.log(Error.message)
    }
}

getFood();

