let birthdayEl = document.getElementById('birthday');
let btnEl = document.getElementById('btn');
let resultEl = document.getElementById('result');

function calculateAge(){
      
       let birthdayValue = birthdayEl.value;
       if(birthdayValue == ""){
              alert("please inpur your age Value");
       }else{
              let ageDetails = getAge(birthdayValue);
              resultEl.innerText= `your age is years: ${ageDetails.years}, months: ${ageDetails.months}, days: ${ageDetails.days}`;
              
              
       }
       birthdayEl.value = null;

       
}

birthdayEl.addEventListener('click', function(){
       if(resultEl !== null){
              resultEl.innerText = null;
       }
})

// birthdayEl.addEventListener('focus', function(){
//        resultEl.innerText = '';
// })




function getAge(birthdayValue){
       const currentDate = new Date();
       const birthDayDate = new Date(birthdayValue);
       currentDate.setDate(currentDate.getDate() + 1);
       let months = currentDate.getMonth() - birthDayDate.getMonth();
       let years = currentDate.getFullYear() - birthDayDate.getFullYear();
       let days = currentDate.getDate() - birthDayDate.getDate();

       if(days < 0){
              months--;
              const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
              days += previousMonth.getDate();

       }
       if(months < 0 ){
              years--;
              months += 12;
       }
       if(birthDayDate > currentDate ){
              alert("your enter value is not correct");
              return;
       }
       return {years, months, days};
      

}
btnEl.addEventListener('click',calculateAge);


