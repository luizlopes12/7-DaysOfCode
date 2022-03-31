import styled from 'styled-components'

export const HeaderStyle = styled.header`
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav{
        ul{
            height: 60px;
            list-style: none;
            display: flex;
            align-items: flex-end;
            li{
                a{
                    text-decoration: none;
                    color: #000;
                    margin: 0 10px;
                    font-weight: 600;
                    font-size: .9em;
                    border-bottom: 3px solid transparent;
                    transition: all .3s ease-in-out;
                    &:hover{
                        border-bottom: 3px solid #000;
                    }
                }
            }
        }
    }
`;