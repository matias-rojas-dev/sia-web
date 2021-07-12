import { TextField } from '@material-ui/core';
import React from 'react'

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Formulario de contacto</h2>
            <div className="contact-form-container">
                <TextField
                    id="standard-helperText"
                    label="Nombre completo"
                />
                <TextField
                    id="standard-helperText"
                    label="Email"
                />
                <TextField
                    id="standard-helperText"
                    label="Dirección"
                />
                <TextField
                    id="standard-helperText"
                    label="Comuna"
                />
            </div>
        </div>
    )
}

export default Contact;