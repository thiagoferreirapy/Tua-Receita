import React from "react";
import {
  Title,
  DescroptionCategory,
} from "./style";
import LoadingEye from "../../../../components/Loadin/LoadingEye";

export default function DescriptionCategory({ title, description }) {
  return (
    <>
      <Title>{title}</Title>
      <DescroptionCategory>{description}</DescroptionCategory>
      <LoadingEye/>
    </>
  );
}
