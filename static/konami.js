var kkeys=[],konami="38,38,40,40,37,39,37,39,66,65";
window.addEventListener("keydown",function(e){
    kkeys.push(e.keyCode);
    if (kkeys.toString().indexOf(konami)>=0)document.head.innerHTML = document.head.innerHTML + '<style type="text/css">*{font-family:Papyrus,"Comic Sans MS",cursive!important}</style>';
}, true);