import styled from "styled-components";
import PasswordLengthSection from "./components/PasswordLengthSection";
import InclureCharacters from "./components/InclureCharacters";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(10);

  function handleCopyPassword() {
    const inputElement = document.getElementById(
      "passwordInput"
    ) as HTMLInputElement;
    inputElement.select();
    inputElement.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputElement.value);
  }

  return (
    <MainContainer>
      <HeaderContainer>
        <h3>Password Generator</h3>
      </HeaderContainer>
      <PasswordContainer>
        <input
          type="text"
          id="passwordInput"
          value={password}
          readOnly
          placeholder="password"
        />
        <button onClick={handleCopyPassword}>
          {" "}
          <img src="/images/icon-copy.svg" alt="Copy Icon" />
        </button>
      </PasswordContainer>
      <PasswordGeneratorSection>
        <PasswordLengthSection
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <InclureCharacters
          passwordLength={passwordLength}
          setPassword={setPassword}
        />
      </PasswordGeneratorSection>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 34.3rem;
  max-width: 100%;
  margin: 0 auto;
  @media (min-width: 540px) {
    width: 54rem;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;

  & > h3 {
    color: #817d92;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.112rem;
  }
`;

const PasswordContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 6.4rem;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #24232c;
  margin-bottom: 2rem;

  & > input {
    width: 90%;
    color: #e6e5ea;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.168rem;
    border: none;
    outline: none;
    background-color: transparent;
  }

  & > button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
  & > img {
    width: 1.75rem;
    height: 2rem;
  }
`;

const PasswordGeneratorSection = styled.div`
  width: 100%;
  background-color: #24232c;
  padding: 1.5rem;
  color: #e6e5ea;
  font-weight: 700;
  line-height: 2.112rem;
`;

export default App;
