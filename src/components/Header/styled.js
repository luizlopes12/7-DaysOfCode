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
    section{
        display: none;
    }
    @media(max-width: 900px){
        nav{
            position: fixed;
            top: 80px;
            right: 0;
            transform:${props => props.toggled ? 'translateX(100vw)':'translateX(0)'};
            transition: all .2s ease-in-out;
            ul{
                height: 100vh;
                width: 100vw;
                background-color: #f5f5f5;
                display: flex;
                flex-direction: column;
                align-items: center;
                li{
                    margin-top: 50px;
                }
            }
        }
    section{
        display: inherit;
    }
    }
`;

export const NavButton = styled.section`
        display: flex;
        flex-direction: column;
        gap: ${props=> props.toggled? '5px': '0'};
        transition: all .2s linear;
    div{
        border: 1px solid #000;
        border-radius: 1px;
        width: 20px;
    }
    .bar1{
            transform: ${props=> props.toggled ? '':'rotate(45deg) translate(2px, 0px)'};
        }
        .bar2{
            opacity: ${props=> props.toggled ? '1':'0'};
        }
        .bar3{
            transform: ${props=> props.toggled ? '':'rotate(-45deg) translate(2px, -1px)'};
        }
`;