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
    /**
     * Section to display on extra small screens (<320px)
     */
    xsSection?: GridSectionProps[];
    /**
     *  Section to display on small screens (<640px)
     */
    smSection?: GridSectionProps[];
    /**
     *  Section to display on medium screens (<768px)
     */
    mdSection?: GridSectionProps[];
    /**
     *  Section to display on large screens (<1024px)
     */
    lgSection?: GridSectionProps[];
    /**
     *  Section to display on extra large screens (<1280px)
     */
    xlSection?: GridSectionProps[];
    /**
     *  Section to display on double extra large screens (<1536px)
     */
    xxlSection?: GridSectionProps[];
    /**
     *  Section to display on screens greater than 1536px
     */
    xxxlSection?: GridSectionProps[];
    /**
     * Custom class name for additional styling
     */
    className?: string;
    /**
     * Inline styles for additional styling
     */
    style?: React.CSSProperties;
    /**
     *  Support the CSS transform property on the top component.
     *  This can be a combination of rotation, scaling, translating, skewing, and more.
     */
    transform?: string;
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
