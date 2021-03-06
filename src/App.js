import './App.css';
import React, {useRef, useState, useEffect} from 'react'
import DayLineUp from '../src/components/DayLineUp'
import {DayInputs, Tab, Separator, ThemeContainer, ThemeImage, Inner, ThemesContainer, Modal, ImageContainer} from './styled'
import Lollapalooza from '../src/images/lollapalooza.png'
import Cloud from '../src/images/cloud.png'
import Cloud2 from '../src/images/cloud2.png'
import Cloud3 from '../src/images/cloud3.png'
import Kite from '../src/images/kite.png'
import Kite2 from '../src/images/kite2.png'
import Kite3 from '../src/images/kite3.png'
import Kite4 from '../src/images/kite4.png'
import Shine from '../src/images/shine.svg'
import Check from '../src/images/check.svg'
import Close from '../src/images/close.svg'
import ChevronDown from '../src/images/chevron_down.svg'
import MainCircle from '../src/images/main_circle.svg'
import LollaTheme from '../src/images/lolla-theme.png'
import Fantasy01Theme from '../src/images/fantasy01-theme.png'
import {Grid, Col} from '../src/components/Grid'
import { toPng, toJpeg } from 'html-to-image';
import axios from 'axios'
import InputsContainer from '../src/components/InputsContainer';
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'

function App() {

  const [data, setData] = useState({
    friday: {
      headliners: [],
      secondary: [],
      others: []
    },
    saturday: {
      headliners: [],
      secondary: [],
      others: []
    },
    sunday: {
      headliners: [],
      secondary: [],
      others: []
    }
  })
  const [fridayInputs, setFridayInputs] = useState(true)
  const [saturdayInputs, setSaturdayInputs] = useState(false)
  const [sundayInputs, setSundayInputs] = useState(false)
  const [themeSelected, setThemeSelected] = useState('default')
  const [isDisabledDownloadButton, setIsDisabledDownloadButton] = useState(true)
  const [previewPoster, setPreviewPoster] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [isOpenInputContainer, setIsOpenInputContainer] = useState(false)
  const printRef = React.useRef();

  const colors = ["#fedc00", "#fe4239", "#ff99fd", "#b15cff", "#a3f89b", "#0070f0", "#00ff00"]

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

  useEffect(() => {
    const windowWidth = window.screen.width
    if(windowWidth < 1280){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
    console.log(windowWidth)
  }, [])

  useEffect(() => {
    if(fridayInputs){
      setSaturdayInputs(false)
      setSundayInputs(false)
    } 
  }, [fridayInputs])

  useEffect(() => {
    if(saturdayInputs){
      setFridayInputs(false)
      setSundayInputs(false)
    } 
  }, [saturdayInputs])

  useEffect(() => {
    if(sundayInputs){
      setFridayInputs(false)
      setSaturdayInputs(false)
    }
  }, [sundayInputs])

  useEffect(() => {
    if(themeSelected !== "Default"){
      setIsDisabledDownloadButton(false)
    } else {
      setIsDisabledDownloadButton(true)
    }
  }, [themeSelected])

  const handleDownloadImage = async () => {
    
    setPreviewPoster('')
    setOpenModal(true)
    const poster = {
      data: data,
      theme: themeSelected
    }
    // https://dream-festival-lineup-backend.herokuapp.com/generate
    const get = await axios.post('https://dream-festival-lineup-backend.herokuapp.com/generate', poster)
    console.log(get)
    setPreviewPoster(get.data.image)
    
    if(!isMobile){
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = get.data.image;
      link.click();
    }
  };

  const downloadImageMobile = () => {
    var link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    link.href = previewPoster;
    link.click();
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    let identifiers = name.split('-')
    let arrData = {...data}
    arrData[identifiers[0]][identifiers[1]][identifiers[2]] = value
    
    const checkArray = arrData[identifiers[0]][identifiers[1]].some(value => {
      return value !== ""
    })
    if(!checkArray){
      arrData[identifiers[0]][identifiers[1]] = []
    }

    setData(arrData)
  }

  return (
    <div className="App">
      {openModal && isMobile ? 
      <Modal>
        <div className="modalContentContainer">
          
          <div className="modalCont">
          
            {previewPoster ? 
              <>
                <img onClick={()=>setOpenModal(false)} src={Close} alt="close_icon" className="close" />
                <h2>Poster preview</h2>
                <img src={previewPoster} />
                <button onClick={downloadImageMobile}>Download</button>
              </>
            :
              <div className="loadingCont">
                <div className="circleLogoSmall">
                  <img className="s" src={Shine} alt="shine" />
                  <img className="a" src={Shine} alt="shine" />
                </div>
                <span className="modalLoadingText">Generating image...</span>
              </div>
            }
          </div>
        
        </div>
      </Modal>
      : null}

      <Grid>
        <Col desktop={6} mobile={12}>
            <div className="hero">
                <div className="circleLogo">
                  <img className="shine" src={Shine} alt="shine" />
                  <img className="shine2" src={Shine} alt="shine" />
                </div>
                <h1 className="title2">DREAM FESTIVAL LINEUP</h1>
                <p className="heroDescription">Prepare the lineup of your dreams</p> 
                <button>Prepare lineup</button>
            </div>
          
           
          <div className="main">
        
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>

            <div className="circle4"></div>
            
            <div className="circle6"></div>
            

            <Inner>
                
              <Separator id="theme">Themes</Separator>
                <span className="separatorDescription">Select a theme to start making your dream lineup.</span>
                <ThemesContainer>
                
                <Grid>
                  <Col desktop={4} mobile={12}>
                    <ThemeContainer onClick={()=>setThemeSelected('Lollapalooza')} themeSelected={themeSelected === "Lollapalooza" ? true : false} >
                      <ImageContainer themeSelected={themeSelected === "Lollapalooza" ? true : false}>  
                        {themeSelected === "Lollapalooza" && <img src={Check} alt="check_icon" className="checkIcon" />}
                        <ThemeImage src={LollaTheme} alt="lolla" themeSelected={themeSelected === "Lollapalooza" ? true : false}/>
                      </ImageContainer>
                      <p onClick={()=>setThemeSelected('Lollapalooza')}>Lollapalooza</p>
                    </ThemeContainer>
                  </Col>

                  <Col desktop={4} mobile={12}>
                    <ThemeContainer onClick={()=>setThemeSelected('Fantasy 01')} themeSelected={themeSelected === "Fantasy 01" ? true : false} >
                      <ImageContainer themeSelected={themeSelected === "Fantasy 01" ? true : false}>  
                        {themeSelected === "Fantasy 01" && <img src={Check} alt="check_icon" className="checkIcon" />}
                        <ThemeImage src={Fantasy01Theme} themeSelected={themeSelected === "Fantasy 01" ? true : false} alt="lolla" />
                      </ImageContainer>
                      <p onClick={()=>setThemeSelected('Lollapalooza')}>Fantasy 01</p>
                    </ThemeContainer>
                  </Col>

                  </Grid>
              
                </ThemesContainer>
              
              <Separator>Line up</Separator>
              <div className="tabs">
              <Tab onClick={()=>setFridayInputs(!fridayInputs)} selected={fridayInputs} >FRIDAY</Tab>
              <Tab onClick={()=>setSaturdayInputs(!saturdayInputs)} selected={saturdayInputs}>SATURDAY</Tab>
              <Tab onClick={()=>setSundayInputs(!sundayInputs)} selected={sundayInputs}>SUNDAY</Tab>
              </div>
              <div className="inputsCont3">
                <DayInputs reveal={fridayInputs}>
                  <InputsContainer title={"Headliners artists"} restrictCircle={true} isMobile={isMobile} >
                    <input placeholder='Add headliner artist' name="friday-headliners-0" onChange={handleChange} value={data.friday.headliners[0]}/>
                    <input placeholder='Add headliner artist' name="friday-headliners-1" onChange={handleChange} value={data.friday.headliners[1]}/>
                    <input placeholder='Add headliner artist' name="friday-headliners-2" onChange={handleChange} value={data.friday.headliners[2]}/>
                  </InputsContainer>

                  <InputsContainer title={"Secondary artists"} restrictCircle={true} isMobile={isMobile} >
                    <input placeholder='Add secondary artist' name="friday-secondary-0" onChange={handleChange} value={data.friday.secondary[0]}/>
                    <input placeholder='Add secondary artist' name="friday-secondary-1" onChange={handleChange} value={data.friday.secondary[1]}/>
                    <input placeholder='Add secondary artist' name="friday-secondary-2" onChange={handleChange} value={data.friday.secondary[2]}/>
                    <input placeholder='Add secondary artist' name="friday-secondary-3" onChange={handleChange} value={data.friday.secondary[3]}/>
                    <input placeholder='Add secondary artist' name="friday-secondary-4" onChange={handleChange} value={data.friday.secondary[4]}/>
                    <input placeholder='Add secondary artist' name="friday-secondary-5" onChange={handleChange} value={data.friday.secondary[5]}/>
                    <input placeholder='Add secondary artist' name="friday-secondary-6" onChange={handleChange} value={data.friday.secondary[6]}/>
                    <input placeholder='Add secondary artist' name="friday-secondary-7" onChange={handleChange} value={data.friday.secondary[7]}/>
                    <input placeholder='Add secondary artist' name="friday-secondary-8" onChange={handleChange} value={data.friday.secondary[8]}/>
                  </InputsContainer>

                  <InputsContainer title={"Other artists"} restrictCircle={false} isMobile={isMobile} >
                    <input placeholder='Add other artist' name="friday-others-0" onChange={handleChange} value={data.friday.others[0]}/>
                    <input placeholder='Add other artist' name="friday-others-1" onChange={handleChange} value={data.friday.others[1]}/>
                    <input placeholder='Add other artist' name="friday-others-2" onChange={handleChange} value={data.friday.others[2]}/>
                    <input placeholder='Add other artist' name="friday-others-3" onChange={handleChange} value={data.friday.others[3]}/>
                    <input placeholder='Add other artist' name="friday-others-4" onChange={handleChange} value={data.friday.others[4]}/>
                    <input placeholder='Add other artist' name="friday-others-5" onChange={handleChange} value={data.friday.others[5]}/>
                    <input placeholder='Add other artist' name="friday-others-6" onChange={handleChange} value={data.friday.others[6]}/>
                    <input placeholder='Add other artist' name="friday-others-7" onChange={handleChange} value={data.friday.others[7]}/>
                    <input placeholder='Add other artist' name="friday-others-8" onChange={handleChange} value={data.friday.others[8]}/>
                    <input placeholder='Add other artist' name="friday-others-9" onChange={handleChange} value={data.friday.others[9]}/>
                    <input placeholder='Add other artist' name="friday-others-10" onChange={handleChange} value={data.friday.others[10]}/>
                    <input placeholder='Add other artist' name="friday-others-11" onChange={handleChange} value={data.friday.others[11]}/>
                    <input placeholder='Add other artist' name="friday-others-12" onChange={handleChange} value={data.friday.others[12]}/>
                    <input placeholder='Add other artist' name="friday-others-13" onChange={handleChange} value={data.friday.others[13]}/>
                    <input placeholder='Add other artist' name="friday-others-14" onChange={handleChange} value={data.friday.others[14]}/>
                  </InputsContainer>

                </DayInputs>
                
                <DayInputs reveal={saturdayInputs}>
                  <InputsContainer title={"Headliners artists"} restrictCircle={true} isMobile={isMobile} >
                    <input placeholder='Add headliner artist' name="saturday-headliners-0" onChange={handleChange} value={data.saturday.headliners[0]} />
                    <input placeholder='Add headliner artist' name="saturday-headliners-1" onChange={handleChange} value={data.saturday.headliners[1]} />
                    <input placeholder='Add headliner artist' name="saturday-headliners-2" onChange={handleChange} value={data.saturday.headliners[2]} />
                  </InputsContainer>

                  <InputsContainer title={"Secondary artists"} restrictCircle={true} isMobile={isMobile} >
                    <input placeholder='Add secondary artist' name="saturday-secondary-0" onChange={handleChange} value={data.saturday.secondary[0]} />
                    <input placeholder='Add secondary artist' name="saturday-secondary-1" onChange={handleChange} value={data.saturday.secondary[1]} />
                    <input placeholder='Add secondary artist' name="saturday-secondary-2" onChange={handleChange} value={data.saturday.secondary[2]} />
                    <input placeholder='Add secondary artist' name="saturday-secondary-3" onChange={handleChange} value={data.saturday.secondary[3]} />
                    <input placeholder='Add secondary artist' name="saturday-secondary-4" onChange={handleChange} value={data.saturday.secondary[4]} />
                    <input placeholder='Add secondary artist' name="saturday-secondary-5" onChange={handleChange} value={data.saturday.secondary[5]} />
                    <input placeholder='Add secondary artist' name="saturday-secondary-6" onChange={handleChange} value={data.saturday.secondary[6]} />
                    <input placeholder='Add secondary artist' name="saturday-secondary-7" onChange={handleChange} value={data.saturday.secondary[7]} />
                    <input placeholder='Add secondary artist' name="saturday-secondary-8" onChange={handleChange} value={data.saturday.secondary[8]} />
                  </InputsContainer>

                  <InputsContainer title={"Other artists"} restrictCircle={false} isMobile={isMobile} >
                    <input placeholder='Add other artist' name="saturday-others-0" onChange={handleChange} value={data.saturday.others[0]} />
                    <input placeholder='Add other artist' name="saturday-others-1" onChange={handleChange} value={data.saturday.others[1]} />
                    <input placeholder='Add other artist' name="saturday-others-2" onChange={handleChange} value={data.saturday.others[2]} />
                    <input placeholder='Add other artist' name="saturday-others-3" onChange={handleChange} value={data.saturday.others[3]} />
                    <input placeholder='Add other artist' name="saturday-others-4" onChange={handleChange} value={data.saturday.others[4]} />
                    <input placeholder='Add other artist' name="saturday-others-5" onChange={handleChange} value={data.saturday.others[5]} />
                    <input placeholder='Add other artist' name="saturday-others-6" onChange={handleChange} value={data.saturday.others[6]} />
                    <input placeholder='Add other artist' name="saturday-others-7" onChange={handleChange} value={data.saturday.others[7]} />
                    <input placeholder='Add other artist' name="saturday-others-8" onChange={handleChange} value={data.saturday.others[8]} />
                    <input placeholder='Add other artist' name="saturday-others-9" onChange={handleChange} value={data.saturday.others[9]} />
                    <input placeholder='Add other artist' name="saturday-others-10" onChange={handleChange} value={data.saturday.others[10]} />
                    <input placeholder='Add other artist' name="saturday-others-11" onChange={handleChange} value={data.saturday.others[11]} />
                    <input placeholder='Add other artist' name="saturday-others-12" onChange={handleChange} value={data.saturday.others[12]} />
                    <input placeholder='Add other artist' name="saturday-others-13" onChange={handleChange} value={data.saturday.others[13]} />
                    <input placeholder='Add other artist' name="saturday-others-14" onChange={handleChange} value={data.saturday.others[14]} />
                  </InputsContainer>
                </DayInputs>
                
                <DayInputs reveal={sundayInputs}>
                  <InputsContainer title={"Headliners artists"} restrictCircle={true} isMobile={isMobile} >
                    <input placeholder='Add headliner artist' name="sunday-headliners-0" onChange={handleChange} value={data.sunday.headliners[0]} />
                    <input placeholder='Add headliner artist' name="sunday-headliners-1" onChange={handleChange} value={data.sunday.headliners[1]} />
                    <input placeholder='Add headliner artist' name="sunday-headliners-2" onChange={handleChange} value={data.sunday.headliners[2]} />
                  </InputsContainer>

                  <InputsContainer title={"Secondary artists"} restrictCircle={true} isMobile={isMobile} >
                    <input placeholder='Add secondary artist' name="sunday-secondary-0" onChange={handleChange} value={data.sunday.secondary[0]} />
                    <input placeholder='Add secondary artist' name="sunday-secondary-1" onChange={handleChange} value={data.sunday.secondary[1]} />
                    <input placeholder='Add secondary artist' name="sunday-secondary-2" onChange={handleChange} value={data.sunday.secondary[2]} />
                    <input placeholder='Add secondary artist' name="sunday-secondary-3" onChange={handleChange} value={data.sunday.secondary[3]} />
                    <input placeholder='Add secondary artist' name="sunday-secondary-4" onChange={handleChange} value={data.sunday.secondary[4]} />
                    <input placeholder='Add secondary artist' name="sunday-secondary-5" onChange={handleChange} value={data.sunday.secondary[5]} />
                    <input placeholder='Add secondary artist' name="sunday-secondary-6" onChange={handleChange} value={data.sunday.secondary[6]} />
                    <input placeholder='Add secondary artist' name="sunday-secondary-7" onChange={handleChange} value={data.sunday.secondary[7]} />
                    <input placeholder='Add secondary artist' name="sunday-secondary-8" onChange={handleChange} value={data.sunday.secondary[8]} />
                  </InputsContainer>

                  <InputsContainer title={"Other artists"} restrictCircle={false} isMobile={isMobile} >
                    <input placeholder='Add other artist' name="sunday-others-0" onChange={handleChange} value={data.sunday.others[0]} />
                    <input placeholder='Add other artist' name="sunday-others-1" onChange={handleChange} value={data.sunday.others[1]} />
                    <input placeholder='Add other artist' name="sunday-others-2" onChange={handleChange} value={data.sunday.others[2]} />
                    <input placeholder='Add other artist' name="sunday-others-3" onChange={handleChange} value={data.sunday.others[3]} />
                    <input placeholder='Add other artist' name="sunday-others-4" onChange={handleChange} value={data.sunday.others[4]} />
                    <input placeholder='Add other artist' name="sunday-others-5" onChange={handleChange} value={data.sunday.others[5]} />
                    <input placeholder='Add other artist' name="sunday-others-6" onChange={handleChange} value={data.sunday.others[6]} />
                    <input placeholder='Add other artist' name="sunday-others-7" onChange={handleChange} value={data.sunday.others[7]} />
                    <input placeholder='Add other artist' name="sunday-others-8" onChange={handleChange} value={data.sunday.others[8]} />
                    <input placeholder='Add other artist' name="sunday-others-9" onChange={handleChange} value={data.sunday.others[9]} />
                    <input placeholder='Add other artist' name="sunday-others-10" onChange={handleChange} value={data.sunday.others[10]} />
                    <input placeholder='Add other artist' name="sunday-others-11" onChange={handleChange} value={data.sunday.others[11]} />
                    <input placeholder='Add other artist' name="sunday-others-12" onChange={handleChange} value={data.sunday.others[12]} />
                    <input placeholder='Add other artist' name="sunday-others-13" onChange={handleChange} value={data.sunday.others[13]} />
                    <input placeholder='Add other artist' name="sunday-others-14" onChange={handleChange} value={data.sunday.others[14]} />
                  </InputsContainer>
                </DayInputs>
              </div>
              {!isMobile  ? 
                  <button type="button" onClick={handleDownloadImage} disabled={isDisabledDownloadButton}>Download</button>
                : 
                  <button type="button" onClick={handleDownloadImage} disabled={isDisabledDownloadButton}>Preview image</button>
              }
            </Inner>
            <Footer></Footer>
          </div>
        </Col>
        <Col desktop={6} mobile={12}>
          <div className="fixed">
            {themeSelected === "Lollapalooza" ? 
              <div className="cont hideMobile" ref={printRef}>
                  <img src={Cloud2} alt="cloud" className='cloud2'/>
                  <img src={Cloud3} alt="cloud" className='cloud'/>
                  <img src={Cloud3} alt="cloud" className='cloud3'/>
                  <img src={Kite} alt="kite" className='kite'/>
                  <img src={Kite} alt="kite" className='kite5'/>
                  <img src={Kite2} alt="kite2" className='kite2'/>
                  <img src={Kite3} alt="kite2" className='kite3'/>
                  <img src={Kite4} alt="kite2" className='kite4'/>
                  <img src={Cloud2} alt="cloud" className='cloud4'/>
                  <img src={Cloud2} alt="cloud" className='cloud5'/>
                  <img src={Lollapalooza} alt="lollapalooza_logo" /> 
                  {/*<h3>18, 19 y 20 de Marzo 2022 / Hip??dromo de San Isidro</h3>*/}
                  {data.friday.headliners.length != 0 || data.friday.secondary.length != 0 || data.friday.others.length != 0 ? <DayLineUp day={"FRIDAY"} color={"#51fa65"} headliners={data.friday.headliners} secondaryHeadliners={data.friday.secondary} otherArtists={data.friday.others} theme={themeSelected} randomColor={"#51fa65"} /> : null }
                  {data.saturday.headliners.length != 0 || data.saturday.secondary.length != 0 || data.saturday.others.length != 0 ? <DayLineUp day={"SATURDAY"} color={"#fcdc01"} headliners={data.saturday.headliners} secondaryHeadliners={data.saturday.secondary} otherArtists={data.saturday.others} theme={themeSelected} randomColor={"#fcdc01"} /> : null }
                  {data.sunday.headliners.length != 0 || data.sunday.secondary.length != 0 || data.sunday.others.length != 0 ? <DayLineUp day={"SUNDAY"} color={"#fe3eb4"} headliners={data.sunday.headliners} secondaryHeadliners={data.sunday.secondary} otherArtists={data.sunday.others} theme={themeSelected} randomColor={"#fe3eb4"} /> : null }
              </div>
            : 
              null
            }

            {themeSelected === "Fantasy 01" ? 
              <div className="fantasyCont hideMobile" ref={printRef}>
                  <div className="fantasy01CircleCont">
                    <img src={MainCircle} className="main_circle2 rotateCircle" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2 rotateCircle" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2 rotateCircle" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2 rotateCircle" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2" alt="main_circle" />
                    <img src={MainCircle} className="main_circle" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2 rotateCircle" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2 rotateCircle" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2 rotateCircle" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2 rotateCircle" alt="main_circle" />
                    <img src={MainCircle} className="main_circle2" alt="main_circle" />
                  </div>
                  <h1 className="fantasy01Title">My Dream Festival Lineup</h1>
                  {data.friday.headliners.length != 0 || data.friday.secondary.length != 0 || data.friday.others.length != 0 ? <DayLineUp day={"FRIDAY"} color={"#FF9A62"} headliners={data.friday.headliners} secondaryHeadliners={data.friday.secondary} otherArtists={data.friday.others} theme={themeSelected} /> : null }
                  {data.saturday.headliners.length != 0 || data.saturday.secondary.length != 0 || data.saturday.others.length != 0 ? <DayLineUp day={"SATURDAY"} color={"#6DC2FF"} headliners={data.saturday.headliners} secondaryHeadliners={data.saturday.secondary} otherArtists={data.saturday.others} theme={themeSelected} direction={true} /> : null }
                  {data.sunday.headliners.length != 0 || data.sunday.secondary.length != 0 || data.sunday.others.length != 0 ? <DayLineUp day={"SUNDAY"} color={"#FF9A62"} headliners={data.sunday.headliners} secondaryHeadliners={data.sunday.secondary} otherArtists={data.sunday.others} theme={themeSelected} /> : null }
              </div>
            : 
              null
            }

            {themeSelected === "default" && !isMobile ? 
              <div className="default">
                <div className="contentContainer">
                  <div className="circleDefault1"></div>
                  <div className="circleDefault2"></div>
                  <div className="circleDefault3"></div>
                  <h1 className="defaultPosterTitle">Poster preview</h1>
                  <span>Select a theme to make your dream lineup :)</span>
                </div>
              </div>
              : null
            }

            </div>
          
        </Col>
    </Grid>
      
    </div>
  );
}

export default App;
