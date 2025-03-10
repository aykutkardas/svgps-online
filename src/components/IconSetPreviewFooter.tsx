import { useContext, useState } from "react";

import Icon from "src/components/Icon";
import Button from "src/components/Button";
import Tooltip from "src/components/Tooltip";
import Dialog from "src/components/Dialog";
import {
  downloadMultipleSVG,
  sendToApp,
  downloadAsReactComponents,
} from "src/utils/iconActions";
import { IconSetItem } from "src/types";
import SupportActions from "./SupportActions";
import { IconSetData } from "src/iconSets";
import IconSetDownload from "./IconSetDownload";
import IconSetCopy from "./IconSetCopy";
import useAuthStore from "src/stores/auth";
import useGuestCollectionStore from "src/stores/guest-collection";

interface IconSetPreviewFooterProps {
  icons: IconSetItem[];
  setIcons: (icons: IconSetItem[]) => void;
  selectCollection?: (icons: IconSetItem[]) => void;
  iconSetData?: Partial<IconSetData>;
  isCollection?: boolean;
}

interface Dialog {
  title: string;
  description: string;
  onConfirm: () => void;
}

const IconSetPreviewFooter = ({
  icons,
  setIcons,
  selectCollection,
  isCollection,
  iconSetData,
}: IconSetPreviewFooterProps) => {
  const [dialog, setDialog] = useState<Dialog | null>(null);
  const { isAuthenticated } = useAuthStore();
  const { guestIcons, setGuestIcons } = useGuestCollectionStore();
  const iconSetSlug = isCollection ? "app" : iconSetData?.slug;

  const selectedIcons = icons.filter((icon) => icon.__meta?._selected);
  const selectionCount = selectedIcons.length;
  const selectedAll = selectionCount === icons.length;

  const handleAddToCollection = () => {
    if (isAuthenticated && selectCollection) {
      selectCollection(icons);
    } else {
      sendToApp(icons, guestIcons, setGuestIcons);
    }
  };

  const handleAddToCollectionSelected = () => {
    if (isAuthenticated && selectCollection) {
      selectCollection(selectedIcons);
    } else {
      sendToApp(selectedIcons, guestIcons, setGuestIcons);
    }
  };

  const handleDownloadAllAsSVG = () => {
    downloadMultipleSVG(iconSetSlug, icons);
  };

  const handleDownloadSelectedAsReact = () => {
    downloadAsReactComponents(iconSetSlug, selectedIcons, 32);
  };

  const handleDownloadAllAsReact = () => {
    downloadAsReactComponents(iconSetSlug, icons, 32);
  };

  const handleDownloadSelectedAsSVG = () => {
    if (!isAuthenticated) return;
    downloadMultipleSVG(`${iconSetSlug}-selected`, selectedIcons);
  };

  const removeAll = () => {
    setIcons([]);
    setDialog(null);
  };

  const removeSelected = () => {
    const newIcons = icons.filter((icon) => !selectedIcons.includes(icon));

    setIcons(newIcons);
    setDialog(null);
  };

  const handleRemoveAll = () => {
    setDialog({
      title: "Remove All",
      description: "Are you sure you want to remove all icons?",
      onConfirm: removeAll,
    });
  };

  const handleRemoveSelected = () => {
    setDialog({
      title: "Remove Selected",
      description: "Are you sure you want to remove the selected icons?",
      onConfirm: removeSelected,
    });
  };

  return (
    <>
      <div className="min-h-20 z-10 flex flex-col items-center justify-between gap-3 divide-neutral-300 bg-neutral-100 p-4 dark:bg-neutral-800 sm:flex-row">
        <div className="flex-1 text-xs text-neutral-500">
          {`${icons.length} ${icons.length > 1 ? "icons" : "icon"}`}
        </div>
        <SupportActions />
        <div className="flex flex-1 flex-col items-center justify-end space-y-2 divide-neutral-300 dark:divide-neutral-600 sm:order-2 sm:flex-row sm:space-y-0 sm:divide-x">
          {selectionCount > 0 && !selectedAll && (
            <div className="flex items-center gap-x-2 text-purple-500 sm:pr-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-300 p-4 text-[11px] text-purple-500  dark:bg-neutral-900">
                {selectionCount > 99 ? "99+" : selectionCount}
              </span>
              {isCollection && (
                <Tooltip message="Remove Selected">
                  <Button variant="icon" onClick={handleRemoveSelected}>
                    <Icon icon="trash" size={20} />
                  </Button>
                </Tooltip>
              )}
              {!isCollection && (
                <Tooltip message="Add to Collection">
                  <Button
                    variant="icon"
                    onClick={handleAddToCollectionSelected}
                  >
                    <Icon icon="squares-plus" size={20} />
                  </Button>
                </Tooltip>
              )}

              <IconSetCopy onlySelected icons={selectedIcons} />
              <IconSetDownload
                onlySelected
                downloadAllJSX={handleDownloadSelectedAsReact}
                downloadAllSVG={handleDownloadSelectedAsSVG}
                icons={selectedIcons}
                auth={isAuthenticated}
              />
            </div>
          )}

          <div className="flex items-center gap-x-2 text-neutral-600 dark:text-neutral-300 sm:pl-3">
            <span className="inline-flex h-5 w-5 items-center">
              <Icon
                icon="package"
                size={16}
                className="text-neutral-400 dark:text-neutral-500"
              />
            </span>
            {isCollection && (
              <Tooltip message="Remove All">
                <Button variant="icon" onClick={handleRemoveAll}>
                  <Icon icon="trash" size={20} />
                </Button>
              </Tooltip>
            )}
            {!isCollection && (
              <Tooltip message="Add to Collection">
                <Button variant="icon" onClick={handleAddToCollection}>
                  <Icon icon="squares-plus" size={20} />
                </Button>
              </Tooltip>
            )}
            <IconSetCopy onlySelected={false} icons={icons} />
            <IconSetDownload
              onlySelected={false}
              downloadAllJSX={handleDownloadAllAsReact}
              downloadAllSVG={handleDownloadAllAsSVG}
              icons={icons}
              auth={isAuthenticated}
            />
          </div>
        </div>
      </div>
      <Dialog
        isOpen={!!dialog}
        setIsOpen={setDialog}
        onConfirm={dialog?.onConfirm}
        title={dialog?.title}
        description={dialog?.description}
      />
    </>
  );
};

export default IconSetPreviewFooter;
