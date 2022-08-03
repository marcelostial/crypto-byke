import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

// assets
import arrowRight from "../../assets/arrow--right.svg";
import arrowLeft from "../../assets/arrow--left.svg";
import arrowLeftV2 from "../../assets/arrow--left--v2.svg";
import plusIcon from "../../assets/plus-icon.svg";
import triangle from "../../assets/triangle.svg";
import angle from "../../assets/angle-bracket.svg";

import { Link } from "react-router-dom";
import resolvePath from "../../routing/resolvePath";

/**
 * ### Parâmetros
 * @param {string} alignButton - Alinhar o botao na esquerda ou na direita do container
 * @param {string} label - Label do botão
 * @param {string} linkType - Tipo de link (externo, interno)
 * @param {string} url - O path para o site/pagina desejada(o).
 * @param {string} type - Tipo do botão (primary, secondary, tertiary, quaternary)
 * @param {bool} submit - Se o botão é de submit
 * @param {string} theme - Tema do botão (light, dark)
 * @param {string} icon - Icone do botão (arrow-right, arrow-left, plus)
 * @param {string} alignIcon - Posição do icone (left, right)
 * @param {function} onClick - Função de click do botão
 * @param {string} className - Classe que troca a cor do label após o hover no cmp pai
 *
 * ### Importação do componente ###
 *
 * <Button label="Botão" type="primary" submit={true} theme="light" icon="arrow-right" alignIcon="right"} />
 */
const Button = ({
  alignButton,
  label,
  linkType,
  url,
  type,
  submit,
  theme,
  icon,
  alignIcon,
  onClick,
  className,
  styleButton,
}) => {
  const content = (
    <button
      type={submit ? "submit" : "button"}
      onClick={onClick}
      className={`
      ${styles["cmp-button"]} 
      ${styles[type]} 
      ${styles[theme]} 
      ${styles[alignIcon]} 
      ${label === "" && styles.icon}
      ${className}
      ${styles[className]}
    `}
    >
      <p>{label}</p>
      {!!icon && getIcon(icon)}
    </button>
  );

  return (
    <div
      className={`${styles.buttonContainer} button--container`}
      style={
        styleButton ? { styleButton } : { justifyContent: `${alignButton}` }
      }
      custom-aem-button="true"
      data-testid="cmp-button"
    >
      {linkType === "interno" && <Link to={resolvePath(url)}>{content}</Link>}
      {linkType === "externo" && (
        <a href={url} target="_blank" rel="noreferrer">
          {content}
        </a>
      )}
      {!linkType && content}
    </div>
  );
};

/**
 * Função auxiliar para o componente button,
 * retorna um icone para ser usado no componente
 *
 * @ param {string} icon - Icone a ser retornado
 *
 */
function getIcon(icon) {
  if (icon === "arrow-right") return <img src={arrowRight} alt="arrow" />;

  if (icon === "arrow-left") return <img src={arrowLeft} alt="arrow" />;

  if (icon === "arrow-left--v2") return <img src={arrowLeftV2} alt="arrow" />;

  if (icon === "plus") return <img src={plusIcon} alt="plus" />;

  if (icon === "triangle") return <img src={triangle} alt="arrow" />;

  if (icon === "angle-left") return <img src={angle} alt="arrow" />;

  if (icon === "angle-left") return <img src={angle} alt="arrow" />;

  if (icon === "angle-right")
    return (
      <img src={angle} alt="arrow" style={{ transform: "rotate(180deg)" }} />
    );

  return null;
}

// tipos
Button.propTypes = {
  alignButton: PropTypes.oneOf(["flex-start", "flex-end", "center"]),
  label: PropTypes.string,
  linkType: PropTypes.oneOf(["externo", "interno"]),
  url: PropTypes.string,
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "quinary",
    "playVideoCard",
  ]),
  submit: PropTypes.bool,
  theme: PropTypes.oneOf(["light", "dark"]),
  icon: PropTypes.oneOf([
    "arrow-right",
    "arrow-left",
    "arrow-left--v2",
    "plus",
    "none",
    "triangle",
    "angle-left",
    "angle-right",
  ]),
  alignIcon: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  styleButton: PropTypes.string,
};

// default props
Button.defaultProps = {
  alignButton: "center",
  label: "Label",
  theme: "dark",
  icon: "arrow-right",
  alignIcon: "left",
  onClick: () => null,
  submit: false,
  className: "",
};

export default Button;
