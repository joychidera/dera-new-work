const hour = document.getElementById("hour")
const minute = document.getElementById("minutes")
const second = document.getElementById("seconds")
const ampm = document.getElementById("ampm")


function updateclock(){
  let h = new Date().getHours()
  let M = new Date().getMinutes()
  let s = new Date().getSeconds() 
  let ampm = "AM"

  if(h > 12){
    h = h- 12
    ampm = "PM"
  }
  hour.innerText = h;
  minute.innerText =M
  second.innerText =s
  ampm,(innerText = ampm)
setTimeout(()=>{
updateclock()
},1000)
}
updateclock()
''