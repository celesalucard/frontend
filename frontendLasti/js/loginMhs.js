function login() {
    let noreg = $("#no-registrasi").val();
    Cookies.set("noreg", noreg, { expires: 30 });
    window.location.href = "index.html";
    return false;
}
