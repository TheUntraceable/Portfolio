import Head from "next/head"
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function Home() {
    return (
        <html>
            <Head>
                <title>The Untraceable</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="A little website about me." />
                <link rel="shortcut icon" type="image/jpg" href="https://avatars.githubusercontent.com/u/73362400?v=4" />
                <meta name="theme-color" content="#000000" />
                <meta name="apple-mobile-web-app-capable" content="no" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="og:image" content="https://avatars.githubusercontent.com/u/73362400?v=4" />
            </Head>
            <Navbar />
            <div className={styles.card} id="#about" style={{"marginTop": "3em"}}>
                <h1>About me</h1>

                <h2>Who am I?</h2>
                <p>Hi there! I'm The Untraceable, I am a software developer who loves to use Javascript and Python as much as possible in my daily life.</p>
                <p>Solving problems? Making a website? Making sure that no Machine Learning algorithm tries to end humanity because someone forgot to implement a fail safe? I wanna try fix it.</p>
                <p>I mainly started off by using Python in December of 2020, but slowly started to shift to Javascript as much as I can because I feel it has more than Python has.</p>
                <p>I might start working on my knowledge regarding Typescript as I love to typehint, but not sure if I'd have any other uses for it.</p>
                <p>I try my hardest to not waste anything on my projects, such as making a 50 line class just to add some caching and not have to rewrite my entire implementation of the previous class.</p>
            </div>
            <div className={styles.card} id="resume">
                <h2>What can I do?</h2>

                <p>I'm currently working on <a href="https://sentinel.theuntraceable.tech">Sentinel</a>, my Discord Bot rewritten from Python to Javascript.</p>
                <p>I make Discord Bots for tasks that I believe are gonna be used frequently by not only me.</p>
                <p>I also rewrite things I don't like the design of. If I see a project and I like it and for example, if it's synchronous, I'll try to make it asynchronous ect.</p>
                <p>I know Python very well, I like how I can typehint things and make documentation with automation utilising these typehints.</p>
                <p>I know Javascript (node.js, vanilla Javascript not so well) very well, I really like using Javascript as it has many more features than Python but still has similar ideas.</p>
                <p>As I hope you can see, I am also decent at using HTML and CSS, I enjoy the possibilities and simplicity of the 2. I have written this website with NextJS (React) and I really like the idea of components as they help me have a consistent page such as the Navbar and Footer.</p>
                <p>I also love to use Markdown, I used to prefer this over HTML and CSS but that was because I was very uncomfortable using CSS. I love how simple the syntax is.</p>
                <p>I love using PostgreSQL as it's a very simple language and has very nice design (DESCRIBE table_name has a very nice look).</p>
                <p>MongoDB is my favorite database to use for its simplicity. I have used this for all my Discord Bots and I created a <code>CachingCollection</code> for MongoDB's JS Driver just for faster retrieval of data.</p>
                <p>I also have a little experience with Docker, I have no use for it apart from running a local instance of MongoDB or PostgreSQL.</p>
                <p>I have used Debian Linux previously and I am very fluent with the terminal interface and I loved using it, I currently use Windows only for the nice UI and because it was preinstalled and I have no need for Linux because of WSL.</p>
            </div>
            <div className={styles.card} id="projects">
                <h2>Projects</h2>

                <p>I have a few projects that I'm working on, and I doubt I'll be able to finish them all, which I do hope to do, but too many ideas and too little time.</p>
                <p>-<a href="https://github.com/TheUntraceable">My Github</a>, all of my other projects can be found there that I didn't mention</p>
                <p>-<a href="https://sentinel.theuntraceable.tech">Sentinel</a> a Discord Bot that focuses on your Discord Server's security.</p>
                <p>-<a href="https://github.com/EpikHost/EpikCord.py">EpikCord.py</a> an API Wrapper for Discord's API Wrapper written in Python following the discontinuation for Discord.py.</p>
                <p>-<a href="https://github.com/TheUntraceable/NoteManager">Note Manager</a> a Discord Bot that allows you to create notes and share them with other people I gave up on the PostgreSQL branch as it raised an error that isn't my fault.</p>
            </div>
            <div className={styles.card} id="contact">
                <h2>Contact</h2>
                <p>Feel free to contact me on any of the following: </p>
                <p>Discord @ The Untraceable#4852</p>
            </div>
            <Footer />
        </html>
    )
} 