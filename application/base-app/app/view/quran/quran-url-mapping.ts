import {RapidAppConfig, RapidLayoutInfoData, RapidURLMapping, React} from "react-rapid-app";


const AlphabetView = React.lazy(() => import('./alphabet-view'));
const AlphabetHardView = React.lazy(() => import('./alphabet-hard-view'));
const AlphabetPracticeView = React.lazy(() => import('./alphabet-practice'));
const AlphabetConcatView = React.lazy(() => import('./alphabet-concat'));
const JoborJerPeshView = React.lazy(() => import('./jobor-jer-pesh'));
const HorkotPracticeView = React.lazy(() => import('./horkot-practice'));
const ShortPhrases = React.lazy(() => import('./short-phrases'));
const Sukoon = React.lazy(() => import('./sukoon'));
const Qalqalah = React.lazy(() => import('./qalqalah'));
const Shaddah = React.lazy(() => import('./shaddah'));
const Madd = React.lazy(() => import('./madd'));
const Pronunciation = React.lazy(() => import('./pronunciation'));
const SukoonPractice = React.lazy(() => import('./sukoon-practice'));

const UI_BASE_URL = "/quran"

export default class QuranUrlMapping {


    public static readonly API = {};


    public static readonly ui = {
        alphabet: UI_BASE_URL + "/alphabet",
        alphabetHard: UI_BASE_URL + "/alphabet-hard",
        alphabetPractice: UI_BASE_URL + "/alphabet-practice",
        alphabetConcat: UI_BASE_URL + "/alphabet-concat",
        joborJerPesh: UI_BASE_URL + "/jobor-jer-pesh",
        pronunciation: UI_BASE_URL + "/pronunciation",
        horkotPractice: UI_BASE_URL + "/horkot-practice",
        shortPhrases: UI_BASE_URL + "/short-phrases",
        sukoon: UI_BASE_URL + "/sukoon",
        sukoonPractice: UI_BASE_URL + "/sukoon-practice",
        qalqalah: UI_BASE_URL + "/qalqalah",
        shaddah: UI_BASE_URL + "/shaddah",
        madd: UI_BASE_URL + "/madd",
    };

    private static privateUrlMappings(privateLayoutInfo: RapidLayoutInfoData): RapidLayoutInfoData {
        return privateLayoutInfo;
    }

    private static publicUrlMappings(publicLayoutInfo: RapidLayoutInfoData): RapidLayoutInfoData {
        publicLayoutInfo.addPageInstance(this.ui.alphabet, AlphabetView);
        publicLayoutInfo.addPageInstance(this.ui.alphabetHard, AlphabetHardView);
        publicLayoutInfo.addPageInstance(this.ui.alphabetPractice, AlphabetPracticeView);
        publicLayoutInfo.addPageInstance(this.ui.alphabetConcat, AlphabetConcatView);
        publicLayoutInfo.addPageInstance(this.ui.joborJerPesh, JoborJerPeshView);
        publicLayoutInfo.addPageInstance(this.ui.horkotPractice, HorkotPracticeView);
        publicLayoutInfo.addPageInstance(this.ui.shortPhrases, ShortPhrases);
        publicLayoutInfo.addPageInstance(this.ui.sukoon, Sukoon);
        publicLayoutInfo.addPageInstance(this.ui.sukoonPractice, SukoonPractice);
        publicLayoutInfo.addPageInstance(this.ui.qalqalah, Qalqalah);
        publicLayoutInfo.addPageInstance(this.ui.shaddah, Shaddah);
        publicLayoutInfo.addPageInstance(this.ui.madd, Madd);
        publicLayoutInfo.addPageInstance(this.ui.pronunciation, Pronunciation);
        return publicLayoutInfo;
    }

    public static register(urlMapping: RapidURLMapping, appConfig: RapidAppConfig): void {
        this.privateUrlMappings(urlMapping.privateLayout)
        this.publicUrlMappings(urlMapping.publicLayout)
    }
}