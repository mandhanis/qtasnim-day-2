const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
                let cek = dataDay.find((item) => {
                    return item == day
                })
                if(cek){
                    resolve(cek)
                }else{
                    reject(new Error(' bukan hari kerja'))
                }
        }, 2000)

    })
        
}


const getCekHariKerja = () => {
    let inputHari = "senin";
    cekHariKerja(inputHari)
        .then((hasil) => { 
            console.log("Hari " + hasil + " adalah hari kerja");
            // menampilkan hasil jika promise nya berhasil / resolved
        })
        .catch((error) => {
            console.log("Hari " + inputHari + error.message); 
            // menampilkan pesan error jika promise gagal / rejected
        });
  };
  
  try {
    getCekHariKerja(); 
    // Memanggil fungsi getCekHariKerja untuk memulai operasi asyncronus
  } catch (error) {
        console.log(error.message); 
        // menangkap semua error dan menampilkan pesan error
  }
