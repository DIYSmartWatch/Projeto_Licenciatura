import React from 'react';
import * as garden from './Garden'
import PersonList from './PersonList';
import * as db from './database';
import ResultFetch from './teste';
function tira(){
  if(document.getElementById('bardraw0')){
    document.getElementById('bardraw0').style.display = "none"
  }
  if(document.getElementById('bardraw1')){
    document.getElementById('bardraw1').style.display = "none"
  }
  if(document.getElementById('bardraw2')){
    document.getElementById('bardraw2').style.display = "none"
  }
  if(document.getElementById('bardraw3')){
    document.getElementById('bardraw3').style.display = "none"
  }
  if(document.getElementById('bardraw4')){
    document.getElementById('bardraw4').style.display = "none"
  }
  if(document.getElementById('bardraw5')){
    document.getElementById('bardraw5').style.display = "none"
  }
  if(document.getElementById('bardraw6')){
    document.getElementById('bardraw6').style.display = "none"
  }
}
tira()
function upd(){
  window.location.href = "/makeYourOwn";
}
const predefine = () => {
    return (
       

         

    <div class="geral_prefefine">
    
      <div class="margem">
      

        <a href="./Gardens" >
          <div class="first">
            <div className="cards-list">
              <div className="card 4">
                <div className="card_image">
                  <img src="https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/B5/4C/768f5cf6-7d17-4b85-8244-580e06e059dd.gif" />
                </div>
                <div className="card_title title-black">
                  <p>Gardens</p>
                </div>
              </div>
            </div>
          </div>
       </a>


        <a href="./Mikros">
        <div class="second">
          <div className="cards-list">
              <div className="card 4">
                <div className="card_image">
                  <img src="https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/B5/4C/768f5cf6-7d17-4b85-8244-580e06e059dd.gif" />
                </div>
                <div className="card_title title-black">
                  <p>Mikros</p>
                </div>
              </div>
            </div>
          </div>
        </a>



        <a href="./SelfComplete">
        <div class="third">
            <div className="cards-list">
              <div className="card 4">
                <div className="card_image">
                  <img src="https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/B5/4C/768f5cf6-7d17-4b85-8244-580e06e059dd.gif" />
                </div>
                <div className="card_title title-black">
                  <p>Self-Complete</p>
                </div>
              </div>
            </div>
          </div>
        </a>
         

        <a href="./Simple_goals">
        <div class="fourth">
           <div className="cards-list">
              <div className="card 4">
                <div className="card_image">
                  <img src="https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/B5/4C/768f5cf6-7d17-4b85-8244-580e06e059dd.gif" />
                </div>
                <div className="card_title title-black">
                  <p>Simple-Goals</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        



        <a href="./Thirtys">
        <div class="fifth">
          <div className="cards-list">
              <div className="card 4">
                <div className="card_image">
                  <img src="https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/B5/4C/768f5cf6-7d17-4b85-8244-580e06e059dd.gif" />
                </div>
                <div className="card_title title-black">
                  <p>Thirtys</p>
                </div>
              </div>
            </div>
          </div>
        </a>

          
    </div>
    </div> 
   );
};

export default predefine;