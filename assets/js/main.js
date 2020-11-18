var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://xkcd.now.sh/?comic=latest", requestOptions)
  .then(response => response.text())
  .then(result => {
    let parsedResult = JSON.parse(result);
    let imgURL = parsedResult["img"];
    document.getElementById("comic-img").setAttribute("src", imgURL);
    console.log(parsedResult);

  })
  .catch(error => console.log('error', error));