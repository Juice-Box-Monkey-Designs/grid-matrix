import React from "react";

export type parentAlignment = "horizontal" | "vertical";

export interface GridProps {
    /**
    * The direction the grid will display
    */
    alignment?: parentAlignment,  // TODO: Add `row` and `column`
    /**
    * The list of sections
    */
    sections: GridSectionProps[];
    xsSection?: GridSectionProps[];
    smSection?: GridSectionProps[];
    mdSection?: GridSectionProps[];
    lgSection?: GridSectionProps[];
    xlSection?: GridSectionProps[];
    xxlSection?: GridSectionProps[];
    xxxlSection?: GridSectionProps[];
}

export interface SubSection {
    /**
     * The percent to show section
     */
    cover: number;
    /**
     * The content of the current grid section
     */
    content: React.ReactNode;
    /**
     * Alignment placement inside grid
     */
    align: 'top' | 'middle' | 'bottom';
    // TODO: Add `xAlign` and `yAlign`
}

export interface GridSectionProps {
    /**
     * Unique id
     */
    id?: number | string;
    /**
     * The precent to show section
     */
    cover: number;
    /**
     * The content of the current grid section
     */
    content?: React.ReactNode;
    /**
     * The parent alignment of the Grid this GridSection renders inside of
     */
    parentAlignment?: parentAlignment;
    /**
     * Alignment placement inside grid
     */
    align: 'top' | 'middle' | 'bottom';
    /**
     * Inside grid section support (Use for Grid inside Grid cases)
     */
    subSection?: SubSection[]
    // TODO: Add `xAlign` and `yAlign`
    xsSectionDisplay?: Display;
    smSectionDisplay?: Display;
    mdSectionDisplay?: Display;
    lgSectionDisplay?: Display;
    xlSectionDisplay?: Display;
    xxlSectionDisplay?: Display;
    xxxlSectionDisplay?: Display;
};

export type Display = "show" | "hide" | "default";
