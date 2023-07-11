function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if (dataArray.length < 5) {
        console.log("data array harus lebih dari 5");
    }else if (nilaiAwal > nilaiAkhir){
        console.log("nilai akhir harus lebih besar dari nilai awal");

    }else{
        let selection = dataArray.filter((data) => data > nilaiAwal && data < nilaiAkhir)
        selection.sort(function(a, b){return a-b;}); 
        if(selection == false){
            console.log("nilai tidak ditemukan");
        }else{
            console.log(selection);
        }      
    }
}

seleksiNilai(2, 12, [4, 6, 10, 5, 11]); 


  
