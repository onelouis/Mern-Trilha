import React from 'react';
import {Link} from 'react-router-dom'
import { getNomeUsuario} from '../Services/auth';
import api from "../Services/api";

import handleSubmit from "./Main";



export default function Cabeca() {
   

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
                            
                             <p ><Link to="/Perfil">{getNomeUsuario()}</Link></p>
                             
                       ):(<p ><Link to="/Login"> LOGIN </Link></p>)}
                         
                    
                    </nav>
                    
                </div>
            
                <div className="Titulo texto-central">
                    <img src="/imagens/logo.png" alt="logo" id="logoLog"/>
                    <p className="pLogin">Cadastro</p>
                    <b className="p1Login">caminhos do planalto central</b>
            </div>   
         </header>
           
    </div>
    );
}

