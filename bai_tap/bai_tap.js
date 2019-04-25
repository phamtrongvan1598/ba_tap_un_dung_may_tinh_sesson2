function input1(){


    let so = document.getElementById("So").value;
    so = parseInt(so);
    let nhap = document.getElementById("Nhap").value;
   nhap = parseInt(nhap);
    let result = so + nhap;

    document.getElementById("result").innerHTML = result;
}
function input2(){


    let so = document.getElementById("So").value;
    so = parseInt(so);
    let nhap = document.getElementById("Nhap").value;
    nhap = parseInt(nhap)
    let result = so - nhap;

    document.getElementById("result").innerHTML = result;
}
function input3(){


    let so = document.getElementById("So").value;
    so = parseInt(so);
    let nhap = document.getElementById("Nhap").value;
    nhap = parseInt(nhap)
    let result = so * nhap;

    document.getElementById("result").innerHTML = result;
}
function input4(){


    let so = document.getElementById("So").value;
    so = parseInt(so);
    let nhap = document.getElementById("Nhap").value;
    nhap = parseInt(nhap)
    let result = so / nhap;

    document.getElementById("result").innerHTML = result;
}