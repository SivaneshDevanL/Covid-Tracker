import React, { useState, useEffect } from 'react';
import './covid.css'

export default function App() {
    const [state, setState] = useState()
    const [index, setIndex] = useState(93)
    useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
            .then(x => x.json())
            .then(setState)
    }, [])
    function countryindex(e) {
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].selected)
                setIndex(i)
        }
    }
    return (
        <div id='main'>
            <div id='flex'>
                <h1>Covid Tracker</h1>
                <select id="select" onChange={countryindex}>
                    {state && state.map((item, i) => (
                        (item.country==="India"&&<option selected>{item.country}</option>)||
                        <option>{item.country}</option>
                    ))
                    }</select>
                <div id="detail">
                    <h3 id="heading">More details</h3>
                    <div className="detail detail1">
                        <p className='p'>Population</p>
                        <h5 className='h5'>{state ? state[index].population : ''}</h5></div>
                    <div className="detail">
                        <p className='p'> Tests</p>
                        <h5 className='h5'>{state ? state[index].tests : ''}</h5></div>
                    <div className="detail detail1">
                        <p className='p'>Active</p>
                        <h5 className='h5'>{state ? state[index].active : ''}</h5></div>
                    <div className="detail">
                        <p className='p'>Critical</p>
                        <h5 className='h5'>{state ? state[index].critical : ''}</h5></div>
                    <div className="detail detail1">
                        <p className='p'>Today Cases</p>
                        <h5 className='h5'>{state ? state[index].todayCases : ''}</h5></div>
                    <div className="detail">
                        <p className='p'>Today deaths</p>
                        <h5 className='h5'>{state ? state[index].todayDeaths : ''}</h5></div>
                    <div className="detail detail1">
                        <p className='p'>Today Recovered</p>
                        <h5 className='h5'>{state ? state[index].todayRecovered : ''}</h5></div>
                    <div className="detail">
                        <p className='p'>Cases per one million</p>
                        <h5 className='h5'>{state ? state[index].casesPerOneMillion : ''}</h5></div>
                    <div className="detail detail1">
                        <p className='p'>Deaths per one million</p>
                        <h5 className='h5'>{state ? state[index].deathsPerOneMillion : ''}</h5></div>
                    <div className="detail">
                        <p className='p'>Recovered per one million</p>
                        <h5 className='h5'>{state ? state[index].recoveredPerOneMillion : ''}</h5></div>
                </div>
            </div>
                <div id='cases'>
                <div className="cases" style={{borderTop:'10px solid red'}}>  
                <p className='h3'>Cases</p>
                <h3 className='h3 infected'>+{state ? state[index].cases : ''}</h3></div> 
                <div className="cases" style={{borderTop:'10px solid green'}}>
                <p className='h3'>Recovered</p>
                <h3 className='h3 recovered'>+{state ? state[index].recovered : ''}</h3></div>
                <div className="cases" style={{borderTop:'10px solid black'}}>
                <p className='h3'>Deaths</p>
                <h3 className='h3'>+{state ? state[index].deaths : ''}</h3></div>
                </div>
            <p><iframe title='map' src="https://ourworldindata.org/grapher/covid-vaccination-doses-per-capita?tab=map&time=latest&country=~YEM"  style={{width:'70%',height:'472px'}}></iframe></p>
        </div>
    )
}
