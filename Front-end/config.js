var axios = require('axios');
var data = JSON.stringify({
    "collection": "users",
    "database": "loja",
    "dataSource": "ProjetoTera",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-pzste/endpoint/data/beta/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'npZZk9SQ0A4y9t7QSBAfKgLIALiTpiSCoHKvX3Seo4mbZlP3bNzSkvE7Dx6YIeUj'
    },
    data : data
};
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
