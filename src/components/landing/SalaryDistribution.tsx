import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";


const salaryData = [
    {
        range: "5-8 LPA",
        value: 32,
        color: "#16b981",
    },
    {
        range: "8-12 LPA",
        value: 38,
        color: "#3b82f6",
    },
    {
        range: "12-18 LPA",
        value: 22,
        color: "#8b5cf6",
    },
    {
        range: "18+ LPA",
        value: 8,
        color: "#f59e0b",
    },
];


const salaryCards = [
    {
        title: "5-8 LPA",
        value: "32% Alumni",
        color: "#16a34a",
        bg: "#effcf5",
    },
    {
        title: "8-12 LPA",
        value: "38% Alumni",
        color: "#2563eb",
        bg: "#eff6ff",
    },
    {
        title: "12-18 LPA",
        value: "22% Alumni",
        color: "#9333ea",
        bg: "#faf5ff",
    },
    {
        title: "18+ LPA",
        value: "8% Alumni",
        color: "#ea580c",
        bg: "#fff7ed",
    },
];



const SalaryDistribution = () => {


return (

<section className="salary-section">


<div className="salary-container">


{/* LEFT SIDE CHART 50% */}

<div className="chart-container">


<h2>
Salary Distribution
</h2>


<div className="chart-card">


<ResponsiveContainer
width="100%"
height="100%"
>

<BarChart
data={salaryData}
margin={{
top:30,
right:20,
left:0,
bottom:20
}}
>


<CartesianGrid
strokeDasharray="3 3"
/>


<XAxis
dataKey="range"
/>


<YAxis
tickFormatter={(value)=>`${value}%`}
/>


<Tooltip
formatter={(value)=>`${value}% Alumni`}
/>



<Bar
dataKey="value"
radius={[8,8,0,0]}
>


{
salaryData.map((item,index)=>(

<Cell
key={index}
fill={item.color}
/>

))
}


</Bar>


</BarChart>

</ResponsiveContainer>


</div>


</div>





{/* RIGHT SIDE CARDS 50% */}


<div className="salary-details">


<div className="package-card">


<h3>
Data Science & Analytics
</h3>


<strong>
₹24 LPA
</strong>


<p>
Maximum Package
</p>


<p>
Average: ₹8.5 LPA
</p>


</div>



<div className="salary-grid">


{
salaryCards.map((card)=>(

<div
className="salary-card"
key={card.title}
style={{
background:card.bg
}}
>


<h3
style={{
color:card.color
}}
>
{card.title}
</h3>


<p>
{card.value}
</p>


</div>

))
}


</div>


</div>



</div>



<style>{`

.salary-section{

width:100%;

padding:60px 20px;

background:#f8fbfc;

}



.salary-container{

max-width:1400px;

margin:auto;

display:grid;

grid-template-columns:
1fr 1fr;

gap:30px;

align-items:stretch;

}



h2{

font-size:28px;

font-weight:700;

text-align:center;

color:#172033;

margin-bottom:25px;

}




.chart-container{

background:white;

padding:20px;

border-radius:14px;

}



.chart-card{

height:420px;

width:100%;

background:#fff;

border-radius:12px;

}




.salary-details{

display:flex;

flex-direction:column;

gap:25px;

}




.package-card{

height:165px;

border-radius:12px;

background:#2563eb;

color:white;

padding:25px 30px;

display:flex;

flex-direction:column;

justify-content:center;

}


.package-card h3{

font-size:20px;

margin:0 0 8px;

}


.package-card strong{

font-size:32px;

}


.package-card p{

margin:3px 0;

font-size:16px;

}




.salary-grid{

display:grid;

grid-template-columns:
repeat(2,1fr);

gap:20px;

}



.salary-card{

height:120px;

border-radius:12px;

display:flex;

flex-direction:column;

align-items:center;

justify-content:center;

}


.salary-card h3{

font-size:22px;

margin:0 0 8px;

}


.salary-card p{

font-size:15px;

color:#475569;

}




/* TABLET */

@media(max-width:1000px){


.salary-container{

grid-template-columns:
1fr;

}


.chart-card{

height:380px;

}


}





/* MOBILE */


@media(max-width:600px){


.salary-section{

padding:35px 12px;

}


h2{

font-size:22px;

}


.chart-card{

height:300px;

}



.package-card{

height:auto;

padding:22px;

}


.package-card strong{

font-size:28px;

}



.salary-grid{

grid-template-columns:
1fr;

}



.salary-card{

height:100px;

}


}



`}</style>


</section>

)

}


export default SalaryDistribution;