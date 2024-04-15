import {RapidAppContext, RapidComponent, RapidComponentState, RapidProps} from "react-rapid-app";


interface Props extends RapidProps {
}

class State extends RapidComponentState {
}

export default class IndexView extends RapidComponent<Props, State> {

    state: State = new State();
    static contextType = RapidAppContext

    static defaultProps = {}

    componentDidMount() {}

    renderUI() {
        const _this = this;
        return (
            <>Basic View</>
        )
    }
}