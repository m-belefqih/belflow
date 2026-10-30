import { createContext, useContext } from 'react';
import type { NodeTypeInfo } from '@belflow/shared';

export const NodeTypesCtx = createContext<Map<string, NodeTypeInfo>>(new Map());
export const useNodeTypeMap = () => useContext(NodeTypesCtx);
