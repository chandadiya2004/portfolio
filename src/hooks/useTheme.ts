'use client';

import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../context/ThemeContextCore';

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
