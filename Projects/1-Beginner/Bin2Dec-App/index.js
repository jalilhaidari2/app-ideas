function validate(){
    var input = document.getElementById('binary');
    var result = document.getElementById('result');
    var value = input.value;
    var regex = /^[01]{1,8}$/;
    if(!regex.test(value)){
        alert('Input contains non-binary number or the length is more than 8 digits');
        input.value = '';
    }else{
        var number = parseInt(value, 2);
        if(isNaN(number)){
            alert('invalid binary number');
        }else{

            result.innerText=number;
        }
    }
}