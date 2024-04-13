import {RapidAppContext, RapidComponent, RapidComponentState, RapidProps, RapidUtil, React} from "react-rapid-app";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "react-rapid-bootstrap";
import zimAenLam from "../../assets/audio/alphabet/concat/zim-aen-lam.mp3"


interface Props extends RapidProps {
}

class State extends RapidComponentState {
    selectedRow: any
    isStarted: boolean = false
    payAllButtonLabel: any = "Play All"
}

export default class JoborJerPeshView extends RapidComponent<Props, State> {

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
            {letter: "اٌ", audio: zimAenLam},
            {letter: "اٍ", audio: zimAenLam},
            {letter: "اً", audio: zimAenLam},
            {letter: "اُ", audio: zimAenLam},
            {letter: "اِ", audio: zimAenLam},
            {letter: "اَ", audio: zimAenLam},

            {letter: "بٌ", audio: zimAenLam},
            {letter: "بٍ", audio: zimAenLam},
            {letter: "بً", audio: zimAenLam},
            {letter: "بُ", audio: zimAenLam},
            {letter: "بِ", audio: zimAenLam},
            {letter: "بَ", audio: zimAenLam},

            {letter: "تٌ", audio: zimAenLam},
            {letter: "تٍ", audio: zimAenLam},
            {letter: "تً", audio: zimAenLam},
            {letter: "تُ", audio: zimAenLam},
            {letter: "تِ", audio: zimAenLam},
            {letter: "تَ", audio: zimAenLam},

            {letter: "ثٌ", audio: zimAenLam},
            {letter: "ثٍ", audio: zimAenLam},
            {letter: "ثً", audio: zimAenLam},
            {letter: "ثُ", audio: zimAenLam},
            {letter: "ثِ", audio: zimAenLam},
            {letter: "ثَ", audio: zimAenLam},

            {letter: "جٌ", audio: zimAenLam},
            {letter: "جٍ", audio: zimAenLam},
            {letter: "جً", audio: zimAenLam},
            {letter: "جُ", audio: zimAenLam},
            {letter: "جِ", audio: zimAenLam},
            {letter: "جَ", audio: zimAenLam},

            {letter: "حٌ", audio: zimAenLam},
            {letter: "حٍ", audio: zimAenLam},
            {letter: "حً", audio: zimAenLam},
            {letter: "حُ", audio: zimAenLam},
            {letter: "حِ", audio: zimAenLam},
            {letter: "حَ", audio: zimAenLam},

            {letter: "خٌ", audio: zimAenLam},
            {letter: "خٍ", audio: zimAenLam},
            {letter: "خً", audio: zimAenLam},
            {letter: "خُ", audio: zimAenLam},
            {letter: "خِ", audio: zimAenLam},
            {letter: "خَ", audio: zimAenLam},

            {letter: "دٌ", audio: zimAenLam},
            {letter: "دٍ", audio: zimAenLam},
            {letter: "دً", audio: zimAenLam},
            {letter: "دُ", audio: zimAenLam},
            {letter: "دِ", audio: zimAenLam},
            {letter: "دَ", audio: zimAenLam},

            {letter: "ذٌ", audio: zimAenLam},
            {letter: "ذٍ", audio: zimAenLam},
            {letter: "ذً", audio: zimAenLam},
            {letter: "ذُ", audio: zimAenLam},
            {letter: "ذِ", audio: zimAenLam},
            {letter: "ذَ", audio: zimAenLam},

            {letter: "رٌ", audio: zimAenLam},
            {letter: "رٍ", audio: zimAenLam},
            {letter: "رً", audio: zimAenLam},
            {letter: "رُ", audio: zimAenLam},
            {letter: "رِ", audio: zimAenLam},
            {letter: "رَ", audio: zimAenLam},

            {letter: "زٌ", audio: zimAenLam},
            {letter: "زٍ", audio: zimAenLam},
            {letter: "زً", audio: zimAenLam},
            {letter: "زُ", audio: zimAenLam},
            {letter: "زِ", audio: zimAenLam},
            {letter: "زَ", audio: zimAenLam},

            {letter: "سٌ", audio: zimAenLam},
            {letter: "سٍ", audio: zimAenLam},
            {letter: "سً", audio: zimAenLam},
            {letter: "سُ", audio: zimAenLam},
            {letter: "سِ", audio: zimAenLam},
            {letter: "سَ", audio: zimAenLam},

            {letter: "شٌ", audio: zimAenLam},
            {letter: "شٍ", audio: zimAenLam},
            {letter: "شً", audio: zimAenLam},
            {letter: "شُ", audio: zimAenLam},
            {letter: "شِ", audio: zimAenLam},
            {letter: "شَ", audio: zimAenLam},

            {letter: "صٌ", audio: zimAenLam},
            {letter: "صٍ", audio: zimAenLam},
            {letter: "صً", audio: zimAenLam},
            {letter: "صُ", audio: zimAenLam},
            {letter: "صِ", audio: zimAenLam},
            {letter: "صَ", audio: zimAenLam},

            {letter: "ضٌ", audio: zimAenLam},
            {letter: "ضٍ", audio: zimAenLam},
            {letter: "ضً", audio: zimAenLam},
            {letter: "ضُ", audio: zimAenLam},
            {letter: "ضِ", audio: zimAenLam},
            {letter: "ضَ", audio: zimAenLam},

            {letter: "طٌ", audio: zimAenLam},
            {letter: "طٍ", audio: zimAenLam},
            {letter: "طً", audio: zimAenLam},
            {letter: "طُ", audio: zimAenLam},
            {letter: "طِ", audio: zimAenLam},
            {letter: "طَ", audio: zimAenLam},

            {letter: "ظٌ", audio: zimAenLam},
            {letter: "ظٍ", audio: zimAenLam},
            {letter: "ظً", audio: zimAenLam},
            {letter: "ظُ", audio: zimAenLam},
            {letter: "ظِ", audio: zimAenLam},
            {letter: "ظَ", audio: zimAenLam},

            {letter: "عٌ", audio: zimAenLam},
            {letter: "عٍ", audio: zimAenLam},
            {letter: "عً", audio: zimAenLam},
            {letter: "عُ", audio: zimAenLam},
            {letter: "عِ", audio: zimAenLam},
            {letter: "عَ", audio: zimAenLam},

            {letter: "غٌ", audio: zimAenLam},
            {letter: "غٍ", audio: zimAenLam},
            {letter: "غً", audio: zimAenLam},
            {letter: "غُ", audio: zimAenLam},
            {letter: "غِ", audio: zimAenLam},
            {letter: "غَ", audio: zimAenLam},

            {letter: "فٌ", audio: zimAenLam},
            {letter: "فٍ", audio: zimAenLam},
            {letter: "فً", audio: zimAenLam},
            {letter: "فُ", audio: zimAenLam},
            {letter: "فِ", audio: zimAenLam},
            {letter: "فَ", audio: zimAenLam},

            {letter: "قٌ", audio: zimAenLam},
            {letter: "قٍ", audio: zimAenLam},
            {letter: "قً", audio: zimAenLam},
            {letter: "قُ", audio: zimAenLam},
            {letter: "قِ", audio: zimAenLam},
            {letter: "قَ", audio: zimAenLam},

            {letter: "كٌ", audio: zimAenLam},
            {letter: "كٍ", audio: zimAenLam},
            {letter: "كً", audio: zimAenLam},
            {letter: "كُ", audio: zimAenLam},
            {letter: "كِ", audio: zimAenLam},
            {letter: "كَ", audio: zimAenLam},

            {letter: "لٌ", audio: zimAenLam},
            {letter: "لٍ", audio: zimAenLam},
            {letter: "لً", audio: zimAenLam},
            {letter: "لُ", audio: zimAenLam},
            {letter: "لِ", audio: zimAenLam},
            {letter: "لَ", audio: zimAenLam},

            {letter: "مٌ", audio: zimAenLam},
            {letter: "مٍ", audio: zimAenLam},
            {letter: "مً", audio: zimAenLam},
            {letter: "مُ", audio: zimAenLam},
            {letter: "مِ", audio: zimAenLam},
            {letter: "مَ", audio: zimAenLam},

            {letter: "نٌ", audio: zimAenLam},
            {letter: "نٍ", audio: zimAenLam},
            {letter: "نً", audio: zimAenLam},
            {letter: "نُ", audio: zimAenLam},
            {letter: "نِ", audio: zimAenLam},
            {letter: "نَ", audio: zimAenLam},

            {letter: "وٌ", audio: zimAenLam},
            {letter: "وٍ", audio: zimAenLam},
            {letter: "وً", audio: zimAenLam},
            {letter: "وُ", audio: zimAenLam},
            {letter: "وِ", audio: zimAenLam},
            {letter: "وَ", audio: zimAenLam},

            {letter: "هٌ", audio: zimAenLam},
            {letter: "هٍ", audio: zimAenLam},
            {letter: "هً", audio: zimAenLam},
            {letter: "هُ", audio: zimAenLam},
            {letter: "هِ", audio: zimAenLam},
            {letter: "هَ", audio: zimAenLam},

            {letter: "ءٌ", audio: zimAenLam},
            {letter: "ءٍ", audio: zimAenLam},
            {letter: "ءً", audio: zimAenLam},
            {letter: "ءُ", audio: zimAenLam},
            {letter: "ءِ", audio: zimAenLam},
            {letter: "ءَ", audio: zimAenLam},

            {letter: "يٌ", audio: zimAenLam},
            {letter: "يٍ", audio: zimAenLam},
            {letter: "يً", audio: zimAenLam},
            {letter: "يُ", audio: zimAenLam},
            {letter: "يِ", audio: zimAenLam},
            {letter: "يَ", audio: zimAenLam},

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
        // _this.randomData = _this.getData().sort(() => Math.random() - 0.5)
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
                    <TableBody className={"al-qalam-quran-majeed2"}>
                        {_this.getTableRowHTML()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}