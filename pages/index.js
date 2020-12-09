import Link from 'next/link'

export default function home() {
  return <section>
    <div class="nav">
      <Link href="./">
         <a class="title nav">Home</a>
      </Link>
      <Link href="./components/navs/portifolio">
         <a class="title nav">Portifolio</a>
      </Link>
      <Link href="./components/navs/contact">
         <a class="title nav">Contact Me</a>
      </Link>
    </div>

    <div class="self">
      <p>
          <h1>hello techs!</h1>
          My name is Gabriel Zayumba, (gacto).
       <ul>
          <li> I’m currently working at <a href="www.gtengineering.co.tz"> Gtengineering </a> as a Web Developer.</li>
          <li> I'm currently working with frontend and backend (fullstack ).</li>
          <li> Ask me about python for data science, javascript (nodejs, nextjs).</li>
          <li> Fun fact: I can  drink a cocacola for the whole day without eating food.</li>
          <li> Footprint: Amazing organizations i have worked with <a href="#">Archiplus</a>, <a href="#">Ngama technology.</a></li>
          <li> My email: <a href="#">zayumba@gtengineering.co.tz</a></li>
       </ul>
         <div class="social"> 
            <div class="social-icons">
               <a class="social-icon social-icon--github">
                  <i class="fa fa-github"></i>
                  <div class="tooltip">Github</div>
               </a>
               <a class="social-icon social-icon--twitter">
                  <i class="fa fa-twitter"></i>
                  <div class="tooltip">Twitter</div>
               </a>
               <a class="social-icon social-icon--slack">
                  <i class="fa fa-slack"></i>
                  <div class="tooltip">slack</div>
               </a>
               <a class="social-icon social-icon--envelope">
                  <i class="fa fa-envelope"></i>
                  <div class="tooltip">email</div>
               </a>
               <a class="social-icon social-icon--linkedin">
                  <i class="fa fa-linkedin"></i>
                  <div class="tooltip">LinkedIn</div>
               </a>
            </div>
         </div>
      </p>
    </div>
  </section>


}