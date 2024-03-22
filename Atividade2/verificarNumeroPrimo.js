    function numPrimo(n){

        if(n <= 1){
            return false;
        }

        if( (n != 2) && (n % 2 == 0)){
            return false;
        }

        for(let i = 3; i < n; i += 2){
            if(n % i == 0){
                return false;
            }
        }

        return true;

    }

    n = 0;
    
    console.log(numPrimo(n));
    console.log(numPrimo(n+1));
    console.log(numPrimo(n+2));
    console.log(numPrimo(n+3));
    console.log(numPrimo(n+7));
    console.log(numPrimo(n+83));
    console.log(numPrimo(n+100));
    console.log(numPrimo(n+991));
    console.log(numPrimo(n+104729));
    console.log(numPrimo(n+14348907));