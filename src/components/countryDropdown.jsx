import React, { useEffect, useState } from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'
import { getCountries, getTimeStamp } from "../service/services"

function CountryDropwDown() {
    let [country, setCountry] = useState('default');
    let [countries, setCountries] = useState([])
    let [currentTime, setCurrentTime] = useState()
    const [intervalId, setIntervalId] = useState();
    let selectedzone = (country) => {
        let selzoneName = ''
        countries.forEach(item => {
            if (item.countryCode === country) {
                selzoneName = item.zoneName
            }
        })
        return selzoneName
    }
    let setTimeStamp = (zone) => {
        if (zone && zone[0]) {
            setCurrentTime(new Date(zone[0].timestamp * 1000).toISOString())
        }
    }

    let gettimezone = (selzoneName) => {
        getTimeStamp(selzoneName).then((res) => { setTimeStamp(res.data.zones) })
            .catch((e) => { console.log(e) });
    }

    function updateSelect(e) {
        clearInterval(intervalId);
        console.log(e.target);
        setCountry(e.target.value);
        let selzoneName = selectedzone(e.target.value);
        gettimezone(selzoneName)
        let id = setInterval(() => {
            gettimezone(selzoneName)
        }, 5000)
        setIntervalId(id)
    }
    useEffect(() => {
        getCountries().then((res) => { setCountries(res.data.zones) })
            .catch((e) => { console.log(e) });
        return () => {
            clearInterval(intervalId)
        }
    }, [])



    let menuitems = (countries) => {

        let menuitems =
            countries.map((item, i) => {
                return (<MenuItem key={i} value={item.countryCode} name={item.countryName}>{item.countryName}</MenuItem>)
            });
        return menuitems
    }

    return (

        <div className="country-dropdonw">
             <h1>Time Zone</h1>
            <FormControl >
                <InputLabel> Countries</InputLabel>
                <Select label='Countries' value ={country}onChange={updateSelect}>
                    <MenuItem value='default'> select Country </MenuItem>
                    {menuitems(countries)}
                </Select>
            </FormControl>
            <h2>Time for the selected Zone {currentTime}</h2>
        </div>

    )

}

export default CountryDropwDown