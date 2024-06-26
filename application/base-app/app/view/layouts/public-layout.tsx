import {RapidLayoutRenderer, RapidReactComponent, RapidUtil, React} from 'react-rapid-app';
import AppBootstrap from "../common/AppBootstrap";
import {Column, Container, Row} from "react-rapid-bootstrap";
import ExampleUrlMapping from "../example/example-url-mapping";
import QuranUrlMapping from "../quran/quran-url-mapping";


interface Props {
    route?: any;
    appConfig?: any;
    component?: any;
    additionalData?: any;
}

export default class PublicLayout extends RapidReactComponent<Props, any> {

    getNavigation(){
        return [
            {name: "Home", url: ExampleUrlMapping.ui.index},
            {name: "Typing", url: ExampleUrlMapping.ui.typing},
            {name: "Alphabet", url: QuranUrlMapping.ui.alphabet},
            {name: "Alphabet - Hard", url: QuranUrlMapping.ui.alphabetHard},
            {name: "Alphabet - Practice", url: QuranUrlMapping.ui.alphabetPractice},
            {name: "Alphabet - Concat", url: QuranUrlMapping.ui.alphabetConcat},
            {name: "Jobor Jer Pesh", url: QuranUrlMapping.ui.joborJerPesh},
            {name: "Pronunciation", url: QuranUrlMapping.ui.pronunciation},
            {name: "Horkot Practice", url: QuranUrlMapping.ui.horkotPractice},
            {name: "Sukoon", url: QuranUrlMapping.ui.sukoon},
            {name: "Sukoon Practice", url: QuranUrlMapping.ui.sukoonPractice},
            {name: "Qalqalah", url: QuranUrlMapping.ui.qalqalah},
            {name: "Shaddah", url: QuranUrlMapping.ui.shaddah},
            {name: "Madd", url: QuranUrlMapping.ui.madd},


            {name: "Short Phrases", url: QuranUrlMapping.ui.shortPhrases},
        ]
    }

    render() {
        const {component, route, appConfig, additionalData} = this.props;
        return (
            <>
                <AppBootstrap>
                    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                Learn Quran
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#responsive-navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                        </div>
                    </nav>
                    <Container type={"fluid"} className={"mt-3 mb-3"}>
                        <Row>
                            <Column spanMedium={2}>
                                <div className="list-group">
                                    {this.getNavigation().map((row: any, index: any) => (
                                        <button
                                            key={index}
                                            onClick={(event: any) => {
                                                RapidUtil.gotoUrl(this, row.url)
                                            }}
                                            className="list-group-item list-group-item-action">
                                            {row.name}
                                        </button>
                                    ))}
                                </div>
                            </Column>
                            <Column spanMedium={10}>
                                <RapidLayoutRenderer
                                    route={route}
                                    appConfig={appConfig}
                                    component={component}
                                    additionalData={additionalData}/>
                            </Column>
                        </Row>
                    </Container>

                    <footer className="footer mt-auto py-3 bg-dark">
                    <div className="container-fluid">
                            <p className="m-0 text-center text-white">
                                Copyright &copy; Bangla Fighter 2024
                            </p>
                        </div>
                    </footer>
                </AppBootstrap>
            </>
        );
    }
}