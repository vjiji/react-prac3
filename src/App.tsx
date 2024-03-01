import FeaturesContainer from "components/layout/FeaturesContainer";
import Inputs from "components/features/Inputs";
import styled from "styled-components";
import ButtonSection from "components/button/ButtonSection";
import SelectSection from "components/selete/selectSection";

function App() {
  return (
    <AppLayout>
      <FeaturesContainer title="Button">
        <ButtonSection />
      </FeaturesContainer>
      <FeaturesContainer title="Input">
        <Inputs />
      </FeaturesContainer>
      <FeaturesContainer title="Select">
        <SelectSection />
      </FeaturesContainer>
    </AppLayout>
  );
}

export default App;

const AppLayout = styled.div`
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;

`;
