import React, { Component } from 'react'
import '../css/firstpage.css'

export default class firstpage extends Component {
  render() {
    function yaratDiv(){
       var form1 = document.getElementById('form1');
       var div = document.createElement('div');
       var inp1 = document.getElementById('inp1');
       var h4 = document.createElement('h4');
       var btn1 = document.createElement('button');
       var btn2 = document.createElement('button');
       var btn3 = document.createElement('button');
      
       btn1.innerText = "EDIT";
       btn1.style.background = "none"
       btn1.style.border = "none"
       btn1.style.color = "green"
       btn1.style.fontSize = "20pt"
       btn1.style.marginLeft = "300px"

       btn2.innerText = "COMPLETED";
       btn2.style.background = "none"
       btn2.style.border = "none"
       btn2.style.color = "ORANGE"
       btn2.style.fontSize = "20pt"
       btn2.style.marginLeft = "30px"

       btn3.innerText = "DELETE";
       btn3.style.background = "none"
       btn3.style.border = "none"
       btn3.style.color = "crimson"
       btn3.style.fontSize = "20pt"
       btn3.style.marginLeft = "30px"

       console.log(inp1.value);

       h4.innerText = inp1.value;
       
       div.style.width = "100%"
       div.style.height = "7vh";
       div.style.backgroundColor = 'rgb(8, 50, 8)';
       div.style.border = "2px solid orange";
       div.style.borderRadius = "10px"
       div.style.marginTop = "20px"
       div.style.display = "inline-flex"
       div.style.alignItems = "center"
       div.style.padding = "5px"

       h4.style.color = "white";
       h4.style.fontSize = "20pt";
       
       div.appendChild(h4);
       div.appendChild(btn1)
       div.appendChild(btn2)
       div.appendChild(btn3)


       form1.appendChild(div);
    }

    return (
      <div className='div1'>
             <form id='form1' className='form1' action="">
                   <label id='lbl1' htmlFor="">Create Your Todo-List</label>
                   <br />
                   <input id='inp1' type="text" placeholder='What are your task for today?'/>
                   <input onClick={yaratDiv} id='btn1' type="button" value="Add" />
             </form>   
      </div>
    )
  }
}
