export interface ICarProps {
  id: number;
  brand: string;
  model: string;
  price: number;
  image: string;
  colors: [
    {
      id: number;
      color: string;
      image: string;
    }
  ];
}

export interface ICarsProps {
  cars: ICarProps[];
}
