var x = 5
var y = 6
var z = y + x

//Var untuk dipakai di seluruh function
//Let hanya bisa digunakan di dalam function tersebut
{
    let x1 = 1
    let y1 = 1
    let z1 = y1 + x1
    console.log(z1)
}

console.log(z)

function terimainput(){
    var x=document.forms['biodata']['nim'].value;
    var y=document.forms['biodata']['nama'].value;
    var z=document.forms['biodata']['agama'].value;

    if(x==null || x==""){
        document.getElementById("val_nim").innerHTML="<font color='red'><b>* Harap Isi Kolom NIM Dengan Benar</b></font>";
        if(y==null || y=="") {
            document.getElementById("val_nama").innerHTML="<font color='red'><b>* Harap Isi Kolom NAMA Dengan Benar</b></font>";  
        } else {
            document.getElementById("val_nama").innerHTML="<font color='purple'>* Benar</font>";
        }
    } else {
            document.getElementById("val_nim").innerHTML="<font color='purple'>* Benar</font>";
            if(y==null || y=="") {
            document.getElementById("val_nama").innerHTML="<font color='red'><b>* Harap Isi Kolom NAMA Dengan Benar</b></font>";  
            } else {
                document.getElementById("val_nama").innerHTML="<font color='purple'>* Benar</font>";
                var tabel = document.getElementById("tabelinput");
                var row = tabel.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = x;
                cell2.innerHTML = y;
                cell3.innerHTML = z;
            }
        }
}