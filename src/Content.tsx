import React from 'react';
import './styles/Content.css';

interface TextBoxProps {
  title: string;
  paragraph: string;
}

const TextBox: React.FC<TextBoxProps> = ({ title, paragraph }) => {
  return (
    <div className="text-box">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

const Content: React.FC = () => {
  return (
    <div className="content-container">
      <TextBox title="ALFA.PL" paragraph="Alfiarze to wiodaca firma w Polsce zajmujaca sie kradzieza i rozporawdzaniem narkotykow w srod mlodziezy" />
      <TextBox title="Another Title" paragraph="Second paragraph text goes here" />
      <TextBox title="Third Title" paragraph="Third paragraph text goes here" />
      <TextBox title="Fourth Title" paragraph="Fourth paragraph text goes here" />
      <TextBox title="Fifth Title" paragraph="Fifth paragraph text goes here" />
    </div>
  );
};

export default Content;
