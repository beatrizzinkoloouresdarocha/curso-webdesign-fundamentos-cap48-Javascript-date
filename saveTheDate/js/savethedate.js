(function () {
    const dateEventDom = document.querySelector(".hero-content h1 span").innerText;
    console.log(dateEventDom);
   
    const dateEven = getDATE(dateEventDom)
    console.log(dateEven)
    
    function getDATE(str){
        const [date, hour] = str.split("")
        const [day, month, year] = date.split("/")
        const [h ,m] = hour.split("H")
      
        return new Date (year ,month - 1, day,h,m)
    }

})()
