console.log("Welcome to spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Didaar-Kaka", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kesariya- Bhramastra ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Oo Bolega Ya Oo Oo Bolega - Pushpa", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Srivalli - Pushpa", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Tu Te Sharab - Jordan Sandhu", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Basti Ka Hasti - MC STAN", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Fake love - MC STAN", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Insaan - MC STAN", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element , i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
});

console.log("basti")
// audioElement.play(); 
 
//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        // gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        // gif.style.opacity = 0;

    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex}.mp3`;
        // masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    
})