import React from 'react';

export interface Props {
  id: number;
  image: string;
  name: string;
  status: string;
  handleClick: any;
}

const Card = (props: Props) => {
  const bgColor: string = props.status ? `active ${props.status}` : '';

  return (
    <div
      data-testid='card-component'
      className={`Card ${bgColor}`}
      onClick={() => props.handleClick(props.id)}
    >
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default Card;
