import {_loadTranslation, RapidAppConfig, RapidURLMapping} from "react-rapid-app";
import {BANGLA} from "./locales/bn";
import {ENGLISH} from "./locales/en";
import ExampleUrlMapping from "./view/example/example-url-mapping";

export default class BaseAppBookRegistry {

    private static loadTranslation() {
        _loadTranslation("en", ENGLISH)
        _loadTranslation("bn", BANGLA)
    }

    public static register(urlMapping: RapidURLMapping, appConfig: RapidAppConfig): void {
        this.loadTranslation()
        ExampleUrlMapping.register(urlMapping, appConfig)
    }
}