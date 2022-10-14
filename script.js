function setTheme(theme){
    document.body.className = theme;
} 
document.getElementById('theme-select').addEventListener('change', function(event) {
    console.log(event);
    setTheme(event.target.value);
});
