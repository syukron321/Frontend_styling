import Nav from "../Components/Nav";
import Card from "../Components/Card";

const isiCard = [
  {
    Image: "../Components/images/gambarkue1.jpg",
    caption: "Kue ini merupakan kue 1 dengan harga Rp.28.000",
  },
  {
    Image: "../Components/images/gambarkue2.jpg",
    caption: "Kue ini merupakan kue 2 dengan harga Rp.38.000",
  },
  {
    Image: "../Components/images/gambarkue3.jpg",
    caption: "Kue ini merupakan kue 3 dengan harga Rp.58.000",
  },
  {
    Image: "../Components/images/gambarkue4.jpeg",
    caption: "Kue ini merupakan kue  dengan harga Rp.48.000",
  },
  {
    Image: "../Components/images/gambarkue5.jpeg",
    caption: "Kue ini merupakan kue 5 dengan harga Rp.68.000",
  },
  {
    Image: " ../Components/images/gambarkue6.jpeg",
    caption: "Kue ini merupakan kue 6 dengan harga Rp.78.000",
  },
  {
    Image: "../Components/images/gambarkue7.jpeg",
    caption: "Kue ini merupakan kue 7 dengan harga Rp.88.000",
  },
  {
    Image: "../Components/images/gambarkue8.jpeg",
    caption: "Kue ini merupakan kue 8 dengan harga Rp.98.000",
  },
];

function App() {
  return (
    <container>
      <Nav />
      <div className="row">
        {isiCard.map((agt, indeks) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card image={agt.Image} caption={agt.caption} />
          </div>
        ))}
      </div>
    </container>
  );
}

export default App;
