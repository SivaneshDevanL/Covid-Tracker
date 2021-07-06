import React, { useState } from 'react';

const statesnorth = [{
    name: "Madhya Pradesh",
    description: "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
    city: [{
        name1: "Indore",
        description1: "Indore is a city in west-central India. It’s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty.",
        landmarks: [{
            name2: "Mhow",
            description2: "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",
        }, {
            name2: "Dewas",
            description2: "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
        }]
    }, {
        name1: "Bhopal",
        description1: "DBhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest city. There are two main lakes, the Upper Lake and the Lower Lake.",
        landmarks: [{
            name2: "MANIT",
            description2: "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology. ",
        }, {
            name2: "Berasia",
            description2: "Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India. ",
        }]
    }]
}, {
    name: "Bihar",
    description: "Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains. Important Buddhist pilgrimage sites include the Bodhi Tree in Bodhgaya's Mahabodhi Temple, under which the Buddha allegedly meditated.",
    city: [{
        name1: "Patna",
        description1: "Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India.",
        landmarks: [{
            name2: "Sonpur",
            description2: "Sonpur is a city and sub-division in the Indian state of Bihar, situated on the banks of the River Gandak and Ganges River in the Saran District.",
        }, {
            name2: "Maner",
            description2: "Maner also spelled Maner or Maner Sharif, is a satellite landmark in Patna Metropolitan Region, in the Patna district in the Indian state of Bihar. Maner Sharif lies 24 km west of Patna the capital of Bihar on National Highway 30.",
        }]
    }, {
        name1: "Gaya",
        description1: "Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar. It’s known for 18th-century Vishnupad Mandir, a riverside temple with an octagonal shrine. Close by, ancient Mangla Gauri Temple is set on a hilltop. ",
        landmarks: [{
            name2: "Bakraur",
            description2: "Bakraur, sometimes called Bakrour, is a village located slightly east of Bodh Gaya in the state of Bihar, India. It lies directly across the Phalgu River from the landmark of Bodh Gaya, where Gautama Buddha is said to have attained enlightenment.",
        }, {
            name2: "Barachatti",
            description2: "Barachatti is a block in the Gaya district of Bihar, India. Barachatti contains 141 villages and 13 gram panchayat. Sarwan bazar is the biggest and Nimi is the smallest village of Barachatti. The total population in Barachatti sub-district is 142,534 according to the census during 2011 by Indian Government.",
        }]
    }]
}]


function Selection() {
    const [state, setState] = useState("mp")
    const [city, setCity] = useState("ind");
    function check() {
        // console.log(1)
        const stateopt = document.getElementsByClassName("states")
        for (let i = 0; i < stateopt.length; i++) {
            if (stateopt[i].selected) {
                //console.log(stateopt[i].value)
                if (stateopt[i].value == 0) {
                    setState("mp")
                    setCity("ind")
                    const { name, description, city } = statesnorth[i]
                    const data = document.getElementById("state-name")
                    data.innerHTML = ""
                    const des = document.getElementById("state-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name}`
                    des1.innerHTML = `${description}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                    const { name1, description1, landmarks } = statesnorth[i].city[0]
                    const data2 = document.getElementById("city-name")
                    data2.innerHTML = ""
                    const des2 = document.getElementById("city-description")
                    des2.innerHTML = ""
                    const data3 = document.createElement("div")
                    const des3 = document.createElement("div")
                    data3.innerHTML = `${name1}`
                    des3.innerHTML = `${description1}`
                    data2.appendChild(data3)
                    des2.appendChild(des3)
                    const { name2, description2 } = statesnorth[i].city[0].landmarks[0]
                    const data4 = document.getElementById("landmark-name")
                    data4.innerHTML = ""
                    const des4 = document.getElementById("landmark-description")
                    des4.innerHTML = ""
                    const data5 = document.createElement("div")
                    const des5 = document.createElement("div")
                    data5.innerHTML = `${name2}`
                    des5.innerHTML = `${description2}`
                    data4.appendChild(data5)
                    des4.appendChild(des5)
                }
                else {
                    setState("tn")
                    setCity("cn")
                    const { name, description, city } = statesnorth[i]
                    const data = document.getElementById("state-name")
                    data.innerHTML = ""
                    const des = document.getElementById("state-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name}`
                    des1.innerHTML = `${description}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                    const { name1, description1, landmarks } = statesnorth[i].city[0]
                    const data2 = document.getElementById("city-name")
                    data2.innerHTML = ""
                    const des2 = document.getElementById("city-description")
                    des2.innerHTML = ""
                    const data3 = document.createElement("div")
                    const des3 = document.createElement("div")
                    data3.innerHTML = `${name1}`
                    des3.innerHTML = `${description1}`
                    data2.appendChild(data3)
                    des2.appendChild(des3)
                    const { name2, description2 } = statesnorth[i].city[0].landmarks[0]
                    const data4 = document.getElementById("landmark-name")
                    data4.innerHTML = ""
                    const des4 = document.getElementById("landmark-description")
                    des4.innerHTML = ""
                    const data5 = document.createElement("div")
                    const des5 = document.createElement("div")
                    data5.innerHTML = `${name2}`
                    des5.innerHTML = `${description2}`
                    data4.appendChild(data5)
                    des4.appendChild(des5)
                }
            }
        }
    }
    function checkcity(k) {
        const cityopt = document.getElementsByClassName("cities")
        for (let i = 0; i < cityopt.length; i++) {
            if (cityopt[i].selected) {
                if (k == 0 && cityopt[i].value == 0) {
                    setCity("ind")
                    const { name1, description1, landmarks } = statesnorth[k].city[i]
                    const data = document.getElementById("city-name")
                    data.innerHTML = ""
                    const des = document.getElementById("city-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name1}`
                    des1.innerHTML = `${description1}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                    const { name2, description2 } = statesnorth[k].city[i].landmarks[0]
                    const data2 = document.getElementById("landmark-name")
                    data2.innerHTML = ""
                    const des2 = document.getElementById("landmark-description")
                    des2.innerHTML = ""
                    const data3 = document.createElement("div")
                    const des3 = document.createElement("div")
                    data3.innerHTML = `${name2}`
                    des3.innerHTML = `${description2}`
                    data2.appendChild(data3)
                    des2.appendChild(des3)
                }
                else if (k == 0 && cityopt[i].value == 1) {
                    setCity("bop")
                    const { name1, description1, landmarks } = statesnorth[k].city[i]
                    const data = document.getElementById("city-name")
                    data.innerHTML = ""
                    const des = document.getElementById("city-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name1}`
                    des1.innerHTML = `${description1}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                    const { name2, description2 } = statesnorth[k].city[i].landmarks[0]
                    const data2 = document.getElementById("landmark-name")
                    data2.innerHTML = ""
                    const des2 = document.getElementById("landmark-description")
                    des2.innerHTML = ""
                    const data3 = document.createElement("div")
                    const des3 = document.createElement("div")
                    data3.innerHTML = `${name2}`
                    des3.innerHTML = `${description2}`
                    data2.appendChild(data3)
                    des2.appendChild(des3)
                }
                else if (k == 1 && cityopt[i].value == 0) {
                    setCity("cn")
                    const { name1, description1, landmarks } = statesnorth[k].city[i]
                    const data = document.getElementById("city-name")
                    data.innerHTML = ""
                    const des = document.getElementById("city-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name1}`
                    des1.innerHTML = `${description1}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                    const { name2, description2 } = statesnorth[k].city[i].landmarks[0]
                    const data2 = document.getElementById("landmark-name")
                    data2.innerHTML = ""
                    const des2 = document.getElementById("landmark-description")
                    des2.innerHTML = ""
                    const data3 = document.createElement("div")
                    const des3 = document.createElement("div")
                    data3.innerHTML = `${name2}`
                    des3.innerHTML = `${description2}`
                    data2.appendChild(data3)
                    des2.appendChild(des3)
                }
                else {
                    setCity("ty")
                    const { name1, description1, landmarks } = statesnorth[k].city[i]
                    const data = document.getElementById("city-name")
                    data.innerHTML = ""
                    const des = document.getElementById("city-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name1}`
                    des1.innerHTML = `${description1}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                    const { name2, description2 } = statesnorth[k].city[i].landmarks[0]
                    const data2 = document.getElementById("landmark-name")
                    data2.innerHTML = ""
                    const des2 = document.getElementById("landmark-description")
                    des2.innerHTML = ""
                    const data3 = document.createElement("div")
                    const des3 = document.createElement("div")
                    data3.innerHTML = `${name2}`
                    des3.innerHTML = `${description2}`
                    data2.appendChild(data3)
                    des2.appendChild(des3)
                }
            }
        }
    }
    function checktown(k, l) {
        const townopt = document.getElementsByClassName("towns")
        for (let i = 0; i < townopt.length; i++) {
            if (townopt[i].selected) {
                if (k == 0 && l == 0 && townopt[i].value == 0) {
                    const { name2, description2 } = statesnorth[k].city[l].landmarks[i]
                    const data = document.getElementById("landmark-name")
                    data.innerHTML = ""
                    const des = document.getElementById("landmark-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name2}`
                    des1.innerHTML = `${description2}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                }
                else if (k == 0 && l == 0 && townopt[i].value == 1) {
                    const { name2, description2 } = statesnorth[k].city[l].landmarks[i]
                    const data = document.getElementById("landmark-name")
                    data.innerHTML = ""
                    const des = document.getElementById("landmark-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name2}`
                    des1.innerHTML = `${description2}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                }
                else if (k == 0 && l == 1 && townopt[i].value == 0) {
                    const { name2, description2 } = statesnorth[k].city[l].landmarks[i]
                    const data = document.getElementById("landmark-name")
                    data.innerHTML = ""
                    const des = document.getElementById("landmark-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name2}`
                    des1.innerHTML = `${description2}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                }
                else if (k == 0 && l == 1 && townopt[i].value == 1) {
                    const { name2, description2 } = statesnorth[k].city[l].landmarks[i]
                    const data = document.getElementById("landmark-name")
                    data.innerHTML = ""
                    const des = document.getElementById("landmark-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name2}`
                    des1.innerHTML = `${description2}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                }
                else if (k == 1 && l == 0 && townopt[i].value == 0) {
                    const { name2, description2 } = statesnorth[k].city[l].landmarks[i]
                    const data = document.getElementById("landmark-name")
                    data.innerHTML = ""
                    const des = document.getElementById("landmark-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name2}`
                    des1.innerHTML = `${description2}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                }
                else if (k == 1 && l == 0 && townopt[i].value == 1) {
                    const { name2, description2 } = statesnorth[k].city[l].landmarks[i]
                    const data = document.getElementById("landmark-name")
                    data.innerHTML = ""
                    const des = document.getElementById("landmark-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name2}`
                    des1.innerHTML = `${description2}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                }
                else if (k == 1 && l == 1 && townopt[i].value == 0) {
                    const { name2, description2 } = statesnorth[k].city[l].landmarks[i]
                    const data = document.getElementById("landmark-name")
                    data.innerHTML = ""
                    const des = document.getElementById("landmark-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name2}`
                    des1.innerHTML = `${description2}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                }
                else {
                    const { name2, description2 } = statesnorth[k].city[l].landmarks[i]
                    const data = document.getElementById("landmark-name")
                    data.innerHTML = ""
                    const des = document.getElementById("landmark-description")
                    des.innerHTML = ""
                    const data1 = document.createElement("div")
                    const des1 = document.createElement("div")
                    data1.innerHTML = `${name2}`
                    des1.innerHTML = `${description2}`
                    data.appendChild(data1)
                    des.appendChild(des1)
                }
            }
        }
    }
    return (
        <div>
            <label >States:</label>
            <select id="state" name="states" onChange={check}>
                <option value="0" className="states"  selected>Madhya Pradesh</option>
                <option value="1" className="states" >Bihar</option>
            </select>
            {state === "mp" && (
                <div>
                    <label >Cities:</label>
                    <select id="city" name="cities" onChange={() => checkcity(0)}>
                        <option value="0" className="cities" >Indore</option>
                        <option value="1" className="cities" >Bhopal</option>
                    </select></div>
            )}
            {state === "tn" && (
                <div>
                    <label >Cities:</label>
                    <select id="city" name="cities" onChange={() => checkcity(1)}>
                        <option value="0" className="cities" >Patna</option>
                        <option value="1" className="cities" >Gaya</option>
                    </select></div>
            )}
            {city === "ind" && (
                <div>
                    <label >Towns:</label>
                    <select id="landmark" name="towns" onChange={() => checktown(0, 0)}>
                        <option value="0" className="towns" >Mhow</option>
                        <option value="1" className="towns" >Dewas</option>
                    </select></div>
            )}
            {city === "bop" && (
                <div>
                    <label >Towns:</label>
                    <select id="landmark" name="towns" onChange={() => checktown(0, 1)}>
                        <option value="0" className="towns" >MANIT</option>
                        <option value="1" className="towns" >Berasia</option>
                    </select></div>
            )}
            {city === "cn" && (
                <div>
                    <label >Towns:</label>
                    <select id="landmark" name="towns" onChange={() => checktown(1, 0)}>
                        <option value="0" className="towns" >Sonpur</option>
                        <option value="1" className="towns" >Maner</option>
                    </select></div>
            )}
            {city === "ty" && (
                <div>
                    <label >Towns:</label>
                    <select id="landmark" name="towns" onChange={() => checktown(1, 1)}>
                        <option value="0" className="towns" >Bakraur</option>
                        <option value="1" className="towns" >Barachatti</option>
                    </select></div>
            )}
                <div style={{ marginTop: 50,fontSize:30,fontWeight:'20px' }} id="state-title">State</div>
                <div  id="state-name">{statesnorth[0].name}</div>
                <div id="state-description">{statesnorth[0].description}</div>
                <div style={{ marginTop: 50,fontSize:30,fontWeight:'20px'}} id="city-title">City</div>
                <div  id="city-name">{statesnorth[0].city[0].name1}</div>
                <div id="city-description">{statesnorth[0].city[0].description1}</div>
                <div style={{ marginTop: 50,fontSize:30,fontWeight:'20px' }} id="landmark-title">Town</div>
                <div  id="landmark-name">{statesnorth[0].city[0].landmarks[0].name2}</div>
                <div id="landmark-description">{statesnorth[0].city[0].landmarks[0].description2}</div>
        </div>
    )
}


export default Selection;






