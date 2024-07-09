function bulb_on(){
    document.getElementById('bulb').style.backgroundColor = "#0ef";
    document.getElementById('bulb').style.boxShadow = "inset 0 0 0.5em 0 #0ef, 0 0 15em 0 #0ef";
}
function bulb_off(){
    document.getElementById('bulb').style.backgroundColor = "#bbb";
    document.getElementById('bulb').style.boxShadow = "inset 0 0 0 0 #bbb, 0 0 0em #bbb"
}