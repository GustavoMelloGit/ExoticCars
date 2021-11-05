export interface ICarColorsProps {
  id: number;
  color: string;
  image: string;
}
export interface ICarProps {
  id: number;
  brand: string;
  model: string;
  price: number;
  image: string;
  logo: string;
  colors: ICarColorsProps[];
}

export interface ICarsProps {
  cars: ICarProps[];
}
