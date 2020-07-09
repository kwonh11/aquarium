import React from 'react';
import styled from 'styled-components';
import DefaultBackground from './background/gate_bg.jpg';

import VideoJeju from './background/jeju_gate_video.mp4';
import VideoYeosu from './background/yeosu_gate_video.mp4';
import VideoIlsan from './background/ilsan_gate_video.mp4';
import Video63 from './background/63_gate_video.mp4';
import VideoQwanggyo from './background/qwanggyo_gate_video.mp4';


const VideoList = [VideoJeju,VideoYeosu,VideoIlsan,Video63,VideoQwanggyo];
const BackgroundContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background: ${props=> props.isLoading? 
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url(${DefaultBackground});` : 
    `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
    url(${DefaultBackground});`}
    background-size: cover;
    background-position: 50% 50%;
    transition: all 1s;
`
const Video = styled.video.attrs((props)=>({
    autoPlay: 'autoplay',
    loop: 'loop',
}))`
    position: absolute;
    left: ${props=> props.on==='on'? '0' : props.index*20}%;
    width: ${props=> props.on === 'on'? '100%' : '20%'};
    height: ${props=> props.on === 'on'? '100%' : 'auto'};
    object-fit: cover;
    opacity: ${props=> props.on === 'on'? 1 : 0};
    transition: all 1s;
    z-index:1;
`

export default function Background (props) {
    const activate = props.activate;
    return (
        <BackgroundContainer>
            {
                VideoList.map((video,index)=>{
                    return (
                        <Video on={activate===index? 'on':''} index={index} key={index}>
                            {activate===index?
                            (<source src={video} type='video/mp4'/>):(null)}
                        </Video>
                    )
                })
            }
        </BackgroundContainer>
    )
}