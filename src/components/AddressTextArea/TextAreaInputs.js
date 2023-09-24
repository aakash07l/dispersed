import React from "react";
import { ethers } from "ethers";
import { TextField } from "@mui/material";
import { AppContext } from "../../context/AppContext";

const placeholder = `0x06e2bE6e9128BD9E004262C23c79e24eFB5A9569 1
0x756EB28CdD6E5280210834E0324DACd0E75eA327;2
0x89AbCD9BCA27F634768c34fE0642820f786dAe0b,3
0x2315e0900831A5E9BfbAaeEE26113b748379Ce04.4`;

export default function TextAreaInput() {
    const { handleAddressRows } = React.useContext(AppContext);
    const [value, setValue] = React.useState("");

    const handleSetValue = (e) => {
        setValue(e.target.value);

        let rows = [];
        for (let element of e.target.value.split("\n")) {
            //console.log(element)
            if (element !== "") { // get all lines                
                let addressAndValue = element.trim().split(/[\s,;.]+/g)// split each line by a delimiter
                console.log(addressAndValue)
                if (addressAndValue.length === 2 && ethers.utils.isAddress(addressAndValue[0]) && addressAndValue[1] !== "" && !isNaN(Number(addressAndValue[1]))) {
                    let item = { address: addressAndValue[0], tokenId: Number(addressAndValue[1]) }
                    rows.push(item);
                }
            }
        }
        handleAddressRows(rows);
    }

    return (
        <TextField
            rows="10"
            label={"Enter one address and token id on each line. Supports spaces, commas dots and semicolon"}
            fullWidth
            multiline
            placeholder={placeholder}
            value={value} onChange={handleSetValue}
        />
    )
}