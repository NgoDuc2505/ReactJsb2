import React from 'react'
import './potrait.css'
import { useState } from 'react'
export default function Potrait() {
  let listOfGlass = [
    {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./img/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./img/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 3,
      "price": 30,
      "name": "DIOR D6700HQ",
      "url": "./img/v3.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 4,
      "price": 70,
      "name": "DIOR D6005U",
      "url": "./img/v4.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 5,
      "price": 40,
      "name": "PRADA P8750",
      "url": "./img/v5.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 6,
      "price": 60,
      "name": "PRADA P9700",
      "url": "./img/v6.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 7,
      "price": 80,
      "name": "FENDI F8750",
      "url": "./img/v7.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 8,
      "price": 100,
      "name": "FENDI F8500",
      "url": "./img/v8.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 9,
      "price": 60,
      "name": "FENDI F4300",
      "url": "./img/v9.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  ]
  var [img, setImg] = useState('/img/v1.png')
  var [title, setTitle] = useState('GUCCI G8850U')
  var [price, setPrice] = useState('30')
  var [decs, setDecs] = useState('Light pink square lenses define these sunglasses, ending with amother of pearl effect tip')
  function renderGlassList() {
    let arrayList = [];
    let content = '';
    for (let i = 1; i <= 9; i++) {
      content = <div className={`glass glass${i}`} key={i} onClick={() => {
        for(let key of listOfGlass){
          if(key.id == i){
            setImg(listOfGlass[i-1].url)
            setDecs(listOfGlass[i-1].desc)
            setPrice(listOfGlass[i-1].price)
            setTitle(listOfGlass[i-1].name)
          }
        }
      }}>
        <img src={`/img/g${i}.jpg`} alt="glass" />
      </div>
      arrayList.push(content);
    }
    return arrayList;
  }
  return (
    <div>
      <div className="model_img">
      </div>
      <div className="model_img left">
        <div className="glass_wearing" style={{
          backgroundImage: `url(${img})`
        }}>
        </div>
        <div className="glass_info">
          <h4>{title}</h4>
          <h3>Only {price}$</h3>
          <p>'{decs}'</p>
        </div>
      </div>
      <div className="glass_wrapper">
        {renderGlassList()}
      </div>
    </div>
  )
}



