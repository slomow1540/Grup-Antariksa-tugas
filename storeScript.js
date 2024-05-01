let flag = false
function changeicon(){
    if (flag == false){
        let icon = document.getElementById("icon")
        icon.setAttribute( "src", "../Images/heartfilled.png" )
        flag = true
    }
    else{
        let icon = document.getElementById("icon")
        icon.setAttribute( "src", "../Images/heart.png" )
        flag = false
    }
}