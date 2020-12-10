
setInterval(() => {
    let d = new Date();
   
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    // code the logic
    // all our contents go here. 
    // For hour hand -> 30h + (m/2) + (s/120)
    // For minute hand -> 6m + (s/10)
    // For second hand -> 6s
    let hrotation = (30 * htime) + (mtime/2) + (stime/120);
    let mrotation = (6* mtime) + (stime/10);
    let srotation = 6 * stime;
       
    // implement our rotation.
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    // tick sound every second
    function playAudio(url){
        new Audio(url).play();
    }
    playAudio("tick.mp3");
}, 1000);

