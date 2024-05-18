import {ScreenOrientation} from '@capacitor/screen-orientation'
import { StatusBar, Style } from '@capacitor/status-bar';
document.addEventListener('deviceready',async () => {
    ScreenOrientation.lock({
        orientation: "landscape"
    })
    await StatusBar.hide();
setTimeout(()=>{
    var elem = (document.compatMode === "CSS1Compat") ?
document.documentElement :
document.body;
var height = elem.clientHeight;
var width = elem.clientWidth;
console.log(elem.clientHeight)
console.log(elem.clientWidth)
window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
    "letterbox":"on",
    "scale":"exactfit"
}
fetch('css/index.css')
const ruffle = window.RufflePlayer.newest();
const player = ruffle.createPlayer();
const container = document.getElementById("flashcontainer");
container.appendChild(player);
player.load("./games/shopempire2.swf");
player.style.height = "100vh"
player.style.width = "100vw"
player.play()
},1000)
})

