import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Appbody'>
        <header>  
          <h1>
          PUNIA VIISION
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h3>
          reason &#123;(markets, religion) | (coordination, creation)&#125; revelation
        </h3>
        <div className='links-container'>
          <headings>
            <a href="https://puniaviision.substack.com/" target="_blank" rel="noopener noreferrer"> BLOG </a>
          </headings>
          <headings>
            <a href="https://twitter.com/puniaviision" target="_blank" rel="noopener noreferrer"> TWITTER </a>
          </headings>
          <headings>
            <a href = "https://www.linkedin.com/in/puniaviision/" target="_blank" rel="noopener noreferrer"> LINKEDIN </a>
          </headings>
          <headings>
            MERCH [TBA]
          </headings>
          <headings>
            $PUNIA [TBA]
          </headings>
        </div>
        <headings>
          <b>current projects</b>
        </headings>
        <div className='projects'>
          <p>
            <b> 
            <a href="https://www.tokenautomation.xyz/" target="_blank" rel="noopener noreferrer"> token automation studios </a>
            </b>
          </p>
          <p> 
            automating web3 token or nft transactions based on web2 events like a retweet. we are interested in making tokens more powerful incentive tools
          </p>
          <p>
            <b> 
            <a href="https://t.co/YAvm5pfzNd" target="_blank" rel="noopener noreferrer"> christian intellectual project </a>
            </b>
          </p>
          <p> 
            creating community and technology to help people create a meaningful life philosophy. we read theological, philosophical, and other intellectual works mostly
            from the western classical tradition. we lament the increase focus on the material and decrease understanding of the immaterial
          </p>
          <p>
            <b> 
            <a href="https://puniaviision.substack.com/p/punia-leveraging-social-networks" target="_blank" rel="noopener noreferrer"> $punia </a>
            </b>
          </p>
          <p> 
            experiment in personal tokens. i want to figure out how i can better leverage my network into helping me accomplish my vision
          </p>
        </div>
        <div className='projects'>
          <headings>
            <b>past projects</b>
          </headings>
          <p>
            <b> 
            <a href="https://mirror.xyz/holon.eth" target="_blank" rel="noopener noreferrer"> holon </a>
            </b>
          </p>
          <p> 
            we wanted to change the backend technology of housing infrastructure. we started by building smart contracts to subsume rental contracts to improve the renting experience.
            our initial product ended up looking something like a decentralized airbnb
          </p>
          <p>
            <b> 
            <a href="https://www.crunchbase.com/organization/heroic-finance" target="_blank" rel="noopener noreferrer"> heroic finance </a>
            </b>
          </p>
          <p> 
            experiment into public goods funding. we wanted to create short term credit instruments based on income share agreements as we thought that would create
            better outcomes for both creditors and borrowers. eventually we wanted to use isas to open up public goods funding
          </p>
          <p>
            <b> 
            ebacademics
            </b>
          </p>
          <p> 
            tutoring business i started in highschool. we connected local students with parents to help them get tutoring in subjects and college prep. lowkey my
            most profitable business lol
          </p>
          <p>
            <b> 
            random others
            </b>
          </p>
          <p> 
            i've built a couple other small things like <a href="https://www.producthunt.com/products/zest-2" target="_blank" rel="noopener noreferrer"> zest </a> where we wanted to 
            create offline social networks around specific activities. really where i learned how to do customer interviews. also built cusp which was a marketplace for
            online personal trainers. our mvp was literally an instagram page for us to repost trainers and help people connect to them. i thought that was pretty clever!
            i have also written small whitepapers for defi protocols you can find on my blog
          </p>
        </div>
        <div className='projects'>
          <headings>
            <b>wanna work together?</b>
          </headings>
          <p>
            <b> 
            <a href="https://docs.google.com/spreadsheets/d/123jfY_GDCg04zpNyGXV3yUnpF-PjlebHgfBA2eIULM0/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> list of ideas </a>
            </b>
          </p>
          <p>
            i have a list of ideas that i maintain semi-frequently. some are terrible, but others are interesting. if you want to work on any of them, let me know!
            you can contact me at punia101 [at] gmail [dot] com or dm me on twitter
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;