import styled from "styled-components";
import FeaturesContainer from "components/layout/FeaturesContainer";
import ButtonSection from "components/button/ButtonSection";
import Inputs from "components/features/Inputs";
import Modals from "components/features/Modals";
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
      <FeaturesContainer title="Modal">
        <Modals />
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
