function KiemTra(){
    var hoTen = document.getElementById('hoTen').value;
    var soDT = document.getElementById('soDT').value;
    var email = document.getElementById('email').value;
    var number = /[0-9]/;
    var letter = /\w/;
    var special = /[~`@#$%^&*()\-_+={[|\\?/><,.;'"\]}]/;
    var mail = /[\w][@gmail.][\w]/;
    var KTName, KTDT, KTEmail;
    if (hoTen.length == 0) {
        document.getElementById('loiHoTen').innerHTML = 'Họ và tên không được bỏ trống<br>';
    } else if(number.test(hoTen) == true || special.test(hoTen) == true) {
        document.getElementById('loiHoTen').innerHTML = 'Họ và tên chỉ có chữ cái <br>';
    } else{
        document.getElementById('loiHoTen').innerHTML = '';
          KTName = true;
      }  

    if (soDT.length == 0) 
        document.getElementById('loiSoDT').innerHTML = 'Số điện thoại không được để trống <br>';
    else if (soDT.length < 10)  
        document.getElementById('loiSoDT').innerHTML = 'Số điện thoại chưa đúng cú pháp <br>';
    else {
        KTDT = true;
        document.getElementById('loiSoDT').innerHTML = '';
    }   
      

    if (email.length == 0) document.getElementById('loiEmail').innerHTML = 'Email không được để trống <br>';  
    else if (mail.test(email) == true ){
        KTEmail = true;
        document.getElementById('loiEmail').innerHTML = '';
    } 
    else document.getElementById('loiEmail').innerHTML = 'Email không đúng cú pháp';

    if (KTName == true && KTDT == true && KTEmail == true) {
        alert('Gửi tin nhắn thành công!');
        document.getElementById('loiHoTen').innerHTML = '';
        document.getElementById('loiSoDT').innerHTML = '';
        document.getElementById('loiEmail').innerHTML = '';
    }
}