import React from 'react'

const CabinetInput = () => {
    return (
        <form>
            <h2 className="h2">Используйте промокод</h2>
                <div className="cabinet-input">
            
           <input type="number" className="auth-input" placeholder="Введите промокод или сертификат"/> 
           <input type="button" value="Привязать" className="btn btn-dark"/> 
           </div>
        </form>
    )
}

export default CabinetInput
