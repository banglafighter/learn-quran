import {RapidAppContext, RapidComponent, RapidComponentState, RapidProps, RapidUtil, React} from "react-rapid-app";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "react-rapid-bootstrap";
import alif from "../../assets/audio/alphabet/alif.mp3"
import fds1 from "../../assets/audio/pronunciation/fds-1.mp3"
import fds2 from "../../assets/audio/pronunciation/fds-2.mp3"
import fds3 from "../../assets/audio/pronunciation/fds-3.mp3"
import fds4 from "../../assets/audio/pronunciation/fds-4.mp3"
import fds5 from "../../assets/audio/pronunciation/fds-5.mp3"
import fds6 from "../../assets/audio/pronunciation/fds-6.mp3"
import fds7 from "../../assets/audio/pronunciation/fds-7.mp3"
import fds8 from "../../assets/audio/pronunciation/fds-8.mp3"
import fds9 from "../../assets/audio/pronunciation/fds-9.mp3"
import fds10 from "../../assets/audio/pronunciation/fds-10.mp3"
import fds11 from "../../assets/audio/pronunciation/fds-11.mp3"
import fds12 from "../../assets/audio/pronunciation/fds-12.mp3"


interface Props extends RapidProps {
}

class State extends RapidComponentState {
    selectedRow: any
    isStarted: boolean = false
    payAllButtonLabel: any = "Play All"
}

export default class Pronunciation extends RapidComponent<Props, State> {

    state: State = new State();
    static contextType = RapidAppContext

    static defaultProps = {}
    randomData: any
    currentlyPlayingIndex: any = 0
    tableItemPerRow: any = 6
    totalDataLength: any = 0

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.generateRandomTableRow()
    }

    getData() {
        return [
            {letter: "ءَ عَ", audio: fds1},
            {letter: "هَ حَ", audio: fds2},
            {letter: "كَ قَ", audio: fds3},
            {letter: "تَ طَ", audio: fds4},
            {letter: "ظَ ضَ", audio: fds5},
            {letter: "دَ ضَ", audio: fds6},
            {letter: "ثَ سَ", audio: fds7},
            {letter: "سَ صَ", audio: fds8},
            {letter: "ذَ زَ", audio: fds9},
            {letter: "زَ جَ", audio: fds10},
            {letter: "ذَ ظَ", audio: fds11},
            {letter: "ءَ ىَ", audio: fds12},

            {letter: "ءِ عِ", audio: alif},
            {letter: "هِ حِ", audio: alif},
            {letter: "كِ قِ", audio: alif},
            {letter: "تِ طِ", audio: alif},
            {letter: "ظِ ضِ", audio: alif},
            {letter: "دِ ضِ", audio: alif},
            {letter: "ذِ ظِ", audio: alif},
            {letter: "ذِ زِ", audio: alif},
            {letter: "زِ جِ", audio: alif},
            {letter: "ثِ سِ", audio: alif},
            {letter: "سِ صِ", audio: alif},
            {letter: "ءِ ىِ", audio: alif},
            {letter: "بِ وِ", audio: alif},
            {letter: "ءِ وِ", audio: alif},

            {letter: "ءُ عُ", audio: alif},
            {letter: "هُ حُ", audio: alif},
            {letter: "كُ قُ", audio: alif},
            {letter: "تُ طُ", audio: alif},
            {letter: "ظُ ضُ", audio: alif},
            {letter: "دُ ضُ", audio: alif},
            {letter: "ذُ ظُ", audio: alif},
            {letter: "ذُ زُ", audio: alif},
            {letter: "زُ جُ", audio: alif},
            {letter: "ثُ سُ", audio: alif},
            {letter: "سُ صُ", audio: alif},
            {letter: "ءُ ىُ", audio: alif},
            {letter: "بُ وُ", audio: alif},
            {letter: "ءُ وُ", audio: alif},
        ]
    }

    playAudio(index: any, startText?: any, stopText?: any) {
        const _this = this
        let data: any = this.randomData
        if (!data) {
            return
        }
        let itemPerRowWithZeroCount: any = _this.tableItemPerRow - 1
        if (index < (this.currentlyPlayingIndex - itemPerRowWithZeroCount) || index === undefined) {
            if (this.currentlyPlayingIndex >= this.totalDataLength) {
                _this.setState({payAllButtonLabel: startText, isStarted: false, selectedRow: -1})
                return;
            }
            index = this.currentlyPlayingIndex + itemPerRowWithZeroCount
            if (index >= this.totalDataLength) {
                index = this.totalDataLength - 1
            }
        }
        this.currentlyPlayingIndex++
        _this.setState({selectedRow: index})
        if (data.length > index && this.state.isStarted) {
            _this.setState({payAllButtonLabel: stopText})
            if (data[index].audio !== "" && data[index].audio) {
                let audio: any = new Audio(data[index].audio)
                audio.onended = () => {
                    _this.playAudio(index - 1, startText, stopText)
                }
                audio.play()
            } else {
                _this.playAudio(index - 1, startText, stopText)
            }
        } else {
            _this.setState({payAllButtonLabel: startText, isStarted: false, selectedRow: -1})
        }
    }

    generateRandomTableRow() {
        const _this = this;
        _this.randomData = _this.getData()
        this.notifyComponentChange()
    }

    getTableRowHTML(){
        const _this = this;
        if (!_this.randomData) {
            return
        }
        let rowHTML: any = []
        let data: any = _this.randomData
        let itemPerRow: any = _this.tableItemPerRow
        let totalData: any = _this.totalDataLength = data.length
        let numberOfRow: any = Math.ceil(totalData / itemPerRow)
        for (let row = 0; row <= numberOfRow; row++) {
            let maxRunRow: any = (row * itemPerRow) + itemPerRow
            if (maxRunRow > totalData) {
                maxRunRow = totalData
            }
            let cellHTML: any = []
            let itemIndex: any = row * itemPerRow
            for (; itemIndex < maxRunRow; itemIndex++) {
                let dataItem: any = data[itemIndex]
                cellHTML.push(
                    <TableCell key={itemIndex} className={_this.state.selectedRow === itemIndex ? "table-secondary text-center" : "text-center"}>
                        {dataItem.letter}
                        <Button
                            onClick={() => {
                                let audio: any = new Audio(dataItem.audio)
                                audio.play()
                            }}
                            viewSize={"small"}
                            className={"ms-3 text-success"}
                            variant={"light"}>
                            <i className="fa-solid fa-play"></i>
                        </Button>
                    </TableCell>
                )
            }
            rowHTML.push(
                <TableRow key={itemIndex}>{cellHTML}</TableRow>
            )
        }
        return rowHTML;
    }

    renderUI() {
        const _this = this;
        return (
            <div>
                <div className={"top-action mb-2 m-2 d-flex flex-row-reverse"}>
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.state.isStarted = !this.state.isStarted
                                this.currentlyPlayingIndex = 0
                                this.playAudio( undefined, "Play All", "Stop")
                            }}
                        >
                            {this.state.payAllButtonLabel}
                        </button>
                    </div>
                </div>
                <Table className={"text-center"} variant={"bordered"}>
                    <TableBody className={"majeed-quranic"}>
                        {_this.getTableRowHTML()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}