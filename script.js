const audio=document.getElementById('audio'),music=document.getElementById('music');
music.onclick=async()=>{try{if(audio.paused){await audio.play();music.innerHTML='❚❚ <span>Pause our song</span>'}else{audio.pause();music.innerHTML='♫ <span>Play our song</span>'}}catch(e){alert('Add your MP3 as assets/music/rakan-song.mp3')}}; 
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
document.getElementById('surprise').onclick=()=>document.getElementById('message').classList.toggle('show');