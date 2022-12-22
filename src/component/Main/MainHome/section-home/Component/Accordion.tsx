import React, { useState } from 'react';
import vector from '../../../../../img/main/Vector.svg';

interface PropsType {
    title?: string,
    content?: string,
    ind?: number
}

const Accordion = ({ title, content }: PropsType, { ind }: PropsType) => {
    const [selected, setSelected] = useState(null)
    const toggle = (i: any) => {
        // if (selected === i) {

        // }
        console.log(i)
    }

    console.log(ind)
    return (
        <div className="accordion">
            <button className="title-accordion" onClick={() => toggle(ind)}>
                {title}
                <img src={vector} alt="" />
            </button>
            <div className="content-accordion">{content}</div>
        </div>
    )
}

export default Accordion;