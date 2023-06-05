import React from 'react';
import styled from 'styled-components';

const FilmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const FilmTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FilmImage = styled.img`
  width: 200px;
  height: auto;
`;

export default function Film({ title, poster }) {
  return (
    <FilmContainer>
      <FilmTitle>{title}</FilmTitle>
      <FilmImage src={poster} alt={title} />
    </FilmContainer>
  );
}
