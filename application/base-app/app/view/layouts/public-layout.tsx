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
            {name: "Alphabet", url: QuranUrlMapping.ui.alphabet},
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
                            <Column span={2}>
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
                            <Column span={10}>
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
                                Copyright &copy; Your Website 2024
                            </p>
                        </div>
                    </footer>
                </AppBootstrap>
            </>
        );
    }
}