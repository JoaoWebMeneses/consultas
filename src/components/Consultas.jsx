import React from "react";

const Consultas = ({consultas,removeConsulta}) => {
    return(
        <div 
          className='consulta'
          style={{ textDecoration: consultas.isCompleted ? "line-through" : ""}}
        >
            <div className='content'>
              <p>{consultas.nome}</p>
              <p className='horario'>{consultas.horário}</p>
          </div>
          <div>
            <button className='cancelada' onClick={() => removeConsulta(consultas.id)}>Cancelar</button>
          </div>
          </div>
    );
}

export default Consultas;