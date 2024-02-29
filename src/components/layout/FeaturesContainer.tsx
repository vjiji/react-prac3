import { ReactNode } from "react";
import styled from "styled-components";

interface FeaturesContainerProps {
  title: string;
  children: ReactNode;
}

const FeaturesContainer = ({ title, children }: FeaturesContainerProps) => {
  return (
    <div>
      <Paragragh>{title}</Paragragh>
      {children}
    </div>
  );
};

export default FeaturesContainer;

const Paragragh = styled.p`
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 600;
`;
