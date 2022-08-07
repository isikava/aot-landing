import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;

  @media (min-width: 800px) {
    width: 80%;
  }
`;

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const YoutubeEmbed = ({ embedId }) => {
  return (
    <VideoWrapper>
      <VideoIframe
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </VideoWrapper>
  );
};
