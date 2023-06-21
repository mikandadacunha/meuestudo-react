import styled from "styled-components";
type ContainerProps ={
    done: boolean;

}
export const Container = styled.div(({ done }: ContainerProps)=>(`

    display: flex;
background-color:#212B36;
padding: 10px;
border-radius: 15px;
margin-bottom:10px;
align-items: center;
        input{
            width: 25px;
            height: 25px;
            margin-right: 10px;
            
        }


label{
    text-decoration: ${done ? 'line-through' : 'initial'};
}
`
));