document.addEventListener('DOMContentLoaded', function(){
    const themeButtonArray = document.getElementsByClassName('theme');
    for(let i = 0; i < themeButtonArray.length; i++){
        themeButtonArray[i].addEventListener('click', changeTheme);
    }
    
})
function changeTheme(){
    const themeButtonArray = document.getElementsByClassName('theme');
    const bodyChangeTheme = document.getElementsByTagName('body');
    for(let i = 0; i < themeButtonArray.length; i++){
        if(themeButtonArray[i].id === 'classic'){
            bodyChangeTheme.className = 'classic'
        }else if(themeButtonArray[i].id === 'city'){
            bodyChangeTheme.className = 'city'
        }else{
            bodyChangeTheme.className = 'association'
        }
    }
}