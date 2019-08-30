let submitButton = document.querySelector('#submit-picto');
//event listener for Submiting new Picto
submitButton.addEventListener('click', saveCanvas);

//Saving and loading canvas
function saveCanvas(){
    //This is where you will be doing the fetch
    let imgData = canvas.toDataURL();
    fetch(`/picto/${pictoId}/comments`, { 
      method: "POST",  
      body: JSON.stringify({
        imgData,
        picto: pictoId
      }),  
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(function(){
      window.location.href = `/picto/${pictoId}`;
    });
};
