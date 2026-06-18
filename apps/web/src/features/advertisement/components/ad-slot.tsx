import type {AdSlotId} from "../types/ad-slot";

import {SLOT_DIMENSIONS} from "../constants/slots";

interface Props {
  slotId: AdSlotId;
}

export function AdSlot({slotId}: Props) {
  const slot = SLOT_DIMENSIONS[slotId];

  return (
    <div
      style={{
        height: slot.minHeight,
      }}
      className="
        flex
        items-center
        justify-center
        rounded-lg
        border
        border-border
        bg-muted
      "
    >
       {slotId}
    </div>
  );
}
