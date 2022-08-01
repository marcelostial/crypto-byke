import React from "react";
import PropTypes from "prop-types";
import styles from "./BlogCard.module.scss";
import Button from "../Button/Button";

/**
 * ### Descrição
 * Componente para exibição de um card
 * linkando para uma página de blog.
 *
 * ### Parâmetros
 * @param {string} image - Imagem do card
 * @param {string} title - Título do post
 * @param {string} url - Link do post
 * @param {string} btnTxt - Label do botão
 */
const BlogCard = ({ image = {}, title, url, btnTxt }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.card}>
      <img src={image.src} alt={title} />
      <div className={styles.cardText}>
        <h4> {title} </h4>

        <Button
          alignButton="flex-start"
          type="quaternary"
          theme="light"
          icon="arrow-right"
          alignIcon="right"
          label={btnTxt}
        />
      </div>
    </a>
  );
};

// tipos
BlogCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  url: PropTypes.string,
  btnTxt: PropTypes.string,
};

// default props
BlogCard.defaultProps = {
  image: {
    src: "https://via.placeholder.com/150",
  },
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  url: "about:blank",
  btnTxt: "Read more",
};

export default BlogCard;
