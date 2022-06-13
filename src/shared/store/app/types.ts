export type Locale = 'en_US' | 'de_DE';

export type AppState = Readonly<{
    locale: Locale;
    test: string;
}>;

export type Action = {
    type: string;
    payload: any;
};
