import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cccccc;
  color: #fff;
  border: 1px solid #000;
  margin-top: 4rem;
  border-radius: 5px;
  svg {
    height: 20px;
    width: 20px;
    margin: 0 0.5rem;
    color: #000;
  }
`;

export const MotionInput = styled(motion.input)`
  flex: 1;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-left: 1px solid #aaaaaa;
`;
