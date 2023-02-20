import styled, { keyframes } from "styled-components";

const changeBackground = keyframes`
0% {
  background-color: #9bb5ce;
  color: #a50011;
  fill: #a50011;
}

20% {
  background-color: #f9e5c9;
  color: #574f6f;
  fill: #574f6f;
}

40% {
  background-color: #505f4e;
  color: #9bb5ce;
  fill: #9bb5ce;
}

60% {
  background-color: #574f6f;
  color: #9bb5ce;
  fill: #9bb5ce;
}

80% {
  background-color: #a50011;
  color: #f9e5c9;
  fill: #f9e5c9;
}

100% {
  background-color: #9bb5ce;
  color: #505f4e;
  fill: #505f4e;
}
`;



const Loading = styled.div`
width: 100vw;
height: 100vh;
/* background-color: blue; */
animation: ${changeBackground} 10s infinite;
margin: 0;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
`;

const Container = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


const Svg = styled.svg.attrs({
  enableBackground: "new 0 0 56.693 56.693",
  height: "56.693px",
  id: "Layer_1",
  version: "1.1",
  viewBox: "0 0 56.693 56.693",
  width: "56.693px",
  xmlSpace: "preserve",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  children: (
    <path
      d="M28.347,5.155c-13.6,0-24.625,11.025-24.625,24.625c0,13.602,11.025,24.625,24.625,24.625  c13.6,0,24.625-11.023,24.625-24.625C52.972,16.18,41.946,5.155,28.347,5.155z M29.759,15.141c1.117-1.311,3.006-2.283,4.564-2.346  c0.199,1.816-0.533,3.637-1.613,4.947c-1.084,1.309-2.857,2.328-4.598,2.193C27.878,18.157,28.755,16.301,29.759,15.141z   M38.626,39.94c-1.293,1.889-2.633,3.771-4.744,3.809c-2.076,0.039-2.744-1.23-5.115-1.23c-2.373,0-3.115,1.193-5.08,1.27  c-2.037,0.076-3.589-2.037-4.892-3.92c-2.665-3.848-4.698-10.875-1.964-15.619c1.354-2.358,3.78-3.846,6.411-3.887  c2.004-0.037,3.893,1.35,5.115,1.35c1.225,0,3.521-1.666,5.936-1.42c1.01,0.041,3.846,0.406,5.668,3.071  c-0.146,0.092-3.387,1.977-3.348,5.902c0.043,4.689,4.113,6.246,4.16,6.27C40.735,35.642,40.12,37.757,38.626,39.94z"
    />)
})`width: 20vw;
   height: auto;
`;



const Text = styled.div`
font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
font-size: calc(1rem + 2vw);
text-transform: capitalize;
`;


const Loader = () => {
  return (
    <Loading>
      <Container>
        <div className="svg-container">
          <Svg></Svg>
        </div>
        <Text>future is unfolding!</Text>
      </Container>
    </Loading>
  )
}

export default Loader