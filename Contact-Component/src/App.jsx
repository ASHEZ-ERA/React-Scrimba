import "./App.css";
import Contact from "./components/contact";

function App() {

  return (
    //returned/rendered instances of contact component wherein passed hard coded properties of img,name,phone & email, could have dont and made a component and passed down this information as array of objects wherein keys are the names and values are the values assigned to the properties and then imported here and and mapped the array and returned an instance to give all the properties which where then taken by the contact component as props and called one instance of the contact here and returned the mapped array to render
    <div className="contacts">
      <Contact
        img="/images/photo1.jpg"
        name="Mr. Whiskerson "
        phone="9149500635"
        email="dawoodeshraff123@gmail.com"
      />
      <Contact
        img="/images/photo2.jpg"
        name="Ahmed"
        phone="9622296239"
        email="dawood@123.com "
      />
      <Contact
        img="/images/photo3.jpg"
        name="Mohammad Jasif"
        phone="9180283823"
        email="ahmed@123.com "
      />
      <Contact
        img="/images/photo4.jpg"
        name="Aslam"
        phone="9852229872"
        email="Aslam@123.com "
      />
    </div>
  );
}

export default App;
