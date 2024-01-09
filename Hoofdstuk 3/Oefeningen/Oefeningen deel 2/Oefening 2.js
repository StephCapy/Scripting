for (let i = 1; i <= 100 ; i++) {
    let deelbaarDoorDrie = i % 3 === 0;
    let deelbaarDoorVijf = i % 5 === 0;

    if (deelbaarDoorDrie && deelbaarDoorVijf){
       console.log('FizzBuzz');
    }else if (deelbaarDoorDrie){
        console.log('Fizz');
    }else if (deelbaarDoorVijf){
        console.log('Buzz');
    }
}

//&& = en
//|| = of