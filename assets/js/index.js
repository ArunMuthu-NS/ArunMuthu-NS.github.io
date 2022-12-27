function navigate(previous, next) {
    document.getElementById(previous).classList.remove('show');
    document.getElementById(previous).classList.add('hide');
    document.getElementById(next).classList.remove('hide');
    document.getElementById(next).classList.add('show');
}
