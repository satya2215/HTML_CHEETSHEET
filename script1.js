
window.onload=function(){getTime();}
function getTime(){
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  var date=today.getDate();
  var year =today.getFullYear();
  var month=today.
  getMonth();
  
  document.getElementById('time').innerHTML="Time"+" . "+" . "+" . "+h+":"+m+":"+s +'<br>'+"Date:"+date+"/"+month+"/"+year;
  setTimeout(function(){getTime();},1000)
}
// function cheaktime(i)
// {
//   if(i<10)
//   {
//     i="0"+i;
//   }
//   return i;
// }
