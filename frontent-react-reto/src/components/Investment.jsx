"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import "./bootstrap/dist/css/bootstrap.min.css";
import { PieChart } from "react-minimal-pie-chart";


export const Investment = () => {
  const [data, setData] = useState([]);
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqdWFuLnZpbGxhQGV4YW1wbGUuY29tIiwiaWF0IjoxNjg0ODQ4NDg1LCJzdWIiOiIkYXJnb24yaWQkdj0xOSRtPTEwMjQsdD0xLHA9MSQ0NTNFVUVPUHBGclYwQWQ2UXdpclJBJDNGVU10d3pGcDNmamdxTGhqVC9wcXk4a05vK0VMUTRWTFh5ck5jdFJwYnciLCJpc3MiOiJEZXZfbW9kZWxvX3JvbHMiLCJleHAiOjE2ODU0NTMyODV9.b6MbusjYOlsL1by9Jr8_6Y0w4ZLsfJqhYFcriJPO34E'
  

  useEffect(() => {
    fetch(
        "https://unit-trust-corporation-api.kindmushroom-705dfbe6.centralus.azurecontainerapps.io/api/users/1/investment",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            }
        }
    )
        .then((response) => response.json()) // Parse response into JSON
        .then((responseData) => {
            setData(responseData); // Set the extracted data to the state variable
        })
        ;
}, []);
    console.log("Data variable:", data);
    var stocks=0
    var mutualFunds=0
    var bonds=0
    var realState=0
    var total=0
    data.map((data) => {
       
        if (data.investmentType==="Stocks"){
            stocks = data.investment
        }else if(data.investmentType==="Mutual Fonds"){
            mutualFunds = data.investment
        }else if(data.investmentType==="Bonds"){
            bonds = data.investment
        }else if(data.investmentType==="Real State"){
            realState = data.investment
        }else if(data.investmentType==="total"){
            total = data.investment
        }
    });

    var month=0
    var year=0
    data.map((data) => {
        month = data.month
        year = data.year
    });

    console.log("stocks", stocks);
    console.log("mutualFunds", mutualFunds);
    console.log("bonds", bonds);
    console.log("realState", realState);
    console.log("total", total);
    console.log("month", data.month);
    console.log("year", data.year);
  return (
    <div
      className="border border-black d-flex justify-content-center"
      style={{ height: 288, width: 325, background: "white" }}
    >
      <div className="col">
        <p className="fw-bold ms-2"style={{fontSize:'22px'}}>
          ${total === "" ? "Total No encontrado" : total}
        </p>
        <div className="d-flex flex-column align-items-center" >
          <div className="">
            <p className="mb-0" style={{fontFamily:'Inter' , fontSize:'12px'}}>Stocks</p>
            <p className="fw-bold " style={{fontStyle:'normal',fontFamily:'Inter' ,fontSize:'16px'}}>{stocks}</p>
          </div>
          <div className="">
            <p className="mb-0"style={{fontFamily:'Inter', fontSize:'12px'}}>Bonds</p>
            <p className="fw-bold "style={{fontStyle:'normal',fontFamily:'Inter' ,fontSize:'16px'}}>{bonds}</p>
          </div>
          <div className="">
            <p className="mb-0"style={{fontFamily:'Inter', fontSize:'12px'}}>Mutual Funds</p>
            <p className="fw-bold "style={{fontStyle:'normal',fontFamily:'Inter' ,fontSize:'16px'}}>{mutualFunds}</p>
          </div>
          <div className="">
            <p className="mb-0"style={{fontFamily:'Inter', fontSize:'12px'}}>Real State</p>
            <p className="fw-bold py-0"style={{fontStyle:'normal',fontFamily:'Inter' ,fontSize:'16px'}}>{realState}</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="d-flex flex-column">
            <div className="mx-auto">
            <p>
            Total as of {month === 0 ? "Month not found" : month}/{year === 0 ? "Year not found" : year}

             </p>
            </div>
      
        <PieChart
            data={[
                { title: 'Bonds', value: ((bonds/total)*100), color: "#FFF0F0" },
                { title: "Mutual Funds", value: ((mutualFunds/total)*100), color: "#B9392F" },
                { title: "Stocks", value: ((stocks/total)*100), color: "#D92719" },
                { title: "Real State", value: ((realState/total)*100), color: "#E98179" },
            ]}
            style={{ height: 185, width: 178 }}
        />

        </div>
       

      </div>

    </div>
  );
};

