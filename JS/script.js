// let close_door = document.getElementById("door");
// // let open_door = document.getElementById("crypt");
// let openDoor = document.getElementById("openDoor");
// function openDoor(){
//     close_door.classList.toggle("crypt")
// }

function openDoor(){
    document.getElementById("close").src = "/IMAGES/close.jpg";
    // document.getElementById('mp3File').play();
}
function closeDoor(){
    document.getElementById("close").src = "IMAGES/crypt.jpg";
    document.getElementById('mp3File').play();
    // document.getElementById('mp3File').currentTime = 0;
}