import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  height: 100vh;
`;

export const Card = styled(motion.div)`
  display: flex;
  width: 400px;
  color: #333;
  background: #fff;
  margin-top: 5rem;
`;

export const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 0.5rem 1rem;

  h4 {
    line-height: 1.7rem;

    span {
      margin-left: 0.5rem;
    }
  }
`;
