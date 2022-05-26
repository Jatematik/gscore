import React from "react";
import styled, { css } from "styled-components";

import TrashIcon from "src/assets/icons/TrashIcon";
import { ProductProps } from "src/types";
import { IText } from "src/ui/IText";
import { useAppDispatch } from "src/store/hooks";
import { actions } from "src/store/ducks";

const Product: React.FC<ProductTypeProps> = ({
  product,
  index,
  isDeleteBtn,
}) => {
  const dispatch = useAppDispatch();

  const handleDeleteProduct = (index: number) => {
    dispatch(actions.cart.deleteProduct(index));
  };

  return (
    <Container>
      <IText as="span" containerStyles={bodyStyles}>
        {product.name}
      </IText>
      <IText as="span" containerStyles={bodyStyles}>
        ${product.prices[0].price}
        {isDeleteBtn && (
          <TrashButton onClick={() => handleDeleteProduct(index)}>
            <TrashIcon />
          </TrashButton>
        )}
      </IText>
    </Container>
  );
};

interface ProductTypeProps {
  product: ProductProps;
  index: number;
  isDeleteBtn?: boolean;
}

export default Product;

const Container = styled.div`
  display: flex;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TrashButton = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const bodyStyles = css`
  font-size: 24px;
  line-height: 38px;
  flex-basis: 85%;
  &:last-child {
    flex-basis: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 576px) {
    &:last-child {
      min-width: 70px;
    }
    font-size: 18px;
    line-height: 30px;
  }
`;
