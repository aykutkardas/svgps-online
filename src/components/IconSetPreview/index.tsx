import { useContext, useState } from "react";

import IconBox from "src/components/IconBox";
import Button, { ButtonVariants } from "src/components/Button";
import ExportButton from "src/components/ExportButton";
import NewIconBox from "src/components/NewIconBox";
import Dialog from "src/components/Dialog";
import ImportButton from "src/components/ImportButton";
import Icon from "src/components/Icon";
import { IconsContext } from "src/context/iconsContext";
import { IconSetItem } from "src/types";

import styles from "./IconSetPreview.module.css";

const IconSetPreview = () => {
  const { icons, setIcons } = useContext(IconsContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredIcons, setFilteredIcons] = useState<IconSetItem[]>([]);
  const selectedIcons = icons.filter((icon) => icon.__meta?._selected);
  const selectionCount = selectedIcons.length;
  const hasIcons = icons.length;

  const handleSearch = ({ target }) => {
    const searchKey = target.value;
    let newIcons = [];

    if (searchKey) {
      newIcons = icons.filter((icon) => {
        return icon.properties?.name
          .toLowerCase()
          .includes(searchKey.toLowerCase());
      });
    }

    setSearch(searchKey);
    setFilteredIcons(newIcons);
  };

  const clearAll = () => {
    setIcons([]);
    setIsDialogOpen(false);
  };

  if (!hasIcons) {
    return (
      <div className={styles.NoIcon}>
        <span>No icons to show</span>
        <ImportButton />
      </div>
    );
  }

  return (
    <div className={styles.IconSetPreview}>
      <div className={styles.IconSetPreviewHeader}>
        <div className={styles.Search}>
          <Icon icon="search" size={12} />
          <input
            className={styles.SearchInput}
            onKeyUp={handleSearch}
            placeholder={"Search..."}
          />
        </div>
        <div className={styles.SelectionCount}>{`${icons.length} Icons`}</div>
      </div>
      <div className={styles.IconList}>
        {(search ? filteredIcons : icons).map((icon) => (
          <IconBox key={icon.__meta?.id} icon={icon} />
        ))}
        <NewIconBox />
      </div>
      <Dialog
        onConfirm={clearAll}
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
      >
        Are you sure you want to remove all icons?
      </Dialog>
      <div className={styles.Actions}>
        <Button
          variant={ButtonVariants.Ghost}
          onClick={() => setIsDialogOpen(true)}
        >
          Remove All
        </Button>
        {selectionCount > 0 && (
          <ExportButton
            variant={ButtonVariants.Secondary}
            icons={selectedIcons}
          >
            Export Selected ({selectionCount})
          </ExportButton>
        )}
        <ExportButton icons={icons}>Export All</ExportButton>
      </div>
    </div>
  );
};

export default IconSetPreview;
