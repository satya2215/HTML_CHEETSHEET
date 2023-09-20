
 function passcheak(sat){
  var passclass=document.getElementsByClassName('cheak');
  const eightchar=new RegExp('(?=.{8,})');
  const uppercase=new RegExp('(?=.*[A-Z])');
  const lowercase=new RegExp('(?=.*[a-z])');
  const digit=new RegExp('(?=.*[0-9])');
  const specialchar=new RegExp('(?=.*[!@#\$%\^&\*])');
  if(eightchar.test(sat)){
    passclass[0].style.color="white";
  }
  else{
    passclass[0].style.color="green";
  }
  if(uppercase.test(sat)){
    passclass[1].style.color="white";
  }
  else{
    passclass[1].style.color="green";
  }
  if(lowercase.test(sat)){
    passclass[3].style.color="white";
  }
  else{
    passclass[3].style.color="green";
  }
  if(digit.test(sat)){
    passclass[2].style.color="white";
  }
  else{
    passclass[2].style.color="green";
  }
  if(specialchar.test(sat)){
    passclass[4].style.color="white";
  }
  else{
    passclass[4].style.color="green";
  }
 }

      function confirmpasswordcheak(){
        let pp = document.getElementById('pass').value;
        let con = document.getElementById('confirm').value;
        // let ss=document.getElementById('ch').innerText="passwordmatch";
        let aaa=document.getElementById("ch");
        // console.log(pp,con);
        if(pp.length != 0)
        {
        if(pp == con)
        {
           aaa.textContent="password match";
          aaa.style.color="green";

        }
        else{
          aaa.textContent="*password doesnot match";
          aaa.style.color="red";
        }
      }
    else{
      alert("password cannot be empty");
    }}



  