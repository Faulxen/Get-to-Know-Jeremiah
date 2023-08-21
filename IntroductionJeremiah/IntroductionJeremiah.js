document.getElementById("Hobbies").style.display= `none`
document.getElementById("Likes").style.display= `none`
document.getElementById("Skills").style.display= `none`

document.getElementById("HobbiesButton").addEventListener("click", function(){
    document.getElementById("Hobbies").style.display= `block`
    document.getElementById("Likes").style.display= `none`
    document.getElementById("Skills").style.display= `none`
});

document.getElementById("LikeButton").addEventListener("click", function(){
    document.getElementById("Hobbies").style.display= `none`
    document.getElementById("Likes").style.display= `block`
    document.getElementById("Skills").style.display= `none`
});

document.getElementById("SkillsButton").addEventListener("click", function(){
    document.getElementById("Hobbies").style.display= `none`
    document.getElementById("Likes").style.display= `none`
    document.getElementById("Skills").style.display= `block`
});

document.getElementById("AboutBtn").addEventListener("click", function(){
    alert("This website is created for educational purposed only.")
});

document.getElementById("ContactBtn").addEventListener("click", function(){
    alert("For any queries or concerns, please contact me at: escletojeremiah@gmail.com")
});