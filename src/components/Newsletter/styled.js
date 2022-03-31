import styled from  'styled-components'

export const NewsStyle = styled.form`
    width: 570px;
    height: 60px;
    display: flex;
    box-shadow: 8px 8px 33px 1px rgba(189,189,189,0.25);
    label{
        display: flex;
        align-items: center;
        margin-left: 10px;
    }
    input{
        width: 70%;
        border: none;
        background-color: #fff;
        font-size: 1em;
        padding-left: 10px;
    }
    button{
        cursor: pointer;
        width: 30%;
        border: none;
        background-color: #FFCB47;
        font-size: 1em;
        padding: 5px;
        color: #fff;
        transition: all .3s ease-in-out;
        &:hover{
            filter: brightness(.95);
        }
    }
`;