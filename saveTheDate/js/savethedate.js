(function () {
    const dateEventDom = document.querySelector(".hero-content h1 span").innerText;
    console.log(dateEventDom);
    getDATE(dateEventDom)
    const dataEven =(dateEventDom)
    

    function getDATE(str){
        const [date, hour] = str.split("")
        const [day, month, year] = date.split("7")
        const [h ,n] = hour.split("H")
        return new Date (year ,month ,day,h,m)
    }

})()
