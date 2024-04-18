(function () {
    const dateEventDom = document.querySelector(".hero-content h1 span").innerText;
    console.log(dateEventDom);
   
    const dateEven = getDATE(dateEventDom);
    console.log(dateEven);

    const today = new Date();

    let left = dateEven.getTime() - today.getTime();

    const ONE_HOUR = 60 * 60 * 1000;
    const ONE_DAY = 24 * ONE_HOUR;

    const daysleft = Math.floor(left / ONE_DAY);
    left = left - daysleft * ONE_DAY;
    
    const hoursLeft = Math.floor(left / ONE_HOUR);
    left = left - hoursLeft * ONE_HOUR;

    const minutesLeft = Math.floor(left / (60 * 1000));

    console.log("Days left:", daysleft);
    console.log("Hours left:", hoursLeft);
    console.log("Minutes left:", minutesLeft);

    function getDATE(str) {
        const [date, hour] = str.split(" ");
        const [day, month, year] = date.split("/");
        const [h, m] = hour.split("H");
      
        return new Date(year, month - 1, day, h, m);
    }
})();
