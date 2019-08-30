let submitButton = document.querySelector('#submit-picto');
//event listener for Submiting new Picto
submitButton.addEventListener('click', saveCanvas);

//Saving and loading canvas
function saveCanvas(){
    //This is where you will be doing the fetch
    let dataURL = canvas.toDataURL();
    fetch("/picto", { 
      method: "POST",  
      body: JSON.stringify({
        dataURL
      }),  
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(function(){
      window.location.href = "/home";
    });
};
