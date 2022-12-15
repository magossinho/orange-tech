
class Pokemon {
    constructor ({abilities,number,name,type,photo,types = []}){
      this.name = name;
      this.type = type;
      this.photo = photo;
      this.types = types;
      this.number = number;
      this.abilities =abilities;


    }
}
export default Pokemon