import { Coordinates } from "features/game/expansion/components/MapPlacement";
import { isWithinAOE } from "features/game/expansion/placeable/lib/collisionDetection";
import { COLLECTIBLES_DIMENSIONS } from "features/game/types/craftables";
import {
  Collectibles,
  CropPlot,
  GameState,
  Position,
} from "features/game/types/game";
import cloneDeep from "lodash.clonedeep";
import { isReadyToHarvest } from "./harvest";
import { CROPS } from "features/game/types/crops";

export enum MOVE_CROP_ERRORS {
  NO_BUMPKIN = "You do not have a Bumpkin!",
  CROP_NOT_PLACED = "This crop is not placed!",
  AOE_LOCKED = "This crop is within the AOE",
}

export type MoveCropAction = {
  type: "crop.moved";
  coordinates: Coordinates;
  id: string;
};

type Options = {
  state: Readonly<GameState>;
  action: MoveCropAction;
  createdAt?: number;
};

export function isLocked(
  plot: CropPlot,
  collectibles: Collectibles,
  createdAt: number
): boolean {
  const crop = plot.crop;

  const plantedAt = plot.crop?.plantedAt;

  // If the crop is not a basic crop, or if it has not been planted, then it is not locked
  if (!crop || !plantedAt) return false;

  const cropName = crop.name;
  const cropDetails = CROPS()[cropName];

  const isBasicCrop =
    cropName === "Sunflower" || cropName === "Potato" || cropName === "Pumpkin";

  const isMediumLevelCrop =
    cropName === "Carrot" ||
    cropName === "Cabbage" ||
    cropName === "Beetroot" ||
    cropName === "Cauliflower" ||
    cropName === "Parsnip";

  if (isReadyToHarvest(createdAt, crop, cropDetails)) return false;

  if (isBasicCrop && collectibles["Basic Scarecrow"]?.[0]) {
    const basicScarecrowCoordinates =
      collectibles["Basic Scarecrow"]?.[0].coordinates;
    const scarecrowDimensions = COLLECTIBLES_DIMENSIONS["Basic Scarecrow"];

    const scarecrowPosition: Position = {
      x: basicScarecrowCoordinates.x,
      y: basicScarecrowCoordinates.y,
      height: scarecrowDimensions.height,
      width: scarecrowDimensions.width,
    };

    const plotPosition: Position = {
      x: plot?.x,
      y: plot?.y,
      height: plot.height,
      width: plot.width,
    };

    if (isWithinAOE("Basic Scarecrow", scarecrowPosition, plotPosition)) {
      return true;
    }
  }

  if (isMediumLevelCrop && collectibles["Scary Mike"]?.[0]) {
    const basicScarecrowCoordinates =
      collectibles["Scary Mike"]?.[0].coordinates;
    const scarecrowDimensions = COLLECTIBLES_DIMENSIONS["Scary Mike"];

    const scarecrowPosition: Position = {
      x: basicScarecrowCoordinates.x,
      y: basicScarecrowCoordinates.y,
      height: scarecrowDimensions.height,
      width: scarecrowDimensions.width,
    };

    const plotPosition: Position = {
      x: plot?.x,
      y: plot?.y,
      height: plot.height,
      width: plot.width,
    };

    if (isWithinAOE("Scary Mike", scarecrowPosition, plotPosition)) {
      return true;
    }
  }

  if (collectibles["Sir Goldensnout"]?.[0]) {
    const basicScarecrowCoordinates =
      collectibles["Sir Goldensnout"]?.[0].coordinates;
    const scarecrowDimensions = COLLECTIBLES_DIMENSIONS["Sir Goldensnout"];

    const scarecrowPosition: Position = {
      x: basicScarecrowCoordinates.x,
      y: basicScarecrowCoordinates.y,
      height: scarecrowDimensions.height,
      width: scarecrowDimensions.width,
    };

    const plotPosition: Position = {
      x: plot?.x,
      y: plot?.y,
      height: plot.height,
      width: plot.width,
    };

    if (isWithinAOE("Sir Goldensnout", scarecrowPosition, plotPosition)) {
      return true;
    }
  }

  const isAdvancedLevelCrop =
    cropName === "Eggplant" ||
    cropName === "Radish" ||
    cropName === "Wheat" ||
    cropName === "Kale";

  if (isAdvancedLevelCrop && collectibles["Laurie the Chuckle Crow"]?.[0]) {
    const ScarecrowCoordinates =
      collectibles["Laurie the Chuckle Crow"]?.[0].coordinates;
    const scarecrowDimensions =
      COLLECTIBLES_DIMENSIONS["Laurie the Chuckle Crow"];

    const scarecrowPosition: Position = {
      x: ScarecrowCoordinates.x,
      y: ScarecrowCoordinates.y,
      height: scarecrowDimensions.height,
      width: scarecrowDimensions.width,
    };

    const plotPosition: Position = {
      x: plot?.x,
      y: plot?.y,
      height: plot.height,
      width: plot.width,
    };

    if (
      isWithinAOE("Laurie the Chuckle Crow", scarecrowPosition, plotPosition)
    ) {
      return true;
    }
  }

  return false;
}

export function moveCrop({
  state,
  action,
  createdAt = Date.now(),
}: Options): GameState {
  const stateCopy = cloneDeep(state) as GameState;
  const crops = stateCopy.crops;
  const collectibles = stateCopy.collectibles;
  const plot = crops[action.id];

  if (stateCopy.bumpkin === undefined) {
    throw new Error(MOVE_CROP_ERRORS.NO_BUMPKIN);
  }

  if (!plot) {
    throw new Error(MOVE_CROP_ERRORS.CROP_NOT_PLACED);
  }

  if (isLocked(plot, collectibles, createdAt)) {
    throw new Error(MOVE_CROP_ERRORS.AOE_LOCKED);
  }

  crops[action.id].x = action.coordinates.x;
  crops[action.id].y = action.coordinates.y;

  return stateCopy;
}
