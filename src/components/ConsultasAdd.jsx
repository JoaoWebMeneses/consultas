import React, { useState } from "react";

const ConsultasAdd = ({ addConsulta }) => {
    const [value, setValue] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !time) return;
        addConsulta(value,time)
        setTime("")
        setValue("")
    }
    return (
        <div className="consulta-form">
            <h2>Colocar consulta:</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Nome do paciente"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
                <input 
                type="datetime-local"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                />
                <button type="submit">Criar consulta</button>
            </form>
        </div>
    )
}

export default ConsultasAdd;