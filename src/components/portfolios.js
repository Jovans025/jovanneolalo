import Image from "next/image";
import Link from 'next/link'

const projects = [
   {
      name: "Podsearch (with AI)",
      link:"https://podsearch-a6uhpq6lmq-uc.a.run.app/",
      description: "Used to generate transcript from Youtube videos and then utilize ChatGPT for asking any questions regarding the generated transcript.",
      tools: "NodeJs, ReactJs(NextJs), Firebase, OpenAI",
      duration:"1 years",
      image:"/images/podsearch.png",
      status:"Active (2024)"
   } ,
   {
      name: "Cilantro",
      link:"https://cilantropass.com/",
      description: "An online ordering for a restaurant. My role for this was to create new pages and functionalities based on the clients daily needs.",
      tools: "NodeJs, ReactJs(NextJs), Firebase, Stripe",
      duration:"1 years",
      image:"/images/cilantro.png",
      status:"Active (2024)"
   } ,
   {
      name: "ESG Playbook",
      link:"https://www.esgplaybook.com/",
      description: "A reporting tool used by big companies to monitor their ESG sustainability. My role for this was to create new pages and functionalities based on the clients daily needs.",
      tools: "NodeJs, ReactJs(NextJs), Firebase",
      duration:"3 years",
      image:"/images/esg.jpg",
      status:"Active (2023)"
   },
   {
      name: "Heywaitr API, Portal and Web app",
      link:"https://heywaitr-web.herokuapp.com/",
      description: "This is an ordering app where use can order food from different restaurants. There is also a web app where user can use it to order if they dont want to use the mobile app. There is also a simple AI integration with the system. My role for this was to create the entire admin portal, API and Web app alone.",
      tools: "NodeJs, ReactJs, MongoDB, Firebase, Reepay",
      duration:"4 years",
      image:"/images/hey.jpg",
      status:"Active (2021)"
   },
   {
      name: "Pawlaris",
      link:"",
      description: "An online web app for pet shop where user can book appointments and pay for their pets when they use the shop's services (eg. Grooming, etc). My role for this was to create the PWA alone.",
      tools: "NodeJs, ReactJs, MongoDB, Stripe",
      duration:"6 months",
      image:"/images/pawlaris.png",
      status:"Discontinued (2022)"
   },
   {
      name: "Doorside",
      link:"",
      description: "Progressive web app (PWA) which is an app for Real estate agents and for customers who wants to check real estate properties. My role for this was to create the PWA alone.",
      tools: "NodeJs, ReactJs, MongoDB, Firebase",
      duration:"1 year 7 months",
      image:"/images/doorside.jpg",
      status:"Discontinued (affected by pandemic) (2021)"
   },
   {
      name: "Singapore Airlines API and Portal",
      link:"",
      description: "Admin portal where it manages and in-app lounge check-in for Singapore Airlines passenger. My role for this was to create the entire admin portal and API alone.",
      tools: "NodeJs, ReactJs, MongoDB, Firebase",
      duration:"3 months",
      image:"/images/singa.svg",
      status:"Discontinued (2020)"
   },
   {
      name: "Street Food Guru API and Portal",
      link:"",
      description: "Admin portal where it manages the content of the Street Food Guru mobile application which is a food truck finding app. My role for this was to create the entire admin portal and API alone.",
      tools: "NodeJs, ReactJs, MongoDB, Firebase",
      duration:"6 months",
      image:"/images/sfg.jpeg",
      status:"Discontinued (2019)"
   },
   {
      name: "Burgerking Denmark and Norway API and Portal",
      link:"",
      description: "Admin portal where it manages the content of the Burgerking's mobile application. E.g Coupon creation, Restaurant management, Push notification management, Menu management, etc. My role for this was to create the entire admin portal and API alone.",
      tools: "NodeJs, ReactJs, MongoDB, Firebase",
      duration:"1 year",
      image:"/images/bk.jpg",
      status:"Active (2019)"
   },
 
   {
      name: "HR Assistant",
      link:"",
      description: "Internal web app for the company's HR's management system. Eg. Employee management, Attendance management with QR scan time in/out, etc. My role for this was to create the entire web app alone.",
      tools: "AngularJS, NodeJs, SocketIO, VB.Net",
      duration:"4 months",
      image:"/images/hr.jpg",
      status:"Discontinued (2018)"
   },
   {
      name: "School Assistant",
      link:"https://schoolassistant.goodkredit.com/#!/index",
      description: "Landing page where user can refer any school to us. My role for this was to create the site alone.",
      tools: "AngularJS, NodeJs",
      duration:"2 days",
      image:"/images/schoolassistant.png",
      status:"Active (2018)"
   }, 
   {
      name: "Drop off site",
      link:"http://staging-dropoff.goodkredit.com/#!/index",
      description: "Landing page where Merchant or customers can drop their payments. My role for this was to create the site alone.",
      tools: "AngularJS, NodeJs",
      duration:"2 days",
      image:"/images/dropoff.png",
      status:"Active (2018)"
   }, 
]

export default function Head() {
    return (
      <section className="section">

        {
            projects.map(item => {
                return <div key={item.image} className="mt-5rem">
                    <h4 style={{fontWeight:"bold",textDecoration:"underline"}}>
                        {
                            item.link?
                                <Link href={item.link} target="_blank">
                                    {item.name}
                                </Link> 
                            : <>
                                {item.name}
                            </>
                        } 
                    </h4>
                    <div className="status">{item.status}</div>
                    <div className="desc">{item.description}</div>
                    <div className="mt-4">Tools: {item.tools}</div> 
            
                    <Image 
                        src={item.image}
                        width={1000}
                        height={800}
                        alt="Jovanne Olalo" 
                        className="mt-4 img-fluid"
                    />  
                </div>
            })  
        }

        
      </section>
    );
  }
  