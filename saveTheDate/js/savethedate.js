(function () {
    const dateEventDom = document.querySelector(".hero-content h1 span").innerText;
    console.log(dateEventDom);
   
    const dateEven = getDATE(dateEventDom);
    console.log(dateEven);

    const today = new Date();

    const left = dateEven.getTime() - today.getTime();

    const ONE_HOUR =  60 * 60 * 1000
    const ONE_DAY = 24 * ONE_HOUR 

    const daysleft =parseInt (left / ONE_DAY)
    left = left -daysleft * ONE_DAY
    
    const hoursLeft =parseInt (left /ONE_HOUR )
    left =left - hoursLeft * ONE_HOUR 
    


    function getDATE(str) {
        const [date, hour] = str.split(" ")
        const [day, month, year] = date.split("/")
        const [h, m] = hour.split("H")
      
        return new Date(year, month - 1, day, h, m)
    }

})();
