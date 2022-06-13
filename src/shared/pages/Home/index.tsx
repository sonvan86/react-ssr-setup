import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Features from 'shared/components/Features';
import { setLocale } from 'store/app/actions';
import { Locale } from 'store/app/types';

const App: React.FC<any> = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const handleLocaleChange: any = useCallback(
        (e: React.FormEvent<HTMLButtonElement>) => {
            dispatch(setLocale(e.currentTarget.value as Locale));
        },
        [dispatch]
    );
    const counter = useSelector((state) => state);

    console.log(counter);
    return (
        <React.Fragment>
            <Features />
            <h2>{t('i18n-example')}</h2>
            <p>
                <button value="de_DE" onClick={handleLocaleChange}>
                    Deutsch
                </button>
                <button value="en_US" onClick={handleLocaleChange}>
                    English
                </button>
            </p>
            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(
                (variant) => (
                    <Alert key={variant} variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                )
            )}
        </React.Fragment>
    );
};

export default App;
