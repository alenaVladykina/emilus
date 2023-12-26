import axios from "axios";


const ExampleService = {}


ExampleService.getPostRequest = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.data
        })
        .catch(err => err)

}


export default ExampleService