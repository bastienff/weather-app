import React from "react";
import { Row } from "@/components/search/row";
import { FixedSizeList } from "react-window";
import { ITEM_HEIGHT, LISTBOX_HEIGHT } from "@/lib/contants";

export const Listbox = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLElement>
  >(function ListboxComponent(props, ref) {
    const { children, ...otherProps } = props;
    const items = React.Children.toArray(children);
    const itemCount = items.length;

    return (
      <div ref={ref} {...otherProps}>
        <FixedSizeList
          height={Math.min(8, itemCount) * LISTBOX_HEIGHT + 2}
          itemCount={itemCount}
          itemSize={ITEM_HEIGHT}
          width="100%"
          itemData={items || []}
          style={{ overflowY: "auto" }}
        >
          {Row}
        </FixedSizeList>
      </div>
    );
  });
