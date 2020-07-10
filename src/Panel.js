import React from 'react';
import styled,{keyframes, css} from 'styled-components';

const ContentContainer = styled.button`
    position:absolute;
    border:0;
    outline:0;
    top : 0;
    left: ${props=> props.index*20}%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: ${props=> props.on==='on'? 1: 0}
    z-index:5;
    background: inherit;
    width: 20%;
    height: 100%;
    border-right: 1px solid rgba(138, 138, 138, 0.426);
`
const ImageContainer = styled.div`
    position: absolute;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    opacity: ${props=>props.activate ==='true'? 1:0};
    transition: opacity 1s;
`
const Subtitle = styled.div`
    color: white;
    font-size: 24px;
    margin-top: 25px;
`
const Icon = styled.img`
    max-width: 90%;
    max-height: 15vh;
`
const TitleAnimation = (props) => {
    const RiseTitle = keyframes`
        from {opacity:0.3; margin-top:120px;}
        to {opacity:1; margin-top:0px;}
    `
    return (
        props.loaded? 
        css`${RiseTitle} 0.5s ${props.index*0.06+0.1}s cubic-bezier(.61,.11,.63,1.26) forwards` 
        :
        ''
    )
}
const TitleContainer = styled.div`
    position: absolute;
    top: ${props=> props.index!==props.activate && props.activate>= 0? '70vh':''};
    display: ${props=>props.index===props.activate? 'none':'flex'};
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    opacity: 0;
    animation: ${TitleAnimation};

`
const Title = styled.h3`
    color: white;
    font-weight: bold;
    padding: 10px;
    font-size: 40px;
    font-family: MyriadPro-Light;
    letter-spacing: 1px;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 5px;
`
const Comment1 = styled.h4`
    color: white;
    font-weight: 100;
    font-size: 24px;
    width: 100%;
    padding: 10px;
    text-align: center;
    margin: 0;
    padding: 5px;
`
const Button = styled.div`
    display: flex;
    font-weight: 400;
    width: 72%;
    padding: 21px;
    justify-content: center;
    align-items: center;
    margin-top:80px;
    font-size: 18px;
    color: white;
    border-radius:50px;
    font-weight: bold;
    border: 1px solid white;
    background-color: inherit;
    &:hover {
        border-color: blue;
        background-color: blue;
        cursor: pointer;
    }
    transition: all 0.3s;
`
const DescriptionContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    opacity: ${props=> props.activate==='true'? 1:0};
    top: 75vh;
    width: 90%;
    height: 20vh;
    border-top : 1px solid rgba(138, 138,138, 0.426);
    text-align: left;
    color: #f60;
    padding-top: 30px;
    transition: all 0.5s cubic-bezier(0, 0.38, 0.04, 0.99);
    transform-origin: left;
    font-size: 18px;
    font-weight: bold;
    word-break: keep-all;
    transition: opacity 1s;
`
const Comment = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    font-weight: 200;
    line-height: 1.5;
    font-size: 15px;
    color: white;
    word-break: keep-all;
`
export default function Panel (props) {
    const {title, subtitle, activate, icon, description, comment, index, loaded,clickHandler}
     = props;

    const handleButtonOnClick = () => {
        alert('클론 페이지입니다. 한화 아쿠아플래닛 사이트를 이용해주세요.')
    }
    return (
        <ContentContainer index={index} onClick={()=>clickHandler(index)}>
            <ImageContainer activate={index===activate? 'true':''}>
                <Icon src={icon}/>
                {
                    index===4? 
                    (<Title>{
                        subtitle.split('|').map((line,index)=> <span key={index}>{line}<br/></span>)
                        }</Title>):
                    (<Subtitle>{subtitle}</Subtitle>)
                }
                <Button onClick={handleButtonOnClick}> 사이트 바로가기 </Button>
            </ImageContainer>
            <DescriptionContainer activate={index===activate? 'true':''}>
                <span>
                {description.split('|').map((line,index)=>{
                    return (<span key={index}>{line}<br/></span>)
                })}
                </span>
                <Comment>
                    {comment}
                </Comment>
            </DescriptionContainer>
            <TitleContainer index={index} loaded={loaded} activate={activate}>
                <Comment1>AQUA PLANET</Comment1>
                <Title>{title}</Title>
            </TitleContainer>
        </ContentContainer>
    )
}