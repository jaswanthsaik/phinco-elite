import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
} from "recharts";

import {
    GraduationCap,
    ArrowRightLeft,
    House,
    RotateCcw,
} from "lucide-react";


const cityData = [
    {
        name: "Bengaluru",
        value: 28,
        color: "#3b82f6",
    },
    {
        name: "Delhi NCR",
        value: 18,
        color: "#22c55e",
    },
    {
        name: "Hyderabad",
        value: 15,
        color: "#8b5cf6",
    },
    {
        name: "Pune",
        value: 14,
        color: "#f97316",
    },
    {
        name: "Mumbai",
        value: 10,
        color: "#ef4444",
    },
    {
        name: "Remote/Other Cities",
        value: 15,
        color: "#6366f1",
    },
];


const successStories = [
    {
        title: "Fresher to Job",
        percentage: "35%",
        description: "Direct campus placements",
        icon: <GraduationCap />,
        bg: "#eef6ff",
        color: "#2563eb",
    },
    {
        title: "Non-IT to IT",
        percentage: "30%",
        description: "Career transition success",
        icon: <ArrowRightLeft />,
        bg: "#effbf0",
        color: "#16a34a",
    },
    {
        title: "Housewives to Job",
        percentage: "20%",
        description: "Empowering women",
        icon: <House />,
        bg: "#faf5ff",
        color: "#9333ea",
    },
    {
        title: "Career Gap to Job",
        percentage: "15%",
        description: "Comeback champions",
        icon: <RotateCcw />,
        bg: "#fff7ed",
        color: "#ea580c",
    },
];


const AlumniSuccessStories = () => {


    return (

        <section className="alumni-section">

            <div className="alumni-container">




                {/* RIGHT 60% */}

                <div className="distribution-wrapper">


                    <h2>
                        Alumni Distribution Across India
                    </h2>



                    <div className="chart-area">


                        <div className="chart-box">

                            <ResponsiveContainer
                                width="100%"
                                height={350}
                            >

                                <PieChart>


                                    <Pie
                                        data={cityData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={70}
                                        outerRadius={120}
                                        paddingAngle={2}
                                    >


                                        {
                                            cityData.map((item, index) => (
                                                <Cell
                                                    key={index}
                                                    fill={item.color}
                                                />
                                            ))
                                        }


                                    </Pie>


                                    <Legend
    verticalAlign="bottom"
    formatter={(value) => (
        <span
            style={{
                fontSize: "12px",
                fontWeight: 400,
            }}
        >
            {value}
        </span>
    )}
/>


                                </PieChart>


                            </ResponsiveContainer>


                        </div>




                        <div className="city-list">


                            {
                                cityData.map((city) => (
                                    <div
                                        className="city-item"
                                        key={city.name}
                                    >


                                        <div className="city-name">

                                            <span
                                                style={{
                                                    background: city.color
                                                }}
                                            ></span>

                                            {city.name}

                                        </div>


                                        <strong
                                            style={{
                                                color: city.color
                                            }}
                                        >
                                            {city.value}%
                                        </strong>


                                    </div>
                                ))
                            }


                        </div>



                    </div>


                </div>

                {/* LEFT 40% */}

                <div className="success-wrapper">

                    <h2>
                        Success Stories by Category
                    </h2>


                    <div className="success-grid">

                        {
                            successStories.map((item) => (
                                <div
                                    className="success-card"
                                    key={item.title}
                                    style={{
                                        background: item.bg
                                    }}
                                >

                                    <div
                                        className="success-icon"
                                        style={{
                                            color: item.color
                                        }}
                                    >
                                        {item.icon}
                                    </div>


                                    <h3>
                                        {item.title}
                                    </h3>


                                    <div
                                        className="percentage"
                                        style={{
                                            color: item.color
                                        }}
                                    >
                                        {item.percentage}
                                    </div>


                                    <p>
                                        {item.description}
                                    </p>


                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>


            <style>{`

.alumni-section{
width:100%;
padding:60px 20px;
background:#f7fbfc;
}


.alumni-container{

max-width:1400px;
margin:auto;

display:grid;

grid-template-columns:
55% 40%;

gap:18px;

}



h2{

text-align:center;

font-size:18px;

font-weight:700;

color:#162334;

margin-bottom:35px;

}



/* SUCCESS */

.success-grid{

display:grid;

grid-template-columns:
repeat(2,1fr);

gap:30px;

}



.success-card{

height:250px;

border-radius:12px;

display:flex;

flex-direction:column;

align-items:center;

justify-content:center;

text-align:center;

}



.success-icon svg{

width:45px;
height:45px;

stroke-width:3;

margin-bottom:20px;

}



.success-card h3{

font-size:18px;

margin:0 0 10px;

color:#263238;

}


.percentage{

font-size:22px;

font-weight:800;

}



.success-card p{

font-size:12px;

color:#64748b;

}





/* GRAPH */


.distribution-wrapper{

background:white;

padding:10px;

border-radius:10px;

}


.chart-area{

display:grid;

grid-template-columns:
45% 55%;

align-items:center;

}



.chart-box{

height:450px;

background:white;

border-radius:10px;

box-shadow:
0 5px 20px rgba(0,0,0,.05);

}




.city-list{

display:flex;

flex-direction:column;

gap:22px;

}



.city-item{

height:62px;

border-radius:12px;

padding:0 25px;

background:white;

box-shadow:
0 4px 15px rgba(0,0,0,.08);

display:flex;

align-items:center;

justify-content:space-between;

font-size:14px;

}



.city-name{

display:flex;

align-items:center;

gap:15px;

}



.city-name span{

width:18px;

height:18px;

border-radius:4px;

}





/* TABLET */


@media(max-width:1100px){


.alumni-container{

grid-template-columns:
1fr;

}



.chart-area{

grid-template-columns:
1fr;

}



.city-list{

margin-top:30px;

}


}




/* MOBILE */


@media(max-width:600px){


.alumni-section{

padding:35px 12px;

}


h2{

font-size:12px;

}



.success-grid{

grid-template-columns:
1fr;

}


.success-card{

height:220px;

}



.chart-box{

height:330px;

}


.city-item{

height:55px;

font-size:14px;

padding:0 15px;

}


}


`}</style>



        </section>

    )

}


export default AlumniSuccessStories;