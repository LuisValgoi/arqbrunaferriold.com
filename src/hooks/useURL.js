import { useLocation } from "react-router-dom";

export const useURL = () => {
    const { pathname } = useLocation();
    return pathname;
};

export const useOrcamentoURL = () => {
    const url = useURL();
    return url === "/orcamento";
}

export const useHomeURL = () => {
    const url = useURL();
    return url === "/";
}