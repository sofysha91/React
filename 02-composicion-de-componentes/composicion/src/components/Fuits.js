import Title from "./Title";
const Fruits = () => {
  const frutas = ["Pera", "Manzana", "Naranja", "Uva"];
  return (
    <div>
      {frutas.map((fruta) => (
        <Title key={fruta} text={fruta} />
      ))}
    </div>
  );
};

export default Fruits;