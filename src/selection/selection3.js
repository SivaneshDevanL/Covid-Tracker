import React, { useState,useReducer } from "react";


const states = [{
	name : "Madhya Pradesh",
	description:"Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
	city :[{
		name : "Indore",
		description:"Indore is a city in west-central India. It’s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty.",
		landmarks :[{
			name : "Mhow",
			description:"Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",				
		},{
			name : "Dewas",
			description:"Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
		}]
	},{
		name : "Bhopal",
		description:"DBhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest city. There are two main lakes, the Upper Lake and the Lower Lake.",
		landmarks :[{
			name : "MANIT",
			description:"Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology. ",
		},{
			name: "Berasia",
			description:"Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India. ",
		}]
	},{
		name : "Gwalior",
		description:"Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. ",
		landmarks :[{
			name : "Ajaypur",
			description:"Little less known city Ajaypur.",
		}]
	}]
},{
	name : "Jharkhand",
	description:"Jharkhand is a state in eastern India. It's known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.",
	city :[{
		name : "Dhanbad",
		description:"Dhanbad is the second-most populated city in the Indian state of Jharkhand. It ranks as the 33rd largest city in India and is the 42nd largest million-plus urban agglomeration in India. It is the 96th fastest growing urban area of the world by the City Mayors Foundation.",
		landmarks :[{
			name : "IIT(ISM) Dhanbad",
			description:"Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India. It is an Institute of National Importance. IIT has 18 academic departments covering Engineering,",
		},{
			name : "Hirapur",
			description:"Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
		}]
	},{
		name : "Wasseypur",
		description:"Wasseypur is a neighbourhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district in the state of Jharkhand in India. ",
		landmarks :[{
			name : "Pandey muhalla",
			description:"Located behind the dhanbad junction is must visit place.",
		},{
			name : "MPI Hall",
			description:"Space for everyone",
		}]
	},{
		name : "Hazaribagh",
		description:"Hazaribagh is a city and a municipal corporation in Hazaribagh district in the Indian state of Jharkhand. It is the divisional headquarters of North Chotanagpur division.",
		landmarks :[{
			name : "Shaheed Nirmal Mahto Park",
			description:"Famous for its giant dinosaur structure",
		},{
			name : "Gandhi Maidan",
			description:"Ideal for conduction major events",
		}]
	}]
},{
	name : "Assam",
	description:"Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. ",
	city :[{
		name : "Guwhati",
		description:"Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It’s known for holy sites like the hilltop Kamakhya Temple,",
		landmarks :[{
			name : "Ganesh Guri",
			description:"Famous because of PVR city center.",
		},{
			name : "Kalyani Nagar",
			description:"located near famous Lakshmi Nagar",
		}]
	},{
		name : "dimapur",
		description:"Dimapur is a city in Nagaland, India. It is the most populous city of Nagaland and also the most densely populated city in the state with an estimated population of about 250,000.",
		landmarks :[{
			name : "City Tower",
			description:"Giant Tower standing by the road since history.",
		},{
			name : "Sunday Market",
			description:"Famous for its weekend Sale on all items.",
		}]
	},{
		name : "Tezpur",
		description:"Tezpur is a landmark and urban agglomeration in Sonitpur district, Assam state, India. Tezpur is located on the banks of the river Brahmaputra, 175 kilometres northeast of Guwahati, and is the largest of the north bank landmarks with a population exceeding 100,000 as per Metropolitan Census 2011.",
		landmarks :[{
			name : "Bamuni Hills",
			description:"Best location for photoshoots",
		},{
			name : "Bhujkhowa Bazar",
			description:"Central Market for Tezpur",
		}]
	}]
},{
	name : "Bihar",
	description:"Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains. Important Buddhist pilgrimage sites include the Bodhi Tree in Bodhgaya's Mahabodhi Temple, under which the Buddha allegedly meditated.",
	city :[{
		name : "Patna",
		description:"Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India.",
		landmarks :[{
			name : "Sonpur",
			description:"Sonpur is a city and sub-division in the Indian state of Bihar, situated on the banks of the River Gandak and Ganges River in the Saran District.",
		},{
			name : "Maner",
			description:"Maner also spelled Maner or Maner Sharif, is a satellite landmark in Patna Metropolitan Region, in the Patna district in the Indian state of Bihar. Maner Sharif lies 24 km west of Patna the capital of Bihar on National Highway 30.",
		}]
	},{
		name : "Gaya",
		description:"Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar. It’s known for 18th-century Vishnupad Mandir, a riverside temple with an octagonal shrine. Close by, ancient Mangla Gauri Temple is set on a hilltop. ",
		landmarks :[{
			name : "Bakraur",
			description:"Bakraur, sometimes called Bakrour, is a village located slightly east of Bodh Gaya in the state of Bihar, India. It lies directly across the Phalgu River from the landmark of Bodh Gaya, where Gautama Buddha is said to have attained enlightenment.",
		},{
			name : "Barachatti",
			description:"Barachatti is a block in the Gaya district of Bihar, India. Barachatti contains 141 villages and 13 gram panchayat. Sarwan bazar is the biggest and Nimi is the smallest village of Barachatti. The total population in Barachatti sub-district is 142,534 according to the census during 2011 by Indian Government.",
		}]	
	},{
		name : "Darbhanga",
		description:"Darbhanga is a city and Municipal Corporation in the Indian state of Bihar. It is the 6th largest city of Bihar, only after Patna, Gaya, Bhagalpur, Muzaffarpur and Purnea. It is the headquarters of Darbhanga district and Darbhanga division and was the seat of the Raj Darbhanga and capital of the Mithila region.",
		landmarks :[{
			name : "Singhwara",
			description:"Famous for its Groundnut Market",
		},{
			name : "Jale",
			description:"Famous for its roasted seads market.",
		}]
	}]
}];

function Selection3() 
{
	const[state,setState]=useState(0)
	const[cityy,setCityy]=useState(0)
	function check(){
		const statei=document.getElementsByClassName("states")
		for(let i=0;i<statei.length;i++){
			if(statei[i].selected){
				setState(i)
				setCityy(0)
				const citii=document.getElementsByClassName("cities")
				const{name,description,city}=states[i]
				for(let j=0;j<citii.length;j++){
					citii[j].innerText=city[j].name
				}
				citii[0].selected=true
				const town=document.getElementsByClassName("towns")
					while(town.length!=0){
						town[0].remove()
					}
				const {landmarks}=states[i].city[0]
				const town1=document.getElementById("landmark")
				// town2.id="landmark"
				//town2.onchange="checktown()"
				//town2.addEventListener('change',checktown)
				//town2.setAttribute('onchange','checktown()')
				//const town2=React.createElement("select")//,{onClick=checktown},{id="landmark"})
				if(states[i].city[0].landmarks.length==2){
					const town2=document.createElement("option")
					town2.className="towns"
					town2.selected=true
					town2.value=0
					town2.innerText=landmarks[0].name
					const town3=document.createElement("option")
					town3.className="towns"
					town3.value=1
					town3.innerText=landmarks[1].name
					town1.appendChild(town2)
					town1.appendChild(town3)
				}
				else{
					const town2=document.createElement("option")
					town2.className="towns"
					town2.selected=true
					town2.value=0
					town2.innerText=landmarks[0].name
					town1.appendChild(town2)
				}
				// town2.innerHTML=`<option value="0" className="towns"  selected>${landmarks[0].name}</option>
                // <option value="1" className="towns" >${landmarks[1].name}</option>`
				// else
				// town2.innerHTML=`<option value="0" className="towns"  selected>${landmarks[0].name}</option>`
				// town1.appendChild(town2)
				document.getElementById("state-name").innerText=states[i].name
				document.getElementById("state-description").innerText=states[i].description	
				document.getElementById("city-name").innerText=states[i].city[0].name
				document.getElementById("city-description").innerText=states[i].city[0].description	
				document.getElementById("landmark-name").innerText=states[i].city[0].landmarks[0].name
				document.getElementById("landmark-description").innerText=states[i].city[0].landmarks[0].description				
			}
		}
	}
	function checkcity(){
		const citii=document.getElementsByClassName("cities")
		for(let i=0;i<citii.length;i++){
			if(citii[i].selected){
				setCityy(i)
				const town=document.getElementsByClassName("towns")
				while(town.length!=0)
				town[0].remove()
				const {name,description,landmarks}=states[state].city[i]
				const town1=document.getElementById("landmark")
				//town2.id="landmark"
				//town2.onchange=checktown()
				// town2.addEventListener('change',checktown())
				// town2.setAttribute('onchange','checktown()')
				if(states[state].city[i].landmarks.length==2){
					const town2=document.createElement("option")
					town2.className="towns"
					town2.selected=true
					town2.value=0
					town2.innerText=landmarks[0].name
					const town3=document.createElement("option")
					town3.className="towns"
					town3.value=1
					town3.innerText=landmarks[1].name
					town1.appendChild(town2)
					town1.appendChild(town3)
				}
				else{
					const town2=document.createElement("option")
					town2.className="towns"
					town2.selected=true
					town2.value=0
					town2.innerText=landmarks[0].name
					town1.appendChild(town2)
				}
				// town2.innerHTML=`<select id="landmark" onChange={checktown}><option value="0" classname="towns"  selected>${landmarks[0].name}</option>
                // <option value="1" classname="towns" >${landmarks[1].name}</option></select>`
				// else
				// town2.innerHTML=`<option value="0" className="towns"  selected>${landmarks[0].name}</option>`
				// town1.appendChild(town2)
				document.getElementById("city-name").innerText=states[state].city[i].name
				document.getElementById("city-description").innerText=states[state].city[i].description	
				document.getElementById("landmark-name").innerText=states[state].city[i].landmarks[0].name
				document.getElementById("landmark-description").innerText=states[state].city[i].landmarks[0].description				
			}
		}
	}
	function checktown(){
		const town=document.getElementsByClassName("towns")
		//console.log(town.length)
		for(let i=0;i<town.length;i++){
			if(town[i].selected){
				document.getElementById("landmark-name").innerText=states[state].city[cityy].landmarks[i].name
				document.getElementById("landmark-description").innerText=states[state].city[cityy].landmarks[i].description				
			}
		}
	}
	return (
	<div id="main">
		            <label >States:</label>
            <select id="state"  onChange={check}>
                <option value="0" className="states"  selected>{states[0].name}</option>
                <option value="1" className="states" >{states[1].name}</option>
				<option value="2" className="states" >{states[2].name}</option>
                <option value="3" className="states" >{states[3].name}</option>
            </select>
			<label>Cities:</label>
			<select id="city"  onChange={checkcity}>
			<option value="0" className="cities"  selected>{states[0].city[0].name}</option>
                <option value="1" className="cities" >{states[0].city[1].name}</option>
				<option value="2" className="cities" >{states[0].city[2].name}</option>
			</select>
			<label >town:</label>
			<select id="landmark"  onChange={checktown}>
			<option value="0" className="towns"  selected>{states[0].city[0].landmarks[0].name}</option>
                <option value="1" className="towns" >{states[0].city[0].landmarks[1].name}</option></select>
            <div style={{ marginTop: 50,fontSize:30,fontWeight:'20px' }} id="state-title">State</div>
                <div  id="state-name">{states[0].name}</div>
                <div id="state-description">{states[0].description}</div>
                <div style={{ marginTop: 50,fontSize:30,fontWeight:'20px'}} id="city-title">City</div>
                <div  id="city-name">{states[0].city[0].name}</div>
                <div id="city-description">{states[0].city[0].description}</div>
                <div style={{ marginTop: 50,fontSize:30,fontWeight:'20px' }} id="landmark-title">Town</div>
                <div  id="landmark-name">{states[0].city[0].landmarks[0].name}</div>
                <div id="landmark-description">{states[0].city[0].landmarks[0].description}</div>
	</div>
	);
}


export default Selection3;
