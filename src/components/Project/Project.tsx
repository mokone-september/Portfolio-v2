import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                {<a href="https://atmos-weather-app.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> }
                </div>
            </header>
            <div className="body">
               <h3>Weather App</h3>
               <p>
              A weather app that displays the current weather for any city, with features to search for cities and view detailed weather information.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vite</li>
                <li>Typescript</li>
                <li>Enable/disable dark mode</li>
                <li>Weather API</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/mokone-september/e-commerce-store" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://e-commerce-store-hazel-xi.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>E-commence-Store</h3>
              <p>
              This project is a fully responsive and performant e-commerce store dedicated to custom mechanical keyboards. Built with Vue.js 3, TypeScript, and TailwindCSS, it demonstrates core frontend engineering skills including routing, state management, component design, SEO, and testing.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue</li>
                <li>Typescript</li>
                <li>Vite</li>
                <li>TailwindCSS</li>
                <li>Pinia</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
          <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/mokone-september/quiz-vue" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://quiz-nuxt-smoky.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Quiz App</h3>
              <p>
                Developed a quiz app with a user-friendly interface, allowing users to take quizzes and view results. Implemented features such as question randomization, score tracking, and a timer for each quiz session.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue</li>
                <li>Typescript</li>
                <li>Vite</li>
                <li>TailwindCSS</li>
                <li>Pinia</li>
                <li>Quiz API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/mokone-september/snake-game" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                 <a href="https://snake-game-pi-rose.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> 
              </div>
            </header>
            <div className="body">
              <h3>Snake Game</h3> 
              <p>
              A classic snake game built with React and Redux, featuring a simple and intuitive interface, and smooth gameplay.A classic snake game built with React and Redux, featuring a simple and intuitive interface, and smooth gameplay.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>Typescript</li>
                <li>TailwindCSS</li>
                <li>Typescript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/mokone-september/recipe-app" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                 <a href="https://recipe-app-liard-seven.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> 
              </div>
            </header>
            <div className="body">
              <h3>Recipe App</h3>
              <p>
              Flavor Fiesta is a vibrant culinary discovery platform that empowers users to explore global cuisines through an intuitive and interactive interface. Powered by the MealDB API, the app showcases an extensive collection of recipes with detailed information about ingredients, preparation steps, and regional cuisines.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Vite</li>
                <li>TailwindCSS</li>
                <li>MealDB API</li>
                <li>Typescript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
          
         <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/mokone-september/ToDo-app" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                 <a href="https://to-do-app-sand-eight.vercel.app/ " target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> 
              </div>
            </header>
            <div className="body">
              <h3>ToDo-App</h3>
              <p>
             To-do list website made with React JS, Tailwind CSS, TypeScript, Redux Toolkit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>Tailwind CSS</li>
                <li>Typescript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/mokone-september/Kasi-Pizza" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                 <a href="https://kasi-pizza.vercel.app/https:/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> 
              </div>
            </header>
            <div className="body">
              <h3>Kasi pizza</h3>
              <p>
              Kasi Pizza is a vibrant and user-friendly pizza ordering platform that brings the taste of local flavors to your fingertips. With a focus on simplicity and accessibility, the app allows users to easily browse through a variety of delicious pizzas, customize their orders, and place them for delivery or pickup.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>Tailwind CSS</li>
                <li>Typescript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}