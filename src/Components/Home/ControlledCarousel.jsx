import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import JHALAK from "../../Image/Products/Jhalak.png";
// import GHAYAL from "../../Image/Products/Ghayal.png";
// import MANZEEL from "../../Image/Products/Manzeel.png";
// import BLACKBOLD from "../../Image/Products/Black_Bold.png";
// import EKTA from "../../Image/Products/Ekta.png";
// import Jomraj from "../../Image/Products/Jomraj.png";
// import DUGdugi from "../../Image/Products/Dugdugi.png";
// import STUMPOUT from "../../Image/Products/Stump Out.png";
import product1 from '../../Image/SectionImage/product.png';

// const products = [
//   [
//     {
//       product_name: "JHALAK",
//       product_tag: "Azoxystrobin 11.5% + Mancozeb 30% WP",
//       product_about: "",
//       product_img: JHALAK,
//     },
//     {
//       product_name: "GHAYAL",
//       product_tag: "Chlorpyriphos 20% EC",
//       product_about: "",
//       product_img: GHAYAL,
//     },
//     {
//       product_name: "MANZEEL",
//       product_tag: "Organic Pest Controller",
//       product_about: "",
//       product_img: MANZEEL,
//     },
//     {
//       product_name: "BLACK BOLD",
//       product_tag:
//         "Neem Oil Based EC Containing Azadirachtin 0.03% (300 PPM) Min.",
//       product_about: "",
//       product_img: BLACKBOLD,
//     },
//   ],
//   [
//     {
//       product_name: "EKTA",
//       product_tag: "Acetamiprid 20% SP",
//       product_about: "",
//       product_img: EKTA,
//     },
//     {
//       product_name: "JOMRAJ",
//       product_tag: "Emamectin Benzoate 1.9% EC",
//       product_about: "",
//       product_img: Jomraj,
//     },
//     {
//       id: 36,
//       product_name: "DUG DUGI",
//       product_tag: "Mancozeb 50% WP",
//       product_about: "",
//       product_img: DUGdugi,
//     },
//     {
//       product_name: "STUMP OUT",
//       product_tag: "Emamectin Benzoate 1.9% EC",
//       product_about: "",
//       product_img: STUMPOUT,
//     },
//   ],
// ];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="product-components"
    >
      <Carousel.Item className="container">
        <img src={product1} alt="product 1" />
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;
