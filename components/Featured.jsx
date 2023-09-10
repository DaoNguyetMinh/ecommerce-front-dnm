import { styled } from 'styled-components';
import Center from './Center';
import Button from './Button';
import ButtonLink from './ButtonLink';
import Cart from './icons/Cart';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;

  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 1.5rem;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  const addFeaturedToCart = () => {
    addProduct(product._id);
  };

  return (
    <div>
      <Bg>
        <Center>
          <ColumnsWrapper>
            <Column>
              <div>
                <Title> {product.title} </Title>
                <Desc>{product.description}</Desc>
                <ButtonsWrapper>
                  <ButtonLink
                    href={'/products/' + product._id}
                    outline={1}
                    white={1}
                    size={'l'}
                  >
                    Read more
                  </ButtonLink>
                  <Button white onClick={addFeaturedToCart}>
                    <Cart />
                    Add to cart
                  </Button>
                </ButtonsWrapper>
              </div>
            </Column>
            <div>
              <img
                src="https://149426355.v2.pressablecdn.com/wp-content/uploads/2021/10/mbp-2021-bbedit-lede.png"
                alt=""
              />
            </div>
          </ColumnsWrapper>
        </Center>
      </Bg>
    </div>
  );
}
