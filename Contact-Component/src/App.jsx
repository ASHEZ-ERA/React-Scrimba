import "./App.css";
import Contact from "./components/contact";

function App() {
  return (
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
