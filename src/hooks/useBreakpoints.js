import { useState, useEffect } from "react";

const getDeviceConfig = (width) => {
    if (width < 576) {
        return "xs";
    } else if (width >= 576 && width < 768) {
        return "sm";
    } else if (width >= 768 && width < 992) {
        return "md";
    } else if (width >= 992 && width < 1200) {
        return "lg";
    } else if (width >= 1200 && width < 1600) {
        return "xl";
    } else if (width >= 1600) {
        return "xxl";
    }
};

const throttle = (func, timeFrame) => {
    let lastTime = 0;
    return function (...args) {
        const now = new Date();
        if (now - lastTime >= timeFrame) {
            func(...args);
            lastTime = now;
        }
    };
}
export const useBreakpoint = () => {
    const [brkPnt, setBrkPnt] = useState(() =>
        getDeviceConfig(window.innerWidth)
    );

    useEffect(() => {
        const calcInnerWidth = throttle(function () {
            setBrkPnt(getDeviceConfig(window.innerWidth));
        }, 200);
        window.addEventListener("resize", calcInnerWidth);
        return () => window.removeEventListener("resize", calcInnerWidth);
    }, []);

    return brkPnt;
};
export const isSmallScreen = (breakpoints) => breakpoints && ["xs", "sm"].includes(breakpoints);
export const isMediumScreen = (breakpoints) => breakpoints && ["xs", "sm", "md"].includes(breakpoints);
export const isBigScreen = (breakpoints) => breakpoints && ["md", "lg", "xl", "xxl"].includes(breakpoints);