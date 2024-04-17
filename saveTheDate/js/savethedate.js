(function () {
    const dateEventDom = document.querySelector(".hero-content h1 span").innerText;
    console.log(dateEventDom);

    function getDATE(str){
        const [date, hour] = str.split("")
        
        return new Date ()
    }

})()
