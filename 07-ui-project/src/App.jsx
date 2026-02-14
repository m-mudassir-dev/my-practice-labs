import React from 'react'
import Section1  from "./components/section1/section1";



const App = () => {

const users = [
  {
color:"royalblue",
    img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
    intro:' Born and raised in china, Xie chaung is a final-year medical student. In her free time, she enjoys baking and reading classic literature.',
    tag:'satisfied'
  },
   {
  color:"orange",
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
    intro:'Alina is a graphic designer from london. She loves experimenting with vibrant colors and traveling to northern mountains for inspiration.',
    tag:'underserved'
  },
   {
 color:"seagreen",
    img:'https://images.unsplash.com/photo-1618488220787-aaee29f8871f?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    intro:' Priya is a software engineer based in Mumbai. She is a massive coffee lover and spends her weekends teaching local kids how to code.',
    tag:'underbanked'
  },
   {
 color:"gray",
img:'https://images.unsplash.com/photo-1686829354875-f8286d8f9d83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
       intro:'Originally from Madrid, Elena moved to London to study fashion. She is passionate about sustainable style and vintage photography.',
    tag:'unsatisfied'
  },
   {
     color:"red",
    img:'https://images.unsplash.com/photo-1731623884335-d8aac573f3cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D', 
    intro:'Maya is a yoga instructor from Bali. She focuses on mindfulness and spends most of her mornings surfing at the local beach.',
    tag:'blocked'
  }

]


  return (
    <div>
      <Section1 users={users}/>
    
    </div>
  )
}

export default App
