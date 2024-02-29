import FeaturesContainer from "components/layout/FeaturesContainer";
import Inputs from "components/features/Inputs";
import styled from "styled-components";

function App() {
  return (
    <AppLayout>
      <FeaturesContainer title="Input">
        <Inputs />
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
