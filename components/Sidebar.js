import styled from "styled-components";

const SidebarContainer = styled.div`
    width: 10%;
    height: 100%;
    background-color: #f5f5f5;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `


function Sidebar() {
    return (
        <SidebarContainer>
            <p>hello</p>
        </SidebarContainer>
    )
}

export default Sidebar