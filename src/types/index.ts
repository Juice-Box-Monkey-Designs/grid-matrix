import React from "react";

export interface GridProps {
    alignment?: "horizontal" | "vertical",
    sections: SectionProps[];
}

export type SubSection = {
    cover: number;
    content: React.ReactNode;
    align: 'top' | 'middle' | 'bottom';
}

type SectionProps = {
    cover: number;
    content: React.ReactNode;
    align: 'top' | 'middle' | 'bottom';
    subSection?: SubSection[]
};
