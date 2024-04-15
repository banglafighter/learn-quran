import {RapidLayoutRenderer, RapidReactComponent, React} from 'react-rapid-app';
import Bootstrap from "react-rapid-bootstrap/boot/react/Bootstrap";


interface Props {
    route?: any;
    appConfig?: any;
    component?: any;
    additionalData?: any;
}

export default class PrivateLayout extends RapidReactComponent<Props, any> {

    render() {
        const {component, route, appConfig, additionalData} = this.props;
        return (
            <>
                <Bootstrap>
                    <RapidLayoutRenderer
                        route={route}
                        appConfig={appConfig}
                        component={component}
                        additionalData={additionalData}/>
                </Bootstrap>
            </>
        );
    }
}