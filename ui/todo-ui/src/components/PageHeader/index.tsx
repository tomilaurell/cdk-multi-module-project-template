import React from "react";
import styled from "styled-components";

export const TitleContainer = styled.div`
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
  height: 40px;
  border-bottom: solid 2px #2b2b2b;
`;

type PageHeaderProps = {
  title: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title }: PageHeaderProps) => {
  return <TitleContainer>{title}</TitleContainer>;
};

export default PageHeader;
