function tabSW(event, target) {
    if (event.keyCode == 9) {
        event.preventDefault();
        var target = document.getElementById(target);
        target.focus();
        target.select();

        if (target.id == "URL")
        {
            document.getElementsByClassName("kbInst")[0].innerHTML = "Enter";
            document.getElementsByClassName("kbInst")[1].innerHTML = "Tab";
        }
        else if (target.id == "srch")
        {
            document.getElementsByClassName("kbInst")[0].innerHTML = "Tab";
            document.getElementsByClassName("kbInst")[1].innerHTML = "Enter";
        }
    }
}

document.getElementById("URLbtn").onclick = function()
{
    location.href='https://'+document.getElementById('URL').value;
}

document.querySelector('#URL').addEventListener('keypress', function (e) {
    if (e.key === 'Enter')
        location.href='https://'+document.getElementById('URL').value;
}); /* From thank 2 */

let url = new URLSearchParams(window.location.search);

document.getElementById("SRCHbtn").onclick = function()
{
    if ((url.has('engine') && url.get('engine') == "bing") || (url.has('engine') && url.get('engine') == "b"))
        location.href='https://www.bing.com/search?q='+document.getElementById('srch').value;
    else
        location.href='https://www.google.com/search?q='+document.getElementById('srch').value;
}

document.querySelector('#srch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter')
    {
        let url = new URLSearchParams(window.location.search);
        if ((url.has('engine') && url.get('engine') == "bing") || (url.has('engine') && url.get('engine') == "b"))
            location.href='https://www.bing.com/search?q='+document.getElementById('srch').value;
        else
            location.href='https://www.google.com/search?q='+document.getElementById('srch').value;
    }
}); /* From thank 2 */



function onstart()
{
    if ((url.has('engine') && url.get('engine') == "bing") || (url.has('engine') && url.get('engine') == "b"))
    {
        document.getElementsByClassName("logo")[0].innerHTML = "b";
        document.getElementsByClassName("srchEngine")[0].innerHTML = "ing";
        document.getElementsByClassName("srchEngine")[1].innerHTML = "Bing";
        var anim = "@keyframes logo {\n0%{\n    color: #FFF;\n}\n50%{\n    color: #008ad8;\n}\n100%{\n    color: #FFF;\n}\n}"
    }
    else
    {
        document.getElementsByClassName("logo")[0].innerHTML = "G";
        document.getElementsByClassName("srchEngine")[0].innerHTML = "oogle";
        document.getElementsByClassName("srchEngine")[1].innerHTML = "Google";
        var anim = "@keyframes logo {\n0%{\n    color: #FFF;\n}\n50%{\n    color: #4285F4;\n}\n100%{\n    color: #FFF;\n}\n}"
    }

    let dynamicStyles = null;
    if (!dynamicStyles) {
        dynamicStyles = document.createElement ('style');
        dynamicStyles.type = 'text/css';
        document.head.appendChild (dynamicStyles);
    }
    dynamicStyles.sheet.insertRule (anim, dynamicStyles.length);
    // From Thank 4

    document.getElementById("srch").focus();
}
/*
Thanks:
1 - https://www.w3schools.com/jsref/event_onclick.asp
2 - https://stackoverflow.com/a/14542114
3 - https://stackoverflow.com/a/43205792
4 - https://stackoverflow.com/a/59575227
*/