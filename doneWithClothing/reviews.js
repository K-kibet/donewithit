// rate service delivery
function rateService (rating) {

    if(rating <= 0){
        return;
    }else{
        if(rating <= 3 ){
            return console.log("good")
        }else {
            return console.log('excellent')
        }
    }
}


//review writing 
function writeReview (message) {
    const message = message;
    return message;
}
