import axios from "axios"
export  function getCountries () {
   return axios.get('http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europe/*')
   

}
export  function getTimeStamp(selzoneName) {
   return axios.get(`http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=${selzoneName}`)
}