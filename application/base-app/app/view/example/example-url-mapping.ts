import {RapidAppConfig, RapidLayoutInfoData, RapidURLMapping, React} from "react-rapid-app";


const IndexView = React.lazy(() => import('./index-view'));
const TypeView = React.lazy(() => import('./type-view'));

const UI_BASE_URL = "/"

export default class ExampleUrlMapping {


    public static readonly API = {};


    public static readonly ui = {
        index: UI_BASE_URL,
        typing: UI_BASE_URL + "typing",
    };

    private static privateUrlMappings(privateLayoutInfo: RapidLayoutInfoData): RapidLayoutInfoData {
        return privateLayoutInfo;
    }

    private static publicUrlMappings(publicLayoutInfo: RapidLayoutInfoData): RapidLayoutInfoData {
        publicLayoutInfo.addPageInstance(this.ui.index, IndexView);
        publicLayoutInfo.addPageInstance(this.ui.typing, TypeView);
        return publicLayoutInfo;
    }

    public static register(urlMapping: RapidURLMapping, appConfig: RapidAppConfig): void {
        this.privateUrlMappings(urlMapping.privateLayout)
        this.publicUrlMappings(urlMapping.publicLayout)
    }
}