import React, {useState, createRef} from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/text";
import { exportComponentAsJPEG } from 'react-component-export-image';

const EditPage = () => {
    const [params] = useSearchParams();
    console.log(params.get("url"));
    const [count, setCount] = useState(0);

    const memeRef = createRef();

    const addText = () => {
        setCount(count + 1);
    }

    return (
        <div>
        <div ref={memeRef} className="meme mt-5 mb-5">
            <img src={params.get("url")} width="250px"/>
            {
                Array(count).fill(0).map(e => <Text />)
            }
        </div>
            <button onClick={addText}>Add text</button>
            <button variant="Success" onClick={(e) => exportComponentAsJPEG(memeRef)}>Save</button>
        </div>
    );
};

export default EditPage;