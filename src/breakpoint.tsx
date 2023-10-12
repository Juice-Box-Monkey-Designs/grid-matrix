import { createContext, useEffect, useState, useContext } from "react";
type BreakpointValue = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "default";

const BreakpointContext = createContext<BreakpointValue | undefined>(undefined);

export function BreakpointProvider({ children }) {
    const [breakpoint, setBreakpoint] = useState(() => {
        const width = window.innerWidth;
        if (width < 320) return "xs";
        if (width < 640) return "sm";
        if (width < 768) return "md";
        if (width < 1024) return "lg";
        if (width < 1280) return "xl";
        if (width < 1536) return "xxl";
        return "default";
    });

    useEffect(() => {
        const updateBreakpoint = () => {
            const width = window.innerWidth;
            if (width < 320) setBreakpoint("xs");
            else if (width < 640) setBreakpoint("sm");
            else if (width < 768) setBreakpoint("md");
            else if (width < 1024) setBreakpoint("lg");
            else if (width < 1280) setBreakpoint("xl");
            else if (width < 1536) setBreakpoint("xxl");
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
