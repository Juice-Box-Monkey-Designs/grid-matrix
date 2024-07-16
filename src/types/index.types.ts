import React from "react";

export type parentAlignment = "horizontal" | "vertical";

export interface ContainmentSize {
    /**
     * The width of the stacked grid container, ex. "30px", "40%"
     */
    width: string;
    /**
     * The height of the stacked grid container, ex. "30px", "40%"
     */
    height: string;
};

export interface GridProps {
     /**
     * Unique id
     */
    id?: number | string;
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

    /**
     * Allow to define z-index level to component
     * This can be used inside `StackedGrid` to specify on what level each one should render at
     */
    level?: number;

    /**
     * Specifying the container width and height instead of using an outside div to control it
     */
    containment?: ContainmentSize;
}

export interface GridWithLevelRequiredProps extends GridProps {
    /**
     * Allow to define z-index level to component
     * This can be used inside `StackedGrid` to specify on what level each one should render at
     */
    level: number;
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

export interface GridSectionProps extends GridSectionBaseProps {
    /**
     * Inside grid section support (Use for Grid inside Grid cases)
     * NOTE: When using `innerGrid`, `content` will be IGNORED due to conflicting size and grid handling
     */
    innerGrid?: GridProps;
}

export interface GridSectionBaseProps {
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
    align?:
    'center-top' | 'middle-top' | 'left-top' | 'right-top' |
    'center-middle' |  'middle-middle' |  'left-middle' |  'right-middle' |
    'center-center' | 'middle-center' | 'left-center' | 'right-center' | 
    'center-bottom' | 'middle-bottom' | 'left-bottom' | 'right-bottom' | 'top' | 'middle' | 'center' | 'bottom';

    /**
     * Y Axis Alignment placement inside grid
     * (warning this will override `align`)
     */
    yAlign?: yAlignValue;

    /**
     * X Axis Alignment placement inside grid
     * (warning this will override `align`)
     */
    xAlign?: xAlignValue;
    /**
     * @deprecated please use `innerGrid`
     * Inside grid section support (Use for Grid inside Grid cases)
     */
    subSection?: SubSection[];
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

export interface StackedGridProps {
    /**
    * The list of grids to stack
    * ATT: please specify `level` in each grid to render properly
    */
    grids: GridWithLevelRequiredProps[];

    /**
     * Specifying the container width and height instead of using an outside div to control it
     * WARNING: if your specify containment inside your Grid level,
     * please make sure they conform to this containment field on this level
     * or you may experience alignment issues on your application
     */
    containment?: ContainmentSize;
};

export type Display = "show" | "hide" | "default";

export type BreakpointValue = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "default";

export type yAlignValue = 'top' | 'middle' | 'center' | 'bottom' | 'align';

export type xAlignValue = 'left' | 'middle' | 'center' | 'right' | 'align';
