import ArtPreview from "./ArtPreview.tsx";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {Fields} from "../interfaces/Fields.ts";

const ParentDiv = styled.div`
        width: 80vw;
        margin: auto;
        border: 5px rebeccapurple solid;
    `;

const StyledInput = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 2px solid black;
    border-radius: 5px;
    text-align: center;
    width: 100%;
`;

export default function ArtContent() {
    const [numFields, setNumField] = useState(5);
    const [fields, setFields] = useState<Fields[]>([]);

    useEffect(() => {
        async function getFields() {
            const res = await fetch(`https://api.artic.edu/api/v1/artworks?limit=${numFields}`);
            const data = await res.json();
            setFields(data.data);
        }
        getFields()
            .then(()=>console.log('Got it!!'))
            .catch((e)=>console.log('this error happened:' + e));
    },[numFields])

    return (
        <ParentDiv>
            <StyledInput
                type={"number"}
                placeholder={"Enter number of fields"}
                value={numFields}
                onChange={(e) => setNumField(Number(e.target.value))}/>
                <ArtPreview data={fields}/>
        </ParentDiv>

    );
}