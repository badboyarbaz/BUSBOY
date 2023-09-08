import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import PaymentModeForm from "../components/PaymentModeForm";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PaymentModeForm">
                <PaymentModeForm/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews