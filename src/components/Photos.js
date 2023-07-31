const Photos = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Mwny3YXnqlcUFXdJOKVrri1yu6V-7yuNHw&usqp=CAU",
    "https://www.usnews.com/object/image/00000163-8d5b-d398-ad7f-8dfff5760000/3-eiffel-tower-getty.jpg?update-time=1527086483519&size=responsive640",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryklmCFWz5nQ5_IHgqFq9DIAiG6YmzbVjT26dd7Wjko85LwCZejsyr3GxxKTFz0lgaqE&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Mwny3YXnqlcUFXdJOKVrri1yu6V-7yuNHw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Mwny3YXnqlcUFXdJOKVrri1yu6V-7yuNHw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Mwny3YXnqlcUFXdJOKVrri1yu6V-7yuNHw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Mwny3YXnqlcUFXdJOKVrri1yu6V-7yuNHw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Mwny3YXnqlcUFXdJOKVrri1yu6V-7yuNHw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Mwny3YXnqlcUFXdJOKVrri1yu6V-7yuNHw&usqp=CAU",
  ];
  return (
    <div className="images-grid">
      {images.map((image) => (
        <img src={image} alt=""></img>
      ))}
      
    </div>
  );
};
export default Photos;
