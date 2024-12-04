import "./accordion.css"
import AccordBox from "./AccordBox.jsx"
function Accordian() {
  return (
    <div id="wrapper">
  <div id="accordion">
      <AccordBox heading="Heading 1" />
      <AccordBox heading="Heading 2"/>
      <AccordBox heading="Heading 3"/>
      <AccordBox heading="Heading 4"/>
      <AccordBox heading="Heading 4"/>
      <AccordBox heading="Heading 4"/>
      <AccordBox heading="Heading 4"/>
      <AccordBox heading="Heading 4"/>
      <AccordBox heading="Heading 4"/>
      <AccordBox heading="Heading 4"/>

  </div>
    </div>
  )
}

export default Accordian