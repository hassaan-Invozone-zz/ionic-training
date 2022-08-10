import axios from 'axios';

const postDataApi = (data: any) => {
  axios.post('https://webhook.site/9a8f33d8-4412-49d5-8f43-44d3b97d4d13', data,
    {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(function (response) {
      if (response.status === 200){
        alert('successfully submit!')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default postDataApi;
