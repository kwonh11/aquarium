import React from 'react';
import Background from './Background';
import styled, {createGlobalStyle} from 'styled-components';
import Panel from './Panel';
import CommonLogo from './icons/common_logo.png';
import LoadingImage from './icons/ico_loding.gif';
import panelList from './PanelList';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  * {
    margin: 0;
    padding: 0;
  }
`
const PanelContainer = styled.div`
  font-family: NotoSans-Regular;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index:3;
`
const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: calc(50% - 150px);
  top: 15vh;
  z-index: 3;
`
const Logo = styled.div`
  background-image: url(${CommonLogo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  width: 300px;
  height: 80px;
  z-index:5;
`
const LogoTitle = styled.p`
  color: #fff;
  font-size: 17px;
  margin-top: 9px;
  font-weight: bold;
`
const Loading = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.25);
  z-index:10;
`
function App() {
  const [activate, setActivate] = React.useState(-1);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(()=>{
    console.log(`isLoading : ${isLoading}`)
    setTimeout(()=>setIsLoading(false),600);
  },[]);

  const clickHandler = (index) => {
      setActivate(index);
  }
  const aquas = panelList(isLoading, clickHandler);

  return (
    <div>
      <GlobalStyle/>
      <Background activate={activate} isLoading={isLoading}/>
      {
        isLoading? 
        <Loading>
          <img src={LoadingImage} width='130px' height='130px'/>
        </Loading> 
        :
      <PanelContainer>
          {
            activate >= 0 ? null : 
            (
            <LogoContainer>
              <Logo/>
              <LogoTitle>드넓은 대양을 품은 아름다운 바다의 별</LogoTitle>
            </LogoContainer>
            )
          }
          {
            aquas.map((aqua,index)=>{
              return (
                <Panel
                key={index} 
                index={index} 
                icon={aqua.icon} 
                title={aqua.title}
                subtitle={aqua.subtitle}
                description={aqua.description}
                comment={aqua.comment}
                loaded={aqua.loaded} 
                clickHandler={clickHandler}
                activate={activate}/>
              )
            })
          }
      </PanelContainer>
      }
    </div>
  );
}

export default App;
