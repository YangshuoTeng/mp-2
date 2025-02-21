import ArtPreview from "./ArtPreview.tsx";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {Fields} from "../interfaces/Fields.ts";


export default function ArtContent() {

    const ParentDiv = styled.div`
        width: 80vw;
        margin: auto;
        border: 5px rebeccapurple solid;
    `;

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

const BoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10%;
;
    
`
    return (
        <BoxDiv>
            <input
                type="number"
                placeholder="Enter number of fields"
                value={numFields}
                onChange={(e) => setNumField(Number(e.target.value))}/>
            <ParentDiv>
                <ArtPreview data={fields}/>
            </ParentDiv>
        </BoxDiv>
    );
}