import { useRef, useContext } from "react";

import { importFiles } from "src/utils/extractFiles";
import { IconsContext } from "src/context/IconsContext";

interface ImportWrapperProps {
  children: React.ReactNode;
  onComplete?: () => void;
  className?: string;
}

const ImportWrapper = ({
  onComplete,
  className = "",
  children,
}: ImportWrapperProps) => {
  const { icons, setIcons } = useContext(IconsContext);

  const fileInput = useRef<null | HTMLInputElement>();

  const handleUpload = (event) =>
    importFiles(event, icons, (newIcons) => {
      setIcons(newIcons);
      onComplete?.();
    });

  const handleClick = (e) => {
    e.preventDefault();
    fileInput?.current?.click();
  };

  // If a deleted icon is re-imported, the import will not work stable.
  // "onChange" event doesn't work at all. This key was required to fix this issue.
  const inputKey = JSON.stringify(icons);

  return (
    <label className={className}>
      <input
        key={inputKey}
        className="hidden"
        ref={fileInput}
        type="file"
        multiple={true}
        accept="application/json,image/svg+xml"
        onChange={handleUpload}
      />
      <span onClick={handleClick}>{children}</span>
    </label>
  );
};

export default ImportWrapper;
