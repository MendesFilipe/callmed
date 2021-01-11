import React from "react";
import styles from "./ShareLink.module.css";

const ShareLink = ({ link }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(link);
    setIsCopied(true);
  };

  return (
    <div className={styles.container}>
      <div>
        Link de convite:
        <span className={styles.link}> {link}</span>
      </div>
      <div>
        <button onClick={onCopy}>{!isCopied ? "Copiar" : "Copiado!"}</button>
      </div>
    </div>
  );
};

export default ShareLink;
