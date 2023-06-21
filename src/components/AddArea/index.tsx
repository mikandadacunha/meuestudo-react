import * as C from './styles';
import { useState, KeyboardEvent } from 'react';

type Props = {
    onEnter: (taskName: string) => void
}


export const AddArea = ({onEnter}:Props)=>{
    const [inputText, setInputText]= useState('');
    /**função que controla o evento de teclas, o enter e não só */
    const handleKeyUp = ( e:KeyboardEvent) =>{
        //console.log();
        /**Condição de adição de conteudo com enter */
        if (e.code ==='Enter' && inputText !==''){
            onEnter(inputText);
            setInputText('');

        }


    }

    return(

        <C.Container>
           <div className='image'>＋</div>
           <input
           type='text'
           placeholder="Adicionar tarefa"
           value={inputText}
           onChange={e=> setInputText(e.target.value)}
           onKeyUp={handleKeyUp}
                     
           />
        </C.Container>

    );
};