const TesteFecth = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": "teste@teste.com",
      "password": "123456"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      body: raw,
      redirect: 'follow',
      cache: 'default' 
    };
    const response = ""
    fetch("https://86moxy22dl.execute-api.us-east-1.amazonaws.com/Dev/data/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      return response.data
  }

  export default TesteFecth