import { FC } from "react";
import { PageHeaderProps } from "./types";

export const PageHeader: FC<PageHeaderProps> = ({ headerText }) => {
  return (
    <div>
      <h1>{headerText}</h1>
    </div>
  );
};

export default PageHeader;
