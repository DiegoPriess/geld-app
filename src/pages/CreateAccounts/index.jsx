import React, { useState } from 'react';
import InputGroup from '../../components/InputGroup';
import './style.scss';
import CustomAlert from '../../components/CustomAlert';
import ReactDOM from 'react-dom';
import LocalStorageService from '../../services/LocalStorageService';


const CreateAccounts = () => {

    const [createAccountPrice, setCreateAccountPrice] = useState("");
    const [createAccountDate, setCreateAccountDate] = useState("");
    const [createAccountDescription, setCreateAccountDescription] = useState("");
    const [createAccountType, setCreateAccountType] = useState(false);
    const PATH = "/criarcontas";

    const onCreateAccount = () => {
        
        if(createAccountPrice === "" || createAccountDate === "" || createAccountDescription === "")
        {
            ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Ops! Todos os campos precisam ser preenchidos" type="negative" />, document.getElementById('root'));
        }
        else
        {
            const data = {
                "descricao": createAccountDescription,
                "mes": parseInt(createAccountDate.split("-")[1]),
                "ano": parseInt(createAccountDate.split("-")[0]),
                "valor": createAccountPrice,
                "tipo": createAccountType ? "RECEITA" : "DESPESA",
                "status": "PENDENTE",
                "usuario": LocalStorageService.getItem("AUTHENTICATED_USER")
            };

            fetch("http://localhost:8080/api/lancamentos/salvar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((data) => {
                if(data.ok){
                    ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Conta criada com sucesso." type="positive" />, document.getElementById('root'));
                }else{
                    ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Erro ao criar conta." type="negative" /> , document.getElementById('root'));
                }
            })
            .catch((error) => {
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText={error} type="negative" />, document.getElementById('root'));
            });
        }
    }

    return (
        <div className="create-accounts">
            <i className="material-icons accounts-icon">add</i>
            <form>
                <div className="data">
                    <InputGroup id="account-description" inputType="text" labelText="Descrição" inputValue={createAccountDescription} onChangeFunction={event => { setCreateAccountDescription(event.target.value) }}/>
                    <InputGroup id="account-price" inputType="number" labelText="Preço:" inputValue={createAccountPrice} onChangeFunction={event => { setCreateAccountPrice(event.target.value) }}/>
                    <InputGroup id="account-date" inputType="date" labelText="Data:" inputValue={createAccountDate} onChangeFunction={event => { setCreateAccountDate(event.target.value) }}/>
                    <div className="account-type-select">
                        <div className="input-container">
                            <i className="material-icons negative">money_off</i>
                            <input className="account-type-input" name="account-type" type="radio" value={createAccountType} onClick={() => { setCreateAccountType(false) }} defaultChecked/>
                        </div>

                        <div className="input-container">
                            <i className="material-icons positive">attach_money</i>
                            <input className="account-type-input" name="account-type" type="radio" value={createAccountType} onClick={() => { setCreateAccountType(true) }}/>
                        </div>
                    </div>
                </div>
                <div className="submit-container">
                    <button onClick={onCreateAccount}>
                        <i className="material-icons">add</i>
                        <p>Enviar conta</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateAccounts;