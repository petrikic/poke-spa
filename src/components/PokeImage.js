import './PokeImage.css';
function PokeImage(props) {
  return (
    <div className="poke-image">
      <img src={props.imagem} />
    </div>
  );
}

export default PokeImage;
