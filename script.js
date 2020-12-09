setInterval(() => {
    let d = new Date();
    // console.log(d);
    let  htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    console.log(htime, mtime, stime);
    let hrotation = (30 * htime) + (mtime/2) + (stime/120);
    let mrotation = (6* mtime) + (stime/10);
    let srotation = 6 * stime;
    // mrotation, srotation;
       
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

