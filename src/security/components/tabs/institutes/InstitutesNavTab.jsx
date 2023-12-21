import {Box, Tabs, Tab} from "@mui/material";
import React, {useEffect, useState} from "react";
//import { Link, useHistory } from "react-router-dom";
const institutesTabs = ["Institutes", "Negocios"];
const InstitutesNavTab = ({setCurrentTab, setPresentationSel}) => {
    const [currenTabIndex, setCurrentTabIndex] = useState(0);

    const handleChange = (e) => {
        console.log("entro al handleChange", e.target.innerText.toUpperCase());
        setCurrentTab(e.target.innerText.toUpperCase());
        setPresentationSel(false);
        switch (e.target.innerText.toUpperCase()) {
            case "INSTITUTES":
                setCurrentTabIndex(0);
                break;
            case "NEGOCIOS":
                setCurrentTabIndex(1);
                break;
        }
        if (e.target.innerText.toUpperCase() === "INSTITUTES") {
            setPresentationSel(true)

        }

        if (e.target.innerText.toUpperCase() === "PRESENTACIÓN") {
            setPresentationSel(true)
        }
    };


    return (
        <Box sx={{border: (theme) => `2px solid ${theme.palette.divider}`, mx: 1, padding: 0.5}}>
            <Tabs
                value={currenTabIndex}
                variant={"fullWidth"}
                onChange={handleChange}
                aria-label="icon tabs example"
                textColor="primary"
            >
                {institutesTabs.map((tab) => {
                    return <Tab key={tab} label={tab}/>;
                })}
            </Tabs>
        </Box>
    );
}
export default InstitutesNavTab;