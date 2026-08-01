import React from "react";
function App() {
  

  return (
    <>
      <nav>
        <div className="nav-log">
          <h2>
            teco <span>ritham</span>
          </h2>
        </div>
        <div className="nav-right">
          <h1>home</h1>
          <h1>constact</h1>
          <h1>about</h1>
        
        </div>
      
      </nav>

      <br />
      
      <div className="container">
        <div className="left">
          <h1>Learn to code</h1>
          <h1>by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
          <button>Start coding now</button>
        </div>
        <div className="right">
          <img src="./src/images/image-hero-mobile.png" alt="mobile" />
        </div>


      </div>   

      <br />

      <table>
        <tr>
          <th>10k+</th>
          <th>100%</th>
          <th>12m+</th>
        </tr>
        <tr>
          <td>companies</td>
          <td>of our courses are</td>
          <td>developers</td>
        </tr>
        <tr>
          <td>trust us</td>
          <td>loved by students</td>
          <td>have joined</td>
        </tr>   
      </table>

      <br />

      <aside>
        <img src="./src/images/image-hero-desktop.png" alt="desktop" />   
        <div className="aside-right">
          <h1>Keep track of your learning</h1>
          <p>
            Never forget a lesson you learned or a concept you were
            introduced to. Our system reminds you of what you
            learned 1 day, 7 days, and 30 days after you watch it.
          </p>
          <button>View our plans</button>
        </div>    


      </aside>


      <br />

      <div className="footer">
        <div className="footer-logo">
          <h2>
            teco <span>ritham</span>
          </h2>
        </div>
        <div className="footer-right">
          <img src="./src/images/icon-facebook.svg" alt="facebook" />
          <img src="./src/images/icon-twitter.svg" alt="twitter" />
          <img src="./src/images/icon-instagram.svg" alt="instagram" />
        </div>
      </div>      


    </>
  );
}

export default App;
