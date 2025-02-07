    let Premhov = document.getElementById("premhov");
    let premdis = document.getElementById("dropdown-content1");

    console.log(Premhov);
    console.log(premdis);

    Premhov.addEventListener('mouseenter', () => {
        premdis.style.display = "block";
    });

    Premhov.addEventListener("mouseleave", () => {
        premdis.style.display = 'none';
    });

    let main =document.getElementById('Layer_1')
    main.addEventListener('click' , () => {
        window.location.href='http://127.0.0.1:5500/Spotify/index.html';
    }) 

    let support =document.getElementById('sup')
    support.addEventListener('click' , () => {
        window.location.href='https://support.spotify.com/in-en/#_gl=1*hd6q1i*_gcl_au*MTk3NjkzODczNy4xNzM4ODI0Mjc1';
    }) 

    let download =document.getElementById('dwnd')
    download.addEventListener('click' , () => {
        window.location.href='https://www.spotify.com/in-en/download/windows/';
    })
    let signup =document.getElementById('sgnup')
    signup.addEventListener('click' , () => {
        window.location.href='https://www.spotify.com/in-en/signup';
    })

    let login =document.getElementById('lgn')
    login.addEventListener('click' , () => {
        window.location.href='https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F__noul__%3Fl2l%3D1%26nd%3D1&_locale=en-IN';
    })

    let button =document.getElementById('but')
    button.addEventListener('click' , () => {
        window.location.href='https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F__noul__%3Fl2l%3D1%26nd%3D1&_locale=en-IN';
    })
