import React from 'react'
import Card from './components/card';


import download from './assets/download.png';
import download1 from './assets/download (1).png';
import download2 from './assets/download (2).png';
import download3 from './assets/download (3).png';
import download4 from './assets/download (4).png';
import download5 from './assets/download (5).png';
import download6 from './assets/download (6).png';
import download7 from './assets/download (7).png';
import download8 from './assets/download (8).png';
import download9 from './assets/download (9).png';
const App = () => {

  const jobOpenings = [
    {
      brandLogo: download3,
      company: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UX/UI Designer",
      tag1: "Part time",
      tag2: "Senior level",
      salary: "$110/hr",
      city: "murree"
    },
    {
      brandLogo: download,
      company: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full time",
      tag2: "Junior level",
      salary: "$130/hr",
      city: "latifabad"
    },
    {
      brandLogo: download7,
      company: "Microsoft",
      datePosted: "1 week ago",
      post: "Product Designer",
      tag1: "Remote",
      tag2: "Mid level",
      salary: "$190/hr",
      city: "faisalabad"
    },
    {
      brandLogo: download6,
      company: "Meta",
      datePosted: "10 weeks ago",
      post: "Software Engineer",
      tag1: "Full time",
      tag2: "Senior level",
      salary: "$200/hr",
      city: "lahore"
    },
    {
      brandLogo: download4,
      company: "Netflix",
      datePosted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Part time",
      tag2: "Senior level",
      salary: "$100/hr",
      city: "islamabad"
    },
    {
      brandLogo: download5,
      company: "Apple",
      datePosted: "4 days ago",
      post: "iOS Developer",
      tag1: "Full time",
      tag2: "Junior level",
      salary: "$180/hr",
      city: "mirpurkhas"
    },
    {
      brandLogo: download8,
      company: "Tesla",
      datePosted: "6 days ago",
      post: "Data Scientist",
      tag1: "Full time",
      tag2: "Senior level",
      salary: "$150/hr",
      city: "larkana"
    },
    {
      brandLogo: download9,
      company: "Adobe",
      datePosted: "12 days ago",
      post: "Interaction Designer",
      tag1: "Part time",
      tag2: "Mid level",
      salary: "$126/hr",
      city: "kotri"
    },
    {
      brandLogo: download2,
      company: "Spotify",
      datePosted: "2 weeks ago",
      post: "Music Analyst",
      tag1: "Full time",
      tag2: "Junior level",
      salary: "$140/hr",
      city: "karachi"
    },
    {
      brandLogo: download1,
      company: "Airbnb",
      datePosted: "1 month ago",
      post: "UX Researcher",
      tag1: "Remote",
      tag2: "Senior level",
      salary: "$140/hr",
      city: "hyderbad"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem,idx) {

        return <div key={idx}> {/*here idx is a key we have to pass key for react understanding so it uniquely identify every element*/}
          <Card brandLogo={elem.brandLogo}
            company={elem.company} dateposted={elem.dateposted}
            post={elem.post} tag1={elem.tag1} tag2={elem.tag2}
            salary={elem.salary} city={elem.city} />
        </div>
      })}
    </div>
  )
}

export default App
