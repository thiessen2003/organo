import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => { 

const times = [
    'Programacao',
    'Front-End',
    'Data Science', 
    'DevOps', 
    'Mobile'
]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem"/>
                <ListaSuspensa label="Times" itens={times}/>
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario