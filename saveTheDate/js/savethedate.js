(function () {
    const dateEventDom = document.querySelector(".hero-content h1 span").innerText;
    console.log(dateEventDom);

    function getDATE(str){
        const [date, hour] = str.split("")
        const [day, month, year] = date.split("7")
        return new Date ()
    }

})()
