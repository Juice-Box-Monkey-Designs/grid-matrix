import React from "react";

export interface GridProps {
    alignment?: "horizontal" | "vertical",
    sections: SectionProps[];
}

type SectionProps = {
    cover: number;
    content: React.ReactNode;
    align: 'top' | 'middle' | 'bottom';
};
