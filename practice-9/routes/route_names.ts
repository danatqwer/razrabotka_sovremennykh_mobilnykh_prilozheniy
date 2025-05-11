import { ExternalPathString } from "expo-router";

export default abstract class RouteNames {
    static indexRoute = 'index';
    static countriesRoute = 'screens/countries';
    static countryDetailsRoute = 'screens/country_details';
    static countryFormAddRoute = 'screens/country_form_add';
    static countryFormEditRoute = 'screens/country_form_edit';

    static indexPathName = 'index' as ExternalPathString;
    static countriesPathName = '/' + this.countriesRoute as ExternalPathString;
    static countryDetailsPathName =  '/' + this.countryDetailsRoute as ExternalPathString;
    static countryFormAddPathName = '/' + this.countryFormAddRoute as ExternalPathString;
    static countryFormEditPathName = '/' + this.countryFormEditRoute as ExternalPathString;
}
