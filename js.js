function likeboton()
{
    let heart =document.querySelector('.heart');
    let likes=document.querySelector('.likes');
    if(heart.src.match("heart.png"))
    {
        heart.src="Images/heart_red.png";
        likes.innerHTML="3,655 likes";
    }


    else
    {
        heart.src="Images/heart.png";
        likes.innerHTML="3,654 likes";
    }
    
}