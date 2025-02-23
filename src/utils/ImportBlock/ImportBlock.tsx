import React from "react";
import { CopyBlock, github } from "react-code-blocks";
import "./ImportBlock.scss";

interface ImportBlockProps {
  imports: string[];
  header?: string;
}

export const ImportBlock: React.FC<ImportBlockProps> = ({ imports, header = "How to Import" }) => {
  const importText = imports.join("\n");

  return (
    <div className="import-block-wrapper">
      {header && <div className="import-message">{header}</div>}
      <div className="import-block">
        <CopyBlock language="javascript" text={importText} showLineNumbers={false} theme={github} />
      </div>
    </div>
  );
};
