import { useContext } from 'react';
import { LocaleContext } from '../context/internatiolizationContext';

export const useLocale = () => useContext(LocaleContext);