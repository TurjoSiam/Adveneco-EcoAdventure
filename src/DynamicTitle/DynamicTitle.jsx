import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const DynamicTitle = ({ title }) => {

    const location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [location, title])

    return null;
};

export default DynamicTitle;