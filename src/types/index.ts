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
    /**
         * Visibility of the section on extra small screens (<320px)
         */
    xsSectionDisplay?: Display;

    /**
     * Visibility of the section on small screens (<640px)
     */
    smSectionDisplay?: Display;

    /**
     * Visibility of the section on medium screens (<768px)
     */
    mdSectionDisplay?: Display;

    /**
     * Visibility of the section on large screens (<1024px)
     */
    lgSectionDisplay?: Display;

    /**
     * Visibility of the section on extra large screens (<1280px)
     */
    xlSectionDisplay?: Display;

    /**
     * Visibility of the section on double extra large screens (<1536px)
     */
    xxlSectionDisplay?: Display;

    /**
     * Visibility of the section on screens greater than 1536px
     */
    xxxlSectionDisplay?: Display;
};

export type Display = "show" | "hide" | "default";

export type BreakpointValue = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "default";
