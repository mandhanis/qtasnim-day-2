const getMonths = (callback) => {
    setTimeout (() => {
        let error = false 
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Desember"]
        if (error) {
            callback(null, months)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 2000);
}

const displayMonth = (months) => {
    console.log(months);
};
  
getMonths((error, months) => {
    if (!error) {
        months.map((months) => {
          displayMonth(months);
        });
    } else {
        console.log("Error:", error.message);
    }
});
