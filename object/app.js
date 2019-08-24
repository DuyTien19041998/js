var user={
    username:'Trần Duy Tiền ',
    age:'20',
    girlFriend:'no',


    ViewInfo: function(){
        document.write(' tên : '+this.username+' '+ 'Tuổi '+this.age+' '+' Bạn gái :'+this.girlFriend);
    },
    locate: {
        sonha:  23,
        district: 'Núi Thành',
        tax: 12003,

    }
}
// function ViewInfo(tien){
//     document.write(tien.username+' '+tien.age+' '+tien.girlFriend);
// }
//ViewInfo(this.user);

/*
    Trong một object có thể có 3 cái:
    1. properties: {name value}
    2. method
    3. object khác


*/
// ví dụ muốn truy cập vào object con của object cha thì làm như sau

user.locate.district;
user.locate.tax;
document.write(user.locate.sonha);// lấy dữ liệu từ object con
// có thể khỏi tạo dữ liệu ngay trong gọi hàm
// củng có thể truy cập vào dữ liệu của Object bằng []


// ví dụ
document.write(user['username'])

user.ViewInfo();

// first class function hàm gán bằng mội cái biến