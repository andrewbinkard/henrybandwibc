import { FC } from "react";
import styles from "./Footer.module.scss";
import { MdOutlineContactPage } from "react-icons/md";
import TiltDivider from "../TiltDivider";
import { FooterProps } from "./types";

const Footer: FC<FooterProps> = ({
  backgroundColor,
  topDividerColor,
  bandDividerColor = "var(--program-yellow)",
  bottomDividerColor,
}) => {
  return (
    <>
      <TiltDivider
        topColor={topDividerColor}
        bandColor={bandDividerColor}
        bottomColor={bottomDividerColor || backgroundColor}
      />
      <div className={styles.footerContainer} style={{ backgroundColor }}>
        <h4>Website Designed and Built By</h4>
        <h3>
          <a
            href="https://www.binkardphoto.com/"
            className={styles.mailLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrew Binkard
            <MdOutlineContactPage />
          </a>
        </h3>
        <div className={styles.copyright}>
          <p>Copyright 2025 Henry Bands</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
