import {RapidAppConfig, RapidLayoutInfoData, RapidURLMapping, React} from "react-rapid-app";


const AlphabetView = React.lazy(() => import('./alphabet-view'));
const AlphabetHardView = React.lazy(() => import('./alphabet-hard-view'));
const AlphabetPracticeView = React.lazy(() => import('./alphabet-practice'));
const AlphabetConcatView = React.lazy(() => import('./alphabet-concat'));

const UI_BASE_URL = "/quran"

export default class QuranUrlMapping {


    public static readonly API = {};


    public static readonly ui = {
        alphabet: UI_BASE_URL + "/alphabet",
        alphabetHard: UI_BASE_URL + "/alphabet-hard",
        alphabetPractice: UI_BASE_URL + "/alphabet-practice",
        alphabetConcat: UI_BASE_URL + "/alphabet-concat",
    };

    private static privateUrlMappings(privateLayoutInfo: RapidLayoutInfoData): RapidLayoutInfoData {
        return privateLayoutInfo;
    }

    private static publicUrlMappings(publicLayoutInfo: RapidLayoutInfoData): RapidLayoutInfoData {
        publicLayoutInfo.addPageInstance(this.ui.alphabet, AlphabetView);
        publicLayoutInfo.addPageInstance(this.ui.alphabetHard, AlphabetHardView);
        publicLayoutInfo.addPageInstance(this.ui.alphabetPractice, AlphabetPracticeView);
        publicLayoutInfo.addPageInstance(this.ui.alphabetConcat, AlphabetConcatView);
        return publicLayoutInfo;
    }

    public static register(urlMapping: RapidURLMapping, appConfig: RapidAppConfig): void {
        this.privateUrlMappings(urlMapping.privateLayout)
        this.publicUrlMappings(urlMapping.publicLayout)
    }
}