import React from 'react';
import './errorPage.css'

const ErrorPage: React.FC = () => {
    return (
        <div className={'errorWrapper'}>
            <img src={'/sad.svg'}/>
            <div>
                <h1 className={'smthWrong'}>Щось пішло не так.</h1>
            </div>
            <br/>
            <h2>Спробуйте авторизуватися ще раз <a className={'redirect'}
                                                  href={'https://accounts.google.com/signin/v2/identifier?hl=uk&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dssr%26rlz%3D1C1GCEA_enUA976UA976%26oq%3Dssr%26aqs%3Dchrome..69i57j0i512l9.533j0j15%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAlAAQ&flowName=GlifWebSignIn&flowEntry=AddSession'}>
                Перейти</a></h2>


        </div>
    );
};

export default ErrorPage;