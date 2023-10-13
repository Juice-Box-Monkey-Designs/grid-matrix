import { createContext, useEffect, useState, useContext } from "react";
import { BreakpointValue } from "./types";

const BreakpointContext = createContext<BreakpointValue | undefined>(undefined);

enum Breakpoints {
    XS = 320,
    SM = 640,
    MD = 768,
    LG = 1024,
    XL = 1280,
    XXL = 1536,
    XXXL = 1537,
}

export function BreakpointProvider({ children }) {
    const [breakpoint, setBreakpoint] = useState(() => {
        const width = window.innerWidth;
        if (width < Breakpoints.XS) return "xs";
        if (width < Breakpoints.SM) return "sm";
        if (width < Breakpoints.MD) return "md";
        if (width < Breakpoints.LG) return "lg";
        if (width < Breakpoints.XL) return "xl";
        if (width < Breakpoints.XXL) return "xxl";
        if (width >= Breakpoints.XXXL) return "xxxl";
        return "default";
    });

    useEffect(() => {
        const updateBreakpoint = () => {
            const width = window.innerWidth;
            if (width < Breakpoints.XS) setBreakpoint("xs");
            else if (width < Breakpoints.SM) setBreakpoint("sm");
            else if (width < Breakpoints.MD) setBreakpoint("md");
            else if (width < Breakpoints.LG) setBreakpoint("lg");
            else if (width < Breakpoints.XL) setBreakpoint("xl");
            else if (width < Breakpoints.XXL) setBreakpoint("xxl");
            else if (width >= Breakpoints.XXXL) setBreakpoint("xxxl");
            else setBreakpoint("default");
        };

        window.addEventListener("resize", updateBreakpoint);
        return () => {
            window.removeEventListener("resize", updateBreakpoint);
        };
    }, []);

    return (
        <BreakpointContext.Provider value={breakpoint} >
            {children}
        </BreakpointContext.Provider>
    );
}

export const useBreakpoint = () => {
    return useContext(BreakpointContext);
};
