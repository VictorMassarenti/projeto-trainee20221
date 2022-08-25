export default function validacaoLogin() {
    console.log('ok')
    var done = 0;
    var user = document.getElementById('user').value;
    user = user.toLowerCase();
    var pwd = document.getElementsById('pwd').value;
    pwd = pwd.toLowerCase();
    if (user == "admin" && pwd == "admin") {
        console.log('funcionando') /* window.location = "/Admin"; */
        done = 1;
    }
    if (done == 0) { alert("Dados incorretos, tente novamente"); }

}