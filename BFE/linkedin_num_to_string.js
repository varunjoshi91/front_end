// 100.59 -> One hundred and 59/100 cents





<html>
  <head>
     <meta...> </meta>
  </head>

<body>

      <section>
        <div class="webCheck-wrapper">
            <div class="webCheck">
              
              <div class="header">
                
                <div class="address">
                  LinkedIn Corporatin
                  </div>
                
                <div class= "checkNumber'>
                    sadasd
                </div>
                
                </div>

              <div class="checkBody'>
                      
                  <div class="name">
                    <input type="text" name='userName'>
                    </div>

                  <div class="payBox">
                      <input type="text" name='userName' id="payAmount">             
                    </div>

                  <div class="amountinWords">
                     <input type="text" readOnly name="amountInWords" id="amountInWords">
                    </div>

                  
                  <div class="memo">
                    <input type="text" name='memo'>
                    </div>

                  <div class="signtaure">
                      <hr>
                    </div>
                    
                  </div>

               </div>
              
            </div>
        </div>
       </section>

</body>

CSS:

.webCheck-wrapper {

  display: flex;
  justify-content: center;
  
}


.webcheck {

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;

}

.header {
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
}

.checkBody {
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
}

.signtature {
  flex: 1 1 auto;
}




const payBox = document.getElementById('payAmount');
const amountInWordsBox = document.getElementById('amountInWords');

const handlePayValue = (event) => {
  const value = event.target.value;
  
  if (!value || !value.length || !+value.isNaN()) {
    payBox.classList.add('error');
    return;
  }
  
  payBox.classList.remove('error');
  
  // 100.59 -> One hundred and 59/100 cents
  // three digit = hundreds
  // two digits = one two three... elevent twelve nineteen, 
  
  const bigger = ['', 'Thousand', 'Million', 'Billion']
  const ones = ['', 'One', 'Two', 'Three'.....'Ten' ];
  const teens = ['', 'Eleven', 'Tweleve', 'Thirteen'.....'Nineteen' ];
  const tens = ['', 'Ten', 'twenty' ... 'Ninety']
  
  const twoNum = (num) => {
    
    if (num <= 10) {
      return ones[num];
    }
    
    if (num < 20) {
      return teens[num]; 
    }
    
    const tenthDigit = Math.floor(num/10);
    const unitDigit = num % 10;
    
    if (!tenthDigit) {
      return ones[unitDigit];
    }
    
    return `${tens[tenthDigit]} ${ones[unitDigit]}`;
  
  };
  
  const threeNum = (num) => {
    const hundredthDigit = Math.floor(num/100);
    
    if (hundredthDigit === 0) {
      return ${twoNum(num%100)};
    }
    
    return `${ones[hundredthDigit]} hundred ${twoNum(num%100)}`
  };
  
  // 0.59
  const currency = value.split('.');
  
  let counter = 0;
  const currencyArr = currency[0].split('');
  let result = '';
  
  // 852 352 100 345
  
  // [8,5,2,3,5,2,1,0,0,3,4,5]
  
  if(currency[0] === 0) {
    result = 'Zero';
  } else {

    while(currentArr.length) {
    
    const extracted = currencyArr.length > 3 ? currencyArr.splice(currencyArr.length - 3, 3).join(''): currencyArr.join('');
    result += threeNum(+extracted) + bigger[counter];
    counter++;
   }
  }

  
  
  
  amountInWordsBox.value = `$ ${result} and ${currency[1] ?? 0}/100`;
  
  // amountInWordsBox.value = `$ ${threeNum(+currency[0])} and ${currency[1] ?? 0}/100`;
  
  
  
  
}

payBox.addEventListener('input', handlePayValue);