import styled from "styled-components";
import check from "/images/icon-check.svg";
import errow from "/images/icon-arrow-right.svg";
import { useState, useEffect } from "react";

interface IncludeCharactersProps {
  passwordLength: number;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export default function IncludeCharacters({
  passwordLength,
  setPassword,
}: IncludeCharactersProps) {
  const [useUpperCase, setUseUpperCase] = useState(false);
  const [useLowerCase, setUseLowerCase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);
  const [countTrueCharacters, setCountTrueCharacters] = useState<number>(0);

  useEffect(() => {
    const countCharactersColor: boolean[] = [
      useUpperCase,
      useLowerCase,
      useNumbers,
      useSymbols,
    ];

    setCountTrueCharacters(countCharactersColor.filter((el) => el).length);
  }, [useUpperCase, useLowerCase, useNumbers, useSymbols]);

  function generatePassword() {
    let charset: string = "";
    let newPassword: string = "";
    if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) charset += "0123456789";
    if (useSymbols) charset += "!@#$%^&*()";

    for (let index = 0; index < passwordLength; index++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  }

  return (
    <IncludeCharacterSection>
      <CharactersDiv>
        <div className="inputLabel">
          <input
            type="checkbox"
            id="Uppercase"
            name="Uppercase"
            value="Uppercase"
            onChange={() => setUseUpperCase((prevState) => !prevState)}
          />
          <label htmlFor="Uppercase"></label>
        </div>
        {useUpperCase ? <img src={check} alt="check"></img> : null}
        <span>Include Uppercase Letters</span>
      </CharactersDiv>
      <CharactersDiv>
        <div className="inputLabel">
          <input
            type="checkbox"
            id="Lowercase"
            name="Lowercase"
            value="Lowercase"
            onChange={() => setUseLowerCase((prevState) => !prevState)}
          />
          <label htmlFor="Lowercase"></label>
        </div>
        {useLowerCase ? <img src={check} alt="check"></img> : null}
        <span>Include Lowercase Letters</span>
      </CharactersDiv>
      <CharactersDiv>
        <div className="inputLabel">
          <input
            type="checkbox"
            id="Numbers"
            name="Numbers"
            value="Numbers"
            onChange={() => setUseNumbers((prevState) => !prevState)}
          />
          <label htmlFor="Numbers"></label>
        </div>
        {useNumbers ? <img src={check} alt="check"></img> : null}
        <span>Include Numbers</span>
      </CharactersDiv>
      <CharactersDiv>
        <div className="inputLabel">
          <input
            type="checkbox"
            id="Symbols"
            name="Symbols"
            value="Symbols"
            onChange={() => setUseSymbols((prevState) => !prevState)}
          />
          <label htmlFor="Symbols"></label>
        </div>
        {useSymbols ? <img src={check} alt="check"></img> : null}
        <span>Include Symbols</span>
      </CharactersDiv>
      <Strength>
        <span>STRENGTH</span>
        <div className="ColoredStrengthWrapper">
          <span>
            {countTrueCharacters === 1 && "TOO WEAK!"}
            {countTrueCharacters === 2 && "WEAK"}
            {countTrueCharacters === 3 && "MEDIUM"}
            {countTrueCharacters === 4 && "STRONG"}
          </span>
          <div className="ColoredStrengthBox">
            <ColoredStrengthIndicator
              setcharacter={
                countTrueCharacters === 1 ||
                countTrueCharacters === 2 ||
                countTrueCharacters === 3 ||
                countTrueCharacters === 4
                  ? countTrueCharacters
                  : null
              }
            />
            <ColoredStrengthIndicator
              setcharacter={
                countTrueCharacters === 2 ||
                countTrueCharacters === 3 ||
                countTrueCharacters === 4
                  ? countTrueCharacters
                  : null
              }
            />
            <ColoredStrengthIndicator
              setcharacter={
                countTrueCharacters === 3 || countTrueCharacters === 4
                  ? countTrueCharacters
                  : null
              }
            />
            <ColoredStrengthIndicator
              setcharacter={
                countTrueCharacters === 4 ? countTrueCharacters : null
              }
            />
          </div>
        </div>
      </Strength>
      <Button onClick={generatePassword}>
        <span>GENERATE</span>
        <img className="errow" src={errow} alt="errow"></img>
      </Button>
    </IncludeCharacterSection>
  );
  {
    console.log(useUpperCase);
  }
}

const IncludeCharacterSection = styled.div`
  width: 100%;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;
const CharactersDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;

  & > img {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 1;
    width: 1.2rem;
    height: 1rem;
    color: #24232c;
  }

  .inputLabel {
    /* position: relative; */
  }

  input[type="checkbox"] {
    width: 2rem;
    height: 2rem;
    z-index: 2;
  }

  label {
    display: block;
    width: 2rem;
    height: 2rem;
    transition: all 0.5s ease;
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
    background: #24232c;
    border: solid 0.2rem #e6e5ea;
  }

  input[type="checkbox"]:checked + label {
    background: #a4ffaf;
    border: none;
  }
`;

const Strength = styled.div`
  width: 100%;
  background-color: #18171f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  & > span {
    color: #817d92;
  }
  .ColoredStrengthWrapper {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  }

  .ColoredStrengthBox {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
`;

interface ColoredStrengthIndicator {
  setcharacter: number | null;
}

const ColoredStrengthIndicator = styled.div<ColoredStrengthIndicator>`
  width: 1rem;
  height: 2.8rem;
  opacity: 0rem;
  background-color: ${(props) => {
    if (props.setcharacter === 1) return "#F64A4A";
    if (props.setcharacter === 2) return "#FB7C58";
    if (props.setcharacter === 3) return "#F8CD65";
    if (props.setcharacter === 4) return "#A4FFAF";
  }};
  border: ${(props) =>
    props.setcharacter === 1 ||
    props.setcharacter === 2 ||
    props.setcharacter === 3 ||
    props.setcharacter === 4
      ? "none"
      : "solid .2rem #E6E5EA"};
`;

const Button = styled.button`
  background-color: #a4ffaf;
  width: 100%;
  height: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #24232c;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.112rem;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #24232c;
    border: #a4ffaf solid 0.2rem;
    color: #a4ffaf;
    svg path {
      fill: #a4ffaf;
    }
  }

  & > span {
    margin-right: 2rem;
  }
`;
