/* eslint-disable no-unused-vars */
import * as React from 'react';
import { ContextValueType } from '../@types';

const errorBoundaryContext = React.createContext<ContextValueType | undefined>(undefined);

export default errorBoundaryContext;
