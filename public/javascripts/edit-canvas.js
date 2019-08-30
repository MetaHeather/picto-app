let submitButton = document.querySelector('#submit-picto');
//event listener for Submiting new Picto
submitButton.addEventListener('click', editCanvas);

//Saving and loading canvas
function editCanvas(){
    //This is where you will be doing the fetch
    let dataURL = canvas.toDataURL();
    fetch(`/picto/${pictoId}`, { 
      method: "PUT",  
      body: JSON.stringify({dataURL}), 
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow'
    })
    .then(function(){
      window.location.href = "/home";
    });
};
