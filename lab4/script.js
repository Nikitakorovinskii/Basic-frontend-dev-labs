let knownName = new Boolean(false);
let userName; 
              
but.onclick = function() 
{
    if(knownName == true)
    {
        alert("Я это сделал, а " + userName + ", тебе от меня совет: \"Поступай правильно - поступай в ВятГУ!\"")
    }
    else
    {
        userName = prompt("Привет, скажи твоё имя.");
        if (userName == "")
        {
            alert("Поле должно быть заполнено")
        }
        else
        {
            alert("Я это сделал, а " + userName + ", тебе от меня совет: \"Поступай правильно - поступай в ВятГУ!\"");
            knownName = true; 
        }
    }
}