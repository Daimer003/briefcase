import { ReactNode, createContext, FC, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { englishTranslate } from "@/translate/english";
import { spanishTranslate } from "@/translate/spanish";
import { TranslateInterface } from "@/models/translate";
import { estonioTranslate } from "@/translate/estonia";

interface LocaleState {
  locale: string | null;
  t: TranslateInterface;
}

interface LocaleContextValues extends LocaleState {
  setLocale: (locale: LocaleEnum) => Promise<void>;
  getTranslate: (locale: LocaleEnum) => any;
}

interface LocaleProviderProps {
  children: ReactNode;
}

type SetLocaleAction = {
  type: "SET_LOCALE";
  payload: {
    locale: string;
    t: TranslateInterface;
  };
};

type InitializeLocaleAction = {
  type: "INITIALIZE_LOCALE";
  payload: {
    locale: string;
    t: TranslateInterface;
  };
};

export enum LocaleEnum {
  ES = "es",
  EN = "en",
  ET = "et",
}

type Action = SetLocaleAction | InitializeLocaleAction;

const initialLocaleState: LocaleState = {
  locale: "es",
  t: spanishTranslate,
};

const handlers: Record<
  string,
  (state: LocaleState, action: Action) => LocaleState
> = {
  SET_LOCALE: (state: LocaleState, action: SetLocaleAction): LocaleState => ({
    ...state,
    locale: action.payload.locale,
    t: action.payload.t,
  }),
  INITIALIZE_LOCALE: (state: LocaleState, action: InitializeLocaleAction) => ({
    ...state,
    locale: action.payload.locale,
    t: action.payload.t,
  }),
};

const reducer = (state: LocaleState, action: Action): LocaleState =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const LocaleContext = createContext<LocaleContextValues>({
  ...initialLocaleState,
  setLocale: () => Promise.resolve(),
  getTranslate: () => Promise.resolve(),
});

export const LocaleProvider: FC<LocaleProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialLocaleState);
  const router = useRouter();
  /*const isReady = router.isReady;*/
  const { locale } = router.query;

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      const localstoragelocale = localStorage.getItem("locale");
  
      if (locale && typeof locale === "string") {
        const validLocale = LocaleEnum[locale.toUpperCase()] || LocaleEnum.ES;
        localStorage.setItem("locale", validLocale);
        dispatch({
          type: "INITIALIZE_LOCALE",
          payload: {
            locale: validLocale,
            t:
              (validLocale === LocaleEnum.EN && englishTranslate) ||
              (validLocale === LocaleEnum.ES && spanishTranslate) ||
              (validLocale === LocaleEnum.ET && estonioTranslate),
          },
        });
      } else if (localstoragelocale) {
        dispatch({
          type: "INITIALIZE_LOCALE",
          payload: {
            locale: localstoragelocale,
            t:
              (localstoragelocale === LocaleEnum.EN && englishTranslate) ||
              (localstoragelocale === LocaleEnum.ES && spanishTranslate) ||
              (localstoragelocale === LocaleEnum.ET && estonioTranslate),
          },
        });
      } else {
        // Cargar "es" como valor por defecto si no se encuentra en query o localStorage
        localStorage.setItem("locale", LocaleEnum.ES);
        dispatch({
          type: "INITIALIZE_LOCALE",
          payload: {
            locale: LocaleEnum.ES,
            t: spanishTranslate,
          },
        });
      }
    };
  
    initialize();
  }, [locale]);

  const setLocale = async (locale: string) => {
    const validLocale = LocaleEnum[locale.toUpperCase()] || LocaleEnum.ES;
    localStorage.setItem("locale", validLocale);
    dispatch({
      type: "SET_LOCALE",
      payload: {
        locale,
        t:
          (locale == LocaleEnum.EN && englishTranslate) ||
          (locale == LocaleEnum.ES && spanishTranslate) ||
          (locale == LocaleEnum.ET && estonioTranslate),
      },
    });
  };

  const getTranslate = (locale: LocaleEnum) =>
    locale == LocaleEnum.EN ? englishTranslate : spanishTranslate;

  return (
    <LocaleContext.Provider
      value={{
        ...state,
        setLocale,
        getTranslate,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const LocaleConsumer = LocaleContext.Consumer;
