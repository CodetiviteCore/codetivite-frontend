import styled from "styled-components"
import { CompleteProjectCard } from "../../../../ui_elements"
// import { Link } from 'react-router-dom';
export const TaskComponent = ({taskDetails}) => {
    // const projects = [
    //     {
    //         title: "Create a table using AutoLayout...",
    //         description: "This task aims to teach you how to create AutoLayouts",
    //         locked: true
    //     },
    //     {
    //         title: "Create a table using AutoLayout...",
    //         description: "This task aims to teach you how to create AutoLayouts",
    //         locked: false
    //     },
    //     {
    //         title: "Create a table using AutoLayout...",
    //         description: "This task aims to teach you how to create AutoLayouts",
    //         locked: false
    //     },
    //     {
    //         title: "Create a table using AutoLayout...",
    //         description: "This task aims to teach you how to create AutoLayouts",
    //         locked: false
    //     },
    // ]
    return (
        <Container>
            <Header>
                <h2>Roadmap task</h2>
            </Header>
            {
                taskDetails.map((card, index) =>
                    <CompleteProjectCard
                        key={index}
                        project={card}
                        completed={card?.isCompleted}
                    />
                )
            }

        </Container>
    )
}

const Container = styled.aside`
    flex:0.36;
    background-color:var(--white);
    padding:1rem;
`

const Header = styled.section`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    h2{
        font-size: 1.25rem;
        font-weight: 600;
    }

`
// const Redirect = styled(Link)`
//     display:flex;
//     align-items:center;
//     gap:5px;
//     p{
//         font-size:1rem;
//         color:var(--primary);
//         font-weight:600;
//     }
//     span{
//         font-size: 1.5rem;
//         color:var(--primary);
//     }
// `


