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

export default class HorkotPracticeView extends RapidComponent<Props, State> {

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
            {letter: "اَصَدَ", audio: zimAenLam},
            {letter: "بَطَشَ", audio: zimAenLam},
            {letter: "فَوَقَ", audio: zimAenLam},
            {letter: "غَسَلَ", audio: zimAenLam},
            {letter: "هَضَرَ", audio: zimAenLam},
            {letter: "نَزَتَ", audio: zimAenLam},
            {letter: "شَخَدَ", audio: zimAenLam},
            {letter: "صَحَظَ", audio: zimAenLam},
            {letter: "ذَأَخَ", audio: zimAenLam},
            {letter: "يَعَكَ", audio: zimAenLam},
            {letter: "زَثَمَ", audio: zimAenLam},
            {letter: "تَمَحَ", audio: zimAenLam},
            {letter: "قَرَسَ", audio: zimAenLam},
            {letter: "لَدَيَ", audio: zimAenLam},
            {letter: "حَلَبَ", audio: zimAenLam},
            {letter: "وَجَعَ", audio: zimAenLam},

            {letter: "ظِهِفِ", audio: zimAenLam},
            {letter: "هِفِوِ", audio: zimAenLam},
            {letter: "كِنِزِ", audio: zimAenLam},
            {letter: "خِتِهِ", audio: zimAenLam},
            {letter: "لِطِرِ", audio: zimAenLam},
            {letter: "قِعِحِ", audio: zimAenLam},
            {letter: "رِمِغِ", audio: zimAenLam},
            {letter: "سِنِبِ", audio: zimAenLam},
            {letter: "صِشِقِ", audio: zimAenLam},
            {letter: "تِبِنِ", audio: zimAenLam},
            {letter: "تِزِرِ", audio: zimAenLam},
            {letter: "طِثِهِ", audio: zimAenLam},
            {letter: "ٳِدِزِ", audio: zimAenLam},
            {letter: "ذِضِسِ", audio: zimAenLam},
            {letter: "وِهِلِ", audio: zimAenLam},
            {letter: "ٳِقِجِ", audio: zimAenLam},

            {letter: "بُءُزُ", audio: zimAenLam},
            {letter: "ذُقُغُ", audio: zimAenLam},
            {letter: "حُبُمُ", audio: zimAenLam},
            {letter: "جُكُوُ", audio: zimAenLam},
            {letter: "كُءُحُ", audio: zimAenLam},
            {letter: "مُضُفُ", audio: zimAenLam},
            {letter: "نُمُظُ", audio: zimAenLam},
            {letter: "أُدُتُ", audio: zimAenLam},
            {letter: "عُفُكُ", audio: zimAenLam},
            {letter: "رُنُشُ", audio: zimAenLam},
            {letter: "صُهُيُ", audio: zimAenLam},
            {letter: "ثُبُئُ", audio: zimAenLam},
            {letter: "تُوُسُ", audio: zimAenLam},
            {letter: "طُرُأُ", audio: zimAenLam},
            {letter: "وُخُضُ", audio: zimAenLam},
            {letter: "يُظُهُ", audio: zimAenLam},

            {letter: "جَعَلَ", audio: zimAenLam},
            {letter: "أَجَذَ", audio: zimAenLam},
            {letter: "أَذِنَ", audio: zimAenLam},
            {letter: "أَمَرَ", audio: zimAenLam},
            {letter: "بَخِلَ", audio: zimAenLam},
            {letter: "قَعَدَ", audio: zimAenLam},
            {letter: "ﺑَﺌِﺲَ", audio: zimAenLam},
            {letter: "تَعِبَ", audio: zimAenLam},
            {letter: "خَشِيَ", audio: zimAenLam},
            {letter: "خُلِقَ", audio: zimAenLam},
            {letter: "وَثُقَ", audio: zimAenLam},
            {letter: "يَدَعُ", audio: zimAenLam},
            {letter: "نَصِبَ", audio: zimAenLam},
            {letter: "طَرِبَ", audio: zimAenLam},
            {letter: "فَتَحَ", audio: zimAenLam},
            {letter: "ذُعِرَ", audio: zimAenLam},
            {letter: "صَقَلَ", audio: zimAenLam},
            {letter: "قُرِٸَ", audio: zimAenLam},
            {letter: "رَكِبَ", audio: zimAenLam},
            {letter: "دَخَلَ", audio: zimAenLam},
            {letter: "لَحِسَ", audio: zimAenLam},
            {letter: "ذَكَرَ", audio: zimAenLam},
            {letter: "عَبَسَ", audio: zimAenLam},
            {letter: "خَلَقَ", audio: zimAenLam},
            {letter: "شُغِلَ", audio: zimAenLam},
            {letter: "حَسَدَ", audio: zimAenLam},
            {letter: "حَشَرَ", audio: zimAenLam},
            {letter: "يَقُظَ", audio: zimAenLam},
            {letter: "حَمَقِ", audio: zimAenLam},
            {letter: "جَمَعَ", audio: zimAenLam},
            {letter: "تَلِفَ", audio: zimAenLam},
            {letter: "مَتُنَ", audio: zimAenLam},
            {letter: "شَرِبَ", audio: zimAenLam},
            {letter: "قُتِلَ", audio: zimAenLam},

            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},

            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},

            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},
            {letter: "XXX", audio: zimAenLam},

            {letter: "رَقَبَةٍ", audio: zimAenLam},
            {letter: "سُرُرٌ", audio: zimAenLam},
            {letter: "عَمَدٍ", audio: zimAenLam},
            {letter: "غَبَرَةٌ", audio: zimAenLam},
            {letter: "هُدًى", audio: zimAenLam},
            {letter: "لَهَبٍ", audio: zimAenLam},
            {letter: "نَخِرَةً", audio: zimAenLam},
            {letter: "وَسَطًا", audio: zimAenLam},
            {letter: "أَبَدًا", audio: zimAenLam},
            {letter: "طَبَقًا", audio: zimAenLam},
            {letter: "هُمَزَةٍ", audio: zimAenLam},
            {letter: "طُوًى", audio: zimAenLam},
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
                    <TableBody className={"majeed-quranic"}>
                        {_this.getTableRowHTML()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}