import styled from "styled-components";

interface PasswordLengthProps {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
}

export default function PasswordLengthSection({
  passwordLength,
  setPasswordLength,
}: PasswordLengthProps) {
  return (
    <div>
      <MainSection>
        <div className="divForSpan">
          <span className="Characterlength">Character Length</span>
          <span className="CharacterNumber">{passwordLength}</span>
        </div>
        <ProgressContainer passwordlength={passwordLength}>
          <input
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="20"
            value={passwordLength}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              const value = parseInt(ev.target.value);
              setPasswordLength(value);
            }}
          />
        </ProgressContainer>
      </MainSection>
    </div>
  );
}

const MainSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .divForSpan {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  .Characterlength {
    font-size: 1.6rem;
  }
  .CharacterNumber {
    color: #a4ffaf;
    font-size: 2.4rem;
    line-height: 3.168rem;
  }
`;

interface ProgressContainerProps {
  passwordlength: number;
}

const ProgressContainer = styled.div<ProgressContainerProps>`
  width: 100%;
  height: 0.8rem;
  transition: background-color 0.3s ease;
  position: relative;
  margin-bottom: 4rem;

  & > #vol {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: 100%;
    border-radius: none;
    background: linear-gradient(
      to right,
      rgba(164, 255, 175) 0%,
      rgba(164, 255, 175) ${(props) => (props.passwordlength / 20) * 100}%,
      rgba(24, 23, 31, 1) ${(props) => (props.passwordlength / 20) * 100}%,
      rgba(24, 23, 31, 1) 100%
    );
  }

  & > #vol::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: pointer;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    background: #e6e5ea;
    transform: translate(50%, -35%);
    &:hover {
      background: #18171f;
      border: #a4ffaf solid 0.2rem;
    }
  }

  & > #vol::-webkit-slider-runnable-track {
    border-radius: none;
    height: 0.8rem;
    background: transparent;
  }
`;
