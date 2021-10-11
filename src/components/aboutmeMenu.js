import React, {useState} from 'react';
import './aboutmeMenu.css';
import Whoami from './AboutmeSVGS/whoami';
import Aboutmesection from './AboutmeSVGS/aboutmesection';


function AboutmeMenu() {
    
    const edudata = [
        {
            id: 1, course: 'Computer Science', university: 'Paweł Włodkowic University College'
        },
        {
            id: 2, course: 'English Studies', university: 'University of Zielona Góra'
        }];
        const[showEdu, setShowEdu] = useState(false);
        const [education, setEducation] = useState(edudata);
        const handleShowEducation = ()=>{
            setShowEdu(!showEdu);
          }
          const ToggleEducation = ()=>{
            return(
            <div className="functionBox">
              <h3>My education</h3>
            {education.map((uni)=>{
              const {course, university} = uni;
              return (
                <div >
                  
                  <h4>{course}</h4>
                  <p>{university}</p>
                </div>
              );
            })}
          </div>
            )
        }
        const musicdata = [
            {
                id: 1, title: 'Perfect Darkness', artist: 'Fink'
            },
            {
                id: 2, title: 'Water Slider', artist: 'Mew'
            },
            {
                id: 3, title: 'Hvað Ef', artist: 'GDRN'
            },
            {
                id: 4, title: 'The Wire', artist: 'Vancouver Sleep Clinic'
            },
            {
                id: 5, title: 'Keeper', artist: 'Fortunes'
            }
            ];
            const [music, setMusic] = useState(musicdata);
            const[showMusic, setShowMusic] = useState(false);
            const handleShowMusic = ()=>{
                setShowMusic(!showMusic);
              }
            const ToggleMusic = ()=>{
                return(
                <div className="functionBox">
                  <h3>Music that I love</h3>
                {music.map((song)=>{
                  const {title, artist} = song;
                  return (
                    <div>
                      
                      <h4>{title}</h4>
                      <p>by {artist}</p>
                    </div>
                  );
                })}
              </div>
                )
            }
            const booksdata = [
            
              {
                  id: 1, booktitle: 'Czarna', bartist: 'Wojciech Kuczok'
              },
            
             
              {
                  id: 4, booktitle: 'Opowieść Podręcznej', bartist: 'Margaret Atwood'
              },
              {
                id: 5, booktitle: 'Nie opuszczaj mnie', bartist: 'Ishiguro Kazuo'
               },
              {
              id: 6, booktitle: 'Droga', bartist: 'McCarthy Charles'
              },
              {
                  id: 7, booktitle: 'Żony ze Stepford', bartist: 'Ira Levin'
              }];
              const [books, setBooks] = useState(booksdata);
              const[showBooks, setShowBooks] = useState(false);
              const handleShowBooks = ()=>{
                  setShowBooks(!showBooks);
                }
              const ToggleBooks = ()=>{
                  return(
                  <div className="functionBox">
                    <h3>Books I talk about</h3>
                  {books.map((book)=>{
                    const {booktitle, bartist} = book;
                    return (
                      <div>
                        
                        <h4>{booktitle}</h4>
                        <p>{bartist}</p>
                      </div>
                    );
                  })}
                </div>
                  )
              }
              const podcastdata = [
                {
                    id: 1, title: 'Piąte nie zabijaj', author: 'Justyna Mazur'
                },
                {
                  id: 2, title: 'Olga Herring True Crime', author: 'Olga Herring'
              },
                {
                    id: 3, title: 'Polska na Faktach', author: 'Kasia Sch.'
                }];
                const[showPodcast, setShowPodcast] = useState(false);
                const [podcast, setPodcast] = useState(podcastdata);
                const handleShowPodcast = ()=>{
                    setShowPodcast(!showPodcast);
                  }
                  const TogglePodcast = ()=>{
                    return(
                    <div className="functionBox">
                      <h3>Podcasts I listen to</h3>
                    {podcast.map((audio)=>{
                      const {title, author} = audio;
                      return (
                        <div>
                          
                          <h4>{title}</h4>
                          <p>{author}</p>
                        </div>
                      );
                    })}
                  </div>
                    )
                }
    return (
        <div className="menu-container">
            <div className="logo-wrapper">
            
            
            <div className="animated-title">
            <div className="whodiv" id="who"><Whoami/></div> 
    <div className="whodiv" id="ami"> 
    <span id="amispan"> <Aboutmesection/></span>
    </div>
    </div> 
    </div>
    <section>
      Hi there! My name is Anna and I'm a computer science student. I'm really into FrontEnd technologies and design. 
      My biggest dream is to become an engineer and design beautiful and aesthetic websites. If you want to get to know me, just click on any of the colorful buttons below. There you can find Ania in a nutshell. 
    <div className="button-section">
      
        <div>
     <button className="btn-aboutme" id="blueButton" onClick={handleShowEducation}> </button> 
     {showEdu && <ToggleEducation/>}
      </div>
      <div>
     <button className="btn-aboutme" id="yellowButton" onClick={handleShowMusic}> </button> 
     {showMusic && <ToggleMusic/>}
      </div>
      
      
        <div>
     <button className="btn-aboutme" id="orangeButton" onClick={handleShowBooks}> </button> 
     {showBooks && <ToggleBooks/>}
      </div>
      <div>
     <button className="btn-aboutme" id="pinkButton" onClick={handleShowPodcast}> </button> 
     {showPodcast && <TogglePodcast/>}
      </div>
      </div>
      
     
     </section>  
    
         
            
            
        </div>
    )
    }

export default AboutmeMenu
