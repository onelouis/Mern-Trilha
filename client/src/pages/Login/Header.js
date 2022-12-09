import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { getNomeUsuario,getToken, logout } from '../Services/auth';
import api from "../Services/api";

import handleSubmit from "./Main";



export default function Cabeca() {
    const [nomeLogin , setNomeLogin] = useState('');
    const [sair , setSair] = useState('');

async function confirmSair(){
    if(window.confirm("Deseja realmente sair do sistema?")){
      const response = await api.get("/api/usuarios/destroytoken",{headers:{token: getToken()}});
      if(response.status===200){
        logout();
        window.location.href = '/'
      }else{
        alert("Não foi possível fazer o logout!");
      }
    }
  }
 
    

   /* (loadSubmit ? (

    ):setBotaoSair(false)
    )*/

    return ( 
        <div>
        <header className="cabecario">
           
                <div className="toolbar">
                    <nav>
                        <img src="/imagens/logo.png" alt="logo"/>
                            <ul>
                                <li>
                                    <Link to="/">INICIO</Link>
                                </li>
                                <li> 
                                    <Link to="/Blog">BLOG</Link>
                                </li>
                                <li>
                                    <Link to="/Sobre">SOBRE</Link>
                                </li>
                                <li>SERVIÇOS</li>
                            </ul>
                            
                            <span>{handleSubmit?.nome_usuario}</span>
                       {handleSubmit ? (
                             <button class="Sair" onClick={confirmSair} value={sair } onChange={e => setSair(e.target.value)} >Sair</button> ,
                             <p ><Link to="/Perfil">{getNomeUsuario()}</Link></p>
                             
                       ):(<p ><Link to="/Login"> LOGIN </Link></p>)}
                         
                    
                    </nav>
                    
                </div>
            
            <div className="Titulo texto-central">
                <img src="/imagens/logo.png" alt="logo" id="logoLog"/>
                <p className="pLogin">Login</p>
                <b className="p1Login">caminhos do planalto central</b>
            </div>   
         </header>
           
    </div>
    );

}

/*
const MyComponent = ({disabled}) => {
    return <div>
          <button disabled={disabled}>someBtn</button>
          <input type="text" disabled={disabled}/>
    </div>
}
 const [loginVisible, setloginVisible, idUsuario] = useState(false);
    const onClick2 = () => setIsActive(!isActive)
    const [isActive, setIsActive] = useState(false)
    const params = useParams();
<div className="Bl">
                    <button
                        id="test"
                        className="blogBtn" 
                        onClick={ () => setIsModalVisible(true)}>
                        Novo comentário
                    </button>
                    {loginVisible ? (getNomeUsuario() onClose={() => setloginVisible(false)}>
                                    <NoticiasModal noticiaId={noticiaId}></NoticiasModal></BlogNoticiaModal>) : null}
                              
                                    

                                     <p  className='BotaoLogin' value={botaologin} onChange={e => setBotaoLogin(e.target.value)(true)}><Link to="/Login">LOGIN</Link></p>
                        <p className='BotaoNomeUsuario' value={botaonomeusuario} onChange={e => setBotaoNomeUsuario(e.target.value)(false)}><Link to="/Perfil">{getNomeUsuario()}</Link></p>
                        <button class="Sair" onClick={confirmSair} value={botaosair} onChange={e => setBotaoSair(e.target.value)(false)}>Sair</button>
                        

                        <span>{currentUser?.username}</span>
                {currentUser ? (
                    <span onClick={logout}>Logout</span>
                ) : (
                    <Link className="link" to="/login">
                    Login
                    </Link>
                )}
                      
                </div>*/