import PropTypes from "prop-types";
import { StatContainer, ImgContainer } from "./StatComponent.styles";

export default function StatComponent({ name, image, content }) {
  return (
    <StatContainer>
      <ImgContainer>
        <img src={image} alt="stat icon" loading="lazy" />
      </ImgContainer>
      {console.log(name)}
      <h4>{name}</h4>
      <p>{content}</p>
    </StatContainer>
  );
}

StatComponent.propTypes = {
  name: PropTypes.object,
  content: PropTypes.object,
  image: PropTypes.string,
};
