var tien={
    firstName:' Trần Duy ',
    lastName: ' Tiền ',
    ShowName: function (){
        document.writeln(firstName+" "+lastName);
    }
}
function displayName(){
    document.writeln(this.firstName+" "+this.lastName);
}
// tạo một cái biến gán lại bằng function DisplayName
// dùng bind để lấy ra object cần hiển thị
var ten=displayName.bind(tien);
ten();
//document.write(ten());